<template>
  <div class="add-tutorial">
    <navbar title="< Agregar Tutorial"></navbar>

    <b-form @submit="onSubmit" class="container-fluid mt-5">
      <b-form-group
        id="input-group-1"
        label="Título"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.nombre"
          required
          placeholder="Título"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="form.profesor"
          required
          placeholder="Profesor"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="form.materia"
          required
          placeholder="Materia"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="form.fecha"
          required
          placeholder="Fecha"
        ></b-form-input>
      </b-form-group>
      <div class="d-flex justify-content-end">
        <b-button type="submit" class="bg-morado">AGREGAR</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import {mapActions} from 'vuex'

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      form: {
        nombre: '',
        profesor: '',
        materia: '',
        fecha: '',
      }
    }
  },
  methods: {
    ...mapActions([
      'postData',
      'reloadData'
    ]),
    onSubmit() {
      this.postData(this.form).then( ()=> {
        this.reloadData('tutorials').then(()=>{
          this.$router.push({name: 'Home'});
        })
      }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-morado {
  background-color: #6200EE;
}
</style>