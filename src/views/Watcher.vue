<template>
    <div class="flex flex-col items-center justify-center">
        <img src="../assets/logo.png" alt="Vue logo">
        <WatcherComp msg="This is Watcher" />
    </div>
</template>

<script>
    import WatcherComp from '@/components/WatcherComp.vue'
    export default {
        name : 'Water View',
        components : {
            WatcherComp
        }
    }
</script>