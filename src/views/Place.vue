<template>
  <div class="page-container">
    <h1>{{place.name}}</h1>
    <div class="img-container" :style="{backgroundImage: `url(${place.image})`}"></div>
    <div class="text-container">
      <div class="column">{{textPart1}}</div>
      <div class="column">{{textPart2}}</div>
    </div>
    <div class="btn-container">
      <input type="button" value="Get started" @click="showModal" class="link-btn">
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
  import firebase from "firebase";
  import Footer from "../components/Footer";

  export default {
    name: "Place",
    components: {Footer},
    props: {
      planetId: Number,
      index: String
    },
    data(){
      return{
        place: {},
        textPart1: '',
        textPart2: '',
      }
    },
    mounted() {
      const dbRefObject = firebase.database().ref(`/planets/${this.planetId}`);
      dbRefObject.on('value',  snap => {
        this.place = snap.val().places[this.index]
      })
      this.textPart1 = this.place.text.substring(0, this.place.text.length / 2)
      this.textPart2 = this.place.text.substring(this.place.text.length / 2 + 1, this.place.text.length - 1)
    }
  }
</script>

<style scoped>
  @import "/styles/place.css";

  h1{
    position: absolute;
    z-index: 101;
    top: 50px;
    font-family: Roboto;
    font-size: 6.5em;
    max-width: 50%;
    color: #fff;
  }

</style>
