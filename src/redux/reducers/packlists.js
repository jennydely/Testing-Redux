import { FETCH_PACKLISTS_PENDING, FETCH_PACKLISTS_SUCCESS, FETCH_PACKLISTS_ERROR, TOGGLE_PACKLIST } from "../actionTypes";

const initialState = {
  pending: false,
  packlists: [],
  error: null,
};

export default function packlists(state = initialState, action) {
  switch (action.type) {
    case FETCH_PACKLISTS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_PACKLISTS_SUCCESS:
      return {
        ...state,
        pending: false,
        packlists: action.payload
      }
    case FETCH_PACKLISTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case TOGGLE_PACKLIST: {
      const { id } = action.payload;
      const index = state.packlists.findIndex((packlist) => '' + packlist.id === '' + id)  // to make sure, both are strings, we merge them with ''
           return {
        ...state,
        packlists: [...state.packlists.slice(0, index),
        { ...state.packlists[index], chosen: !state.packlists[index].chosen },
        ...state.packlists.slice(index + 1),]
      }
    }

    default:
      return state;
  }
}
