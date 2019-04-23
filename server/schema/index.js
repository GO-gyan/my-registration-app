import { 
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

import queries from './queries';
import mutations from './mutations';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: queries
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: mutations
});
export default new GraphQLSchema({
    query: RootQuery,
    mutation
});