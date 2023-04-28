<template>
    <div class="flex flex-col items-center">
        <img src="../assets/logo.png" alt="Vue Logo">
        <Axios msg="This is Axios"/>
    </div>
</template>

<script>
    import Axios from '../components/AxiosComps.vue'
    export default{ 
        name: 'axios',
        data(){
            return {

            }
        },
        components :{
            Axios
        }
    }
</script>