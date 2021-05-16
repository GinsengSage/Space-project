<template>
  <div class="container">
    <div class="buttons-container">
      <div class="slider-btn"
           :class="[btn.isActive ? 'active' : '']"
           v-for="btn in sliderButtons"
           :key="btn"
           @click="moveSlide(btn.slideNumber)"
      >
        {{btn.text}}
      </div>
    </div>
    <div class="slider-container">
      <div class="wrapper" :style="{transform: `translateX(${translateX}%)`}">
        <div class="slider-item" v-for="slide in slides" :key="slide.title">
          <div class="text-container">
            <h1>{{slide.title}}</h1>
            <h2>{{slide.subtitle}}</h2>
            <p>{{slide.description}}</p>
          </div>
          <div class="img-container" :style="{backgroundImage: `url(${slide.image})`}"></div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "../components/Footer";
  export default {
    name: "WhyUs",
    components: {Footer},
    data(){
      return{
        currentSlideNumber: 1,
        translateX: 0,
        sliderButtons: [
          {
            text: '01',
            slideNumber: 1,
            isActive: true
          },
          {
            text: '02',
            slideNumber: 2,
            isActive: false
          },
          {
            text: '03',
            slideNumber: 3,
            isActive: false
          },
          {
            text: '04',
            slideNumber: 4,
            isActive: false
          }
        ],
        slides: [
          {
            title: 'Living',
            subtitle: 'Oxygen gardens',
            description: 'Ad eos erant comprehensam. An mel iuvaret repudiandae, dicant electram sententiae quo ei. ' +
                'Habeo persecuti et mea, nostrud pertinax repudiare pri an.',
            image: '/images/slider/slide-1.jpg'
          },
          {
            title: 'Space',
            subtitle: 'Comfortable space suits',
            description: 'Ad eos erant comprehensam. An mel iuvaret repudiandae, dicant electram sententiae quo ei. ' +
                'Habeo persecuti et mea, nostrud pertinax repudiare pri an.',
            image: '/images/slider/slide-2.jpg'
          },
          {
            title: 'Space',
            subtitle: 'Safe spacewalk',
            description: 'Ad eos erant comprehensam. An mel iuvaret repudiandae, dicant electram sententiae quo ei. ' +
                'Habeo persecuti et mea, nostrud pertinax repudiare pri an.',
            image: '/images/slider/slide-3.jpg'
          },
          {
            title: 'Living',
            subtitle: 'Wonderful view',
            description: 'Ad eos erant comprehensam. An mel iuvaret repudiandae, dicant electram sententiae quo ei. ' +
                'Habeo persecuti et mea, nostrud pertinax repudiare pri an.',
            image: '/images/slider/slide-4.jpg'
          }
        ]
      }
    },
    methods:{
      moveSlide(nextSlideNumber){
        if(nextSlideNumber > this.currentSlideNumber){
          this.translateX -= 100 * Math.abs(this.currentSlideNumber - nextSlideNumber)
          this.sliderButtons[this.currentSlideNumber - 1].isActive = false
          this.sliderButtons[nextSlideNumber - 1].isActive = true
          this.currentSlideNumber = nextSlideNumber
        }else{
          this.translateX += 100 * Math.abs(this.currentSlideNumber - nextSlideNumber)
          this.sliderButtons[this.currentSlideNumber - 1].isActive = false
          this.sliderButtons[nextSlideNumber - 1].isActive = true
          this.currentSlideNumber = nextSlideNumber
        }
      }
    }
  }
</script>

<style scoped src="../../public/styles/why-us.css"></style>
