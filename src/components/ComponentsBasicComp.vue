<template>
    <div class="compBasic">
        <h1>{{ msg }}</h1>
        <button class="h-12 w-20 bg-pink-500 rounded-md shadow-xl" @click="count++">You clicked me {{ count }} times.</button>
        <br><br>
        <div><br><br>
            Using components <br>
            <ButtonCount class="h-12 w-32 bg-red-500 rounded-xl shadow-xl hover:bg-purple-500 shadow-2xl"/>
            <ButtonCount class="h-12 w-32 bg-indigo-500 rounded-xl shadow-xl hover:bg-yellow-500 shadow-2xl"/>
            <ButtonCount class="h-12 w-32 bg-pink-500 rounded-xl shadow-xl hover:bg-green-500"/>
        </div>
        <div><br> Passing props <br>
            <h4>{{ title }}</h4>
            <!-- <BlogPost title="My journey with Vue" />
            <BlogPost title="Blogging with Vue" />
            <BlogPost title="Why Vue is so fun" /> -->
            <div :style="{ fontSize: postFontSize + 'em' }">
            <BlogPost  
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            :style="post.style"
            @enlarge-text="postFontSize += 0.1"
            > </BlogPost>
            </div>
        </div>
        <div><br><hr>
            Content Distribution with Slots <br>
            <AlertBox>Something bad happend.</AlertBox>
        </div>
        <br><hr><br><br>
        <div>
            Dynamic components <br>
            <div class="demo">
                <button
                v-for="tab in tabs"
                :key="tab"
                :class="['tab-button', { active: currentTab === tab }]"
                @click="currentTab = tab"
                >
                {{ tab }}
                </button>
                <component :is="currentTab" class="tab"></component>
            </div>
        </div>
    </div>

</template>

<script>
    import BlogPost from './BlogPost.vue'
    import ButtonCount from './buttonCount.vue' 
    import AlertBox from './AlertBox.vue'
    import Home from './Home.vue'
    import Archive from './Archive.vue'
    import Posts from './Posts.vue'
    export default {
        name : 'Components Basic Comp',
        props : {
            msg : String,
        },
        data() {
            return {
                count : 0,
                posts: [
                    { id: 1, title: 'My journey with Vue', style: 'bg-gradient-to-r from-pink-500 from-20% via-purple-600 via-30% to-indigo-700 to-50%' },
                    { id: 2, title: 'Blogging with Vue', style: 'bg-gradient-to-r from-pink-500 from-20% via-purple-600 via-30% to-indigo-700 to-50%'  },
                    { id: 3, title: 'Why Vue is so fun', style: 'bg-gradient-to-r from-pink-500 from-20% via-purple-600 via-30% to-indigo-700 to-50%'  },
                ],
                postFontSize: 1,
                currentTab: 'Home',
                tabs: ['Home', 'Posts', 'Archive']
                
            }
        },
        template: `
            <button @click="count++">
            You clicked me {{ count }} times.
            </button>
        `,
        components : {
            ButtonCount,
            BlogPost,
            AlertBox,
            Home,
            Posts,
            Archive,
        }
    }
</script>
<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>