import React from 'react'
import Playlist from './Playlist'
import arts from '../images/arts.jpg'

function AllPlaylist() {
    const playlists = [
        {
            img: arts,
            song: 'Sunshine',
            artist: 'Blanca'
        },
        {
            img: arts,
            song: 'Sunshine',
            artist: 'Blanca'
        },
        {
            img: arts,
            song: 'Sunshine',
            artist: 'Blanca'
        },
        {
            img: arts,
            song: 'Sunshine',
            artist: 'Blanca'
        },
        {
            img: arts,
            song: 'Sunshine',
            artist: 'Blanca'
        },
        {
            img: arts,
            song: 'Sunshine',
            artist: 'Blanca'
        },
        {
            img: arts,
            song: 'Sunshine',
            artist: 'Blanca'
        },
        {
            img: arts,
            song: 'Sunshine',
            artist: 'Blanca'
        },
        {
            img: arts,
            song: 'Sunshine',
            artist: 'Blanca'
        },
        {
            img: arts,
            song: 'Sunshine',
            artist: 'Blanca'
        },
    ]
    return (
        <div className="h-full bg-gray-800 py-10">
            <div className="w-3/4 md:w-3/6 mx-auto">
                <div className="flex justify-between items-center text-white">
                    <p className="font-medium ">Top artists this month</p>
                    <p className="font-thin text-xs">SEE ALL</p>
                </div>
                <div className="flex flex-wrap justify-evenly gap-2">
                    {playlists.map((playlistData, index) => {
                        return (
                            <Playlist
                                dataKey={index}
                                dataImg={playlistData.img}
                                dataArtist={playlistData.artist}
                                dataSong={playlistData.song}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllPlaylist
