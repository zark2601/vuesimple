<template>
    <div class="watcher">
        {{ msg }}
        <div>
            Basic Example <br>
            <p>
            Ask a yes/no question:
            <input v-model="question" />
            </p>
            <p>{{ answer }}</p>
        </div>
        <h1 class="text-red-500">Skip because miss understand alot point </h1>
    </div>
    <br><hr><br>
    <div class="watcher-demo">
        <p>Current count: {{ count }}</p>
        <button @click="increment">Increment</button>

    </div>
    <div class="watcher-demo1 flex flex-row space-x-4 items-center">
        <div>{{ count }}</div>
        <button @click="count++" class="h-10 w-20 bg-green-400">Increment</button>
        <button @click="count--" class="h-10 w-20 bg-red-400">Decrement</button>
    </div>
</template>

<script>
    export default {
        name : 'Watcher Vue',
        props : {
            msg : String
        },
        data(){
            return {
                question : '',
                answer : 'Question usually contain a question mark. ;-)',
                count : 0,
            }
        },
        watch:{
            question(newQuestion, oldQuestion) {
                if (newQuestion.include('?')){
                    this.getAnswer()
                }
            },
            // count(newValue, oldValue){
            //     console.log(`count changed from ${oldValue}to ${newValue}`)
            // },

            //demo1 
            // count(newValue, oldValue) {
            //     if (newValue === 5) alert('Value reached 5')
            //     console.log(`count changed from ${oldValue}to ${newValue}`)
            // }

            //demo2
            count(newValue, oldValue) {
                if (newValue > oldValue && newValue === 5)
                    alert('Increasing the volume past 5 may damage your hearing')
                    console.log(`count changed from ${oldValue}to ${newValue}`)
            }
        },
        methods: {
            async getAnswer() {
                this.answer = 'Thinking...'
                try {
                    const res = await fetch('https://yesno.wtf/api')
                    this.answer = (await res.json()).answer
                } catch (error){
                    this.answer = 'Error! could not reach The API' + console.error();
                }
            },
            increment() {
                this.count ++
            }
        }
    }
</script>