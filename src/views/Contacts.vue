<template>
  <div class="main">
    <div class="image-container">
      <div class="form-container">
        <form>
          <div>
            <label>Name</label>
            <input type="text">
          </div>
          <div>
            <label>Email</label>
            <input type="text">
          </div>
          <div>
            <label>Theme</label>
            <input type="text">
          </div>
          <div>
            <label>Message</label>
            <input type="text">
          </div>
          <div>
            <input value="Send" type="submit">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Contacts"
  }
</script>

<style scoped>
  @import "/styles/contacts.css";
  .main{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #000;
  }
  form div{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0;
  }
  input{
    font-size: 17px;
    font-family: Roboto;
    padding: 10px;
    margin: 0 5px;
    color: #000;
    border-radius: 2px;
    border:none;
    outline: none;
  }
  form{
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
