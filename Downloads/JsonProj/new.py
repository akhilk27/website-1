from flask import Flask, jsonify, request, send_from_directory
import os
import json
import uuid

app = Flask(__name__)

dataset_dir = 'employees_data'

if not os.path.exists(dataset_dir):
    os.makedirs(dataset_dir)


def proc_dataset():
    dataset = []
    for fn in os.listdir(dataset_dir):
        if fn.endswith('.json'):
            with open(os.path.join(dataset_dir, fn), 'r') as curr:
                dataset.append(json.load(curr))
    return dataset


def save_record(record):
    with open(os.path.join(dataset_dir, f"{record['employee_id']}.json"), 'w') as file:
        json.dump(record, file)


@app.route('/')
def index():
    return send_from_directory('templates', 'index.html')


@app.route('/api/records', methods=['GET'])
def get_all_records():
    return jsonify(proc_dataset())


@app.route('/api/records/<employee_id>', methods=['GET'])
def get_record(employee_id):
    data = proc_dataset()
    record = next((r for r in data if r['employee_id'] == employee_id), None)
    if record is None:
        return jsonify({'Error': 'Record not found'}), 404
    return jsonify(record)


@app.route('/api/records', methods=['POST'])
def add_record():
    record = request.json
    record['employee_id'] = str(uuid.uuid4())
    save_record(record)
    return jsonify(record), 201


@app.route('/api/records/<employee_id>', methods=['PUT'])
def update_record(employee_id):
    data = proc_dataset()
    record = next((r for r in data if r['employee_id'] == employee_id), None)
    if record is None:
        return jsonify({'Error': 'Record not found'}), 404
    record.update(request.json)
    save_record(record)
    return jsonify(record)


@app.route('/api/records/<employee_id>', methods=['DELETE'])
def delete_record(employee_id):
    fn = os.path.join(dataset_dir, f'{employee_id}.json')
    if os.path.exists(fn):
        os.remove(fn)
        return jsonify({}), 204
    return jsonify({'Error': 'Record not found'}), 404


if __name__ == '__main__':
    app.run(debug=True)
