import {SkiDayRow} from './SkiDayRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export const SkiDayList = ({days, filter}) => {
    const filteredDays = (!filter || !filter.match(/powder|backcountry/)) ?
        days:
        days.filter(day => day[filter])
    return (
        <div className="ski-day-list">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Resort</th>
                        <th>Powder</th>
                        <th>Back Country</th>
                    </tr>
                    <tr colSpan={4}>
                        <td>
                            <Link to="/list-days">All Days</Link>
                        </ td>
                        <td>
                            <Link to="/list-days/powder">Powder Days</Link>
                        </td>
                         <td>
                            <Link to="/list-days/backcountry">Backcountry Days</Link>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {filteredDays.map((day, i) =>
                        <SkiDayRow key={i}
                            // date= {day.date}
                            // resort= {day.resort}
                            // powder= {day.powder}
                            // backcountry= {day.backcountry}
                            {...day}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}

SkiDayList.propTypes = {
    days: function(props) {
        if(!Array.isArray(props.days)) {
            return new Error(
                "SkiDayList should be an array"
            )
        } else if (!props.days.length) {
            return new Error(
                "SkiDayList must have at least one record"
            )
        } else {
            return null
        }
    }
}

