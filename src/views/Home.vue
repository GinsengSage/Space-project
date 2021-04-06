<template>
  <div class="main">
    <div class="full-screen-img-container">
      <div class="gradient-container">
        <div class="content-container">
          <div>
            <h1>Space tourism</h1>
            <h3>To space and back safely</h3>
            <button class="link-btn">
              <router-link tag="a" to="/tours">Get started</router-link>
            </button>
          </div>
          <div>
            <p>
              1°16′59″  36°49′00″
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="info-container">
      <div class="img-container">
        <img src="../../public/images/rangres.jpg">
      </div>
      <div class="info-text-container">
        <p style="color: #2211E2">Don't know who we are?</p>
        <h2>
          Let us gain your trust
        </h2>
        <p class="info-text">
          Vidisse moderatius duo et. Est fugit graeci iisque ne, nam ne viderer mnesarchum, per an modo necessitatibus.
          Ad eos erant comprehensam. An mel iuvaret repudiandae, dicant electram sententiae quo ei. Habeo persecuti et mea,
          nostrud pertinax repudiare pri an.
        </p>
        <div class="numbers-container">
          <div class="number">
            <h3>100%</h3>
            <p>Loading</p>
          </div>
          <div class="number">
            <h3>N\1</h3>
            <p>Number</p>
          </div>
          <div class="number">
            <h3>163</h3>
            <p>Places was added</p>
          </div>
        </div>
        <p class="small-text">Top qualiryresours from brand like</p>
        <div class="brand-container">
          <div>
            <img src="../../public/images/nike.png">
          </div>
          <div>
            <img src="../../public/images/spacex.png">
          </div>
          <div>
            <img src="../../public/images/nasa.png">
          </div>
        </div>
      </div>
    </div>
    <div class="cards-container">
      <PlaceCard></PlaceCard>
      <PlaceCard></PlaceCard>
      <PlaceCard></PlaceCard>
    </div>
    <div class="expedition-container">
      <div class="expedition-text-container">
        <h1>Our first expedition 100 years ago</h1>
        <p>
          Vidisse moderatius duo et. Est fugit graeci iisque ne, nam ne viderer mnesarchum, per an modo necessitatibus.
          Ad eos erant comprehensam. An mel iuvaret repudiandae, dicant electram sententiae quo ei.
          Habeo persecuti et mea, nostrud pertinax repudiare pri an. Vidisse moderatius duo et.
          Est fugit graeci iisque ne, nam ne viderer mnesarchum, per an modo necessitatibus. Ad eos erant comprehensam.
          An mel iuvaret repudiandae, dicant electram sententiae quo ei. Habeo persecuti et mea, nostrud pertinax repudiare pri an.
          <br><br>
          Ad eos erant comprehensam. An mel iuvaret repudiandae, dicant electram sententiae quo ei.
          Habeo persecuti et mea, nostrud pertinax repudiare pri an.
        </p>
        <button class="link-btn">
          <router-link tag="a" to="/tours">About us</router-link>
        </button>
      </div>
      <div class="expedition-video-container">
        <video controls="controls" muted autoplay>
          <source src="../../public/video/crew-dragon.mp4">
        </video>
      </div>
    </div>
    <div class="planet-cards-container">
      <h1>Best offers</h1>
      <h4>Habeo persecuti et mea, nostrud pertinax repudiare pri an.</h4>
      <div>
        <PlanetCard></PlanetCard>
        <PlanetCard></PlanetCard>
        <PlanetCard></PlanetCard>
      </div>
    </div>
    <div class="potential-fight-container">
      <h1>Evaluate your potential fligh</h1>
      <h4>Habeo persecuti et mea, nostrud pertinax repudiare pri an.</h4>
      <form action="">
        <div>
          <p>From</p>
          <select>
            <option>Never ending Sun</option>
            <option>Dragon fuel</option>
          </select>
        </div>
        <div>
          <p>To</p>
          <select>
            <option>Never ending Sun</option>
            <option>Dragon fuel</option>
          </select>
        </div>
        <input type="datetime-local">
        <div>
          <p>Passagers</p>
          <input type="number" value="1" max="10" min="1">
        </div>
        <button class="link-btn" style="margin-top: 0; width: 15%">
          <router-link tag="a" to="/tours">Order</router-link>
        </button>
      </form>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import PlaceCard from "../components/PlaceCard";
  import PlanetCard from "../components/PlanetCard";
  import Footer from "../components/Footer";
  export default {
    name: "Home",
    components: {
      Footer,
      PlanetCard,
      PlaceCard
    }
  }
</script>

<style scoped>
  .main{
    background: #000;
  }
  .full-screen-img-container{
    z-index: -1000;
    width: 100%;
    height: 100vh;
    background-image: url("../../public/images/full-screen-image.jpg");
    background-size: cover;
  }
  .gradient-container{
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 40%, black);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content-container{
    width: 80%;
    display: flex;
  }
  h1{
    font-size: 7em;
    font-family: "Roboto Black";
    color: #fff;
    text-transform: uppercase;
  }
  h3{
    font-size: 2em;
    font-family: Roboto;
    color: #fff;
  }
  .link-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 56px;
    background: #2211E2;
    border-radius: 28px;
    margin-top: 30px;
    cursor: pointer;
    transition: .3s;
    border: none;
    outline: none;
  }

  .link-btn:hover{
    background: #fff;
  }
  .link-btn:hover a{
    color: #2211E2;
  }

  .link-btn a{
    display: block;
    text-align: center;
    line-height: 56px;
    width: 100%;
    height: 100%;
    color: #fff;
    font-family: "Roboto Medium";
    text-decoration: none;
    font-size: 1.1rem;
  }
  .content-container div:first-child{
    width: 95%;
  }
  .content-container div:last-child{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 5%;
  }
  .content-container div:last-of-type p{
    display: block;
    writing-mode: vertical-lr;
    font-family: Roboto;
    color: #fff;
    font-size: 1.1rem;
  }
  .info-container{
    width: 100%;
    display: flex;
    position: relative;
    background: #000;
    margin-top: 50px;
    padding-bottom: 50px;
  }
  .info-container p{
    font-family: "Roboto Medium";
    font-size: 15px;
  }
  .info-container h2{
    font-size: 50px;
    font-family: "Roboto Black";
    max-width: 50%;
  }
  .info-container{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .img-container{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .img-container img{
    width: 100%;
  }
  .info-text-container{
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  div.numbers-container{
    display: flex;
    flex-direction: row;
  }
  .number{
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }
  .number h3{
    font-family: "Roboto Black";
    font-size: 40px;
  }
  .number p{
    font-size: 15px;
    color: #2211E2;
  }
  p.info-text{
    font-family: Roboto;
    max-width: 70%;
    margin-top: 20px;
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 20px;
  }
  p.small-text{
    margin: 20px 0;
    font-size: 15px;
    font-family: Roboto;
  }
  .brand-container{
    width: 50%;
    display: flex;
  }
  .brand-container div{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .brand-container div img{
    width: 90%;
  }
  .cards-container{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 70px 0;
  }
  .expedition-container{
    width: 100%;
    display: flex;
    padding-bottom: 50px;
  }
  .expedition-text-container{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .expedition-text-container h1{
    font-size: 50px;
    font-family: "Roboto Black";
    max-width: 80%;
    margin-left: 200px;
    margin-bottom: 30px;
  }
  .expedition-text-container p{
    font-size: 15px;
    font-family: Roboto;
    color: #fff;
    max-width: 80%;
    margin-left: 200px;
  }
  .expedition-text-container button{
    margin-left: 200px;
  }
  .expedition-video-container{
    flex: 1;
  }
  .expedition-video-container video{
    margin-left: 50px;
    width: 80%;
    height: 90%;
  }
  .planet-cards-container{
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .planet-cards-container h1, .potential-fight-container h1{
    font-size: 60px;
  }
  .potential-fight-container h1{
    margin-top: 50px;
  }
  .planet-cards-container h4, .potential-fight-container h4{
    font-size: 17px;
    font-family: Roboto;
    font-weight: 400;
    color: #fff;
    margin-bottom: 40px;
  }
  .planet-cards-container div{
    margin-top: 15px;
    width: 90%;
    display: flex;
  }
  .potential-fight-container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url("../../public/images/moon.png");
    background-size: cover;
    background-position: center;
  }
  .potential-fight-container form{
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 100px 0;
  }
  .potential-fight-container form input[type=datetime-local], .potential-fight-container form div{
    width: 17%;
    height: 56px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    font-family: Roboto;
    font-size: 17px;
  }
  input{
    outline: none;
    border: none;
    font-family: "Roboto Medium";
    font-size: 17px;
  }
  select{
    border: none;
    border-radius: 5px;
    outline: none;
    font-family: "Roboto Medium";
    font-size: 17px;
  }
  .potential-fight-container form div{
    display: flex;
    background: #fff;
    justify-content: space-between;
  }
  .potential-fight-container form div p{
    margin-right: 15px;
    line-height: 56px;
  }
  /* Landscape phones and smaller */
  @media (max-width: 480px) {
    h1{
      font-size: 4em;
    }
    h3{
      font-size: 1em;
    }
    .content-container div:first-child{
      width: 100%;
    }
    .content-container div:last-of-type{
      display: none;
    }
  }
</style>
