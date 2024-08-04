<script setup>
import useAuthStore from '@/store/store'

const store = useAuthStore()
const userOut = () => {
  store.logOut()
}
</script>

<template>
  <div class="main">
    <form class="forma" v-show="store.isLogged">
      <h1>Добро пожаловать</h1>
      <button class="btn" type="submit" @click="userOut">Выйти</button>
    </form>
  </div>
  <router-view />
</template>

<style scoped>
.main {
  text-align: center;
  padding: 0;
  font-size: 130%;
}

.forma {
  display: block;
  padding: 20px;
  margin: 70px auto;
  width: 32%;
  min-height: 100%;
  background-color: white;
  border: 3px solid black;
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
