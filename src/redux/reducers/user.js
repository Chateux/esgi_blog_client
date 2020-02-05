
const reducer = function(state = {user: []}, action) {
    switch (action.type) {
        case 'USER_DATA':
            return Object.assign({}, state, {
                user: action.payload
            });
        default:
            return state;
    }
};

export default reducer;