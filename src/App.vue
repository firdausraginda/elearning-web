<template>
  <div id="app">
    <v-app>
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <router-view />
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.v-divider {
  opacity: 0.5;
}
.radio-custom label {
  font-size: 14px;
  font-weight: 500;
}
.radio-custom i {
  font-size: 22px;
}
.primer-color {
  color: #018caa;
}

.second-color {
  color: #8f8f8f;
}

.green-color {
  color: #08dba9;
}

.red-color {
  color: #f08080;
}
</style>