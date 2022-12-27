import React from 'react'
import './Nav.scss'

function Nav(props) {
    const allCrumbs = [
        <div className='crumb' id='home' key='home'><a href='/'>Home</a></div>,
        <div className='crumb' id='graphs' key='graphs'> {'<'} <a href='/graphs'>Graphs</a></div>,
        <div className='crumb' id='sorter' key='sorter'> {'<'} <a href='/sorting'>Sorting</a></div>
    ]

    return (
        <div id='nav' >
            {allCrumbs.filter(e => e.props.id === 'home' || props[e.props.id])}
        </div>
    )
}

export default Nav