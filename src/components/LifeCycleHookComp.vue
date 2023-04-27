<template>
    <div class="lifeCycleHooks">
        <h1>{{ msg }}</h1>
        {{ message }}
        <br>
        {{ messageComputed }}
        <!-- {{ increment }}
        <p ref="update">{{increment}}</p> -->
        <div>
            <p class="bg-black text-white">
                Registering Lifecycle Hooks​
                For example, the mounted hook can be used to run code after the component has finished the initial rendering and created the DOM nodes: <br>
                check code in console.log
            </p>
            <br>
            <!-- <img src="https://vuejs.org/assets/lifecycle.16e4c08e.png" alt="life cycle hooks"> -->
        </div>
    </div>
</template>

<script>
    export default {
        name : 'LifeCycle Hook Comp',
        props : {
            msg : String
        },
        data() {
            return {
              message: 'hello world',
              increment : 0,
            }
        },  
        beforeCreate() 
        { 
            console.log('1.i am calling from before create')  
        },
        created() {
            this.message = 'i am changing from created' 
            console.log('2.messageComputed will update, because this.message is reactive.') 
            setInterval(()=> {
            this.increment++
            }, 1000)
        },
        beforeMount() { 
            console.log('3.i am just before mounted') 
        },
        mounted() { 
            console.log('4.i am mounted hooks and called from mounted')        
        }, // I'm text inside the component. }
        beforeUpdate () { 
            console.log('5.',this.increment) // the increment will log in every secend with added value 
        },
        updated() { 
            // Fired every second, should always be true 
            console.log('6.',+this.$refs['update'].textContent === this.increment) 
        },
        beforeDestroy() { 
            // Clean up the increment. // (In this case, effectively nothing) 
            this.increment = null
            delete this.increment 
        },
        destroyed() { 
            console.log(this) // There's practically nothing here! 
            DestroyEverything.informThem('everything destroyed') 
        },


        computed: {
            messageComputed() 
            { 
                console.log('**I change when this.message changes.') 
                return this.message 
            }

        }
    }
</script>