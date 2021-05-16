<template>
  <div :style="{ backgroundImage: 'url(' + place.image + ')' }" class="place-card-container">
    <div class="line-container">
      <div style="display: flex;">
        <div class="blue-box"></div>
        <div class="text-container">
          <h3>{{place.name}}</h3>
          <p>Location: {{planetName}}</p>
        </div>
      </div>
      <router-link :to="{name: 'Place', params:{planetId:planetId, index:place.index}}">
        <div class="circle-container">
          <div class="circle">
            <div class="triangle"></div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import firebase from "firebase";

  export default {
    name: "PlaceCard",
    data(){
      return{
        planetName: ''
      }
    },
    props: {
      planetId: String,
      place: Object,
    },
    mounted() {
      const dbRefObject = firebase.database().ref(`/planets/${this.planetId}`);
      dbRefObject.on('value',  snap => {
        this.planetName = snap.val().name
      });
    }
  }
</script>

<style scoped lang="css" src="../../public/styles/place-card.css"></style>
