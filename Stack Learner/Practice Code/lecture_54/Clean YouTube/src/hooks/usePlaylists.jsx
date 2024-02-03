// import { useEffect, useState } from "react";
// import getPlayList from "../api";
// import storage from "../utils/Storage";

// const STORAGE_KEY = 'cy__playlist__state';

// const INIT_STATE = {
//     playlists: {},
//     recentPlaylists: [],
//     favoritePlaylists: [],
// }

// const usePlaylists = () => {
//     const [state, setState] = useState(INIT_STATE)

//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const data = storage.get(STORAGE_KEY);
//         if(data){
//             setState({...data})
//         }
//     }, [])

//     useEffect(() => {
//         if(state!==INIT_STATE){
//             storage.save(STORAGE_KEY, state);
//         }
//     }, [state])

//     const getPlaylistById = async (playlistId, force = false) => {

//         if(state.playlists[playlistId] && !force) return;

//         setLoading(true);

//         try {
//             const playlist = await getPlayList(playlistId);
//             setError('');
//             setState((prev) => ({
//                 ...prev,
//                 playlists: {
//                     ...prev.playlists,
//                     [playlistId]: playlist,
//                 },
//             }));
//         }catch (e) {
//             setError(e.response?.data?.error?.message || 'Something went wrong');
//         }finally {
//             setLoading(false);
//         }

//     }

//     const addToFavorites = (playlistId) => {
//         setState(prev => ({
//             ...prev,
//             favoritePlaylists: [...prev, playlistId]
//         }))
//     }
    
//     const addToRecent = (playlistId) => {
//         setState(prev => ({
//             ...prev,
//             recentPlaylists: [...prev, playlistId]
//         }))
//     }

//     const getPlaylistByIds = (ids = []) => {
//         return ids.map(id => state.playlists[id])
//     }
    
//     return {
//         playlists: state.playlists,
//         favorites: getPlaylistByIds(state.favoritePlaylists),
//         recentPlaylists: getPlaylistByIds(state.recentPlaylists),
//         error,
//         loading,
//         getPlaylistById,
//         addToFavorites,
//         addToRecent,
//     }
// }

// export default usePlaylists;