let min = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

const CHANGE_RELATIONSHIP = 'CHANGE_RELATIONSHIP';
const SHOW_PEOPLE = 'SHOW-PEOPLE';

let initialState = {
    allPeople: [
        {
            id: 1,
            name: 'Dmitry',
            surname: 'Kayenov',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am looking for a Job right now..'
        },
        {
            id: 2,
            name: 'Svetlana',
            surname: 'Diamonova',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am so pretty.'
        },
        {
            id: 3,
            name: 'Sergei',
            surname: 'Solokin',
            city: 'Kiev',
            country: 'Ukraine',
            friend: true,
            description: 'I like football!!!'
        },
        {
            id: 4,
            name: 'Andrew',
            surname: 'Taykanov',
            city: 'Philadelphia',
            country: 'United States',
            friend: true,
            description: 'I am free to help you to create good Video Production'
        },
        {
            id: 5,
            name: 'Dmitry',
            surname: 'Kayenov',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am looking for a Job right now..'
        },
        {
            id: 6,
            name: 'Dmitry',
            surname: 'Kayenov',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am looking for a Job right now..'
        },
        {
            id: 7,
            name: 'Svetlana',
            surname: 'Diamonova',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am so pretty.'
        },
        {
            id: 8,
            name: 'Sergei',
            surname: 'Solokin',
            city: 'Kiev',
            country: 'Ukraine',
            friend: true,
            description: 'I like football!!!'
        },
        {
            id: 9,
            name: 'Andrew',
            surname: 'Taykanov',
            city: 'Philadelphia',
            country: 'United States',
            friend: true,
            description: 'I am free to help you to create good Video Production'
        },
        {
            id: 10,
            name: 'Dmitry',
            surname: 'Kayenov',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am looking for a Job right now..'
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
            description: 'I am looking for a Job right now..'
        },
        {
            id: 2,
            name: 'Svetlana',
            surname: 'Diamonova',
            city: 'Minsk',
            country: 'Belarus',
            friend: false,
            description: 'I am so pretty.'
        },
        {
            id: 3,
            name: 'Sergei',
            surname: 'Solokin',
            city: 'Kiev',
            country: 'Ukraine',
            friend: true,
            description: 'I like football!!!'
        },
        {
            id: 4,
            name: 'Andrew',
            surname: 'Taykanov',
            city: 'Philadelphia',
            country: 'United States',
            friend: true,
            description: 'I am free to help you to create good Video Production'
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
                resultState.showPeople.push(resultState.allPeople[i]);
            }
            return resultState;
        case CHANGE_RELATIONSHIP:
            resultState.showPeople = [...state.showPeople];
            resultState.showPeople[action.id - 1] = {...state.showPeople[action.id - 1]};
            resultState.showPeople[action.id - 1].friend = !resultState.showPeople[action.id - 1].friend;
            return resultState;
        default:
            return resultState;
    }
}

export default findFriendsReducer;