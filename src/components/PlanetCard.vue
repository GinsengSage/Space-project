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

<style scoped lang="css" src="../../public/styles/planet-card.css"></style>
