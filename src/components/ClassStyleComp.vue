<template>
    <div class="classStyle">
        <h1>{{ msg }}</h1>
        <div
            class="static"
            :class="{ active: isActive, 'text-red-700': hasError }"
        >v binding</div>
        <hr><br>
        <div :class="classObject">It using classobject</div>
        <br>
        <div :class="[activeClass, errorClass]">Binding Array</div>
        <br>
        <div :class="[isActive ? activeClass : '', errorClass]">Binding Array with using ternary operator</div>
        <div :class="[{active : isActive}, errorClass]">Binding Array without using ternary operator</div>
        <br><br>
        <div :style="{color : textColor, fontSize : fontSize + 'px'}">binding style</div>
        <div :style="styleObject">binding with style object</div>
        <div :style="[styleObjectm, styleObj1]">Using Binding with array style object</div>
        <br><br>
        <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"> it using vendor prefix</div>
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
                // classObject: {
                //     active: true,
                //     'text-green-600': true
                // }, using classOject
                error: null,
                activeClass: 'active',
                errorClass: 'text-red-600',
                textColor : 'purple',
                fontSize  : 30,
                styleObject : {
                    color : 'red',
                    fontSize : '25px',
                    fontWeight : '900'
                    
                },
                styleObj1 : {
                    backgroundColor : 'red',
                    height : '20px',
                    width : '750px'
                }
            }
        },
        computed :{
            classObject () {
                // using classObject with computed
                return {
                    active: this.isActive && !this.error,
                    'text-red-600': this.error && this.error.type === 'fatal'
                }
            }
        }

    }
</script>
<style>
.classStyle {
}
</style>