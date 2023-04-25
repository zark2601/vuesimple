<template>
    <div class="eventHandling">
        <h1>{{ msg }}</h1>
        <div>
            Inline Handlers <br>
            <button @click="count++" class="bg-gradient-to-r from-violet-600 from-20% via-pink-600 via-30% to-indigo-500 to-50% h-10 w-20 rounded shadow-lg
            hover:bg-gradient-to-b from-violet-600 from-20% via-pink-600 via-30% to-indigo-500 to-50% h-10 w-20 rounded shadow-lg ">Add 1</button>
            <p>Count is : {{ count }}</p>
        </div><br><hr>
        <div>
            Method Handlers <br>
            <button @click="greeting" class="h-10 w-20 bg-purple-600 rounded-md hover:bg-indigo-500 ">Greeting</button>
        </div>
        <div><br>
            Calling Methods in Inline Handlers <br>
            <div class="flex flex-row space-x-4 items-center justify-center">
                <button class="bg-yellow-200 h-10 w-20 rounded-md" @click="say('Hello')">Say hello</button>
                <button class="bg-green-200 h-10 w-20 rounded-md" @click="say('Bye')">Say bye</button>
            </div>
        </div><br>
        <div>Accessing Event Argument in Inline Handlers <br>
            <div class="flex flex-row items-center justify-center space-x-4">
                <!-- using $event special variable -->
                <button class="bg-red-500 h-10 w-20 rounded-md" @click="warn('Form cannot be submitted yet.', $event)">
                Submit
                </button>

                <!-- using inline arrow function -->
                <button class="bg-purple-500 h-10 w-20 rounded-md" @click="(event) => warn('Forms cannot be submitted yet.', event)">
                *Submit 
                </button>
            </div>
        </div>
        <br><hr>
        <div>
            <h1>Event Modifiers</h1> <br>
            <p class="text-red-500">.stop, .prevent, .self, .capture,  .once, .passive</p><br>
                <!-- the click event's propagation will be stopped -->
            <a @click.stop="doThis"></a>

            <!-- the submit event will no longer reload the page -->
            <form @submit.prevent="onSubmit"></form>

            <!-- modifiers can be chained -->
            <a @click.stop.prevent="doThat"></a>

            <!-- just the modifier -->
            <form @submit.prevent></form>

            <!-- only trigger handler if event.target is the element itself -->
            <!-- i.e. not from a child element -->
            <div @click.self="doThat">...</div>
        </div>
        <br><hr>
        <div>
            Key Modifiers <br>
            <!-- only call `submit` when the `key` is `Enter` -->
            <input @keyup.enter="submit" />
            You can directly use any valid key names exposed via KeyboardEvent.key as modifiers by converting them to kebab-case. <br><br>
            <input @keyup.page-down="onPageDown" />
            In the above example, the handler will only be called if $event.key is equal to <br><br>
            <div><h1> Key Aliases </h1><br>
                <p class="text-red-500">
                    .enter, .tab, .delete, .esc, .space, .up, .down, .left, .right, 
                </p><br><br>
            </div>
            <div>
                System Modifier Keys <br>
                <p class="text-red-500"> .ctrl, .alt, .shift, .meta</p>
            </div><br>
            <div>
                * for example <br>
                <!-- Alt + Enter -->
                <input @keyup.alt.enter="clear" />

                <!-- Ctrl + Click -->
                <div @click.ctrl="doSomething">Do something</div> <br>
            </div>
        </div>
        <hr><br>
        <div><h1>.exact Modifier</h1>
            <p class="text-red-500">The .exact modifier allows control of the exact combination of system modifiers needed to trigger an event.
                template
                <!-- this will fire even if Alt or Shift is also pressed -->
                <button @click.ctrl="onClick">A</button>

                <!-- this will only fire when Ctrl and no other keys are pressed -->
                <button @click.ctrl.exact="onCtrlClick">A</button>

                <!-- this will only fire when no system modifiers are pressed -->
                <button @click.exact="onClick">A</button>
            </p>
        </div>
        <br><br><hr><br>
        <div>
            Mouse Button Modifiers<br>
            <p class="text-red-500">These modifiers restrict the handler to events triggered by a specific mouse button.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'EventComp',
        props : {
            msg : String
        },
        data () {
            return {
                count : 0,
                name : 'Vue js',
            }
        },
        methods : {
            greeting(event) {
                alert(`Hello ${this.name}!`)                
                if (event) {
                    alert(event.target.tagName)
                }
            },

            say(message) {
                alert(message)
            },

            warn(message, event) {
                // now we have access to the native event
                if (event) {
                event.preventDefault()
                }
                alert(message)
            }
        },
        computed () {

        }
    }
</script>