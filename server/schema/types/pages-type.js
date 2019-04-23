import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'PagesType',
    description: 'Pages for areas',
    fields: {
        id: {
            type: GraphQLID,
            description: `Page ID`
        },
        toPage: {
            type: GraphQLString,
            description: `Link to the page`
        },
        pageId: {
            type: GraphQLString,
            description: `Id of the page`
        },
        areaCode: {
            type: GraphQLString,
            description: `Area code`
        }
    }
})