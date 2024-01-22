import { useState } from "react";
import getPlayList from "../api";


const usePlaylists = () => {
    const [state, setState] = useState({
        playlists: {},
        recentPlaylists: [],
        favoritePlaylists: [],
    })

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const getPlaylistById = async (playlistId, force = false) => {

        if(state.playlists[playlistId] && !force) return;

        setLoading(true);

        let result = [];

        try {
            result = await getPlayList(playlistId);
            setError('');
        }catch (e) {
            setError(e.response?.data?.error?.message || 'Something went wrong');
        }finally {
            setLoading(false);
        }

        let cId, cTitle;

        result = result.map(item => {
            const { channelId, title, description, thumbnails: {medium}, channelTitle, } = item.snippet
            
            if(!cId) cId = channelId;
            if(!cTitle) cTitle = channelTitle;
            
            return {
                title, description, thumbnail: medium, contentDetails: item.contentDetails,
            }
        })

        setState(prev =>({
            ...prev,
            playlists: {
                ...prev.playlists,
                [playlistId]: {
                    items: result,
                    playlistId: playlistId,
                    channelId: cId,
                    channelTitle: cTitle,
                },
            }
        }))
    }

    const addToFavorites = (playlistId) => {
        setState(prev => ({
            ...prev,
            favoritePlaylists: [...prev.favoritePlaylists, playlistId]
        }))
    }
    
    const addToRecent = (playlistId) => {
        setState(prev => ({
            ...prev,
            recentPlaylists: [...prev.recentPlaylists, playlistId]
        }))
    }

    const getPlaylistByIds = (ids = []) => {
        return ids.map(id => state.playlists[id])
    }
    
    return {
        playlists: state.playlists,
        favorites: getPlaylistByIds(state.favoritePlaylists),
        recentPlaylists: getPlaylistByIds(state.recentPlaylists),
        error,
        loading,
        getPlaylistById,
        addToFavorites,
        addToRecent,
    }
}

export default usePlaylists;