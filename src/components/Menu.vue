<template>
  <div class="nav-container">
    <header>
      <div class="nav-toggle">
        <div class="nav-toggle-bar"></div>
      </div>
    </header>

    <nav id="nav" class="nav">
      <ul>
        <li v-for="link in navLinks" @click="toggle" :key="link.title"><router-link exact class="link-style" v-bind:to="link.path">{{link.title}}</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data(){
    return{
      navLinks:[
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'About',
          path: '/about'
        },
        {
          title: 'Tours',
          path: '/tours'
        },
        {
          title: 'Why us',
          path: '/why-us'
        },
        {
          title: 'Contacts',
          path: '/contacts'
        }
      ]
    }
  },
  methods:{
    toggle(){
      let nav = document.querySelector('#nav')
      let navToggle = document.querySelector('.nav-toggle')

      navToggle.classList.toggle('expanded');
      nav.classList.toggle('expanded')
    }
  },
  mounted() {
    let hamburger = {
      nav: document.querySelector('#nav'),
      navToggle: document.querySelector('.nav-toggle'),

      initialize() {
        this.navToggle.addEventListener('click', () => { this.toggle(); })
      },

      toggle() {
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded')
      },
    }
    hamburger.initialize()
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  @import "/styles/menu.css";

</style>
