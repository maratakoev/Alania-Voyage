<template>
  <nav>
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
  </nav>
  <router-view/>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  padding-top: 35px;
  font-family: 'Roboto', sans-serif;
}



/* nav {
  padding: 30px;
} */

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
