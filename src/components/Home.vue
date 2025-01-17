<template>
  <div class="sticky" id="app">
    <div id="Home" class="top-0 w-0"></div>
    <div ref="intro"
         style="filter: blur(20px);"
         :style="{ filter: `brightness(${this.brightness}) blur(${this.blur *3}px)`  }"
         class="background-image duration-300 sticky h-screen flex items-center justify-center z-0">
      <div class="w-full h-full relative">
        <div class="absolute flex-col md:top-1/4 flex md:justify-center md:flex-row flex-nowrap w-full px-10">

          <hgroup class="max-md:pt-20 sm:text-3xl text-xl text-white" style=" text-shadow: 2px 2px 2px black;">
            <h1 class="max-sm:text-3xl text-5xl">Hoi dit is een klein voorbeeldje voor u. </h1>
            <h2 class="text-animaton max-sm:text-3xl text-5xl">gemaakt door <span>Julian</span>,</h2>
            <h3 class="max-sm:text-2xl text-3xl">nog een beetje tekst</h3>
          </hgroup>

          <div style="" class="cat-responsive absolute right-0 top-1/2">

          </div>
        </div>
      </div>

    </div>
  </div>

    <div class="">
      <div id="about"  class="border-t-2 bg-Custom2 border-Custom1 z-20 top-0 sticky max-sm:p-2 p-4">
        <div class="w-full flex items-center justify-center">
          <div>
            <h2 class="duration-200 w-min text-nowrap text-5xl max-sm:text-4xl text-white text-center"
                style=" text-shadow: 2px 2px 2px black;">
              Over mij
            </h2>
          </div>
        </div>
      </div>
      <div class=" z-10 top-0 bg-Custom2 font-sans flex flex-col sticky justify-evenly items-center">
          <div class="duration-200 text-2xl text-white max-sm:text-xl sm:p-2" style="max-width: 1002px;">
            <hgroup>
              <h2 class="mb-6">
                hier komt uw mogelijke tekst Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam architecto doloribus labore quaerat? Accusantium aliquid aut, corporis dolore expedita hic laborum nam numquam obcaecati praesentium rem soluta temporibus voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eos est nemo officia repellat? Accusamus assumenda ducimus fugiat, itaque labore molestias nihil nostrum odit omnis quibusdam quisquam quos sit velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi corporis, et in iusto labore neque perspiciatis quod tempora tenetur totam vel, veniam veritatis vitae voluptatem. Ad assumenda commodi error? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda dolores fugiat illum incidunt itaque minus neque, nihil numquam, odio perferendis, quasi recusandae sequi totam unde veniam voluptates! Expedita, sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, corporis cupiditate dicta exercitationem explicabo fugit harum hic illo laudantium maiores nihil, numquam quam, ratione recusandae sint soluta tempora temporibus vel?
              </h2>

              <h3 class="mb-20">
                en bijvoorbeeld een 2de paragraaf Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis laboriosam magnam magni quibusdam, saepe voluptatem? Inventore magnam nulla numquam vel. Et fuga itaque, omnis placeat repellat tempore ut voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur culpa debitis excepturi illo ipsam laborum maiores temporibus. Aliquid architecto at neque quasi qui. Debitis eum fugit officia quod tenetur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet culpa dolor, doloribus ducimus enim eos, fugit ipsa nobis nostrum, officiis omnis quis reiciendis sapiente ut voluptatem. Ab impedit maiores nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae blanditiis consequatur eaque eligendi exercitationem, iure necessitatibus nemo odit, officia perspiciatis provident quasi reprehenderit sapiente voluptate? Molestias nulla voluptas voluptatum.
              </h3>
            </hgroup>
          </div>
        </div>
    </div>
<photo-example></photo-example>
  <div class="border-t-2 bg-Custom2 border-Custom1 sticky z-20 min-h-full h-screen overflow-y-auto">
    <div>
      <div class="max-sm:p-2 p-10 pb-10">
        <div class="w-full flex items-center justify-center">
          <div>
            <h2 class="duration-200 w-min text-nowrap text-6xl max-sm:text-5xl text-white text-center mb-4"
                style=" text-shadow: 2px 2px 2px black;">
              Contact
            </h2>
          </div>
        </div>
      </div>
      <div class="font-sans flex flex-col justify-evenly items-center mb-4">
        <div class="duration-200 text-2xl text-white max-sm:text-xl sm:p-2" style="max-width: 1002px;">
          <hgroup>
            <h2 class="mb-6">
              hier komt uw mogelijke tekst
            </h2>

            <h3>
              en bijvoorbeeld een 2de paragraaf
            </h3>
          </hgroup>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, onUnmounted, defineComponent } from 'vue';
import PhotoExample from "./PhotoExample.vue";

export default defineComponent({
  components: {PhotoExample},

  setup() {
    const introElement = ref(null);
    const brightness = ref(1);
    const blur = ref(0);
    const updateBrightness = () => {
      if (!introElement.value) return;

      const rectangle = introElement.value.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      const elementHeight = rectangle.height;

      const visibleHeight = Math.min(
          rectangle.top,
          screenHeight
      ) - Math.max(rectangle.bottom, 0);
      const visibilityPercentage = Math.max(0, visibleHeight / elementHeight);

      // brightness.value = 0.20 + 0.80 * visibilityPercentage;
      brightness.value =  rectangle.top / 1000;
      blur.value = 1 - brightness.value;
      if (blur.value < 0) {
        blur.value = 0;
      }
      if (brightness.value > 1) {
        brightness.value = 1;
      }
      console.log(blur.value);
    };

    onMounted(() => {
      introElement.value = document.getElementById("about");
      window.addEventListener('scroll', updateBrightness);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', updateBrightness);
    });

    return {
      introElement,
      brightness,
      blur,
    };
  },
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
