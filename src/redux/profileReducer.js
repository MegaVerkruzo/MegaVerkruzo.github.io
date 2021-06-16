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

const profileReducer = (state, action) => {
    switch (action.type) {
        case AddPostType:
            let newPost = {
                id: state.profilePage.postData.length + 1,
                message: state.profilePage.message,
                likes: 0
            };
            state.profilePage.postData.push(newPost);
            state.profilePage.message = '';
            return state;
        case UpdateMessageType:
            state.profilePage.message = action.message;
            return state;
        default:
            return state;
    }
}

export default profileReducer;