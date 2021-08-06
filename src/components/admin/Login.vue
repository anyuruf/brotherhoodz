<template>
  <div class="flex flex-col justify-center w-full md:w-1/2 lg:w-1/3">
    <h3 class="font-bold mb-4 text-2xl w-full text-center text-primary">
      PLEASE LOGIN
    </h3>
    <form @submit.prevent="signIn" class="px-8 flex flex-col justify-center items-center w-full">
      <div class="flex flex-col mb-4 cursor-pointer w-full">
        <label class="w-full mb-2 text-primary" for="email">Enter your email: </label>
        <input 
          type="text" name="email" id="email" 
          placeholder="email.." required
          class="px-4 py-2 w-full rounded border border-primary shadow-sm placeholder-opacity-50 focus:outline-none focus:border-secondary"
        >
      </div>
      <div class="flex flex-col mb-4 w-full cursor-pointer">
        <label class="w-full mb-2 text-primary" for="password">Enter your password: </label>
        <input 
          type="text" name="password" id="password" 
          placeholder="password.." required
          class="px-4 py-2 w-full rounded border border-primary shadow-sm placeholder-opacity-50 focus:outline-none focus:border-secondary"
        >
      </div>
      
      <button class="w-full items-center bg-primary hover:bg-secondary text-cream focus:outline-none focus:ring rounded px-3 py-1">
        <p class="px-2 py-1 font-bold font-lg">
          LOGIN
        </p>
      </button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'Login',
    props: ['email', 'password']
}
</script>