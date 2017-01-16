import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import {SkiDayRow} from './SkiDayRow'

export const SkiDayList = ({days}) => (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Back Country</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day, i) =>
                <SkiDayRow key={i}
                    // date= {day.date}
                    // resort= {day.resort}
                    // powder= {day.powder}
                    // backcountry= {day.backcountry}
                    {...day}/>
            )}
        </tbody>
    </table>
)
