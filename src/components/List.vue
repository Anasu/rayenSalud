<template>
  <div class="tutorial-list">
    <div class="filter">
      <b-form-select 
        v-model="selected" 
        :options="options"
      ></b-form-select>
    </div>

    <b-card-group v-for="item in tutoriales" :key="item.id" deck>
    <b-card :title="item.nombre">
      <b-card-text>
        {{item.profesor}} | 
        <small class="text-muted">{{formatDate(item.fecha)}}</small>
      </b-card-text>
    </b-card>
  </b-card-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment-timezone'

export default {
  data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Ordenar por' },
          { value: 'titulo', text: 'Título' },
          { value: 'fecha', text: 'Fecha' },
        ],
      }
    },
  computed: {
    ...mapState([
      'tutorials'
    ]),
    tutoriales() {
      let tutorList = this.tutorials;
      switch (this.selected) {
        case 'titulo':
          // console.log('filtrame por título');
          tutorList.sort(function(a, b) {
            if(a.nombre > b.nombre) {
              return 1;
            }
            if(a.nombre < b.nombre) {
              return -1;
            }
            return 0
          });
          return tutorList
        case 'fecha':
          // console.log('filtrame por fecha');
          tutorList.sort(function(a, b) {
            if(a.fecha > b.fecha) {
              return 1;
            }
            if(a.fecha < b.fecha) {
              return -1;
            }
            return 0
          });
          return tutorList
        default:
          // console.log('aún no seleccionan nada');
          return tutorList
      }
    }
  },
  methods: {
    formatDate(dateString) {
      let date = moment.tz(dateString, "UTC");
      return date.format("DD/MM/YYYY")
    }
  }
}
</script>