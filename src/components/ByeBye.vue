<template>
  <div class="main">
    <form class="forma">
      <h1>До скорых встреч!</h1>
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
</style>
