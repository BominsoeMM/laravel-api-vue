<template>
  <div class="container">
    <div class="row ">
      <div class="col-4 col-md-4 col-lg-3">
        <div class="mt-3">
          <div class="card p-3">
            <div class="card-body">
              <div class="text-decoration-none card-title text-primary">
                <h3>This is Title</h3>
              </div>
              <div class="pb-3">
            <span class="badge bg-primary">
              <i class="bi bi-person-circle"></i>
            Bominsoe
          </span>
              </div>
              <p>Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3">

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
