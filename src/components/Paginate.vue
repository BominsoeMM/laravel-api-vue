<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" v-for="link in links">
        <a class="page-link"
           @click.prevent="go(link.url)"
           :class="{'active':link.active, 'disabled':!link.url}"
           href="#">{{ link.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
    },
  },
  methods: {
    go(url) {
    this.$emit('paginateLink' , url);
    },
    paginateChange(){
      this.links[0].label = "Prev";
      this.links[this.links.length - 1].label = "Next";
    },

  },
  beforeMount() {
    this.paginateChange();
  },
  updated() {
   this.paginateChange()
  }
}
</script>

<style scoped>

</style>