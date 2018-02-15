<template lang="pug">
  .main
    .page-container.page-component
      slot(name="content")
</template>
<style>
  @import "content.css";
</style>
<script type="text/babel">
  export default{
    name:'v-content',
    data(){
      return {

      }
    },
    components: {},
    mounted() {

    }
  }
</script>
