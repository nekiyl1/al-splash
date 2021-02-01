import { loadPageUnsplash } from '../common/common'

export const loadPage = () => {
    return (dispatch, getState) => {
        let state = getState();
        if (!state.pics.loading) {
            let p = state.pics.page++;
            dispatch(setLoading());
            loadPageUnsplash(p).then(result => {
                dispatch(loadPageAsync(result.response.results));
            });
        }
    }
}

export const loadPageAsync = (pics) => {
    return {
        type: 'LOAD_PAGE',
        pics
    }
}

export const setLoading = () => {
    return {
        type: 'SET_LOADING'
    }
}