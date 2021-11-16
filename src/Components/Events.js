import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div 
`   background-image: url('https://www.frameworkhomeownership.org/images/uploads/potluck-like-a-pro-large-fb-share-image.png');
`
const StyledEventsButtons = styled.div 
`   display: flex;
    flex-direction: column;
    margin-bottom: 5%;
`

const StyledP = styled.p 
`   padding: 0 5%;
`

const Events = (props) => {
    return(
        <div id='eventsNav'>
            <StyledHeader className="headerBanner">
                    <h2>Events</h2>
            </StyledHeader>
            <StyledEventsButtons>
                <StyledP>To organize an event, click the "Create Event" button below! If you are an organizer on an existing event and would like to edit the date, location, or time of your event, click on the "Edit Event" button below.</StyledP>
                <Link to="/create-event" className="createEvent eventButton">Create Event</Link>
                <Link to="/edit-event" className="editEvent eventButton">Edit Event</Link>
            </StyledEventsButtons>
        </div>
    );
};

export default Events;