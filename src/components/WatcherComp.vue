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
                answer : 'Question usually contain a question mark. ;-)'
            }
        },
        watch:{
            question(newQuestion, oldQuestion) {
                if (newQuestion.include('?')){
                    this.getAnswer()
                }
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
            }
        }
    }
</script>