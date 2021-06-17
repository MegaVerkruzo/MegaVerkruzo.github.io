let min = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

const CHANGE_RELATIONSHIP = 'CHANGE_RELATIONSHIP';
const SHOW_PEOPLE = 'SHOW-PEOPLE';

export const ChangeRelationShipCreateAction = id => {
    return {
        'type' : CHANGE_RELATIONSHIP,
        'id' : id - 1
    //    Передаем id - 1, т.к. нужно просматривать в массиве элементы. Они начинаются с нуля
    }
}
export const ShowPeopleCreateAction = () => {
    return {
        type: SHOW_PEOPLE
    }
}

let initialState = {
    allPeople: [
        {
            id: 1,
            name: 'Dmitry',
            surname: 'Kayenov',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am looking for a Job right now..',
            sex: 'Male'
        },
        {
            id: 2,
            name: 'Svetlana',
            surname: 'Diamonova',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am so pretty.',
            sex: 'Female'
        },
        {
            id: 3,
            name: 'Sergei',
            surname: 'Solokin',
            city: 'Kiev',
            country: 'Ukraine',
            friend: true,
            description: 'I like football!!!',
            sex: 'Male'
        },
        {
            id: 4,
            name: 'Andrew',
            surname: 'Taykanov',
            city: 'Philadelphia',
            country: 'United States',
            friend: true,
            description: 'I am free to help you to create good Video Production',
            sex: 'Male'
        },
        {
            id: 5,
            name: 'Dmitry',
            surname: 'Kayenov',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am looking for a Job right now..',
            sex: 'Male'
        },
        {
            id: 6,
            name: 'Dmitry',
            surname: 'Kayenov',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am looking for a Job right now..',
            sex: 'Male'
        },
        {
            id: 7,
            name: 'Svetlana',
            surname: 'Diamonova',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am so pretty.',
            sex: 'Female'
        },
        {
            id: 8,
            name: 'Sergei',
            surname: 'Solokin',
            city: 'Kiev',
            country: 'Ukraine',
            friend: true,
            description: 'I like football!!!',
            sex: 'Male'
        },
        {
            id: 9,
            name: 'Andrew',
            surname: 'Taykanov',
            city: 'Philadelphia',
            country: 'United States',
            friend: true,
            description: 'I am free to help you to create good Video Production',
            sex: 'Male'
        },
        {
            id: 10,
            name: 'Dmitry',
            surname: 'Kayenov',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am looking for a Job right now..',
            sex: 'Male'
        },
    ],
    showPeople: [
        {
            id: 1,
            name: 'Dmitry',
            surname: 'Kayenov',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am looking for a Job right now..',
            sex: 'Male'
        },
        {
            id: 2,
            name: 'Svetlana',
            surname: 'Diamonova',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am so pretty.',
            sex: 'Female'
        },
        {
            id: 3,
            name: 'Sergei',
            surname: 'Solokin',
            city: 'Kiev',
            country: 'Ukraine',
            friend: true,
            description: 'I like football!!!',
            sex: 'Male'
        },
        {
            id: 4,
            name: 'Andrew',
            surname: 'Taykanov',
            city: 'Philadelphia',
            country: 'United States',
            friend: true,
            description: 'I am free to help you to create good Video Production',
            sex: 'Male'
        }
    ]
}

const findFriendsReducer = (state = initialState, action) => {
    let resultState = {...state}
    switch (action.type) {
        case SHOW_PEOPLE:
            resultState.showPeople = [...state.showPeople];
            let len = resultState.showPeople.length;
            for (let i = len; i < min(resultState.allPeople.length, len + 4); i++) {
                resultState.showPeople.push({...resultState.allPeople[i]});
            }
            return resultState;
        case CHANGE_RELATIONSHIP:
            resultState.showPeople = [...state.showPeople];
            resultState.showPeople[action.id] = {...state.showPeople[action.id]};
            resultState.showPeople[action.id].friend = !resultState.showPeople[action.id].friend;
            return resultState;
        default:
            return resultState;
    }
}

export default findFriendsReducer;