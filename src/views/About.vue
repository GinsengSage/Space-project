<template>
  <div class="main">
    <video src="../../public/video/about-video.mp4" autoplay loop playsinline muted></video>
    <div class="content-container">
      <div class="line">
        <div>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, molestiae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, nam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cupiditate doloribus enim impedit nostrum, optio perferendis quia repellat soluta?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aut eligendi modi quae quo sunt vero vitae. Facere, nesciunt?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, molestiae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, nam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cupiditate doloribus enim impedit nostrum, optio perferendis quia repellat soluta?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aut eligendi modi quae quo sunt vero vitae. Facere, nesciunt?
          </p>
        </div>
      </div>
      <div class="line">
        <button class="link-btn">
          <router-link tag="a" to="/tours">Get started</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped>
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1000;
  }
  .content-container{
    background: rgba(0, 0, 0, .1);
    width: 100vw;
    height: 100vh;
    color:#fff;
    padding: 17% 10%;
  }
  .line{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .line:last-child{
    justify-content: flex-start;
  }
  .line div{
    width: 55%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    font-family: Roboto;
  }
  .line h1{
    font-family: "Roboto Medium";
    margin-bottom: 20px;
    font-size: 50px;
  }
  .line p{
    overflow: auto;
  }
  .link-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 56px;
    background: #2211E2;
    border-radius: 28px;
    margin-top: 100px;
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
</style>
