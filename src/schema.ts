const { gql } = require('apollo-server');

export const typeDefs = gql`
    type Query {
        "Returns zip code info"
        zip(country: String!, zipCode: String!): Location!
    }

    type Location {
        postCode: String
        country: String!
        countryAbv: String
        places: [Place!]!
    }

    type Place {
           name: String
           longitude: String!
           state: String
           stateAbv: String
           latitude: String!
    }
`