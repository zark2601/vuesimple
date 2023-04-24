<template>
    <div class="flex flex-col items-center">
        <img src="../assets/logo.png" alt="Vue Logo">
        <ConditionComp msg="This is Conditional"/>
    </div>  
</template>
<script>
    import ConditionComp from '@/components/ConditionComp.vue';
    export default {
        name : 'ConditionalView',
        components : {
            ConditionComp
        }
    }
</script>