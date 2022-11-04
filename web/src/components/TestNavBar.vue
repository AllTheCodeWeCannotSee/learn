<template>
  <div class="nav-bar">
    <div class="nav-bar-brand display-flex align-items-center padding-none margin-left-xs margin-left-none-tablet">
      <router-link class="nav-bar-button" itemprop="url"  aria-label="H3C" :to="{name: 'home'}">
        <div class="nav-bar-logo" role="presentation" aria-hidden="true" itemprop="logo" itemscope="itemscope">
          <img src="../assets/images/h3cLogo.png" alt=""  height="24">
        </div>
      </router-link>
    </div>
    <nav class="nav-bar-nav" role="navigation">
      <ul class="nav-bar-nav-list">
        <li class="nav-bar-item is-category">
          <a class="nav-bar-button is-title" itemprop="url">
            <router-link :class="route_name == 'learn_index' ? `nav-link active` : 'nav-link'" :to="{name: 'learn_index'}">Learn</router-link>
          </a>
        </li>
        <li class="nav-bar-item">
          <a class="nav-bar-button">
            <router-link :class="route_name == 'documentation_index' ? `nav-link active` : 'nav-link'" :to="{name: 'documentation_index'}">文档</router-link>
          </a>
        </li>
        <li class="nav-bar-item">
          <a class="nav-bar-button">
            <router-link :class="route_name == 'train_index' ? `nav-link active` : 'nav-link'" :to="{name: 'train_index'}">培训</router-link>
          </a>
        </li>
        <li class="nav-bar-item">
          <a class="nav-bar-button">
              <span>
                认证
              </span>
          </a>
        </li>
        <li class="nav-bar-item">
          <a class="nav-bar-button">
              <span>
                Q&A
              </span>
          </a>
        </li>
        <li class="nav-bar-item">
          <a class="nav-bar-button">
              <span>
                代码示例
              </span>
          </a>
        </li>
        <li class="nav-bar-item">
          <a class="nav-bar-button">
              <span>
                节目
              </span>
          </a>
        </li>
        <li class="nav-bar-item">
          <a class="nav-bar-button">
              <span>
                事件
              </span>
          </a>
        </li>
      </ul>
    </nav>
    <span class="nav-bar-spacer"></span>
<!--    <ul class="navbar-nav" v-else-if="!$store.state.user.pulling_info">-->
<!--      <div class="nav-bar-button">-->
<!--        <router-link class="docs-sign-in" :to="{name: 'user_account_login'}" role="button">-->
<!--          登录-->
<!--        </router-link>-->
<!--      </div>-->
    <ul class="nav-bar-button" v-if="$store.state.user.is_login">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {{ $store.state.user.username }}
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="margin: auto">
          <li><a class="dropdown-item" href="#" @click="logout">退出</a></li>
        </ul>
      </li>
    </ul>
    <ul class="nav-bar-button" v-else-if="!$store.state.user.pulling_info">

        <router-link class="nav-bar-profile" :to="{name: 'user_account_login'}" role="button">
          登录
        </router-link>
    </ul>
  </div>
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


<style>
.nav-bar-profile .docs-sign-in {
  color: #0078d4;
  height: 2.25em;
  border: 1px solid #0000;
  border-radius: 2px;
  align-self: center;
  padding: calc(0.375em - 1px) 0.75em;
  line-height: 1.5;
  position: relative;
}
.nav-bar {
  height: 54px;
  min-height: 54px;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  position: relative;
}

.nav-bar-item {
  flex-shrink: 0;
  align-items: center;
  display: flex;
}

.nav-bar-item.is-category>.is-title {
  padding-left: 0.5rem;
}

.nav-bar-item.is-category:before {
  content: "";
  height: 1.5rem;
  border-left: 2px solid #171717;
  margin-left: 0.5rem;
  margin-right: 1rem;
  display: inline-block;
}

.nav-bar-button.is-title {
  word-break: break-word;
  background-color: #fff;
  padding: 0;
  font-size: 1rem;
  line-height: normal;
}


.nav-bar-nav-list {
  align-items: stretch;
  display: flex;
}

.nav-bar-button {
  min-width: 54px;
  min-height: 54px;
  color: #171717;
  white-space: nowrap;
  cursor: pointer;
  background-color: #0000;
  border: none;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  padding: 0.5rem;
  font-size: .875rem;
  line-height: normal;
  display: flex;
  outline-offset: -.125rem !important;
  text-decoration: none !important;
}
.nav-bar-button:hover {
  text-underline-color: #171717;
}
.nav-bar-brand {
  display: flex;
}

.display-flex {
  display: flex !important;
}

.align-items-center {
  align-items: center !important;
}

.padding-none {
  padding: 0 !important;
}

.margin-left-xs {
  margin-inline-start: 1rem !important;
}

.margin-left-none-tablet {
  margin-inline-start: 0 !important;
}

.nav-bar-nav {
  align-items: stretch;

}

.nav-bar-spacer {
  flex-grow: 1;
  flex-shrink: 1;
  display: block;
}


</style>
