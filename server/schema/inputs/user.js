import {
    GraphQLInputObjectType,
    GraphQLString
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'userInput',
    fields: () => ({
        userName: { type: GraphQLString },
        password: { type: GraphQLString }
    })
});