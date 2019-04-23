import { 
    GraphQLList,
    GraphQLNonNull,
    GraphQLString
} from 'graphql';
import PageType from '../types/pages-type';
import PageService from './../../services/pageService';

export default {
    type: new GraphQLList(PageType),
    args: { id: { type: new GraphQLNonNull(GraphQLString) } },
    resolve: (root, { id }) => {
        console.log(id);
        return PageService.getPages(id);
    }
};