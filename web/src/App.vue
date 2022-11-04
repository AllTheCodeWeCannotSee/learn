<template>
  <!--  <NavBar />-->
  <TestNavBar />
  <router-view></router-view>
</template>

<script>
// import NavBar from "@/components/NavBar";
import TestNavBar from "@/components/TestNavBar"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"


// import $ from 'jquery'
// import { ref } from 'vue'


export default {
  name: "App",

  setup: () => {
    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/register/",
    //   type: "post",
    //   data: {
    //     username: 'Cup',
    //     password: 'pcup',
    //     confirmedPassword: 'pcup',
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // })
  },

  components: {
    // NavBar,
    TestNavBar
  },
}
</script>

<style>

</style>
