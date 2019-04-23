import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'PersonalDetailType',
    description: 'User of the work logger application',
    fields: {
        id: {
            type: GraphQLID,
            description: `User's ID`
        },
        firstName: {
            type: GraphQLString,
            description: `User's first name`
        },
        lastName: {
            type: GraphQLString,
            description: `User's first name`
        },
        phoneNumber: {
            type: GraphQLString,
            description: `User's phone number`
        }
    }
})