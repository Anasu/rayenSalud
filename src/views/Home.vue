<template>
  <div class="home">
    <navbar></navbar>

    <b-form-input 
      v-model="text" 
      placeholder="Buscar por título"
      v-on:keyup.enter="search"
    ></b-form-input>

    <list></list>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import List from '@/components/List'
import {mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar,
    List
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
    ...mapActions([
      'reloadData'
    ])
  },
  beforeMount() {
      this.reloadData('tutorials')
  },
}
</script>
