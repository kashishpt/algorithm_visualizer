import React from 'react'
import './Menu.scss'
import { width, setAction, dijkstras, randomObstacles, clearJunk } from '../logic'

function Menu() {

    function handleOutlines(show) {
        console.log(show)
        let border = 'none'
        if (show) {
            border = '1px solid grey'
        }

        for (let vertex of document.getElementsByClassName('vertex')) {
            vertex.style.border = border
        }
    }


    return (
        <div id='menu' style={{'width': `${width}px`}}>
            <form onChange={e => setAction(e.target.id)}>
                <input id='start' type='radio' name='placer' defaultChecked></input>
                <label htmlFor='start'>Start</label>
                <input id='target' type='radio' name='placer'></input>
                <label htmlFor='target'>Target</label>
                <input id='wall' type='radio' name='placer'></input>
                <label htmlFor='wall'>Wall</label>
                <input id='erase' type='radio' name='placer'></input>
                <label htmlFor='erase'>Eraser</label>
            </form>
            <button id='run' onClick={dijkstras}>Run</button>
            <button id='random' onClick={randomObstacles}>Random</button>
            <button id='clear' onClick={() => clearJunk(true)}>Clear</button>
            <label htmlFor='outlines'>Vertex outlines</label>
            <input id='outlines' type='checkbox' onChange={e => {handleOutlines(e.target.checked)}}></input>
            
        </div>
    )
}

export default Menu