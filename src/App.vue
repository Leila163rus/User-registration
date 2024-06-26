<template>
  <div class="app">
    <form class="forma1">
      <p>
        Нет аккаунта? <span><router-link to="/registration">Зарегистрироваться</router-link></span>
      </p>
    </form>
    <form class="forma1">
      <p>
        Уже зарегестрированы? <span><router-link to="/login">Войти!</router-link></span>
      </p>
    </form>
  </div>
  <router-view />
</template>
