<template>
    {{ msg }}    

    <h2>{{ posts.id }} {{ posts.title }}</h2>
    <p>{{ posts.body }}</p>
</template>

<script>
    import axios from 'axios';
    export default{
        name: {

        },
        props : {
            msg : String
        },
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                this.posts = response.data
            })
        }   
    }
</script>