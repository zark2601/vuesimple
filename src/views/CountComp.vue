<template>
    <div class="home flex flex-col items-center">
    <img alt="Vue logo" src="../assets/logo.png">
    <CountComponent msg="This count component"/>
  </div>
</template>

<script>
    import CountComponent from '@/components/CountComponent.vue'
    export default{
        name : 'CountComp',
        components :{
            CountComponent
        }
    }
</script>