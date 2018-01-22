<template>
  <div id="app">
     <cheader></cheader>
    <router-link to="/">01</router-link>
    <router-link to="/02">02</router-link>
    <router-link to="/03">03</router-link>
    <router-link to="/04">04</router-link>
    <br/>
    <router-view></router-view>
     <cfoot></cfoot>
  </div>
</template>

<script>
import cheader from './components/cheader'
import cfoot from './components/cfoot'
export default {
  name: 'app',
  components: {
    cheader, cfoot
  },
  computed: {
    username () {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
