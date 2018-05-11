<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->

    <div v-for="user in users" class="items" v-if="!loading">
      <user-item :name="user.name" :email="user.email"
        :imgurl="user.imgurl">
      </user-item>
    </div>

    <div v-for="load in loades" v-if="loading">
      <loading-item></loading-item>
    </div>

  </div>
</template>

<script>
import loadingItem from '@/components/loadingItem'
import userItem from '@/components/userItem'
import axios from 'axios'
export default {
  components: {
    loadingItem,
    userItem
  },
  data () {
    return {
      users: [],
      loading: true,
      loades: 10
    }
  },
  methods: {
    getUserDetails () {
      axios.get('http://localhost:8080/getUserDetails')
        .then(res => {
          this.users = res.data.list
          this.loading = false
        })
    }
  },
  created () {
    setTimeout(() => {
      this.getUserDetails()
    }, 1000)
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eeeeee;
  height: 100vh;
  width: 100vw;
}
</style>
