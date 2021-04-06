<template>
  <div class="place-card-container">
    <div class="line-container">
      <div style="display: flex;">
        <div class="blue-box"></div>
        <div class="text-container">
          <h3>{{title}}</h3>
          <p>Location: {{location}}</p>
        </div>
      </div>
      <router-link to="/">
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
  export default {
    name: "PlaceCard",
    data(){
      return{
        imageSrc: '',
        title: 'The never ending sun',
        location: 'Mars'
      }
    }
  }
</script>

<style scoped>
  .place-card-container{
    width: 27%;
    height: 270px;
    display: flex;
    background: url("../../public/images/places/the-never-ending-sun.jpg");
    background-size: cover;
    margin: 0 20px;
  }
  .line-container{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-top: 190px;
  }
  .blue-box{
    width: 10px;
    height: 100%;
    background: #2211E2;
  }
  .text-container{
    margin-left: 10px;
  }
  h3{
    font-family: "Roboto Medium";
    color: #fff;
    font-size: 20px;
    letter-spacing: 1px;
  }
  p{
    font-family: Roboto;
    color: #fff;
    font-size: 15px;
  }
  .circle{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #2211E2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    transition: .3s;
  }
  .triangle{
    margin-left: 3px;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-left: 14px solid #fff;
    border-bottom: 7px solid transparent;
  }
  .circle:hover{
    background: #fff;
  }
  .circle:hover .triangle{
    border-left: 14px solid #2211E2;
  }
</style>
