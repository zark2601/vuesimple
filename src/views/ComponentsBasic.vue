<template>
    <div class="flex flex-col items-center justify-center">
        <img src="../assets/logo.png" alt="Vue logo">
        <ComponentsBasic msg="This is Components basic"/>
    </div>
</template>

<script>
    import ComponentsBasic from '@/components/ComponentsBasicComp.vue'
    export default {
        name : 'CompBasic Comp',
        components : {
            ComponentsBasic
        }
    }
</script>