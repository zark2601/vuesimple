<template>
    <div class="flex flex-col items-center">
        <img src="../assets/logo.png" alt="Vue Logo">
        <ClassStyleComp msg="This is Class and style components"/>
    </div>  
</template>

<script>
    import ClassStyleComp from '@/components/ClassStyleComp.vue'
    export default {
        name : 'ClassStyleComponent',
        components :{
            ClassStyleComp
        }
    }
</script>