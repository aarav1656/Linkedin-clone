import { getAuth, GoogleAuthProvider, signInWithPopup, payload } from "firebase/auth";


export function signInAPI () {
    return (dispatch) => {
        getAuth
            .signInWithPopup(GoogleAuthProvider)
            .then((payload) => {
                console.log(payload);
            })
            .catch((error) => alert(error.message));
    };
}
