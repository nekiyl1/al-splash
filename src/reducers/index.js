import { combineReducers } from 'redux'

const pics = (state = { pics: [], loading: false, page: 0 }, action) => {
    switch (action.type) {
        case 'LOAD_PAGE':
            const addPics = [...state.pics, ...action.pics];
            const uniquePics = Array.from(new Set(addPics.map(a => a.id)))
                .map(id => {
                    return addPics.find(a => a.id === id)
                })
            return { pics: uniquePics, loading: false, page: state.page++ };
        case 'SET_LOADING':
            return { pics: state.pics, loading: true, page: state.page };
        default:
            return state;
    }
}

export default combineReducers({ pics: pics });