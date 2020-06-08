// REDUCERS

const data = (state = { repos: [], isLoading: false }, action) => {
    switch (action.type) {
        case 'REPO_SEARCH':
            return ({ ...state, isLoading: true });

        case 'REPO_SEARCH_SUCCEEDED':
            return ({ repos: action.res.items, isLoading: false });

        case 'REPO_SEARCH_FAILED':
            return ({ ...state, isLoading: false })
        default:
            return state
    }
}

export default data;