import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {

    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(e) {
        e.preventDefault();
        console.log('resort', this.refs.resort.value);
        console.log('date', this.refs.date.value);
        console.log('powder', this.refs.powder.checked);
        console.log('backcountry', this.refs.backcountry.checked);
    }

    render() {

        const { resort, date, powder, backcountry } = this.props

        return(
            <form  onSubmit={this.submit} className="add-day-form">
                <label htmlFor="resort">Resort Name</label>
                <input type="text" id="resort" defaultValue={resort} ref="resort" required/>

                <label htmlFor="date">Date</label>
                <input type="date" id="date" defaultValue={date} ref="date" required/>

                <div>
                    <input type="checkbox" id="powder" ref="powder" defaultChecked={powder}/>
                    <label htmlFor="powder">Powder Day</label>
                </div>

                <div>
                    <input type="checkbox" id="backcountry" ref="backcountry" defaultChecked={backcountry}/>
                    <label htmlFor="backcountry">Backcountry Day</label>
                </div>
                <button> Add Day </button>
            </form>
        )
    }

}

AddDayForm.defaultProps  = {
    resort: "Panama",
    date: "2017-02-12",
    powder: true,
    backcountry: false
}

AddDayForm.PropTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}