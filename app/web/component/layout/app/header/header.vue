<template lang="pug">
	header.header
		.container
			h1
				a.router-link-active(href="#") Egg + Vue
			ul.nav
				li.nav-item
					a(href="/", :class="{'active' : selectedMenu === '/'}") Single-Page

</template>
<style>
	@import "./header.css";
</style>
<script type="text/babel">
  export default {
    data() {
      return {
        selectedMenu: '/app'
      }
    },
    computed: {},
    mounted() {
      this.selectedMenu = window.location.pathname.toLowerCase().replace(/\/$/, '')
    }
  }
</script>
