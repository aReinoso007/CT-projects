from web_socket_server import WebSocketServer, socketio, app, send

app = WebSocketServer().create_app()

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('message')
def handle_message(message):
    print(f'Received message: {message}')
    send(message, broadcast=True)
    socketio.emit('message', message)
    
@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')


if __name__ == '__main__':
    socketio.run(app)