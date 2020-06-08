// ACTIONS

export const repoSearch = props => ({
    type: 'REPO_SEARCH',
    text: props.text,
    language: props.language
});