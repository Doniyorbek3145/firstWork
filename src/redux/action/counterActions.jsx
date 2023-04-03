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

export const setUrlName = (urlName) => {
    return {
        type: "SET_URL_NAME",
        payload: urlName
    }
}

export const setCategoryName = (categoryName) => {
    return {
        type: "SET_CATEGORY_NAME",
        payload: categoryName
    }
}