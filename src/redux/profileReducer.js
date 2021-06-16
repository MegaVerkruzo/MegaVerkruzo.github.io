const AddPostType = 'ADD-POST';
const UpdateMessageType = 'UPDATE-MESSAGE';

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

let initialState = {
    postData: [
        {id: 1, message: "Hi, how are you", likes: 43},
        {id: 2, message: "I am fine, thank you", likes: 4},
    ],
    message: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddPostType:
            let newPost = {
                id: state.postData.length + 1,
                message: state.message,
                likes: 0
            };
            state.postData.push(newPost);
            state.message = '';
            return state;
        case UpdateMessageType:
            state.message = action.message;
            return state;
        default:
            return state;
    }
}

export default profileReducer;