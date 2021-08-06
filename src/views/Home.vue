<template>
  <div class="flex flex-col md:flex-row">
    <Landing />
    <Login />
  </div>
</template>
<script > 
  import Login  from '../components/admin/Login.vue'
   import Landing  from '../components/Landing.vue'

  export default {
    name: 'Home',
    components: {
      Login,
      Landing,
  }
  }
</script>