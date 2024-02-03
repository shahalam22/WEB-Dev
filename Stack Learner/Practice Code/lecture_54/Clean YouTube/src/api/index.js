import axios from 'axios';

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

const getPlayListItem = async (playListId, pageToken='', result=[]) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20id%2C%20snippet&maxResults=50&pageToken=${pageToken}&playlistId=${playListId}&key=${key}`
    const { data } = await axios.get(URL);
    
    result = [...result, ...data.items];

    if(data.nextPageToken){
        result = await getPlayListItem(playListId, data.nextPageToken, result);
    }

    return result;
}

const getPlaylist = async (playlistId) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`
    const { data } = await axios.get(URL);
    const { channelId, title: playlistTitle, description: playlistDescription, thumbnails, channelTitle } =  data?.items[0]?.snippet

    let playListItems = await getPlayListItem(playlistId);

    playListItems = playListItems.map(item => {
        const { title, description, thumbnails: {high}, } = item.snippet
        return {
            title, description, thumbnail: high, contentDetails: item.contentDetails,
        }
    })

    return {
        playlistId,
        playlistTitle,
        playlistDescription,
        playlistThumbnail: thumbnails.default,
        channelId,
        channelTitle,
        playListItems,
    }
}

export default getPlaylist;