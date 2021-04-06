<template>
  <div id="container"></div>
</template>

<script>

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {TweenMax} from 'gsap'
import {Expo} from 'gsap'

export default {
  name: "Three",
  data(){
    return{

    }
  },
  methods:{
    init: function() {

      const container = document.getElementById('container');

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

      loader.load('./scene.gltf', function(gltf){
        obj = gltf
        obj.scene.scale.set(2.5, 2.5, 2.5)
        scene.add(obj.scene)

        TweenMax.from('#container', 2, {css:{scale:0}, ease:Expo.easeOut});

      })

      function animate(){
        requestAnimationFrame(animate)
        obj.scene.rotation.y += 0.005
        renderer.render(scene, camera)
      }

      animate()

    },
  },
  mounted(){
    this.init()
  }
}
</script>

<style scoped>

  #container{
    width: 650px;
    height: 650px;
  }

</style>