const logUser = (data, dispatch) => {
    localStorage.setItem('token', data.token);

    return {
        type: 'LOGIN',
        payload: data
    }
};

export const login = (email, password, dispatch) => {

    const data = {email, password};

    fetch('http://localhost:6565/token', {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),

    })
        .then(response => response.json())
        .then(data => dispatch(logUser(data)))
        .catch(error => console.log(error));


    return {
        type: "REQUEST_LOGIN",
        payload: {}
    }
};


