<template>
  <div class="input-group mt-3">
    <input type="text" class="form-control" v-model="keyword" placeholder="search everything"
           aria-label="search everything"
           aria-describedby="button-addon2">
    <button @click.prevent="search" class="btn btn-outline-secondary" type="button" id="button-addon2">
      <i class="bi bi-search"></i>
    </button>
  </div>
</template>

<script>
import {debounce, throttle} from "lodash";

export default {
  data() {
    return {
      keyword: null
    }
  },
  methods: {
    search:debounce(function (){
      this.$emit('search',this.keyword)
    },500)
  },
  watch:{
    keyword:debounce(function (){
      this.$emit('search',this.keyword)
    },500)
  }
}
</script>

<style scoped>

</style>