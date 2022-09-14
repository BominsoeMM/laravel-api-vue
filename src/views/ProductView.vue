<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <dvi class="d-flex justify-content-between">
          <div class="">
            <h3 class="mt-3">Product List</h3>
          </div>
          <div class="">
          <search @search="search"/>
          </div>
        </dvi>
        <div class="mt-3">
          <table class="table border table-hover align-middle">
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th class="text-center">DateTime</th>
              <th class="text-center">Manage</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row in rows.data">
              <td>{{ row.id }}</td>
              <td>{{ row.name }}</td>
              <td>{{ row.price }}</td>
              <td>{{ row.stock }}</td>
              <td class="text-center">{{ row.date }} {{ row.time }}</td>
              <td class="">
                <div class="d-flex justify-content-center">
                  <div class="">
                    <router-link class="btn btn-sm btn-warning" :to="'/product/edit/'+row.id">
                      Edit
                    </router-link>
                  </div>
                  <div @click.prevent="detailProduct(row.id)" class="mx-3">
                    <button class="btn btn-sm btn-secondary">
                      Detail
                    </button>
                  </div>
                  <div class="">
                    <button @click.prevent="deleteProduct(row.id)" class="btn btn-sm btn-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <Paginate
            v-if="rows.meta"
            @paginateLink="indexProducts"
            :links="rows.meta.links"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";
import Paginate from "@/components/Paginate";
import Search from "@/components/Search";

export default {
  components: {Search, Paginate},
  data() {
    return {
      rows: {}

    }
  },
  computed: {
    ...mapGetters([
      'getUrl'
    ])
  },
  methods: {
    search(keyword){
      this.indexProducts(this.getUrl('/products?keyword='+keyword))
    },
    indexProducts(url) {
      axios.get(url)
          .then(res => this.rows = res.data)
    },
    detailProduct(id) {
      axios.get(this.getUrl('/products/') + id)
          .then(res => console.log(res))
    },
    deleteProduct(id) {
      axios.delete(this.getUrl('/products/') + id)
          .then(res => {
            if (res.data.success == true) {
              this.indexProducts(this.rows.meta.links.find(link => link.active === true).url)
              this.$toast.error("Product Delete Success.");
            }

          })
    }
  },
  mounted() {
    this.indexProducts(this.getUrl('/products'))
  }


}
</script>

<style scoped>

</style>