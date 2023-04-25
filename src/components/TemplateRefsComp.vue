<template>
    <div class="templateRef">
        {{ msg }}
        <br> Accessing the Refs <br>
        <input ref="input" class="shadow-lg box-border border-black"/>
        <hr><br>
        <h1>
            Refs inside v-for <br>
            <ul>
                <li v-for="item in list" ref="items">
                {{ item }}
                </li>
            </ul>
        </h1>
        <hr><br><br>
        <h1>
            Function Refs <br>
            <input :ref="(el) => { /* assign el to a property or ref */ }">
        </h1><br>
        <hr><br>
        <div>Refs of components <br>
            <Child ref="child"/>
        </div>
        <p><br> have expose object are miss understand </p>
    </div>
</template>

<script>
    import Child from '@/components/Child.vue'
    export default {
        name : 'Template Refs Comp',
        props : {
            msg : String,
        },
        data() {
            return {
                list : {fist: 'a', second : 'b', last : 'c'}
            }
        },
        mounted() {
            this.$refs.input.focus()
            console.log(this.$refs.items)
        },
        components : {
            Child
        }
    }
</script>