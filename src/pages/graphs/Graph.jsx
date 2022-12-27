import React from 'react'
import Nav from '../home/Nav'

function Graph() {
  return (
    <div>
      <Nav graphs />
        <h2>Which algorithm?</h2>
        <ul>
            <li><a href='/dijkstras'>Dijkstra's Algorithm</a></li>
        </ul>
    </div>
  )
}

export default Graph