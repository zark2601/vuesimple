<template>
    <div class="lifeCycleHooks bg-black text-white">
        <h1>{{ msg }}</h1>
        <div>
            <p >
                Registering Lifecycle Hooks​
                For example, the mounted hook can be used to run code after the component has finished the initial rendering and created the DOM nodes: <br>
                check code in console.log
            </p>
            <img src="https://vuejs.org/assets/lifecycle.16e4c08e.png" alt="life cycle hooks">
        </div>
    </div>
</template>

<script>
    export default {
        name : 'LifeCycle Hook Comp',
        props : {
            msg : String
        },
        mounted() {
            console.log(`the component is now mounted.`)
        }
    }
</script>