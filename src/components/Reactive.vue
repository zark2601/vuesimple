<template>
    <div class="reactivity">
        <h1>{{ msg }}</h1>
        <button class="h-10 w-20 bg-red-600" @click="increment">{{ count }}</button>
    </div>
</template>

<script>
    export default {
        name : 'Reactivity',
        props : {
            msg : 'Reactivity Vue Js'
        },
        data (){
            return {
                count : 0 ,
                someObj : {}
            }
        },
        methods :{
            increment () {
                this.count++
            }
        },  
        mounted (){
            console.log(this.count)

            this.count = 2

            const newObj = {}
            this.someObj = newObj 

            console.log(newObj === this.someObj)
             
            this.increment();
            console.log(this.increment())
        }

    }
</script>