<template>
  <div class="home">
    <navbar></navbar>

    <b-form-input 
      v-model="text" 
      placeholder="Buscar por título"
      v-on:keyup.enter="search"
    ></b-form-input>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'Home',
  components: {
    Navbar,
  },
  data() {
    return {
      text: '', 
    }
  },
  methods: {
    search() {
      // console.log('presionaste enter y enviaste algo!');
      this.text = '';
    },
  },
}
</script>
