<template>
  <div class="home">
    <navbar></navbar>

    <b-form-input 
      v-model="text" 
      placeholder="Buscar por título"
      v-on:keyup.enter="search"
    ></b-form-input>

    <list></list>

    <div class="d-flex justify-content-center">
      <b-button variant="outline-danger" v-on:click="deleteAll()">Eliminar Todos</b-button>
    </div>
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
    deleteAll() {
      console.log('purificar con fuego, muajaja!')
      this.eliminateData('deletetutorials').then(()=>{
        this.reloadData('tutorials')
      })
    },
    ...mapActions([
      'reloadData',
      'eliminateData'
    ])
  },
  beforeMount() {
      this.reloadData('tutorials')
  },
}
</script>

<style lang="scss">
$danger: #6200EE;
@import "node_modules/bootstrap/scss/bootstrap";

</style>
