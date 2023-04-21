<template>
    <div class="home flex flex-col items-center">
        <img alt="Vue logo" src="../assets/logo.png">
        <Reactive msg="Reactive Example"/>
    </div>
</template>

<script>
    import Reactive from '@/components/Reactive.vue'
    
    export default {
        name : "Reactivity",
        components : {
            Reactive
        }
    }
</script>