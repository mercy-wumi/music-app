import React from 'react'
import art from '../images/arts.jpg'

function PlaylistHeader() {
    return (
        <div className="h-full bg-gray-700">
            <div className="w-3/4 sm:flex md:w-3/6 mx-auto py-7">
                <img src={art} alt='artist' className="h-32 w-32 rounded-full" />
                <div className="text-white text-xs ml-5 font-thin h-full my-auto">
                    <p>PROFILE</p>
                    <p className="text-4xl text-white font-extrabold">Brittany Chiang</p>
                    <div className='flex'>
                        <span> 64 playlists</span>
                        <span> . 26 playlists</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistHeader
