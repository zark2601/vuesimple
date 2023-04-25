<template>
    <div class="flex flex-col items-center">
        <img src="../assets/logo.png" alt="Vue logo">
        <EventComp msg="This is Event Handling"/>
    </div>
</template>

<script>
    import EventComp from '@/components/EventComp.vue'
    export default {
        name : 'EventHandling',
        components : {
            EventComp 
        }
    }
</script>