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
        counter: 1
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

<style>
 @import "/styles/tours.css";
 .main{
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   background: #000;
 }
</style>
