import MaleAvatar from './../assets/image/MaleAvatar.png'
import FemaleAvatar from './../assets/image/FemaleAvatar.png';
import MyAvatar from './../assets/image/MyAvatar.png';

export let Girl_Or_Man = sex => {
    return sex === "Male" ? MaleAvatar : FemaleAvatar;
}

export let I_Or_Another = AmI => {
    return AmI ? MyAvatar : Girl_Or_Man('');
}

export let Short_Surname = surname => {
    return surname[0] + '.';
}

