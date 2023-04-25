<template>
    <div class="flex flex-col items-center justify-center">
        <img src="../assets/logo.png" alt="Vue logo">
        <LifeCycleHook msg="This is Life Cycle Hooks"/>
    </div>
</template>

<script>
    import LifeCycleHook from '@/components/LifeCycleHookComp.vue'
    export default {
        name : 'LifeCycle Hook',
        components : {
            LifeCycleHook
        }    
    }
</script>