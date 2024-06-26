import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBgsN4NCqDQJ312_MyZaYcRmO8t_6EWxpY',
  authDomain: 'loginuser-4a324.firebaseapp.com',
  projectId: 'loginuser-4a324',
  storageBucket: 'loginuser-4a324.appspot.com',
  messagingSenderId: '196291480449',
  appId: '1:196291480449:web:f9298bad675622119e7680',
  measurementId: 'G-7YK9EZWSCY'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth
