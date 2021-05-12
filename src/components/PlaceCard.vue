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

<style scoped>
  @import "/styles/place-card.css";
  .circle{
    width: 40px !important;
    height: 40px;
    border-radius: 50%;
    background: #2211E2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    transition: .4s;
    font-family: "Roboto Black";
    cursor: pointer;
  }
  .circle:hover{
    background: #fff;
    color: #2211E2;
  }
  .circle:hover .triangle{
    border-left: 14px solid #2211E2;
  }
</style>
