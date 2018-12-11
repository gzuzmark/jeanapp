import gql from 'graphql-tag';

const getVisits = gql(`
query listVisits {
  listVisits {
    items {
      id
      salesmanId
      salesmanName
      clientId
      clientName
      visitDate
      visitEndDate
      visitStateId
      visitState
      visitStartAddress
      visitClientAddress
      visitDuration
    }
  }
}
`);

export { getVisits as default };
