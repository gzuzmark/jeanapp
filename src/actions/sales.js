import database from '../firebase/firebase';
import visitMock from './visitsMock';

export const SALES_VISIT_REQUEST = 'SALES_VISIT_REQUEST';
export const SALES_VISIT_SUCCESS = 'SALES_VISIT_SUCCESS';
export const SALES_VISIT_FAILURE = 'SALES_VISIT_FAILURE';
export const SALES_VISIT_DETAIL_REQUEST = 'SALES_VISIT_DETAIL_REQUEST';
export const SALES_VISIT_DETAIL_SUCCESS = 'SALES_VISIT_DETAIL_SUCCESS';
export const SALES_VISIT_DETAIL_FAILURE = 'SALES_VISIT_DETAIL_FAILURE';
export const SALES_SEND_COORDENATE = 'SALES_SEND_COORDENATE';

function requestSalesVisit(salesVisitSearch) {
  return {
    type: SALES_VISIT_REQUEST,
    isFetching: true,
    isSearched: false,
    salesVisitSearch,
  };
}

export function receiveSalesVisit(visits) {
  return {
    type: SALES_VISIT_SUCCESS,
    isFetching: false,
    isSearched: true,
    visits,
  };
}

function salesVisitError(message) {
  return {
    type: SALES_VISIT_FAILURE,
    isFetching: false,
    isSearched: false,
    message,
  };
}

export const sendCoord = (coord, visits) => ({
  type: SALES_SEND_COORDENATE,
  coord,
  visits,
});

export function searchSalesVisits(salesVisitSearch) {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: `salesman=${salesVisitSearch.salesman}&company=${salesVisitSearch.companyName}`,
  };

  return (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestSalesVisit(salesVisitSearch));

    return fetch(visitMock, config)
      .then(response => response.json().then(visits => ({ visits, response })))
      .then(({ visits, response }) => {// eslint-disable-line      

        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(salesVisitError('error'));
          dispatch(receiveSalesVisit(visitMock));
          return Promise.reject(visits);
        }
        // in posts create new action and check http status, if malign logout
        // If login was successful, set the token in local storage
        localStorage.setItem('sales_visits', visits);
        // Dispatch the success action
        dispatch(receiveSalesVisit(visitMock));
      })
      .catch(err => console.log('Error: ', err)); // eslint-disable-line
  };
}

export const startListeningCoordenates = visitId => (dispatch) => database.ref('visits').once('value', (snapshot) => { // eslint-disable-line 
  const visits = [];
  snapshot.forEach((childSnapshot) => {
    visits.push({
      ...childSnapshot.val(),
    });
  });
  if (!visits.find(r => r.visitId === visitId)) {
    return database.ref(`visits/${visitId}/coord`).on('child_added', (coordSnapshot) => {
      const coord = coordSnapshot.val();
      dispatch(sendCoord({ ...coord, id: coordSnapshot.key }, visitId));
    });
  }
});
