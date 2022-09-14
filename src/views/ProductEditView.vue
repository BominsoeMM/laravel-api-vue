<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h3 class="mt-3">Product Edit</h3>
        <hr>
        <form action="" @submit.prevent="editProduct" ref="updateProduct" method="post">
          <div class="row ">
            <div class="col ">
              <div class="mb-3">
                <Input type="text" :value="product.name" name="name" :errors="errors" label="Product Name"/>
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <Input type="number" :value="product.price" :errors="errors" name="price" label="Product Price"/>
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <Input type="number" :value="product.stock" :errors="errors" name="stock" label="Product Stock"/>
              </div>
            </div>
<!--            <div class="col-12">-->
<!--              <div class="mb-3">-->
<!--                <label for="photos" class="form-label">Product Photo</label>-->
<!--                <input type="file" class="form-control" :class="{'is-invalid':errors.photos}" id="photos" name="photos[]" multiple>-->
<!--                <div class="text-danger" v-if="errors.photos">{{ errors.photos[0] }}</div>-->
<!--              </div>-->
<!--            </div>-->
            <div class="d-flex justify-content-end align-items-center">
              <button :disabled="isLoading" class="btn btn-primary">
                <span class="spinner-border spinner-border-sm" v-if="isLoading" role="status"
                      aria-hidden="true"></span>
                Update
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

export default {
  components: {Input},
  data() {
    return {
      errors : {},
      isLoading: false,
      product: {}
    }
  },
  computed: {
    ...mapGetters([
      'getUrl'
    ])
  },
  methods: {

    editProduct() {
      this.isLoading = true
      let formData = new FormData(this.$refs.updateProduct)
      axios.put(this.getUrl('/products/'+this.$route.params.id), new URLSearchParams(formData).toString())
          .then(res => {
            console.log(res)
            this.errors ={}
            if (res.data.success === true) {
              this.$toast.success(res.data.message);
              this.product = res.data.product
              this.$router.push('/products')
            }
          })
          .catch(e => {
            console.log(e)
            this.$toast.error(e.response.data.message + ".");
          })
          .finally(() => {
            this.isLoading = false
          })

    }
  },
mounted() {
    axios.get(this.getUrl('/products/'+this.$route.params.id))
        .then(res => {
          this.product = res.data.data
        })
}
}
</script>

<style scoped>

</style>