import { useEffect } from "react";
import getPlayList from "./api";
import usePlaylists from "./hooks/usePlaylists";

const App = () => {

    // useEffect(() => {
    //     getPlayList('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl').then((res) => 
    //         console.log(res)
    //     );
    // }, [])

    const {getPlaylistById, playlists} = usePlaylists();

    useEffect(() => {
        getPlaylistById('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl');
    }, [])

    console.log(playlists);

    return (
        <div>
            <h1>
                Hello World
            </h1>
        </div>
    )
}

export default App;