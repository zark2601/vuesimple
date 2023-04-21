<template>
    <div class="couter">
        <h1>{{ msg }}</h1>
        <button @click="count++" class="w-20 h-20 text-xl text-white bg-gradient-to-t from-indigo-900 from-10% via-purple-600 via-40% to-pink-600 to-90% shadow-lg shadow-black 
        hover:bg-gradient-to-b from-pink-600 from-10% via-purple-600 via-40% to-indigo-900 to-50%">{{ count }}</button>
        <br><hr><br>
        <h1>v-html</h1>
        <div v-html="rawHtml"></div>
        <br><hr><br>
        <h1>v-bind</h1>
        <div :id="dynamicId" class="text-blue-300">this using binding Id inspect Element to check </div><br>
        <button class="h-10 w-40 bg-purple-500 rounded shadow-black shadow-sm" @click="open = !open" :disabled="isButtonDisable">Buutton has disabled</button>
        <br>
        <div v-bind="objOfAttrs" class="text-blue-900">Dynamically binding multiple Attribute inspect to check</div>
        <br>
        <div>Using javascript Expression</div>
        <div>
           Number 1 and plus 1 =  {{ num + 1 }} 
        </div>
        <br>
        <div>
            This using Ternary Operator say : 
            {{ ok? 'YES' : 'NO' }}
        </div>
        <div>
            this using split reverse and join <br>
            this split {{ splitRev.split('') }} <br>
            this reverse {{ splitRev.split('').reverse() }} <br>
            this join {{ splitRev.split('').reverse().join() }} <br>
            <div :id="`list-${id[1]}`">list </div>
        </div>
        <div>
            <h1>Call funtion</h1>
            <span :title="toTitleDate()">
            {{ formatDate(2) }}</span>
        </div>
        <br>
        <button class="w-40 h-20 bg-purple-800" @click="seen = !seen"> click me</button>
        <p v-if="seen" class="text-gray-700 text-xl font-extrabold">It using v-if</p>
        <p v-else>if off click again </p>
        <br>
        <a :href="url" class="text-red-800">it use short hand binding</a>
        <br><br>
        <h1>Dynamic Agument</h1>
        <div class="mb-2">
        <p>
          <strong>Current event type:</strong>
          {{ eventType }}
        </p>
        <button class="w-20 h-10 bg-pink-600" type="button" @click="changeEventType">
          Change event type
        </button>
      </div>

      <div class="mb-2">
        <p>
          Perform a <code><strong>{{ eventType }}</strong></code> event on the button bellow
        </p>

        <button  type="button" @[eventType]="eventHandler" class="w-20 h-10 bg-sky-600">
          Button
        </button>
      </div>
      <div>
        <form @submit.prevent="onSubmit">Using Modifier form </form>
        <!-- @ is name = v-on, submit is argument, prevent is modifiers, onSubmit is Value -->
      </div>
    </div>
</template>

<script>
    export default{
        name : 'CountComponent',
        props : {
            msg : String
        },
        data (){
            return {
                count : 0,
                rawHtml : '<div>This using v-html : <strong style="color: red;"> V html testing</strong> </div>',
                dynamicId : "bindingID" ,
                isButtonDisable : true ,
                oepn : false,
                objOfAttrs : {
                    id : 'container',
                    class : 'wrapper'
                },
                num : 1,
                ok : false,
                splitRev : "Spliting Reverse",
                id : {
                    1 : "boy",
                    2 : "girl",
                },
                seen : false,
                url : "https://vuejs.org/",
                eventTypes: [
                    "click",
                    "mouseover",
                    "mouseout",
                    "keyup",
                    "keydown",
                    "focus",
                    null
                ],
                eventTypeIndex: 0

            }
        },
        methods : {
            toTitleDate (){
                return  "wenesday"
            },
            formatDate (date1){
                return date1 = "21/04/2022"
            },

            eventHandler() {
                alert(`${this.eventType} event triggered.`);
            },

            changeEventType() {
                if (this.eventTypeIndex < this.eventTypes.length - 1) {
                    this.eventTypeIndex++;
                } else {
                    this.eventTypeIndex = 0;
                }
            },
        },
        computed : {
            eventType() {
                return this.eventTypes[this.eventTypeIndex];
            },
        }
        
    }
</script>