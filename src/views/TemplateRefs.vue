<template>
    <div class="flex flex-col items-center justify-center">
        <img src="../assets/logo.png" alt="Vue logo">
        <TemplateRefsComp msg="This is Template Refs"/>
    </div>
</template>

<script>
    import TemplateRefsComp from '@/components/TemplateRefsComp.vue'
    export default{
        name : 'Template Ref View',
        components : {
            TemplateRefsComp
        }
    }
</script>