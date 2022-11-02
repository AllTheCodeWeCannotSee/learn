<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="container">
      <router-link class="navbar-brand" :to="{name: 'home'}">
        <img src="../assets/images/h3cLogo.png" alt=""  height="24" class="d-inline-block align-text-top" style="margin-bottom: 5px;">
      </router-link>
<!--      <router-link class="navbar-brand" :to="{name: 'home'}">H3C</router-link>-->
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :class="route_name == 'learn_index' ? `nav-link active` : 'nav-link'" :to="{name: 'learn_index'}">学习</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="route_name == 'documentation_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'documentation_index'}">文档</router-link>
          </li>
          <li class="nav-item" >
            <router-link :class="route_name == 'train_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'train_index'}">训练</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="route_name == 'qa_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'qa_index'}">Q&A</router-link>
          </li>

        </ul>
        <ul class="navbar-nav" v-if="$store.state.user.is_login">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {{ $store.state.user.username }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="margin: auto">
              <li><a class="dropdown-item" href="#" @click="logout">退出</a></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav" v-else-if="!$store.state.user.pulling_info">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'user_account_login'}" role="button">
              登录
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'user_account_register'}" role="button">
              注册
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    let route_name = computed(() => route.name);  //computed是个函数，返回route_name

    const logout = () => {
      store.dispatch("logout");
    }
    return {
      route_name,
      logout
    }
  }
}
</script>

<style scoped>

</style>
