from flask import Flask, request, jsonify;
from flask_cors import CORS;


app = Flask(__name__)
CORS(app)

@app.route('/api/upload', methods=['POST'])
def upload():
    file = request.files.get('file')
    if not file:
        return jsonify({'error': 'No file uploaded'}), 400
    
    content = file.read().decode('utf-8')

    return jsonify({
        'message': 'File Received',
        'content': content[:200]
    })

if __name__ == '__main__':
    app.run(debug=True )
