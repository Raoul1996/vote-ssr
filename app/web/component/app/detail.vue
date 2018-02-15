<template lang="pug">
  div(style="font-size: 24px; text-align: center")
    | vue-server-render detail
</template>
<style>

</style>
<script type="text/babel">
  export default{
    preFetch({ state, dispatch, commit }) {
      const { id } = state.route.params;
      return Promise.all([
        dispatch('FETCH_ARTICLE_DETAIL', { id })
      ]);
    },
    beforeMount() {
      const { id } = this.$store.state.route.params;
      return Promise.all([
        this.$store.dispatch('FETCH_ARTICLE_DETAIL', { id })
      ]);
    }
  }
</script>
