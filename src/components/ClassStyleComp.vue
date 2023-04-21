<template>
    <div class="classStyle">
        <h1>{{ msg }}</h1>
        <div
            class="static"
            :class="{ active: isActive, 'text-red-700': hasError }"
        >v binding</div>
        <hr><br>
        <div :class="classObject">It using classobject</div>
    </div>
</template>

<script>
    export default {
        name : 'ClassStyleComp',
        props : {
            msg : String
        },
        data(){
            return {
                isActive: true,
                hasError: true,
                classObject: {
                    active: true,
                    'text-green-600': true
                },
                error: null
            }
        },
        computed :{
            classObject () {
                return {
                    active: this.isActive && !this.error,
                    'text-text-red-600': this.error && this.error.type === 'fatal'
                }
            }
        }

    }
</script>