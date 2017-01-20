import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
    render() {
        return(
            <form className="add-day-form">
                <label htmlFor="resort">Resort Name</label> 
                <input type="text" id="resort" required/>
                
                <label htmlFor="date">Date</label>
                <input type="date" id="date" required/>
                
                <div>
                    <input type="checkbox" id="powder"/>
                    <label htmlFor="powder">Powder Day</label>
                </div>

                <div>
                    <input type="checkbox" id="backcountry"/>
                    <label htmlFor="backcountry">Backcountry Day</label>
                </div>                
            </form>
        )
    }

}

AddDayForm.PropTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}