import React from 'react'
import Nav from './Nav'

function Home() {
  return (
    <div>
      <Nav />
      <h1>What would you like to see?</h1>
      <ul>
        <li><a href='/graphs'>Graph algorithms</a></li>
        <li><a href='/arrays'>Array algorithms</a></li>
      </ul>
    </div>
  )
}

export default Home