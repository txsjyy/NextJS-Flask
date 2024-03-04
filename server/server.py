import json
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load JSON data
with open('data/playlist.json', 'r', encoding='utf-8') as f:
    playlist_data = json.load(f)

with open('data/channel.json', 'r', encoding='utf-8') as file:
    channel_data = json.load(file)

with open('data/video.json', 'r', encoding='utf-8') as file:
    videos = json.load(file)

# Routes to serve JSON data
@app.route('/api/playlists', methods=['GET'])
def get_playlists():
    return jsonify(playlist_data)

@app.route('/api/channels', methods=['GET'])
def get_channels():
    return jsonify(channel_data)

@app.route('/api/videos', methods=['GET'])
def get_videos():
    return jsonify(videos)

# Dynamic routes for single items
@app.route('/api/channel/<string:channelId>', methods=['GET'])
def get_channel(channelId):
    channel_info = next((item for item in channel_data['items'] if item['id'] == channelId), None)
    if channel_info:
        return jsonify(channel_info)
    return jsonify({'error': 'Channel not found'}), 404

@app.route('/api/video/<string:videoId>', methods=['GET'])
def get_video(videoId):
    video_info = next((item for item in videos['items'] if item['id'] == videoId), None)
    if video_info:
        return jsonify(video_info)
    return jsonify({'error': 'Video not found'}), 404

@app.route('/api/playlist/<string:playlistId>', methods=['GET'])
def get_playlist(playlistId):
    playlist_info = next((item for item in playlist_data['items'] if item['id'] == playlistId),None)
    if playlist_info:
        return jsonify(playlist_info)
    return jsonify({'error': 'playlist not found'}), 404


# debug=True to avoid restart the local development server manually after each change to your code.
# host='0.0.0.0' to make the server publicly available.
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0',port=8080)