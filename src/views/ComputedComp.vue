<template>
    <div class="home flex flex-col items-center">
        <img alt="Vue logo" src="../assets/logo.png">
        <computed msg="This is a Computed Using"/>
    </div>
</template>

<script>
    import computed from '@/components/ComputedComp.vue'

    export default {
        name : 'ComputedView',
        components : {
            computed
        }
    }
</script>