const state = {
    dialogPage: {
        contactData: [
            {id: 1, name: "Andrey", sex: "Male"},
            {id: 2, name: "Alexey", sex: "Male"},
            {id: 3, name: "Lena", sex: "Female"},
            {id: 4, name: "Darya", sex: "Female"},
            {id: 5, name: "Sergey", sex: "Male"},
            {id: 6, name: "Airat", sex: "Male"}
        ],
        messageData: [
            {id: 1, message:"Hi, i waant learn ReactJS", AmI: true},
            {id: 2, message:"Like", AmI: false},
            {id: 3, message:"Wow, this is cool", AmI: false},
            {id: 4, message:"3", AmI: true},
            {id: 5, message:"76", AmI: true}
        ]
    },
    profilePage: {
        postData: [
            {id: 1, message: "Hi, how are you", likes: 43},
            {id: 2, message: "I am fine, thank you", likes: 4},
        ]
    },
    NavBarPage: {
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
        ],
        bestFriends: [
            {id: 3, name: "Lena", sex: "Female"},
            {id: 5, name: "Sergey", sex: "Male"},
            {id: 6, name: "Airat", sex: "Male"}
        ]
    }
}

export let addPost = (sendMessage) => {
    let newPost = {
        id: 3,
        message: sendMessage,
        likes: 0
    };

    state.profilePage.postData.push(newPost);
}

export default state;