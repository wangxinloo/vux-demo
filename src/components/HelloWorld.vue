<template>
  <div>
    <div style="padding:15px;">
      <button-tab>
        <button-tab-item>button1</button-tab-item>
        <button-tab-item selected>button2</button-tab-item>
        <button-tab-item>button3</button-tab-item>
      </button-tab>
    </div>
  </div>
</template>

<script>
import { ButtonTab, ButtonTabItem} from 'vux'
export default {
  components:{
    ButtonTab,
    ButtonTabItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
