// Write your code here
import {Component} from 'react'
import './index.css'

const yetToRegisterImgUrl =
  'https://assets.ccbp.in/frontend/react-js/events-register-img.png'
const registeredUrl =
  'https://assets.ccbp.in/frontend/react-js/events-regestered-img.png'
const registrationsClosedUrl =
  'https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png'
const constStatusViews = {
  initial: 'NO_ACTIVE',
  yet_register: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  renderNoActiveView = () => (
    <div className="no_active_Container">
      <p className="no_active_para">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderYetToRegisterView = () => (
    <div className="yetToRegister_container">
      <img
        src={yetToRegisterImgUrl}
        alt="yet to register"
        className="registerView_img"
      />
      <p className="registerView_para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <div>
        <button className="registerView_button" type="button">
          Register Here
        </button>
      </div>
    </div>
  )

  renderRegisteredView = () => (
    <div className="registered_container">
      <img src={registeredUrl} alt="registered" className="registered_image" />
      <h1 className="registered_msg">
        You have already registered for the event
      </h1>
    </div>
  )

  renderClosedView = () => (
    <div className="closedView_container">
      <img
        src={registrationsClosedUrl}
        alt="registrations closed"
        className="closed_image"
      />
      <h1 className="closed_heading">Registrations Are Closed Now!</h1>
      <p className="closed_para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  render() {
    const {status} = this.props
    switch (status) {
      case constStatusViews.initial:
        return this.renderNoActiveView()

      case constStatusViews.yet_register:
        return this.renderYetToRegisterView()

      case constStatusViews.registered:
        return this.renderRegisteredView()

      case constStatusViews.closed:
        return this.renderClosedView()

      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
