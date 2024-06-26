/* eslint-disable no-undef */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import { defineStore } from 'pinia'
import auth from '@/firebase/firebase'
import router from '../router'
import { ref } from 'vue'

const useAuthStore = defineStore({
  id: 'user',
  state() {
    return {
      isLogged: ref(false)
    }
  },
  actions: {
    async signUp() {
      await createUserWithEmailAndPassword(auth, emailAddress.value, password.value)
        .then(() => {
          alert('Регистрация прошла успешно')
          router.push('/login')
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            alert('Пользователь с таким электронным адресом уже зарегестрирован.')
          }
        })
    },
    authStage() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.isLogged = true
        } else {
          this.isLogged = false
        }
      })
    },
    async signLogin() {
      await signInWithEmailAndPassword(auth, emailAddress.value, password.value)
        .then(() => {
          this.isLogged = true
          router.push('/')
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-credential') {
            alert('Электронный адрес или пароль указаны неверно')
          }
        })
    },
    async logOut() {
      await signOut(auth)
        .then(() => {
          this.isLogged = false
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})

export default useAuthStore
