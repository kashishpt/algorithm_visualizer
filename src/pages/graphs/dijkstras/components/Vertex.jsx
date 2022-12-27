import React from 'react'
import './Vertex.scss'
import { setVertex, node_size, mouseDown } from '../logic'

function Vertex(props) {
    const style = {'width': `${node_size}px`, 'height':`${node_size}px`}

    const id = `${props.row}-${props.col}`

    function handleVertex(id) {
        if (mouseDown) {
            setVertex(id)
        }
    }

    return (
        <div id={id} style={style} onClick={() => setVertex(id)} onMouseMove={(e) => handleVertex(e.target.id)} className='vertex'>
        </div>
    )
}

export default Vertex