<template lang="pug">
	div(style="font-size: 24px; text-align: center")
		.container.smart-container
			.row.row-offcanvas.row-offcanvas-right
				.col-xs-12.col-sm-9
					ul#articleList.smart-artiles
						li(v-for="item in articleList", :key="item.id")
							.point +{{item.hits}}
							.card
								h2
									router-link.nav-item-a(:to="'/detail/'+item.id") {{item.title}}
								div
									ul.actions
										li
											time.timeago {{item.moduleName}}
										li.tauthor
											a.get(href="#", target="_blank") Sky
										li
											a(:href="item.url", target="_blank") 原文
										li
											span.timeago {{item.summary}}
										li
											span.timeago
					#pagerBottom.smart-pager(v-if="isLoading")
						img(src="../../asset/images/loading.gif")

</template>
<style>

</style>
<script type="text/babel">
  export default {
    computed: {
      isLoading() {
        return false
      },
      articleList() {
        return this.$store.state.articleList
      }
    },
    preFetch({state, dispatch, commit}) {
      return Promise.all([
        dispatch('FETCH_ARTICLE_LIST')
      ])
    },
    beforeMount() {
      return Promise.all([
        this.$store.dispatch('FETCH_ARTICLE_LIST')
      ])
    }
  }
</script>
