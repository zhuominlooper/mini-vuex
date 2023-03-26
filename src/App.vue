<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h4>自定义实现一个vuex进行数据的缓存</h4>
    <button @click="onCommit">调用commit</button><br /><br />
    <button @click="onDispath">调用dispath</button>
    <p>state的值:{{ $store.state.count }}</p>
    <p>getters的值:{{ $store.getters.doubleCount }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log("created", this.$store.state.count);
  },
  beforeMount() {
    console.log("beforeMount", this.$store.state.count);
  },
  mounted() {
    console.log("mounted", this.$store.state.count);
  },
  methods: {
    onCommit() {
      this.$store.commit("add");
    },
    onDispath() {
      this.$store.dispatch("add", 2);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
