<template>
  <div class="hello">
    <legend><h1>REPORT</h1></legend>
    <!-- <h1>{{growth}}</h1> -->
    <h1>Mango tree Real time simulation</h1>
    <h2>Set interval every 1 secs</h2>
    <button class="btn btn-info" @click="startGrow()">START</button>
    <h2><strong style="color:teal">{{status}}</strong></h2>
    <!-- <h2 v-if="!status">----------------------------------------------</h2> -->
    <div class="panel panel-warning" v-if="isDead">
      <h1><strong style="color:red">{{isDead}}</strong></h1>
    </div>
    <button :class="colorsasa"><h3>Umur Si Mangga: {{obj._age}}</h3></button>
    <!-- <p>STATE: "{{msg}}"</p> -->
    <!-- <p>COMPUTED: "{{colorsasa}}"</p> -->
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
import { mapActions, mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      isDead: null,
      status: null,
      obj: null
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
        this.obj = mango.val().obj
      })
    },
    startGrow () {
      this.$db.set({ isDead: '', status: '' })
      this.start()
    }
  },
  computed: {
    ...mapState([
      'growth'
    ]),
    colorsasa: function () {
      if (this.obj._age <= 8 && this.obj._age >= 0) {
        return 'btn btn-success disabled'
      } else if (this.obj._age <= 15) {
        return 'btn btn-warning disabled'
      } else if (this.obj._age <= 20) {
        return 'btn btn-danger disabled'
      } else {
        return 'btn btn-primary disabled'
      }
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
