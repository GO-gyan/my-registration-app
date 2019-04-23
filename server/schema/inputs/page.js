import {
    GraphQLInputObjectType,
    GraphQLString
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'pageInput',
    fields: () => ({
        pageId: { type: GraphQLString },
        areaCode: { type: GraphQLString },
        toPage: { type: GraphQLString }
    })
});