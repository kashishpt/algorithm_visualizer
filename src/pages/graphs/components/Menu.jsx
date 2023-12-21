import React from 'react'
import './Menu.scss'
import { width, setAction, dijkstras, randomObstacles, clearJunk, node_size } from '../logic'

function Menu() {

    const style = {'width': `${node_size}px`, 'height':`${node_size}px`}

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
                <label className='radio-label' htmlFor='start'>Start
                    <div style={style} className='vertex-label start'></div>
                </label>
                <input id='target' type='radio' name='placer'></input>
                <label className='radio-label' htmlFor='target'>Target
                    <div style={style} className='vertex-label target'></div>
                </label>
                <input id='wall' type='radio' name='placer'></input>
                <label className='radio-label' htmlFor='wall'>Wall
                    <div style={style} className='vertex-label wall'></div>
                </label>
                <input id='erase' type='radio' name='placer'></input>
                <label className='radio-label' htmlFor='erase'>Eraser
                    <div style={style} className='vertex-label'></div>
                </label>
            </form>
            <button id='run' onClick={dijkstras}>Dijkstra's</button>
            <button id='random' onClick={randomObstacles}>Random</button>
            <button id='clear' onClick={() => clearJunk(true)}>Clear</button>
            <label htmlFor='outlines'>Vertex outlines</label>
            <input id='outlines' type='checkbox' onChange={e => {handleOutlines(e.target.checked)}}></input>
            
        </div>
    )
}

export default Menu