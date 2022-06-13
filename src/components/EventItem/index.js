import './index.css'

const EventItem = props => {
  const {eventDetails} = props
  const {
    imageUrl,
    name,
    location,
    registrationStatus,
    setEventRegistrationStatus,
  } = eventDetails

  const showEventStatus = () => {
    setEventRegistrationStatus(registrationStatus)
  }

  return (
    <li className="event-item-container">
      <button className="event-button" type="button" onClick={showEventStatus}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-place">{location}</p>
    </li>
  )
}

export default EventItem
