import React from 'react'
import { useState } from 'react'
import Bar from './Bar'
import './Array.scss'
import Nav from '../../home/Nav'
import { bubbleSort, selectionSort } from '../logic.js'

export default function Array() {
  const [bars, updateBars] = useState([<Bar id={"0"} height={300} max={604}/>])
  const [speed, changeSpeed] = useState(50)
  // const []


  function makeArray(n) {
    for (let bar of [...document.getElementsByClassName('bar sorted')]) {
      bar.className = 'bar'
    }

    for (let bar of [...document.getElementsByClassName('bar-highlight sorted')]) {
      bar.className = 'bar-highlight'
    }

    document.getElementById('size').value = n
    document.getElementById('size-label').innerHTML = `Size: ${n}`

    let heights = []
    for (let i = 0; i < n; i++) {
      let height = Math.floor(Math.random()*600) + 5
      heights.push(height)
    }

    updateBars(heights.map((e, idx) => <Bar id={`${idx}`} height={e} max={604} />))
  }

  function myUpdate(arr) {
    let newArr = arr.map((e, idx) => <Bar id={`${idx}`} height={e.props.height} max={604}/>)
    updateBars(newArr)

    return arr
  }


  

  return (
    <>
      <Nav sorter/>
      <div id="array">
        <div id="bars">
          {bars}
        </div>
          

        <div id='array-options'>
          <button className='sorting-button' id='randomize' onClick={() => makeArray(Math.floor(Math.random() * (100)) + 1)}>Randomize!</button>
          <div>
            <label htmlFor='size' id='size-label'>Size:   </label>
            <input id='size' type='range' min={1} max={100} onChange={e => makeArray(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='speed' id='speed-label'>Speed: {speed}</label>
            <input id='speed' type='range' min={1} max={100} onChange={e => changeSpeed(e.target.value)} />
          </div>
          <button className='sorting-button' id='bubble' onClick={() => bubbleSort(bars, myUpdate, (101 - speed)/5)} disabled={bars.length === 0}>Bubble</button>
          <button className='sorting-button' id='selection' onClick={() => selectionSort(bars, myUpdate, (101 - speed)/5)} disabled={bars.length === 0}>Selection</button>
        </div>
        
      </div>
    </>
    

  )
}
