import {
    GraphQLInputObjectType,
    GraphQLString
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'areaInput',
    fields: () => ({
        areaCode: { type: GraphQLString },
        areaLabel: { type: GraphQLString }
    })
});