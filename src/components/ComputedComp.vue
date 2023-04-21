<template>
    <div class="computed">
        <h1> {{ msg }}</h1>
        <hr><br>
        <p>Has published books: by using basic example</p>
        <span>it using basic example {{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
        <hr><br>
        <p>Has published books: by using computed</p>
        <span>{{ publishedBooks }}</span>
        <hr><br>
        <h1 class="text-xl text-purple-700">{{ now }}</h1>
        <hr><br>
        <p>{{ fullName }}</p>
    </div>
</template>

<script>
    export default {
        name : 'computedComp',
        props : {
            msg : String
        },
        data () {
            return {
                author : {
                    name : 'lyhong',
                    books : [
                        'vue 2 - Advanced Guide',
                        'vue 3 - Basic Guide',
                        'Vue 4 - The Mystery'
                    ]
                },
                firstName: 'John',
                lastName: 'Doe'
            }
        },
        computed : {
            publishedBooks(){
                return this.author.books.length > 0 ? 'Yes' : 'No'
            },
            now (){
                return Date.now()
            },
            fullName: {
            // getter
                get() {
                    return this.firstName + ' ' + this.lastName
                },
            // setter
                set(newValue) {
                    // Note: we are using destructuring assignment syntax here.
                    [this.firstName, this.lastName] = newValue.split(' ')
                    this.firstName = names[0]
                    this.lastName  = names[1]
                }
            }
        }

    }
</script>