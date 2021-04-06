<template>
  <div class="planet-card-container">
    <div class="planet-text-container">
      <div class="line">
        <h2>{{planetName}}</h2>
        <h2>${{price}}</h2>
      </div>
      <div class="line">
        <p>Next departure: {{date}}</p>
        <button>
          <router-link tag="a" to="/tours">New</router-link>
        </button>
      </div>
    </div>
    <div class="planet-btn-container">
      <button>
        <router-link tag="a" to="/tours">Get started</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanetCard",
  data(){
    return{
      imageSrc: '',
      planetName: 'Mars',
      price: 2999,
      date: '02.05.2035'
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');
  .planet-card-container{
    width:30%;
    margin: 0 1.5%;
    height: 270px;
    background-image: url("../../public/images/planets/mars.jpg");
    background-size: cover;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0;
    margin-bottom: 50px;
  }
  .planet-text-container{
    height: 25%;
  }
  .planet-btn-container{
    height: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
  }
  .planet-btn-container button, .line button{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2211E2;
    border-radius: 16px;
    cursor: pointer;
    transition: .3s;
    border: none;
    outline: none;
  }
  .planet-btn-container button:hover{
    background: #fff;
  }
  .planet-btn-container button a:hover{
    color: #2211E2;
  }
  .planet-btn-container button a, .line button a{
    display: block;
    text-align: center;
    width: 100%;
    height: 100%;
    color: #fff;
    font-family: "Roboto";
    text-decoration: none;
    line-height: 30px;
    margin: 0 10px;
  }
  .line{
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .line h2{
    font-family: Spartan;
    font-weight: 400;
    font-size: 35px;
    text-transform: uppercase;
    color: #fff;
  }
  .line p{
    font-family: Spartan;
    color: #fff;
    font-size: 13px;
  }
</style>
