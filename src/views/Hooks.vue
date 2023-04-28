<template>
    <div class="home flex flex-col items-center">
        <img alt="Vue logo" src="../assets/logo.png">
        <button @click="show = !show">Hide</button>
        <HookComp v-if="show" msg="Welcome to Your Vue.js App"/>
        <p v-else>closing components</p>


  </div>
</template>

<script>
import img from '@/assets/tree.jpg'
import HookComp from '../components/HooksComp.vue'
export default {
    name : 'hookView',
    components : {
        HookComp
    },
    data() {
      return {
        show : true
      }
    },
}
</script>