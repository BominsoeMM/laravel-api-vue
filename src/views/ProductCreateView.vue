<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h3 class="mt-3">Product Create</h3>
        <hr>
        <form action="" @submit.prevent="addProduct" ref="createProduct" method="post">
          <div class="row ">
            <div class="col ">
              <div class="mb-3">
                <Input type="text" name="name" :errors="errors" label="Product Name"/>
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <Input type="number" :errors="errors" name="price" label="Product Price"/>
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <Input type="number" :errors="errors" name="stock" label="Product Stock"/>
              </div>
            </div>
            <div class="col-12">
              <div class="mb-3">
                <label for="photos" class="form-label">Product Photo</label>
                <input type="file" class="form-control" :class="{'is-invalid':errors.photos}" id="photos" name="photos[]" multiple>
                <div class="text-danger" v-if="errors.photos">{{ errors.photos[0] }}</div>
              </div>
            </div>
            <div class="d-flex justify-content-end align-items-center">
              <button :disabled="isLoading" class="btn btn-primary">
                <span class="spinner-border spinner-border-sm" v-if="isLoading" role="status"
                      aria-hidden="true"></span>
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input";
import {mapGetters} from "vuex";
import axios from "axios";
import {debounce, throttle} from "lodash";

export default {
  components: {Input},
  data() {
    return {
      errors : {},
      isLoading: false
    }
  },
  computed: {
    ...mapGetters([
      'getUrl'
    ])
  },
  methods: {

    addProduct:debounce(function (){
      this.isLoading = true
      let formData = new FormData(this.$refs.createProduct)
      axios.post(this.getUrl('/products'), formData)
          .then(res => {
            if (res.data.success === true) {
              this.$toast.success("New Product " + res.data.product.name + " Created Success.");
            }
          })
          .catch(e => {
            console.log(e)
            this.$toast.error(e.response.data.message + ".");
          })
          .finally(() => {
            this.isLoading = false
          })
        },500
    )
  },

}
</script>

<style scoped>

</style>