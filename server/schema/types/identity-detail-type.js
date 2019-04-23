import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'IdentityDetailType',
    description: 'User of the work logger application',
    fields: {
        id: {
            type: GraphQLID,
            description: `Identity ID`
        },
        aadhar: {
            type: GraphQLString,
            description: `User's aadhar card number`
        },
        pan: {
            type: GraphQLString,
            description: `User's aadhar card number`
        }
    }
})