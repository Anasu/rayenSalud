<template>
  <div>
  <b-navbar toggleable="lg" class="navigation--color">
    <b-navbar-brand :to="{name:'Home'}">Tutoriales</b-navbar-brand>
  </b-navbar>
</div>
</template>

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