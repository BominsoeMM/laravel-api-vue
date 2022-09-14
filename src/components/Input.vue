<template>
  <div>
    <label :for="name" class="form-label">{{ label }}</label>
    <input :type="type" :id="name" :value="value" :class="{'is-invalid':errors[name]}" class="form-control" :name="name">
    <div class="invalid-feedback" v-if="errors[name]">{{ errors[name][0] }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "input_label"
    },
    type: {
      type: String,
      default: "text"
    },
    errors:{
      type: Object
    },
    name: {
      type: String,
      default: "input_name"
    },
    value:{
      default:null
    }
  },
}
</script>

<style scoped>

</style>