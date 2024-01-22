import axios from 'axios';

const key = `AIzaSyCAxIqPI2vzLe4Bms1gyKTVIwZX9iQWNAs`;

const getPlayList = async (playListId, pageToken='', result=[]) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20id%2C%20snippet&maxResults=50&pageToken=${pageToken}&playlistId=${playListId}&key=${key}`

    const { data } = await axios.get(URL);
    result = [...result, ...data.items];
    if(data.nextPageToken){
        result = await getPlayList(playListId, data.nextPageToken, result);
    }

    return result;
}

export default getPlayList;