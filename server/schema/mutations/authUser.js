import UserType from './../types/user-type';
import UserInput from './../inputs/user';
import UserService from './../../services/userService';

export default {
    type: UserType,
    args: {
        user: {
            type: UserInput
        }
    },
    resolve: (root, { user } , req) => {
        const { userName, password } = user;
        return UserService.authUser({ userName, password, req });
    }
};