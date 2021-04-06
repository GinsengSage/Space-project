<template>
  <div class="main">
    <div class="tours-container">
      <div class="side-menu">
        <div></div>
        <div>
          <h1>{{currentTourNumber}}</h1>
          <p>{{numberOfTours}}</p>
        </div>
        <div>
          <div class="circle">
            <div class="triangle triangle-right"></div>
          </div>
          <div class="circle">
            <div class="triangle triangle-left"></div>
          </div>
        </div>
      </div>
      <div class="planets">
        <PlanetMenuItem></PlanetMenuItem>
        <PlanetMenuItem></PlanetMenuItem>
        <PlanetMenuItem></PlanetMenuItem>
        <PlanetMenuItem></PlanetMenuItem>
      </div>
    </div>
  </div>
</template>

<script>
  import PlanetMenuItem from "../components/PlanetMenuItem";
  export default {
    name: "Tours",
    components: {
      PlanetMenuItem
    },
    data(){
      return{
        numberOfTours: 0,
        currentTourNumber: 0,
        tours: []
      }
    }
  }
</script>

<style scoped>
  .main{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: #000;
  }
  .tours-container{
    width: 100%;
    height: 90%;
    background: black;
    display: flex;
  }
  .side-menu{
    width: 5%;
    background: #232323;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin-right: 2.5px;
    padding: 3% 0;
  }
  .side-menu div{
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .side-menu h1{
    font-family: "Roboto Medium";
  }
  .side-menu p{
    font-family: Roboto;
  }
  .planets{
    width: 95%;
    display: flex;
  }
  .circle{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #2211E2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    transition: .3s;
    cursor: pointer;
  }
  .triangle{
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
  }
  .triangle-left{
    margin-left: 3px;
    border-left: 14px solid #fff;
  }
  .triangle-right{
    margin-right: 3px;
    border-right: 14px solid #fff;
  }
  .circle:hover{
    background: #fff;
  }
  .circle:hover .triangle-left{
    border-left: 14px solid #2211E2;
  }
  .circle:hover .triangle-right{
    border-right: 14px solid #2211E2;
  }
</style>
