from pytube import YouTube, Playlist

PLAYLIST_URL = str(input("Cole aqui a sua playlist: "))

def download_playlist(playlist_url):
	playlist = Playlist(playlist_url)
	music_downloadeds = 0
	for url in playlist:
		yt = YouTube(url)
		audio = yt.streams.filter(only_audio=True)[0]
		audio.download()
		music_downloadeds += 1
		print(music_downloadeds)
	
if __name__ == '__main__':
	download_playlist(PLAYLIST_URL)
	print('='*40)
	print('\033[32mAs musicas foram baixadas!\033[m')
	print('='*40)