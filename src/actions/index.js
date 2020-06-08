// ACTIONS

export const repoSearch = props => ({
    type: 'REPO_SEARCH',
    itemsPerPage: props.itemsPerPage,
    currentPage: props.currentPage,
    text: props.text,
    language: props.language
});