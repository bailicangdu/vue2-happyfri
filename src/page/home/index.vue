<template lang="pug">
.home_container
  itemcontainer(father-component="home")
</template>

<script>
import itemcontainer from '../../components/itemcontainer'
export default {
  name: 'home',
  components: {
      itemcontainer
  }
}
</script>

<style>

</style>
