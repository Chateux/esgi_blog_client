export const getUser = (data) => {
    return {
        type: 'USER_DATA',
        payload: data
    }
};

export const getUsers = (dispatch) => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:6565/user',
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => dispatch(getUser(data)))
        .catch(error => console.log(error));

    return {
        type: 'RECEIVE_USER',
        payload: {}
    }
};
