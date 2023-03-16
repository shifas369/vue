<template>
<div>

<nav-bar/>

<router-view/>
</div>
</template>


<script>

import NavBar from './views/NavBar.vue'
  export default{
  components: { NavBar },
    name:'app'
  }
</script>


<style>

 
</style>
