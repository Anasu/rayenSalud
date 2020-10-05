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

    <b-icon 
      icon="plus-circle-fill" 
      scale="4" 
      variant="info"
      class="float-right margen-a-mano"
      @click="addTutorial()"
    ></b-icon>
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
    addTutorial() {
      this.$router.push({name: 'Agregar'});
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

.margen-a-mano {
  margin: 30px 10vw 0 0;
}
</style>
