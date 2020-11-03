import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import fetchEventsAction from '../redux/fetchEvents';

function Eventlist({ events, fetchEvents, pending, fetchedEvents }) {

    useEffect(() => {
        fetchEvents()
    },[fetchEvents])

        return (
        <>
            <h2>Chose an Event:</h2>
            <ul>
                <li>Rockharz</li>
                <li>Hörnerfest</li>
                <li>MeraLuna</li>
               { pending? <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="loading" height="50px"></img> :null}
                {fetchedEvents ? fetchedEvents.map((item, index) => {
                    return <li key={item.id}>{item.name}</li>
                }) : null}

                {events ? events.map((event, index) => {
                    return <li key={event.id}>{event.content}</li>
                })
                    : 'No events added'}

            </ul>

        </>
    )
}

const mapStateToProps = state => {
    const { byIds, allIds, error, pending, fetchedEvents } = state.events || {};
        const events =
        allIds
            ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
            : null;
    return { events, error, pending, fetchedEvents };
};
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchEvents: fetchEventsAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Eventlist)