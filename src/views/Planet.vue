<template>
  <div class="page-container">
    <div class="planet-global-container">
      <div>
        <h1>{{planet.name}}</h1>
      </div>
      <div class="planet-container">
        <div class="side-container">
          <div>
            <h4>Temperature</h4>
            <p>{{planet.temperature}}&deg;C</p>
          </div>
          <div>
            <div class="chem-container">
              <div v-for="elem in planet.elements" :key="elem.name" class="chem-element">
                {{elem.name}}<sup>{{elem.number}}</sup>
              </div>
            </div>
          </div>
          <div>
            <div class="graph-container">
              <div class="max-min-container"></div>
              <canvas id="graph-canvas" ref="canvas"></canvas>
              <p>Temperature last 10 days</p>
            </div>
          </div>
        </div>
        <div class="model-container">
          <div id="ddd-container"></div>
        </div>
        <div class="side-container">
          <div>
            <h4>Moons</h4>
            <p>
              <span v-for="moon in planet.moons" :key="moon">
                {{moon}}&nbsp;
              </span>
            </p>
          </div>
          <div>
            <h4>Radius</h4>
            <p>{{planet.radius}} km</p>
          </div>
          <div>
            <h4>Distance from the Sun</h4>
            <p>{{ planet.distance }} millions km</p>
          </div>
          <div>
            <h4>Orbital period</h4>
            <p>{{planet.orbitalPeriod}} days</p>
          </div>
        </div>
      </div>
      <input type="button" value="Get started" @click="showModal" class="link-btn">
    </div>
    <div class="description-container">
      <div class="side-container">
        <h2>
          Description
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Animi, aspernatur delectus dolor error ex hic in laborum
          necessitatibus nesciunt non, nostrum possimus quae quaerat
          quis unde vero voluptatum! Ab ad eveniet modi quasi sint?
          Consequatur doloremque et vitae? Aliquam at atque, corporis
          cupiditate debitis dignissimos doloremque dolores eligendi
          et explicabo, fuga iusto mollitia officiis quis quisquam
          repudiandae, tempora tenetur ut voluptates voluptatum.
          Accusamus adipisci consectetur deserunt ea earum excepturi
          impedit libero minus nam nesciunt odio, officiis optio
          provident qui quis ratione reiciendis saepe vel? Aut, eius
          error esse exercitationem explicabo facilis molestiae quaerat
          quasi, repellat soluta sunt ut voluptates! Praesentium?
        </p>
      </div>
      <div class="side-container">
        <div class="video-container">
          <video src=""></video>
        </div>
      </div>
    </div>
    <div class="planet-cards-container">
      <PlaceCard v-for="place in planet.places" :key="place.name" v-bind:place="place" v-bind:planet-id="id"></PlaceCard>
    </div>
    <Footer></Footer>
  </div>
  <modal v-show="isModalVisible" @close="closeModal"></modal>
</template>

<script>
  import PlaceCard from "../components/PlaceCard";
  import Footer from "../components/Footer";

  import firebase from "firebase/app";

  import * as THREE from "three";
  import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
  import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
  import {Expo, TweenMax} from "gsap";

  import {Line} from "vue-chartjs";
  import Modal from "../components/Modal";

  export default {
    name: "Planet",
    extends: Line,
    components: {
      Modal,
      Footer,
      PlaceCard,
    },
    props:{
      id: String
    },
    data(){
      return{
        planet: {},
        moonsStr: '',
        isModalVisible: false
      }
    },
    methods:{
      showModal() {
        this.isModalVisible = true
      },
      closeModal(){
        this.isModalVisible = false
      },
      renderGraph(){
        let barData = {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          datasets: [{
            data: this.planet.temperatures,
            borderColor: '#2211E2',
            borderWidth: 2,
            backgroundColor:'rgba(34, 16, 227, .2)'
          }]
        }

        let barOptions = {
          legend: {
            display: false,
          },
          animation: {
            easing: 'easeInOut',
            duration: 500,
            loop: true
          },
          maintainAspectRatio: false,
          xAxes: [{
            gridLines: {
              offsetGridLines: true
            }
          }],
          yAxes: [{
            gridLines: {
              offsetGridLines: true
            }
          }]
        }
        this.renderChart(barData, barOptions)
      },
      init: function() {

        const container = document.getElementById('ddd-container');

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)

        camera.position.z = 15

        const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true})
        renderer.setSize(container.clientWidth, container.clientHeight)

        renderer.domElement.setAttribute('id', 'planet')
        container.appendChild(renderer.domElement)

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        const aLight = new THREE.AmbientLight(0xFFFFFF, 1.1)
        scene.add(aLight)

        const bLight = new THREE.PointLight( 0xFFFFFF, 1, 100 );
        bLight.position.set( 0, 5, 7 );
        scene.add(bLight);

        // const helper = new THREE.PointLightHelper( bLight, 2 );
        // scene.add(helper);

        const loader = new GLTFLoader()

        let obj = null

        loader.load(`/models/${this.planet.name.toLowerCase()}/scene.gltf`, function(gltf){
          obj = gltf
          obj.scene.scale.set(3, 3, 3)
          scene.add(obj.scene)

          TweenMax.from('#ddd-container', 2, {css:{scale:0}, ease:Expo.easeOut});
        })

        function animate(){
          requestAnimationFrame(animate)
          if(obj)
            obj.scene.rotation.y += 0.005
          renderer.render(scene, camera)
        }

        animate()

      },
    },
    mounted() {
      window.scrollBy(0,0)
      const dbRefObject = firebase.database().ref(`/planets/${this.id}`);
      dbRefObject.on('value',  snap => {
        this.planet = snap.val()

        setTimeout(() => {
          this.renderGraph()
        }, 1000)
        this.init()
      });
    }
  }
</script>

<style scoped>
 @import "/styles/planet.css";
 .planet-cards-container{
   width: 90%;
   display: flex;
   flex-direction: row;
   justify-content: center;
   margin-bottom: 15px;
 }
 .page-container{
   background: #000;
 }
 h1{
   font-size: 5em;
   font-family: "Roboto Black";
   color: #fff;
   text-transform: uppercase;
 }
 h2{
   margin-top: 20px;
   margin-bottom: 30px;
   font-family: "Roboto Medium";
   color: #fff;
   font-size: 3em;
 }
</style>
