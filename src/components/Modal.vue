<template>
  <transition @before-enter="beforeEnter" @enter="enter">
    <div class="modal-container">
      <div class="form-circle-container">
        <div class="price-circle">${{price}}.00</div>
        <div class="form-container" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
          <form @submit.prevent="submit">
            <div style="align-items: flex-end;">
              <div class="circle" @click="close">X</div>
            </div>
            <h1>Checkout</h1>
            <div>
              <label>Card number</label>
              <input required type="text" v-model="cardNumber">
            </div>
            <div>
              <label>Email</label>
              <input required type="text" v-model="email">
            </div>
            <div class="row">
              <div class="part">
                <label>From</label>
                <select required>
                  <option selected>Earth</option>
                </select>
              </div>
              <div class="part">
                <label>To</label>
                <select required v-model="to_">
                  <option value="Eris">Eris</option>
                  <option value="Jupiter">Jupiter</option>
                  <option value="Mars">Mars</option>
                  <option value="Mercury">Mercury</option>
                  <option value="Neptune">Neptune</option>
                  <option value="Pluto">Pluto</option>
                  <option value="Saturn">Saturn</option>
                  <option value="Titan">Titan</option>
                  <option value="Uranus">Uranus</option>
                  <option value="Venus">Venus</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="part">
                <label>Date</label>
                <input v-model="date_" required type="date">
              </div>
              <div class="part">
                <label>Passengers</label>
                <input v-model="countOfPassengers_" min="1" max="10" required type="number">
              </div>
            </div>
            <div  class="row">
              <div class="part">
                <label>CVC</label>
                <input required type="text">
              </div>
              <div class="part">
                <label>Zip code</label>
                <input required type="text">
              </div>
            </div>
            <div>
              <input type="submit" v-bind:value="payValue">
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import gsap from "gsap";
  import firebase from "firebase";

  export default {
    name: "Modal",
    components: {

    },
    setup(){
      const beforeEnter = el => {
        el.style.opacity = 0
        el.style.marginRight =  1000
      }
      const enter = el => {
        gsap.to(el, {
          duration: 1.5,
          marginRight: 0,
          opacity: 1,
          ease: 'easeInOut'
        })
      }
      return { beforeEnter, enter }
    },
    data(){
      return{
        cardNumber: '',
        email: '',
        cvc: '',
        zipCode: '',
        from: 'Earth',
        to_: '',
        date_: new Date(),
        countOfPassengers_: 0,
        price: 0,
        planet: {}
      }
    },
    methods: {
      submit(){

      },
      close() {
        this.$emit('close');
        this.to_ = ''
        this.date_ = {}
        this.countOfPassengers_ = ''
      },
      init(){
        this.to_ = this.to
        this.date_ = this.date
        this.countOfPassengers_ = this.countOfPassengers
      }
    },
    watch:{
      async to_(value){
        if(value){
          const dbRefObject = firebase.database().ref('/planets');
          dbRefObject.on('value',  snap => {
            let planets = Object.values(snap.val())
            this.planet = planets.filter(planet => planet.name === value)[0]
            this.price = this.countOfPassengers_ * this.planet.price
          });
        }
      },
      countOfPassengers_(value){
        this.price = value * this.planet.price
      },
      price(value){
        this.payValue = 'Pay(' + '$' + value + ')'
      },
      submit(){
        let order = {

        }
        if(confirm('Are you sure?')){
          firebase.database().ref('/orders').push(order)
          alert('Success')
        }
      }
    },
    props: {
      to: String,
      date: Date,
      countOfPassengers: Number
    },
    mounted() {

    }
  }
</script>

<style scoped lang="css" src="../../public/styles/modal.css"></style>
