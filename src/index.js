import React from 'react'
import { render } from 'react-dom'
// import { SkiDayList } from './components/SkiDayList'
import { SkiDayCount } from './components/SkiDayCount'
window.React = React
render (
    <SkiDayCount backcountry={false} />,
    document.getElementById('react-container')
)


// render (
//     <SkiDayList days={
//         [
//             {
//                 resort: "Squaw Valley",
//                 date: new Date("1/2/2016"),
//                 powder: true,
//                 backcountry: false
//             },
//             {
//                 resort: "Panama City",
//                 date: new Date("2/15/2016"),
//                 powder: false,
//                 backcountry: true
//             },
//             {
//                 resort: "Mexico City",
//                 date: new Date("3/17/2016"),
//                 powder: true,
//                 backcountry: true
//             }
//         ]
//     }/>,
//     document.getElementById('react-container')
// )

