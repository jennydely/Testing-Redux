import { ADD_EVENT,FETCH_EVENTS_PENDING, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_ERROR  } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  pending: false,
  fetchedEvents: [],
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            chosen: false
          }
        }
      };
    }

    case FETCH_EVENTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                pending: false,
                fetchedEvents: action.payload
            }
        case FETCH_EVENTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }

    default:
      return state;
  }
}

// export const getEvents = state => state.events;
// export const getEventsPending = state => state.pending;
// export const getEventsError = state => state.error;
