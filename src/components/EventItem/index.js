// Write your code here
import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  state = {isItemActive: false}

  onClickEvent = () => {
    const {eventItemDetails, clickEventItem, isActive} = this.props
    const {id, imageUrl, name, location, registrationStatus} = eventItemDetails
    clickEventItem(registrationStatus, id)
    this.setState({isItemActive: true})
    console.log('i am in onClick function................')
  }

  render() {
    const {isItemActive} = this.state
    const {eventItemDetails, clickEventItem, isActive} = this.props
    console.log(isActive, '--------------------')
    const {id, imageUrl, name, location, registrationStatus} = eventItemDetails
    const activeEventClassName = isActive ? 'active_event_item' : ''
    console.log(activeEventClassName, '----------------------------')
    return (
      <li className="item_container" onClick={this.onClickEvent}>
        <button type="button" className={`img_buttons ${activeEventClassName}`}>
          <img
            src={imageUrl}
            alt="event"
            className={`event_image ${activeEventClassName}`}
            // className="event_image"
          />
        </button>

        <p className="event_name">{name}</p>
        <p className="event_location">{location} </p>
      </li>
    )
  }
}

export default EventItem
