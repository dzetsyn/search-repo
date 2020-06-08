// REDUCERS

const InitialState = {
    repos: [],
    totalCount: 0,
    currentPage: 0,
    itemsPerPage: 30,
    isLoading: false
}

const data = (state = InitialState, action) => {
    switch (action.type) {
        case 'REPO_SEARCH':
            return ({ ...state, isLoading: true });

        case 'REPO_SEARCH_SUCCEEDED':
            const { itemsPerPage, currentPage } = action;
            return ({
                ...state,
                repos: action.response.items,
                totalCount: action.response.total_count,
                currentPage,
                itemsPerPage,
                isLoading: false
            });

        case 'REPO_SEARCH_FAILED':
            alert(`Error: ${action.message}`);
            return ({ ...state, isLoading: false })

        default:
            return state
    }
}

export default data;