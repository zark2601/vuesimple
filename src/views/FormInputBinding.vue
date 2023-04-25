<template>
    <div class="flex flex-col items-center">
        <img src="../assets/logo.png" alt="Vue logo">
        <FormInputComp msg="This is Form Input Binding" />
    </div>
</template>

<script>
    import FormInputComp from '@/components/FormInputComp'
    export default {
        name : 'FormInputBindingView',
        components : {
            FormInputComp
        }
    }
</script>