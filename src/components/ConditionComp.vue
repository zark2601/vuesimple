<template v-if="okay">
    <div class="conditional">
        <h1 v-if="awesome">using if awesome = true. Vue is awesome! </h1>
        <br><br>
        <h1 class="flex flex-col items-center justify-center">
            <div>Using v if else</div>
            <button @click="awesomes = !awesomes" class="w-15 h-10 bg-purple-400 rounded-sm">Toggle</button>
            <br>
            <h1 v-if="awesomes">Vue is awesome!</h1>
            <h1 v-else class="flex flex-col items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 from-20% via-purple-500 via-30% to-pink-500 to-50%">Oh no 😢</h1>
        </h1>
        <br><br>
        <div>using v-if-eles
            <div v-if="type === 'A'" class="bg-red-500">output : A</div>
            <div v-else-if="type === 'B'" class="bg-purple-600">B</div>
            <div v-else-if="type === 'C'" class="bg-pink-600">C</div>
            <div v-else class="bg-gradient-to-r from-red-500 from-20% via-purple-600 via-30% to-pink-600 to-50%">Not A/B/C</div>
        </div>
        <br><br>
        <div class="flex flex-col items-center justify-center">using v-show
            <h1 v-show="ok" class="h-10 w-32 bg-red-400">Hello v-show</h1>
        </div>
        <template v-if="ok">
            <h1  class="bg-yellow-500">Hello vue js <br> <strong>Noted v-if can use with template v-show cant't </strong></h1>
        </template>
        <br><br><hr>
        <h1>List Rendering</h1>
        <div> Example 1 <br> get items array to item and get item.by key message
            <br> item is a looping value, items passing key and value to item and get output buy looping value point key of items 
            <li v-for="item in items">
                {{ item.message }}
            </li>
        </div><br>
        <div>
            Example 2 <br> get array with index to item and get index and item.key message
            <br>using () for looping value and , index 
            <li v-for="(item, index ) in items" :key="item">
                {{ parentMessage }} - {{ index }} - {{ item.message }}
            </li>
            <!-- 
                in javascript write style 
                const parentMessage = 'Parent'
                const items = [
                    { message: 'Foo' }, { message: 'Bar' }
                ]
                items.forEach((item, index) => {
                    // has access to outer scope `parentMessage`
                    // but `item` and `index` are only available in here
                    console.log(parentMessage, item.message, index)
                })
             -->
        </div><br>
        <div>Example 3 <br> get message key in array items
            <br> using {} for get key as looping value and get by key name 
            <li v-for="{ message } in items" :key="item">
                {{ message }}
            </li>
        </div>
        <div><br>
            Example 4 <br> get message key with index in array items-center
            <br> using {} for get key as alooping value and get by key with index
            <li v-for="({ message }, index) in items" :key="message">
                {{ message }} - {{ index }}
            </li>
        </div>
        <div><br>
            Example 5 Using v-for with 2 looping, skip because don't understand from document Vue
            <li v-for="item in items" :key="item">
                <span v-for="childItem in item.children">
                    {{ item.message }} {{ childItem }}
                </span>
            </li>
        </div>
        <hr><br><br>
        <div>Using v-for looping object value
            <ul>
                <li v-for="value in myObj" :key="value" class="bg-purple-600">
                    {{ value }}
                </li>
            </ul>
        </div>
        <br>
        <div>
            Using v-for looping Object value with key
            <li v-for="(value, key) in myObj" :key="value" class="bg-red-600">
              {{ key }}: {{ value }}
            </li>
        </div>
        <div>
            Using v-for looping Object value with key and index
            <li v-for="(value, key, index) in myObj" :key="value" class="bg-pink-600">
                {{ index }}. {{ key }}: {{ value }}
            </li>
        </div>
        <div class="bg-purple-500">
            Using v-for looping with a rang <br>
            <span v-for="n in 10">
                {{ n }} <br>
            </span>
        </div>
        <div>
            Using v-for on template
            <ul class="bg-red-500">
                <template v-for="item in items" :key="item" class="bg-red-500">
                    <li>{{ item.message }}</li>
                    <li class="divider" role="presentation"></li>
                </template>
            </ul>
        </div>
        <dv>
            <template v-for="todo in todos" :key="todos">
                <li v-if="!todo.isComplete">
                    {{ todo.name }}
                </li>
            </template>
        </dv>
        <div>
            Maintaining Stat with key
            <div v-for="item in items" :key="item.message">
                {{ item.message }}
            </div><br>
            Example 2
            <template v-for="todo in todos" :key="todo.name">
                <li>{{ todo.name }}</li>
            </template>
        </div>
        <div>
            <MyComponent
                v-for="(item, index) in items"
                :item="item"
                :index="index"
                :key="item.id"
            />
        </div>
        <div class="text-red-500">Using Replacing an Arry <br>
            this.items = this.items.filter((item) => item.message.match(/Foo/))
            <ul>
                <li>push(), pop(), shift(), unshift(), splice(), sort(), reverse()</li>
            </ul>
        </div>
        <br><hr>
        <div>Displaying Filtered/Sorted Results <br>
            <ul>
                <li v-for="n in evenNumbers">{{ n }}</li>
            </ul>
        </div>
        <div>
            Using multi v-for loop associated array <br>
            <ul v-for="numbers in sets">
                <li v-for="n in even(numbers)">{{ n }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'ConditionalComp',
        props :{
            msg : String
        },
        data () {
            return {
                awesome : true,
                awesomes : false,
                type : "z",
                okay : false,
                ok : true,
                items: [{ message: 'Foo' }, { message: 'Bar' }],
                parentMessage: 'Parent',
                itemcs: [{ message: 'Foo' }, { message: 'Bar' } , {chlidren :'1'}, {chlidren : '2'}],
                myObj : {
                    title : 'How to do list in Vue',
                    author : 'Jane Doe',
                    pusblishedAt : '22/05/02'
                },
                todos : [{name : 'lyhong'}, {name : 'nguon'}],
                numbers : [1, 2, 3, 4, 5],
                sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]],
            }
        },
        methods: {
            even(numbers) {
                return numbers.filter(number => number % 2 === 0)
            }
        },
        components : {
            // MyComponent 
        },
        computed : {
            evenNumbers() {
                return this.numbers.filter(n => n % 2 === 0)
            }
        }
    }
</script>