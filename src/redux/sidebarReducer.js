let initialState = {
    NavBarItems: [
        {
            to: '/profile',
            text: 'Profile'
        },
        {
            to: '/dialogs',
            text: 'Messages'
        },
        {
            to: '/news',
            text: 'News'
        },
        {
            to: '/music',
            text: 'Music'
        },
        {
            to: '/settings',
            text: 'Settings'
        },
        {
            to: '/findfriends',
            text: 'Find Friends'
        }
    ],
    bestFriends: [
        {id: 3, name: "Lena", sex: "Female"},
        {id: 5, name: "Sergey", sex: "Male"},
        {id: 6, name: "Airat", sex: "Male"}
    ]
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sidebarReducer;