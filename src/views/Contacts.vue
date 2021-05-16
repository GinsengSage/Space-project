<template>
  <div class="main">
    <div class="image-container">
      <div class="form-container">
        <form @submit.prevent="submit">
          <div>
            <label>Name</label>
            <input v-model="name" type="text" required>
          </div>
          <div>
            <label>Email</label>
            <input pattern="^\w+([\.\w]+)*\w@\w((\.\w)*\w+)*\.\w{2,3}$" v-model="email" type="text" required>
          </div>
          <div>
            <label>Theme</label>
            <input v-model="theme" type="text" required>
          </div>
          <div>
            <label>Message</label>
            <textarea v-model="text"></textarea>
          </div>
          <div>
            <input value="Send" type="submit" required>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Footer from "../components/Footer";
  import firebase from "firebase";
  export default {
    name: "Contacts",
    components: {Footer},
    data(){
      return{
        name: '',
        email: '',
        theme: '',
        text: ''
      }
    },
    methods: {
      submit(){
        let message = {
          name: this.name,
          email: this.email,
          theme: this.theme,
          text: this.text
        }
        firebase.database().ref('/messages').push(message)
        alert('Email was sended.')
      }
    }
  }
</script>

<style scoped src="../../public/styles/contacts.css"></style>
