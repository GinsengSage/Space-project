<template>
  <div class="main">
    <video src="/video/about-video.mp4" autoplay loop playsinline muted></video>
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

<style scoped src="../../public/styles/about.css"></style>
