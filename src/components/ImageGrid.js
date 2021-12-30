import React from 'react'
import useFireStore from '../hooks/useFirestore'

function ImageGrid() {
    const { docs } = useFireStore("pictures")
    console.log(docs)

    return (
        <div className="image-grid">
            images
        </div>
    )
}

export default ImageGrid
