import React from 'react'
import './Bar.scss'

function Bar(props) {

    const styleBar = {
        "height": `${props.height}px`
    }

    const styleHighlight = {
        "height": `${props.max - props.height}px`
    }

    const styleContainer = {
        "height": `${props.max}px`
    }

    return (
        <div id={props.id} className='bar-container' style={styleContainer}>
            <div id={props.id + '-solid'} className='bar' style={styleBar}></div>
            <div id={`${props.id}-highlight`} className='bar-highlight' style={styleHighlight}></div>
        </div>
        
    )
}
export default Bar

// import React, { Component } from 'react'
// 
// export default class Bar extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             'style': {
//                 'backgroundColor': 'blue',
//                 'width': '2px',
//                 'margin': '4px',
//                 "height": `${props.height}px`
//             },
//             'props': props
//         }
//     }
// 
//     changeState(newColor) {
//         this.setState (
//             {
//                 'style': {
//                    'backgroundColor': newColor 
//                 }
//             }
//         )
//     }
// 
//     render() {
//         return (
//         <div className="bar" style={this.state.style}></div>
//         )
//     }
// }


