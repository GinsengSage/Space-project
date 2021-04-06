<template>
  <Menu></Menu>
  <router-view/>
</template>

<script>

import Menu from '@/components/Menu'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #app{
    width: 100%;
  }
</style>
