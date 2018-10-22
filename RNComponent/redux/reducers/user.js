import * as TYPES from '../actions/types';

/**
 * 初始化状态
 * @type {{isLoggedIn: boolean, user: {}, status: null}}
 */
const initialState = {
    isLoggedIn: false,
    user: {},
    status: null,
};
export default function user(state = initialState, action) {
    switch (state.action) {
        case TYPES.LOGGED_IN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.user,
                status: 'done'
            };
        default:
            return state;
    }
}