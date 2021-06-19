const AddPostType = 'ADD-POST';
const UpdateMessageType = 'UPDATE-MESSAGE';
const ADD_PROFILE_PAGE = 'ADD-PROFILE-PAGE';

export const AddPostCreateAction = () => {
    return {
        type: AddPostType
    }
}
export const UpdateMessageCreateAction = text => {
    return {
        type: UpdateMessageType,
        message: text
    }
}
export const AddProfilePage = profile => {
    return {
        type: ADD_PROFILE_PAGE,
        profile
    }
}

let initialState = {
    postData: [
        {id: 1, message: "Hah, how are you", likes: 43},
        {id: 2, message: "I am fine, thank you", likes: 4},
    ],
    message: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    let resultState = {...state};
    switch (action.type) {
        case AddPostType:
            let newPost = {
                id: state.postData.length + 1,
                message: state.message,
                likes: 0
            };
            resultState.postData = [...state.postData];
            resultState.postData.push(newPost);
            resultState.message = '';
            return resultState;
        case UpdateMessageType:
            resultState.message = action.message;
            return resultState;
        case AddProfilePage:
            resultState.profile = {...action.profile};
            return resultState;
        default:
            return resultState;
    }
}

export default profileReducer;