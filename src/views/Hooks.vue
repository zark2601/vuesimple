<template>
    <div class="home flex flex-col items-center">
        <img alt="Vue logo" src="../assets/logo.png">
        <HookComp msg="Welcome to Your Vue.js App"/>

        <br><hr><br>
        <div ref="greeting">Hello readers !</div>
        <div>
            beforeUpdate <br>
            <img ref="img" :src="imageData" alt="image" width="200" />
            <span>comment/uncomment me to see beforeUpdate/updated hook's reactivity</span>
        </div>
  </div>
</template>

<script>
import imageData from '@/assets/tree.jpg'
import HookComp from '../components/HooksComp.vue'
export default {
    setup() {
        console.log("I'm setup hook");
    },
    name : 'hookView',
    components : {
        HookComp
    },
    data() {
    console.log("I'm data hook");
    return {
      stateOfBob: "sleeping",
      img: "",
      src : {
        picture : 'tree.jpg'
      },
      imageData
    };
    },
    computed: {
        test: function () {
        return "I'm computed hook";
        },
    },
    beforeCreate() {
        console.log("I'm beforeCreate hook");
        console.log("Bob is currently ", this.stateOfBob);
        console.log("computed hook is returning of beforeCreate", this.test);
    },

    created() {
    console.log("I'm created hook");
    console.log("Bob is currently ", this.stateOfBob);
    this.stateOfBob = "awakened but still sleeping";
    console.log("Bob is currently after changed", this.stateOfBob);
    console.log("computed hook is returning of created", this.test);
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
    console.log("width of img div ", this.$refs.imageData.width);
    this.$refs.imageData.width = 300;
    console.log("width of img div after overriding ", this.$refs.imageData.width);
  }
}
</script>