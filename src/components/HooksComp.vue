<template>
    {{ msg }}
    <img ref="logo" alt="Vue logo" src="../assets/logo.png">
    <br><hr>
    {{ title }}
    <button @click="title='New Title'">Update Title</button>

    <div ref="greeting">Hello readers !</div>
    <button @click="changeStyle">Update Title
        <img ref="img" :src="img" alt="image" width="200" :class="[{ active: awesome}, action ? 'shadow-lg' : 'shadow-sm' ]"/>
    </button>
    <button @click="awesome = !awesome " >
        check update
    </button>
    <span v-if="awesome">comment/uncomment me to see beforeUpdate/updated hook's reactivity</span>
    <span v-else>Oh no 😢</span>
    
  </template>
  
  <script>
  export default {
    setup() {
      console.log("I'm setup hook");
    },
    props : {
        msg : String
    },
    data() {
      console.log("I'm data hook");
      return {
        stateOfBob: "sleeping",
        img: 'https://picsum.photos/id/1005/600/200',
        title: 'hello vue!',
        awesome : false,
        action : true,
        actbtn : false
      };
    },
    methods: {
        changeStyle () {
            
            this.actbtn = ! this.actbtn,
            this.$refs.img.width = '250'
            console.log(this.$refs.img)
            this.action = !this.action
            
        },
        disable(){

        }
    },
    computed: {
      test: function () {
        return "I'm computed hook";
      },
    },
    beforeCreate() {
      console.log("I'm beforeCreate hook");
      console.log("Bob is currently ", this.stateOfBob);
      console.log("computed hook is returning ", this.test);
    },
    created() {
      console.log("I'm created hook");
      console.log("Bob is currently ", this.stateOfBob);
      this.stateOfBob = "awakened but still sleeping";
      console.log("Bob is currently ", this.stateOfBob);
      console.log("computed hook is returning ", this.test);
    },
    beforeMount() {
      console.log("I'm beforeMount hook");
      console.log("The Dom node is ", this.$refs["greeting"]);
    },
    mounted() {
      console.log("I'm mounted hook");
      console.log("The Dom node is ", this.$refs["greeting"]);
    },
    beforeUpdate() {
      console.log(
        "I'm beforeUpdate hook and i can help to apply extra effects before a DOM is updated"
      );
      console.log("width of img div ", this.$refs.img.width);
      this.$refs.img.width = 300;
      console.log("width of img div after overriding ", this.$refs.img.width);
    },
    updated() {
      console.log("I'm updated hook");
      this.img = "https://picsum.photos/200/300"; //updates the image src
    //   this.$refs.img.width = 500;
    },
    beforeUnmount() {
      console.log("I'm beforeUnmount hook", this.$refs['img'] ,this.$refs.logo);
      this.$refs.img.width = 0;
    },
    unmounted() {
    console.log("I'm unmounted hook", this.$refs.img);
    // this.$refs.img.width = 0;
    },
  };
  </script>