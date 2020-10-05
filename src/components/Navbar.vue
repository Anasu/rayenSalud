<template>
  <div>
  <b-navbar toggleable="lg" class="navigation--color">
    <b-navbar-brand :to="{name:'Home'}">{{title}}</b-navbar-brand>
  </b-navbar>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tutoriales'
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation--color {
  background-color: #6200EE;

  a{
    color: #FFF;
    margin-left: 2rem;

    &:visited {
      color: #FFF;
    }
  }
}
</style>