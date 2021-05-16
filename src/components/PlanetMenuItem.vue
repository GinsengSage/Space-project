<template>
  <div class="planet-item-container">
    <div class="focus">
      <img v-bind:src="`/images/planets/circles/${planet.name}.png`">
    </div>
    <div class="un-focus">

    </div>
    <div class="info-container">
      <div class="number-container">
        <p>{{number}}</p>
      </div>
      <div class="name-container">
        <h2>{{planet.name}}</h2>
        <transition>
          <div class="stat-container">
            <p>Radius: {{planet.radius}} km</p>
            <p>Orbital period: {{planet.orbitalPeriod}} days</p>
          </div>
        </transition>
      </div>
      <router-link tag="div" :to="{name: 'Planet', params: {id:id}}"  class="button-container">
        <div class="circle">
          <p>Start</p>
          <div class="triangle triangle-left"></div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import firebase from "firebase/app";
  export default {
    name: "PlanetMenuItem",
    props: {
      id: String,
      number: Number
    },
    data(){
      return{
        planet: {}
      }
    },
    setup(){

    },
    mounted() {
      const dbRefObject = firebase.database().ref(`/planets/${this.id}`);
      dbRefObject.on('value',  snap => {
        this.planet = snap.val()
      });
    }
  }
</script>

<style scoped src="../../public/styles/planet-menu-item.css"></style>

