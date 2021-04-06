<template>
  <div class="nav-container">
    <header>
      <div class="nav-toggle">
        <div class="nav-toggle-bar"></div>
      </div>
    </header>

    <nav id="nav" class="nav">
      <ul>
        <li><router-link class="link-style" to="/">Home</router-link></li>
        <li><router-link class="link-style" to="/about">About</router-link></li>
        <li><router-link class="link-style" to="/">Portfolio</router-link></li>
        <li><router-link class="link-style" to="/">Services</router-link></li>
        <li><router-link class="link-style" to="/">Contact</router-link></li>
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
        }
      ]
    }
  },
  methods:{

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
  .nav-container{
    position: absolute;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  header{
    width: 80%;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
  }
  .nav-toggle {
    cursor: pointer;
    height: 30px;
    width: 50px;
    position: relative;
    z-index: 2;
  }
  .nav-toggle:hover {
    opacity: 0.8;
  }
  .nav-toggle .nav-toggle-bar,
  .nav-toggle .nav-toggle-bar::after,
  .nav-toggle .nav-toggle-bar::before {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background: #fff;
    content: "";
    height: 0.2rem;
    transition: all 0.5s;
    width: 80%;
  }

  .nav-toggle .nav-toggle-bar::after,
  .nav-toggle .nav-toggle-bar::before{
    width: 130%;
  }

  .nav-toggle .nav-toggle-bar{
    margin-top: 0;
  }

  .nav-toggle .nav-toggle-bar::after {
    margin-top: 0.7rem;
  }
  .nav-toggle .nav-toggle-bar::before {
    margin-top: -0.7rem;
  }
  .nav-toggle.expanded .nav-toggle-bar {
    background: transparent;
  }
  .nav-toggle.expanded .nav-toggle-bar::after, .nav-toggle.expanded .nav-toggle-bar::before {
    background: #ffffff;
    margin-top: 0;
  }
  .nav-toggle.expanded .nav-toggle-bar::after {
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .nav-toggle.expanded .nav-toggle-bar::before {
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  /* nav */
  .nav {
    background: rgba(0, 0, 0, .9);
    color: #ffffff;
    cursor: pointer;
    padding-top: 6rem;
    display: flex;
    justify-content: center;
    height: 100vh;
    left: -100%;
    position: fixed;
    top: 0;
    transition: all 1s;
    width: 100%;
    z-index: 1;
  }
  .nav.expanded {
    left: 0;
  }
  .nav ul {
    list-style: none;
    font-family: Roboto;
    font-size: 2rem;
  }
  .nav ul li{
    margin: 10px 0;
    font-size: 70px;
    font-family: "Roboto Medium";
    margin: 20px 0;
    text-align: center;
    transition: .3s;
  }
  .link-style{
    color:#fff;
    text-decoration: none;
    transition: .3s;
    text-transform: uppercase;
  }
  .link-style:hover{
    color: #2211E2;
  }
  .active-link{
    color: #2211E2;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .nav{
      width: 40%;
      left: -40%;
    }
  }

  /* Portrait tablets and small desktops */
  @media (min-width: 768px) and (max-width: 991px) {
    .nav{
      width: 50%;
      left: -50%;
    }
  }

  /* Landscape phones and portrait tablets */
  @media (max-width: 767px) {
    .nav{
      width: 100%;
      left: -100%;
    }
  }

  /* Landscape phones and smaller */
  @media (max-width: 480px) {
    .nav{
      width: 100%;
      left: -100%;
    }
  }

</style>
