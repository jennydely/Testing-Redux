import {SET_FILTER,ADD_EVENT,FETCH_EVENTS_PENDING,FETCH_EVENTS_SUCCESS,FETCH_EVENTS_ERROR, ADD_TODO, TOGGLE_TODO } from "./actionTypes";

let nextEventId =0;
let nextTodoId = 0;

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
  });

export const addEvent = content => ({
  type: ADD_EVENT,
  payload: {
    id: ++nextEventId,
    content
  }
});

export function fetchEventsPending() {
    return {
        type: FETCH_EVENTS_PENDING
    }
}

export function fetchEventsSuccess(events) {
    return {
        type: FETCH_EVENTS_SUCCESS,
       payload: events
    }
}

export function fetchEventsError(error) {
    return {
        type: FETCH_EVENTS_ERROR,
        error: error
    }
}
