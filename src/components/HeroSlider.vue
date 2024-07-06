<template>
  <div
    ref="slider"
    id="slider"
    class="inspiro-slider slider-fullscreen dots-creative"
    :data-fade="true"
  >
    <!-- Slide 1 -->
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :class="['slide', { kenburns: slide.kenburns }]"
      :style="{
        backgroundImage: `url(${slide.bgImage})`,
      }"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="slide-captions text-center text-light">
          <!-- Captions -->
          <div>
            <h1 data-caption-animate="zoom-out">
              {{ slide.title }}
            </h1>
            <p>
              {{ slide.description }}
            </p>
            <div>
              <a href="#welcome" class="btn btn-primary scroll-to">
                Explore more
              </a>
            </div>
          </div>
          <!-- end: Captions -->
        </div>
      </div>
    </div>
    <!-- end: Slide 1 -->
  </div>
</template>

<script>
import Flickity from "flickity";
import notgeneric_bg3 from "@/assets/images/slider/notgeneric_bg3.jpg";
import bgVideo from "@/assets/video/pexels-waves.mp4";

export default {
  data() {
    return {
      slides: [
        {
          kenburns: true,
          bgImage: notgeneric_bg3,
          title: "WELCOME TO THE WORLD OF POLO",
          description:
            "Say hello to the smartest and most flexible bootstrap template. Polo is a powerful template that can build any type of websites, and quite possibly the only one you will ever need.",
        },
        {
          kenburns: false,
          bgImage: bgVideo,
          title: "220+ Layout Demos",
          description:
            "POLO is packed with 220+ pre-made layouts that allow you to quickly jumpstart your project. Completely customizable for creating your own designs.",
        },
      ],
      flickityInstance: null,
    };
  },
  mounted() {
    this.initFlickity();
  },
  methods: {
    initFlickity() {
      try {
        const sliderElement = this.$refs.slider;

        if (sliderElement) {
          this.flickityInstance = new Flickity(sliderElement, {
            cellSelector: ".slide",
            prevNextButtons: true,
            pageDots: true,
            fade: true,
            draggable: true,
            freeScroll: false,
            wrapAround: true,
            groupCells: false,
            autoPlay: 7000,
            pauseAutoPlayOnHover: true,
            adaptiveHeight: false,
            selectedAttraction: 0.07,
            friction: 0.9,
            initialIndex: 0,
            accessibility: true,
            setGallerySize: true,
            resize: true,
            cellAlign: "left",
            rightToLeft: false,
          });

          this.flickityInstance.on("ready", this.onSliderReady);
          this.flickityInstance.on("change", this.onSliderChange);
          this.flickityInstance.on("select", this.onSlideSelect);
          this.flickityInstance.on("dragStart", this.onDragStart);

          console.log("FLICKITY INITIALIZED");
        } else {
          console.error("Slider element not found.");
        }
      } catch (error) {
        console.error("Error initializing Flickity:", error);
      }
    },
    onSliderReady() {
      console.log("Slider ready");
      this.slides.forEach((slide, index) => {
        if (slide.kenburns && this.flickityInstance.cells[index]) {
          const bgImage = slide.bgImage || "";
          const kenburnsBg = document.createElement("div");
          kenburnsBg.classList.add("kenburns-bg");
          kenburnsBg.style.backgroundImage = `url(${bgImage})`;
          this.flickityInstance.cells[index].element.prepend(kenburnsBg);
        }
      });
      this.adjustSliderHeight();
    },
    onSliderChange() {
      console.log("Slider changed");
      this.stopKenburns();
      this.adjustSliderHeight();
    },
    onSlideSelect() {
      console.log("Slide selected");

      const selectedSlide = this.flickityInstance.selectedElement;
      const video = selectedSlide.querySelector("video");
      if (video) {
        video.play();
        this.flickityInstance.options.autoPlay = video.duration * 1000;
      } else {
        this.flickityInstance.options.autoPlay = 7000;
      }
      this.wrapAroundStop();
      this.startKenburns();
    },
    onDragStart() {
      console.log("Drag started");
      const slides = this.$refs.slider.querySelectorAll(".slide");
      slides.forEach((slide) => {
        if (slide !== this.flickityInstance.selectedElement) {
          this.hideCaptions(slide);
        }
      });
    },
    hideCaptions(slideElement) {
      // Example implementation, adjust as per your needs
      const captions = slideElement.querySelectorAll(".slide-captions");
      captions.forEach((caption) => {
        caption.style.display = "none";
      });
    },
    stopKenburns() {
      console.log("Stopping kenburns");
      // Stop any ongoing kenburns animations
    },
    startKenburns() {
      console.log("Starting kenburns");
      // Start kenburns animations
    },
    wrapAroundStop() {
      console.log("Checking wrap around stop");
      if (
        this.flickityInstance.selectedIndex ===
        this.flickityInstance.slides.length - 1
      ) {
        this.disableAutoplay();
      }
    },
    disableAutoplay() {
      console.log("Disabling autoplay");
      this.flickityInstance.stopPlayer();
      this.flickityInstance.off("select", this.wrapAroundStop);
    },
    adjustSliderHeight() {
      console.log("Adjusting slider height");
      // Adjust slider height as needed
    },
  },
};
</script>

<style scoped>
/* Component-specific styles */
.kenburns-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.5;
}
</style>
