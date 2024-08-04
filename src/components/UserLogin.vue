<script setup>
import useAuthStore from '@/store/store'
import validations from '@/utils/validations'
import useVuelidate from '@vuelidate/core'
import { ref } from 'vue'

const user = ref({
  emailAddress: '',
  password: ''
})

const v$ = useVuelidate(validations, user)

const store = useAuthStore()
const login = () => {
  store.signLogin()
}
</script>

<template>
  <form class="forma" @submit.prevent="login()">
    <div class="input">
      <span class="title">Войти</span>
      <div class="input">
        <label for="emailAddress">Email</label>
        <input
          id="emailAddress"
          type="text"
          placeholder="Email"
          autocomplete="on"
          v-model.lazy="v$.emailAddress.$model"
        />
        <p class="error" v-if="v$.emailAddress.$error">{{ v$.emailAddress.$errors[0].$message }}</p>
      </div>
      <div class="input">
        <label for="password">Пароль</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          autocomplete="on"
          v-model.lazy="v$.password.$model"
        />
        <p class="error" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</p>
      </div>
    </div>
    <div class="btn class">
      <button class="btn" type="submit">Войти</button>
    </div>
  </form>
  <router-view />
</template>

<style scoped>
.forma {
  display: block;
  padding: 20px;
  margin: 70px auto;
  width: 28%;
  min-height: 100%;
  background-color: white;
  border: 3px solid black;
}

.title {
  display: inline-block;
  text-align: center;
  width: 100%;
  font-size: 170%;
  padding: 7px;
  font-weight: bold;
}

.error {
  font-size: 80%;
  color: red;
}

.btn {
  display: block;
  margin: 20px auto;
}

@media (max-width: 412px) {
  .forma {
    width: fit-content;
    zoom: 50%;
  }
}
</style>
