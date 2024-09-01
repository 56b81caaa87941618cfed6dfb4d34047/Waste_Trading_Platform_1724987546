<!-- 
INSTRUCTION: Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
INSTRUCTION: It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
-->

<template>
  <section id="cta-section-container" style="min-height: 430px" class="bg-gradient-to-br from-pink-500 via-purple-600 to-black min-h-screen flex items-center justify-center">
    <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6">
      <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg shadow-lg">

        <!-- Radial gradient -->
        <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
          <div id="radial-gradient-outer" class="bg-pink-500 absolute inset-0 translate-z-0 rounded-full blur-[120px] opacity-70"></div>
          <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-[40px] bg-purple-400"></div>
        </div>

        <!-- Blurred shape -->
        <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stop-color="#FF69B4" />
                <stop offset="100%" stop-color="#8A2BE2" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>

        <!-- Content -->
        <div id="content" class="max-w-3xl mx-auto text-center">
          <div id="content-subtitle" class="flex justify-center">
            <span class="inline-block px-4 py-1 mb-4 text-sm font-semibold text-pink-300 bg-pink-900 bg-opacity-50 rounded-full">Join the secret ninja clan today!</span>
          </div>
          <div class="flex justify-center" id="content-title-container">
            <h2 class="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">Shadow to Stealth: Your One-Stop Ninja Training</h2>
          </div>
          <div class="flex justify-center" id="content-body-container">
            <p class="text-xl text-pink-100 mb-8">Transform your skills into ninja mastery! Our innovative dojo connects aspiring ninjas with masters, trainers, and legendary shinobi.</p>
          </div>
          <div class="flex justify-center">
            <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Waste_Trading_Platform_1724987546/main/images/93a40a64340b4aa9933e9aefd619c0ef.jpeg" alt="Ninja Training" class="mb-4 rounded-lg" />
          </div>
          <a id="content-cta-button" href="#0" class="inline-flex items-center px-6 py-3 text-lg font-medium text-purple-900 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full hover:from-pink-400 hover:to-purple-400 transition duration-300 ease-in-out transform hover:scale-105">
            Begin Training
            <span id="content-cta-arrow" class="ml-2">
              <i class='bx bx-right-arrow-alt'></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PurpleBackgroundCtaComponent",
  data() {
    return {
      expanded: false,
      tab: null
    };
  }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>