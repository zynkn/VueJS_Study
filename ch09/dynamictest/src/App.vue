<template>
  <div>
    <div class="header">
      <h1 class="headerText">(주) OPEN SG</h1>
      <nav>
        <ul>
          <li>
            <a href="#" @click="changeMenu('home')">Home</a>
          </li>
          <li>
            <a href="#" @click="changeMenu('about')">About</a>
            <!-- <keep-alive include="about, home">
              <component v-bind:is="currentView"></component>
            </keep-alive> -->
          </li>
          <li>
            <a href="#" @click="changeMenu('contact')">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <component v-bind:is="currentView"></component>
    </div>
  </div>
</template>
<script>
  import Home from './components/Home.vue';
  import About from './components/About.vue';
  import Contact from './components/Contact.vue';

  export default{
    components: {
      Home, About, Contact
    },
    data(){
      return { currentView: 'home' }
    },
    methods: {
      changeMenu(view){
        this.currentView = view;
      }
    }
  }
</script>
<style>
  .header{
    background-color: aqua;
    padding: 10px 0px 0px 0px;
  }
  .headerText{
    padding: 0px 20px;
  }
  ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: purple;
  }
  li{
    float: left;
  }
  li a{
    display: block;
    color: yellow;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  li a:hover{
    background-color: aqua;
    color: black;
  }
</style>
