import { FETCH_PACKLISTS_PENDING, FETCH_PACKLISTS_SUCCESS, FETCH_PACKLISTS_ERROR,TOGGLE_PACKLIST  } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  pending: false,
  packlists: [],
  error: null
};

export default function (state = initialState, action) {
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
                return {
                  ...state,
                  byIds: {
                    ...state.byIds,
                    [id]: {
                      ...state.byIds[id],
                      completed: !state.byIds[id].chosen
                    }
                  }
                };
              }

    default:
      return state;
  }
}
