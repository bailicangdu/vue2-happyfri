<template lang="pug">
div
  itemcontainer(father-component="item")
</template>

<script>
import itemcontainer from '../../components/itemcontainer'
export default {
  name: 'item',
  components: {
      itemcontainer
  },
  created() {
      this.$store.dispatch('remberTime');
  }
}
</script>

<style lang="less">

</style>
