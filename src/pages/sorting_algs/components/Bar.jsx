import React from 'react'
import './Bar.scss'

function Bar(props) {

    let style = {
        "height": `${props.height}px`
    }

    return (
        <div id={props.id} className='bar' style={style}></div>
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


