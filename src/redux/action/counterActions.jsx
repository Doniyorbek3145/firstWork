export const incrementLike = () => {
    return {
        type: 'INCREMENT_LIKE'
    };
};

export const setSearchValue = (value) => {
    return {
        type: "SET_SEARCH_VALUE",
        payload: value
    }
}

export const setRefresh = () => {
    return {
        type: "SET_REFRESH_PAGE",
        payload: true
    }
}