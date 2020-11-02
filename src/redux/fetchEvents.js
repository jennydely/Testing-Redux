import {fetchEventsPending, fetchEventsSuccess, fetchEventsError} from './actions';

function fetchEvents() {
    return dispatch => {
        dispatch(fetchEventsPending());
        fetch('http://localhost:3000/api/events')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchEventsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchEventsError(error));
        })
    }
}

export default fetchEvents;