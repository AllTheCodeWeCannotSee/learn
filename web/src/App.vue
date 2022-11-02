<template>
  <NavBar />

  <router-view></router-view>
</template>

<script>
import NavBar from "@/components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

// import $ from 'jquery'
// import { ref } from 'vue'


export default {
  name: "App",

  // setup: () => {
  //   let smile = ref("");
  //
  //   $.ajax({
  //     url: "http://127.0.0.1:3000/pk/getinfo/",
  //     type: "get",
  //     success: resp => {
  //       smile.value = resp;
  //     }
  //   });
  //   return {
  //     smile
  //   }
  // },
  components: {
    NavBar
  },
}
</script>

<style>

</style>
