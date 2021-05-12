<template>
  <div class="container">
    <div class="buttons-container">
      <div class="slider-btn" v-for="num in numbers" :key="num">{{num}}</div>
    </div>
    <div class="slider-container">
      <div class="slider-item">
        f
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WhyUs",
    data(){
      return{
        numbers: ['01', '02', '03', '04'],
        slides: [

        ]
      }
    },
  }
</script>

<style scoped>
  @import "/styles/why-us.css";
</style>
