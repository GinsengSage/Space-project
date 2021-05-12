<template>
  <div class="main">
    <div class="full-screen-img-container">
      <div class="gradient-container">
        <div class="content-container">
          <div>
            <transition appear @before-enter="h1BeforeEnter" @enter="h1Enter">
              <h1>Space tourism</h1>
            </transition>
            <h3>To space and back safely</h3>
            <button class="link-btn">
              <router-link tag="a" to="/about">Get started</router-link>
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="info-container">
      <div class="img-container">
        <img src="/images/rangers.jpg">
      </div>
      <div class="info-text-container">
        <p style="color: #2211E2">Don't know who we are?</p>
        <h2>
          Let us gain your trust
        </h2>
        <p class="info-text">
          Vidisse moderatius duo et. Est fugit graeci iisque ne, nam ne viderer mnesarchum, per an modo necessitatibus.
          Ad eos erant comprehensam. An mel iuvaret repudiandae, dicant electram sententiae quo ei. Habeo persecuti et mea,
          nostrud pertinax repudiare pri an.
        </p>
        <div class="numbers-container">
          <div class="number">
            <h3>100%</h3>
            <p>Loading</p>
          </div>
          <div class="number">
            <h3>N\1</h3>
            <p>Number</p>
          </div>
          <div class="number">
            <h3>163</h3>
            <p>Places was added</p>
          </div>
        </div>
        <p class="small-text">Top qualiryresours from brand like</p>
        <div class="brand-container">
          <div>
            <img src="/images/nike.png">
          </div>
          <div>
            <img src="/images/spacex.png">
          </div>
          <div>
            <img src="/images/nasa.png">
          </div>
        </div>
      </div>
    </div>
    <div class="cards-container">
      <PlaceCard v-for="place in places" :key="place.name" v-bind:place="place" v-bind:planet-id="place.planetId"></PlaceCard>
    </div>
    <div class="expedition-container">
      <div class="expedition-text-container">
        <transition>
          <h1>Our first expedition 100 years ago</h1>
        </transition>
        <p>
          Vidisse moderatius duo et. Est fugit graeci iisque ne, nam ne viderer mnesarchum, per an modo necessitatibus.
          Ad eos erant comprehensam. An mel iuvaret repudiandae, dicant electram sententiae quo ei.
          Habeo persecuti et mea, nostrud pertinax repudiare pri an. Vidisse moderatius duo et.
          Est fugit graeci iisque ne, nam ne viderer mnesarchum, per an modo necessitatibus. Ad eos erant comprehensam.
          An mel iuvaret repudiandae, dicant electram sententiae quo ei. Habeo persecuti et mea, nostrud pertinax repudiare pri an.
          <br><br>
          Ad eos erant comprehensam. An mel iuvaret repudiandae, dicant electram sententiae quo ei.
          Habeo persecuti et mea, nostrud pertinax repudiare pri an.
        </p>
        <button class="link-btn">
          <router-link tag="a" to="/tours">About us</router-link>
        </button>
      </div>
      <div class="expedition-video-container">
        <video controls="controls" muted autoplay>
          <source src="/video/crew-dragon.mp4">
        </video>
      </div>
    </div>
    <div class="planet-cards-container">
      <h2>Best offers</h2>
      <h4>Habeo persecuti et mea, nostrud pertinax repudiare pri an.</h4>
      <div>
        <PlanetCard v-for="planetCardKey in planetCardKeys" :key="planetCardKey" v-bind:id="planetCardKey"></PlanetCard>
      </div>
    </div>
    <div class="potential-fight-container">
      <h2>Evaluate your potential fligh</h2>
      <h4>Habeo persecuti et mea, nostrud pertinax repudiare pri an.</h4>
      <form>
        <div>
            <p style="color: #000; font-family: 'Roboto Black'">From</p>
          <select>
            <option selected value="Earth">Earth</option>
          </select>
        </div>
        <div>
          <p style="color: #000; font-family: 'Roboto Black'">To</p>
          <select v-model="to">
            <option selected value="Eris">Eris</option>
            <option value="Jupiter">Jupiter</option>
            <option value="Mars">Mars</option>
            <option value="Mercury">Mercury</option>
            <option value="Neptune">Neptune</option>
            <option value="Pluto">Pluto</option>
            <option value="Saturn">Saturn</option>
            <option value="Titan">Titan</option>
            <option value="Uranus">Uranus</option>
            <option value="Venus">Venus</option>
          </select>
        </div>
        <input v-model="date" type="date">
        <div>
          <p style="color: #000; font-family: 'Roboto Black'">Passengers</p>
          <input type="number" v-model="countOfPassengers" max="10" min="1">
        </div>
        <input @click="showModal" type="button" class="link-btn" value="Order" style="margin-top: 0; width: 15%"/>
      </form>
      <Footer></Footer>
    </div>
  </div>
  <Modal ref="modal" v-show="isModalVisible" v-bind:to="to" v-bind:date="date" v-bind:count-of-passengers="countOfPassengers" @close="closeModal"/>
</template>

<script>
  import PlaceCard from "../components/PlaceCard";
  import PlanetCard from "../components/PlanetCard";
  import Footer from "../components/Footer";
  import Modal from "../components/Modal";

  import gsap from "gsap";
  import firebase from "firebase";

  // import insertPlanet from "../db/db-seeder";

  export default {
    name: "Home",
    components: {
      Footer,
      PlanetCard,
      PlaceCard,
      Modal
    },
    setup(){
      const h1BeforeEnter = (el) => {
        el.style.opacity = 0
      }
      const h1Enter = (el) => {
        gsap.to(el, {
          duration: 1.5,
          marginBottom: 0,
          opacity: 1,
          ease: 'easeInOut'
        })
      }
      const h1Appear = el => {
        gsap.to(el, {
          duration: 1.5,
          marginBottom: 0,
          opacity: 1,
          fontSize: 56,
          ease: 'easeInOut'
        })
      }
      return {h1BeforeEnter, h1Enter, h1Appear}
    },
    data(){
      return{
        planetCardKeys: [],
        planets: [],
        places: [],
        isModalVisible: false,
        from: 'Earth',
        to: 'Eris',
        date: Date.now(),
        countOfPassengers: 1
      }
    },
    methods:{
      showModal() {
        this.$refs.modal.init()
        this.isModalVisible = true
      },
      closeModal(){
        this.isModalVisible = false
      },
      getRandomInt(max) {
        return Math.floor(Math.random() * max)
      }
    },
    mounted() {
      const dbRefObject = firebase.database().ref('/planets');
      dbRefObject.on('value',  snap => {
        this.planetCardKeys = Object.keys(snap.val()).slice(0,3);
        this.planets = Object.values(snap.val());


        for(let i = 0; i < 3; i++){
          this.places.push(Object.assign(
              { ...this.planets[i].places[this.getRandomInt(this.planets[i].places.length)]},
              { planetId: this.planetCardKeys[i] }
          ))
        }
      });
    },
  }
</script>

<style scoped>
  @import "/styles/home.css";
  .main{
    background: #000;
  }
  .planet-cards-container div{
    margin-top: 15px;
    width: 90%;
    display: flex;
  }
  h1{
    font-size: 7em;
    font-family: "Roboto Black";
    color: #fff;
    text-transform: uppercase;
  }
  .link-btn a{
    display: block;
    text-align: center;
    line-height: 56px;
    width: 100%;
    height: 100%;
    color: #fff;
    font-family: "Roboto Medium";
    text-decoration: none;
    font-size: 1.1rem;
  }
  h2{
    font-family: "Roboto Black";
    color: #fff;
    font-size: 4em;
    text-transform: uppercase;
  }
  h3{
    font-size: 2em;
    font-family: Roboto;
    color: #fff;
  }
  .content-container div:last-of-type p{
    display: block;
    writing-mode: vertical-lr;
    font-family: Roboto;
    color: #fff;
    font-size: 1.1rem;
  }
  .content-container div:last-child{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 5%;
  }
  .content-container{
    width: 80%;
    display: flex;
  }
  .content-container div:first-child{
    width: 95%;
  }
  .info-container{
    width: 100%;
    display: flex;
    position: relative;
    background: #000;
    margin-top: 50px;
    padding-bottom: 50px;
    flex: 1;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .content-container h1{
    margin-bottom: 300px;
  }
  .link-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 56px;
    background: #2211E2;
    border-radius: 28px;
    margin-top: 30px;
    cursor: pointer;
    transition: .3s;
    border: none;
    outline: none;
  }
  .link-btn:hover{
    background: #fff;
  }
  .info-container p{
    font-family: "Roboto Medium";
    font-size: 15px;
  }
</style>
