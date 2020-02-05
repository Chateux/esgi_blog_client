const reducer = function (state = { isLogged: false, user: null }, action) {
    //La méthode Object.assign() est utilisée afin de copier les valeurs de toutes 
    //les propriétés directes (non héritées) d'un objet qui sont énumérables sur 
    //un autre objet cible. Cette méthode renvoie l'objet cible.
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isLogged: false, 
                user: null,
                login: action.payload
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLogged: false,
                user: null
            });
        default:
            return state;
    }
};

export default reducer;