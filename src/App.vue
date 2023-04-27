<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/count">Count</router-link> | 
    <router-link to="/reactive">Reactive</router-link> |
    <router-link to="/computed">Computed</router-link>  |
    <router-link to="/classStyle">Class Style</router-link> |
    <router-link to="/conditonal">Conditional Style</router-link> |
    <router-link to="/eventHandling">Event Handling</router-link> |
    <router-link to="/formInputBinding">Form Input Binding</router-link> |
    <router-link to="/lifeCycleHook">Life Cycle Hook</router-link> |
    <router-link to="/watcher">Watcher</router-link> |
    <router-link to="/templateRefs">Template Refs</router-link> |
    <router-link to="/componentsBasic">Components Basic</router-link> |
    <router-link to="/lchook">Hooks simple</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
