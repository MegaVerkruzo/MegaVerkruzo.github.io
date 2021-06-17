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

export const ChangeRelationShipCreateAction = id => {
    return {
        'type' : CHANGE_RELATIONSHIP,
        'id' : id - 1
    //    Передаем id - 1, т.к. нужно просматривать в массиве элементы. Они начинаются с нуля
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

let initialState = {
    showPeople: []
}

const findFriendsReducer = (state = initialState, action) => {
    let resultState = {...state}
    switch (action.type) {
        case SHOW_PEOPLE:
            resultState.showPeople = [...action.array];
            return resultState;
        case HIDE_PEOPLE:
            resultState.showPeople = [...state.showPeople];
            let cnt = resultState.showPeople.length;
            cnt = min(cnt, 4);
            for (let i = 0; i < cnt; ++i) {
                resultState.showPeople.pop();
            }
            return resultState;
        case CHANGE_RELATIONSHIP:
            resultState.showPeople = [...state.showPeople];
            resultState.showPeople[action.id] = {...state.showPeople[action.id]};
            resultState.showPeople[action.id].followed = !resultState.showPeople[action.id].followed;
            return resultState;
        default:
            return resultState;
    }
}

export default findFriendsReducer;