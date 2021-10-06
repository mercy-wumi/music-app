import React from 'react'

function Playlist({ dataImg, dataArtist, dataSong, index }) {
    return (
        <div className="h-full bg-gray-700 mt-5 w-32 rounded-sm">
            <div className="text-white p-2 text-xs" key={index}>
                <img src={dataImg} alt='artist' className="h-28 w-28 rounded-full" />
                <div className="py-2">
                    <p className="font-bold">{dataArtist}</p>
                    <p className="font-thin">{dataSong}</p>
                </div>
            </div>
        </div>
    )
}

export default Playlist

