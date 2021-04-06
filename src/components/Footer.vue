<template>
  <div class="footer-container">
    <footer>
      <p> </p>
      <p>Sivchik Denis 2021</p>
      <div>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footer-container{
    width: 90%;
  }
  footer{
    padding: 10px 0;
    width: 100%;
    display: flex;
    font-family: Roboto;
    color: #fff;
    justify-content: space-between;
  }
  footer div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  footer div i {
    margin: 0 5px;
    cursor: pointer;
  }
  footer div i:hover{
    color: #2211E2;
  }
</style>
