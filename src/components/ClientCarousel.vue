<template>
  <!-- CLIENTS -->
  <section class="p-t-60">
    <div class="container">
      <div class="heading-text heading-section text-center">
        <h2>CLIENTS</h2>
        <span class="lead">
          Our awesome clients we've had the pleasure to work with!
        </span>
      </div>
      <div ref="carousel" class="carousel client-logos">
        <div v-for="(client, index) in clients" :key="index">
          <a href="#"><img :alt="`Client ${index + 1}`" :src="client.src" /></a>
        </div>
      </div>
    </div>
  </section>
  <!-- end: CLIENTS -->
</template>

<script>
import Flickity from "flickity";
import imagesLoaded from "imagesloaded"; // Ensure imagesloaded is installed via npm
import client1 from "@/assets/images/clients/1.png";
import client2 from "@/assets/images/clients/2.png";
import client3 from "@/assets/images/clients/3.png";
import client4 from "@/assets/images/clients/4.png";
import client5 from "@/assets/images/clients/5.png";
import client6 from "@/assets/images/clients/6.png";
import client7 from "@/assets/images/clients/7.png";
import client8 from "@/assets/images/clients/8.png";
import client9 from "@/assets/images/clients/9.png";

export default {
  data() {
    return {
      clients: [
        { src: client1 },
        { src: client2 },
        { src: client3 },
        { src: client4 },
        { src: client5 },
        { src: client6 },
        { src: client7 },
        { src: client8 },
        { src: client9 },
      ],
    };
  },
  mounted() {
    this.initFlickity();
  },
  methods: {
    initFlickity() {
      const carouselElement = this.$refs.carousel;

      imagesLoaded(carouselElement, () => {
        new Flickity(carouselElement, {
          cellSelector: "div",
          prevNextButtons: false,
          pageDots: false,
          fade: false,
          draggable: true,
          freeScroll: false,
          wrapAround: true,
          groupCells: 1,
          autoPlay: 3000,
          pauseAutoPlayOnHover: true,
          adaptiveHeight: false,
          asNavFor: false,
          initialIndex: 0,
          accessibility: true,
          setGallerySize: true,
          resize: true,
          cellAlign: "left",
          rightToLeft: false,
          contain: true,
        });
        carouselElement.classList.add("carousel-loaded");
      });
    },
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.client-logos div {
  width: 150px; /* Adjust as needed */
  margin-right: 20px;
}
.client-logos img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
