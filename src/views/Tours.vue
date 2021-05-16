<template>
  <div class="main">
    <div class="tours-container">
      <div class="side-menu">
          <h1>{{planetKeys.length}}</h1>
      </div>
      <div class="planets">
        <PlanetMenuItem v-for="id in planetKeys" :key="id" v-bind:id="id" v-bind:number="counter++"></PlanetMenuItem>
      </div>
    </div>
  </div>
</template>

<script>
  import PlanetMenuItem from "../components/PlanetMenuItem";
  import firebase from "firebase/app";
  export default {
    name: "Tours",
    components: {
      PlanetMenuItem
    },
    data(){
      return{
        numberOfTours: 0,
        currentTourNumber: 0,
        planetKeys: [],
        counter: 0
      }
    },
    methods(){

    },
    mounted() {
      const dbRefObject = firebase.database().ref('/planets');
      dbRefObject.on('value',  snap => {
        this.planetKeys = Object.keys(snap.val());
      });
    }
  }
</script>

<style scoped src="../../public/styles/tours.css"></style>
