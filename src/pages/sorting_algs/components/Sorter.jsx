import React from 'react'
import { useState } from 'react'
import Bar from './Bar'
import './Sorter.scss'
import Nav from '../../home/Nav'
import { bubbleSort } from '../logic.js'

export default function Page() {
  const [bars, updateBars] = useState([])


  function makeArray(n) {
    document.getElementById('size').value = n
    let spaces = ''
    if (n == 1) {
      spaces = '  '
    } else if (n != 100) {
      spaces = ' '
    }
    document.getElementById('size-label').innerHTML = `Size: ${n}${spaces}`
    let newArr = []
    for (let i = 0; i < n; i++) {
      newArr.push(<Bar id={i} key={i} height={Math.floor(Math.random()*600) + 5} />)
    }

    updateBars(newArr)
  }

  

  return (
    <>
      <Nav sorter/>
      <div id="sorter">
        <div id="bars">
          {bars}
        </div>

        <div id='menu'>
          <button onClick={() => makeArray(Math.floor(Math.random() * (100)) + 1)}>Randomize!</button>
          <div>
            <label htmlFor='size' id='size-label'>Size: </label>
            <input id='size' type='range' min={1} max={100} onChange={e => makeArray(e.target.value)}/>
          </div>
          <button onClick={() => bubbleSort(bars, updateBars)}>Bubble</button>
        </div>
        
      </div>
    </>
    

  )
}
