import { IUserData } from '../types';
import firebase from './config'
export const loginGoogle = () => {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
  .then(() => {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithRedirect(provider);
  })
  .catch(({message}) => {
    alert('로그인 에러\n' + message)
  });
}

export const getCurrentUser = (setUser:React.Dispatch<React.SetStateAction<IUserData | null>>) => {
  const lStorage = JSON.parse(localStorage.getItem("user") || JSON.stringify(null))
  if(lStorage){
    setUser(lStorage)
  }else{
    firebase.auth().onAuthStateChanged((user) => {
      if(user && user.displayName && user.photoURL && user.email){
        const name = user.displayName;
        const img = user.photoURL;
        const email = user.email;
        const userData = {name,img,email}
        setUser(userData)
        localStorage.setItem("user",JSON.stringify(userData))
      }
    })
    setUser(null)
  }
}

export const logOut = () => {
  if(window.confirm('로그아웃 하겠습니까?')){
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('user')
      alert('로그아웃완료');
      window.location.reload();
    }).catch(() => {alert('로그아웃 실패')});
  }
}