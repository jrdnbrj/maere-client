const _state = {
    products: [],
    token: localStorage.getItem('token') || undefined
}

const reducers = (state = _state, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            localStorage.setItem('token', action.token)
            return {
                ...state,
                token: action.token
            }
        default: return { ...state }
    }
}

export default reducers
