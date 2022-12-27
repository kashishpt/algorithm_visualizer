import React from 'react'
import Vertex from './Vertex';
import './Board.scss'
import { height, width, node_size } from '../logic'
import Menu from './Menu';
import Nav from '../../../home/Nav';

function Board() {
    let real_height = height - (height % node_size)
    let real_width = width - (width % node_size)


    let vertices = []
    for (let i = 0; i < real_height/node_size; i++) {
        for (let j = 0; j < real_width/node_size; j++) {
            vertices.push(<Vertex key={i+j} row={i} col={j}/>)
        }
        
    }

    return (
        <>
            <Nav graphs/>
            <div id='board'>
                <Menu />

                <div style={{'width': `${real_width}px`, 'height': `${real_height}px`,}} id='grid'>
                    {vertices}
                </div>
                
            </div>
        </>
        
    )
}

export default Board