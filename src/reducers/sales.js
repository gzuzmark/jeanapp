import { SALES_VISIT_REQUEST, SALES_VISIT_SUCCESS, SALES_VISIT_FAILURE, SALES_SEND_COORDENATE } from '../actions/sales';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export default function salesVisits(
  state = {
    isFetching: false,
    isSearched: false,
    visits: [],
    messages: [],
  },
  action,
) {
  switch (action.type) {
    case SALES_VISIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isSearched: false,
        visits: action.salesVisitSearch,
      });
    case SALES_VISIT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isSearched: true,
        errorMessage: '',
        visits: action.visits,
      });
    case SALES_VISIT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isSearched: false,
        errorMessage: action.message,
      });
    case SALES_SEND_COORDENATE:
      return Object.assign({}, state, {
        errorMessage: '',
        visits: action.visits,
        messages: [...state.messages, action.coord],
      });
    default:
      return state;
  }
}
