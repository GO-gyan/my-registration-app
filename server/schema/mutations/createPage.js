import PageType from './../types/pages-type';
import PageInput from './../inputs/page';
import PageService from './../../services/pageService';

export default {
    type: PageType,
    args: {
        page: {
            type: PageInput
        }
    },
    resolve: (root, { page } , req) => {
        const { areaCode, toPage, pageId } = page;
        return PageService.addPage({ areaCode, toPage, pageId, req });
    }
};