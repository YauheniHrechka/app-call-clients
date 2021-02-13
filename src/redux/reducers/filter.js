const initialState = {
    category: ''
};

const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER_BY_CATEGORY':
            return {
                ...state,
                category: action.payload
            };

        default:
            return state;
    }
}

export default filter;