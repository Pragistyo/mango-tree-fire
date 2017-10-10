<template>
  <div class="hello">
    <h1>Mango tree Real time: you know what it does</h1>
    <h2>Set interval every 1 secs</h2>
    <button class="btn" @click="startGrow">START</button>
    <h2><strong style="color:orange">{{status}}</strong></h2>
    <h1><strong style="color:red">{{isDead}}</strong></h1>
    <!-- <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      isDead: '',
      status: ''
    }
  },
  mounted: function () {
    this.getData()
  },
  methods: {
    ...mapActions([
      'start'
    ]),
    getData () {
      this.$db.on('value', (mango) => {
        this.status = mango.val().status
        this.isDead = mango.val().isDead
      })
    },
    startGrow () {
      this.$db.set({ isDead: '', status: '' })
      this.start()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
