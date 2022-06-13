import './index.css'

const eventRegistrationStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventRegistrationStatus} = props

  console.log(eventRegistrationStatusConstants)

  const returnDefaultView = () => (
    <div className="no-active-events-container">
      <h1>Click on an event, to view its registration details</h1>
    </div>
  )
  const returnRegisteredView = () => (
    <div className="registration-details-container">Registered</div>
  )
  const returnYetToRegisterView = () => (
    <div className="registration-details-container">Yet to Register</div>
  )
  const returnRegistrationsClosedView = () => (
    <div className="registration-details-container">Registrations Closed</div>
  )

  const setRegistrationStatusView = () => {
    switch (eventRegistrationStatus) {
      case eventRegistrationStatusConstants.yetToRegister:
        return returnYetToRegisterView()
      case eventRegistrationStatusConstants.Registered:
        return returnRegisteredView()
      case eventRegistrationStatusConstants.registrationsClosed:
        return returnRegistrationsClosedView()
      case eventRegistrationStatusConstants.initial:
        return returnDefaultView()
      default:
        return null
    }
  }

  return setRegistrationStatusView()
}

export default ActiveEventRegistrationDetails
