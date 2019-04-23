import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'AreaType',
    description: 'Area detail',
    fields: {
        id: {
            type: GraphQLID,
            description: `Area ID`
        },
        areaCode: {
            type: GraphQLString,
            description: `Area code`
        },
        areaLabel: {
            type: GraphQLString,
            description: `Area label`
        }
    }
});
