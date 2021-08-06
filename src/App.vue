<template>
  <div class="h-screen flex flex-col overflow-auto">
    <Nav :navigation="navigation" :profile="profile" class="flex-grow-0"/>
    <main class="bg-cream overflow-y-scroll flex-grow">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
       <router-view />
      </div>
    </main>
    <Footer flex-grow-0/>
  </div>
</template>

<script>
import { ref } from 'vue'
import Footer from './components/layout/Footer.vue'
import Nav from './components/layout/Nav.vue'

const navigation = ['Home', 'About']
const profile = ['Your Profile', 'Settings', 'Sign out']

export default {
  components: {
    Footer,
    Nav,
  },
  setup() {
    const open = ref(false)

    return {
      navigation,
      profile,
      open,
    }
  },
}
</script>
