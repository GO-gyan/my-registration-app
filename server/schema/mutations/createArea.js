import AreaType from './../types/area-type';
import AreaInput from './../inputs/area';
import AreaService from './../../services/areaService';

export default {
    type: AreaType,
    args: {
        area: {
            type: AreaInput
        }
    },
    resolve: (root, { area } , req) => {
        const { areaCode, areaLabel } = area;
        return AreaService.addArea({ areaCode, areaLabel, req });
    }
};