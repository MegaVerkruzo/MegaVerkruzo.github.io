let min = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

const CHANGE_RELATIONSHIP = 'CHANGE_RELATIONSHIP';
const SHOW_PEOPLE = 'SHOW-PEOPLE';
const HIDE_PEOPLE = 'HIDE-PEOPLE';
const COUNT_PAGE = 'COUNT-PAGE';
const CHANGE_PAGE = 'CHANGE-PAGE';

export const ChangeRelationShipCreateAction = id => {
    return {
        'type' : CHANGE_RELATIONSHIP,
        'id' : id
    }
}
export const ShowPeopleCreateAction = array => {
    return {
        type: SHOW_PEOPLE,
        array: array
    }
}
export const HidePeopleAC = () => {
    return {
        type: HIDE_PEOPLE
    }
}
export const CountPageAC = cnt => {
    return {
        type: COUNT_PAGE,
        cnt: cnt
    }
}
export const ChangePageAC = currentPage => {
    return {
        type: CHANGE_PAGE,
        currentPage: currentPage
    }
}

let initialState = {
    showPeople: [],
    currentPage: 1,
    pageSize: 3,
    pageCount: 10
}

const findFriendsReducer = (state = initialState, action) => {
    let resultState = {...state};
    switch (action.type) {
        case SHOW_PEOPLE:
            debugger;
            resultState.showPeople = [...action.array];
            return resultState;
        case HIDE_PEOPLE:
            resultState.showPeople = [];
            return resultState;
        case CHANGE_RELATIONSHIP:
            resultState.showPeople = state.showPeople.map( el => {
                if (el.id === action.id) {
                    return {...el, followed: !el.followed};
                }
                return el;
            });
            return resultState;
        case COUNT_PAGE:
            resultState.pageCount = action.cnt;
            return resultState;
        case CHANGE_PAGE:
            resultState.currentPage = action.currentPage;
            return resultState;
        default:
            return resultState;
    }
}

export default findFriendsReducer;