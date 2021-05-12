<template>
  <div class="planet-card-container" :style="{backgroundImage: `url(${planet.image})`}">
    <div class="planet-text-container">
      <div class="line">
        <h2>{{planet.name}}</h2>
        <h2>${{planet.price}}</h2>
      </div>
      <div class="line">
        <div></div>
        <button>
          <router-link tag="a" to="/tours">New</router-link>
        </button>
      </div>
    </div>
    <div class="planet-btn-container">
      <button>
        <router-link tag="a" :to="{ name: 'Planet', params: {id:id}}">Get started</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "PlanetCard",
  data(){
    return{
      planet: {}
    }
  },
  props:{
    id: String
  },
  mounted(){
    const dbRefObject = firebase.database().ref(`/planets/${this.id}`);
    dbRefObject.on('value',  snap => {
      this.planet = snap.val()
    });
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import "/styles/planet-card.css";
  .line{
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .line h2{
    font-family: Spartan;
    font-weight: 400;
    font-size: 35px;
    text-transform: uppercase;
    color: #fff;
  }
  .line p{
    font-family: Spartan;
    color: #fff;
    font-size: 13px;
  }
  .planet-btn-container button a, .line button a{
    display: block;
    text-align: center;
    width: 100%;
    height: 100%;
    color: #fff;
    font-family: "Roboto";
    text-decoration: none;
    line-height: 30px;
    margin: 0 10px;
  }
  .planet-btn-container button, .line button{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2211E2;
    border-radius: 16px;
    cursor: pointer;
    transition: .3s;
    border: none;
    outline: none;
  }
</style>
