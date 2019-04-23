import { 
    GraphQLList
} from 'graphql';
import AreaType from '../types/area-type';
import AreaService from './../../services/areaService';

export default {
    type: new GraphQLList(AreaType),
    resolve: () => {
        return AreaService.getAllArea();
    }
};