import { VISIBILITY_FILTERS } from "../constants";

export const getPacklistsState = store => store.packlists;

export const getPacklistsList = store =>
  getPacklistsState(store) ? getPacklistsState(store).allIds : [];

export const getPacklistsById = (store, id) =>
  getPacklistsState(store) ? { ...getPacklistsState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getPacklists = store =>
  getPacklistsList(store).map(id => getPacklistsById(store, id));

export const getPacklistsByVisibilityFilter = (store, visibilityFilter) => {
  const allPacklists = getPacklists(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.CHOSEN:
      return allPacklists.filter(packlist => packlist.chosen);
    case VISIBILITY_FILTERS.NOTCHOSEN:
      return allPacklists.filter(packlist => !packlist.chosen);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allPacklists;
  }
};


  export const getEventList = store =>
  store && store.events ? store.events.allIds : [];

  export const getEventsById = (store, id) =>
  store && store.events && store.events.byIds
    ? { ...store.events.byIds[id], id }
    : {};

  export const getEvents = store =>
  getEventList(store).map(id => getEventsById(store, id));
