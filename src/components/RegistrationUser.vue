<script setup>
import { ref } from 'vue'
import useAuthStore from '@/store/store'
import { useVuelidate } from '@vuelidate/core'
import validations from '@/utils/validations'

const user = ref({
  emailAddress: '',
  password: '',
  name: ''
})

const v$ = useVuelidate(validations, user)

const store = useAuthStore()
const registUser = () => {
  store.signUp()
}
</script>

<template>
  <form class="forma" @submit.prevent="registUser">
    <div class="input">
      <span class="title">Регистрация</span>
      <div class="input">
        <label class="field" for="emailAddress">Email</label>
        <input
          id="emailAddress"
          type="email"
          placeholder="Email"
          autocomplete="on"
          v-model.lazy="v$.emailAddress.$model"
        />
        <p class="error" v-if="v$.emailAddress.$error">{{ v$.emailAddress.$errors[0].$message }}</p>
      </div>
      <div class="input">
        <label class="field" for="password">Пароль</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          autocomplete="on"
          v-model.lazy="v$.password.$model"
        />
        <p class="error" v-if="v$.password.$error">
          {{ v$.password.$errors[0].$message }}
        </p>
      </div>
      <div class="input">
        <label class="field" for="name">Имя</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          autocomplete="on"
          v-model="v$.name.$model"
        />
        <p class="error" v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</p>
      </div>
    </div>
    <div class="btn class">
      <button class="btn" type="submit">Зарегистрироваться</button>
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
</style>
