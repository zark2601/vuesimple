<template>
    <div class="formInputBinding">
        <h1>{{ msg }}</h1>
        <div>
            <p>When dealing with forms on the frontend, we often need to sync the state of form input elements with corresponding state in JavaScript. It can be cumbersome to manually wire up value bindings and change event listeners: template</p><br>
            <input placeholder=" input"
            :value="text"
            @input="event => text = event.target.value">
            <p>Value: {{ text }}</p><br>
            <br>
        </div>
        <hr>
        <div>
            <p>The v-model directive helps us simplify the above to: <br></p>
            <input v-model="text" placeholder="input using v-model">
            <p>Value: {{ text }}</p> <br>
            <input v-model.lazy="text" placeholder="input using v-model.lazy">
            <p>Value: {{ text }}</p><br>
            <input v-model.trim="text" placeholder="input using v-model.trim">
            <p>Value: {{ text }}</p><br>
            <input v-model.number="text" placeholder="input using v-model.number">
            <p>Value: {{ text }}</p><br>
        </div>
        <hr><br><br>
        <div>
            Basic Usage <br>
            <p>Message is: {{ message }}</p>
            <input v-model="message" placeholder="edit me" />
        </div><br>
        <div>
            Multiline text <br>
            <span>Multiline message is:</span>
            <p style="white-space: pre-line;">{{ message }}</p>
            <textarea v-model="message" placeholder="add multiple lines"></textarea>
        </div>
        <div>
            Note that interpolation inside &lt;textarea&gt; won't work. Use v-model instead. <br>
            <!-- bad -->
            <textarea>{{ message }}</textarea>

            <!-- good -->
            <textarea v-model="message"></textarea>
        </div>
        <hr><br>
        <div>
            Checkbox <br>
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">{{ checked }}</label>
        </div>
        <div>
            We can also bind multiple checkboxes to the same array or Set value: <br>
            <div>Checked names: {{ checkedNames }}</div>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>

            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>

            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
        </div>
        <div>
            Radio <br>
            <div>Picked: {{ picked }}</div>

            <input type="radio" id="one" value="One" v-model="picked" />
            <label for="one">One</label>

            <input type="radio" id="two" value="Two" v-model="picked" />
            <label for="two">Two</label>
        </div>
        <div>
            Single select: <br>
            <div>Selected: {{ selected }}</div>

            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option value="z">A</option>
                <option value="y">B</option>
                <option value="x">C</option>
            </select>
        </div>
        <div>
            Multiple select (bound to array): <br>
            <div>Selected: {{ selected }}</div>

            <select v-model="selected" multiple>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
        </div>
        <div>
            Select options can be dynamically rendered with v-for: <br>
            <select v-model="selected">
                <option v-for="option in options" :value="option.value">
                    {{ option.text }}
                </option>
            </select>

            <div>Selected: {{ selected }}</div>
        </div>
        <hr><br>
        <div>
            Value Binding <br>
            <p>For radio, checkbox and select options, the v-model binding values are usually static strings (or booleans for checkbox):</p><br>
            <!-- `picked` is a string "a" when checked -->
            <input type="radio" v-model="picked" value="a" />

            <!-- `toggle` is either true or false -->
            <input type="checkbox" v-model="toggle" />

            <!-- `selected` is a string "abc" when the first option is selected -->
            <select v-model="selected">
            <option value="abc">ABC</option>
            </select>
        </div>
        <hr><br>
        <div>
            Checkbox <br>
            <input
            type="checkbox"
            v-model="toggle"
            true-value="yes"
            false-value="no" />
            {{ toggle }}
            <br><br>
            Dynamic true false <br>
            <input
            type="checkbox"
            v-model="toggle"
            :true-value="dynamicTrueValue"
            :false-value="dynamicFalseValue" />
            {{ toggle }}
        </div><br><hr>
        <div>
            Radio <br>
            <input type="radio" v-model="pick" :value="first" /> first
            <input type="radio" v-model="pick" :value="second" /> second
        </div>
        <hr><br>
        <div>
            Select Option <br> 
            <select v-model="selected">
            <!-- inline object literal -->
                <option :value="{ number: 123 }">123</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'FormInputComp',
        props : {
            msg : String
        },
        data() {
            return {
                event : '',
                text : '',
                message : '',
                checked : true,
                checkedNames: [],
                picked : 'One',
                selected: 'A',
                options: [
                    { text: 'One', value: 'A' },
                    { text: 'Two', value: 'B' },
                    { text: 'Three', value: 'C' }
                ],
                toggle : true,
                dynamicTrueValue : 'working',
                dynamicFalseValue : 'not working',
                pick : false,
            }
        }
    }
</script>