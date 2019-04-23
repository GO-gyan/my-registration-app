import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'UserType',
    description: 'Users',
    fields: {
        id: {
            type: GraphQLID,
            description: `Page ID`
        },
        userName: {
            type: GraphQLString,
            description: `Link to the page`
        }
    }
})