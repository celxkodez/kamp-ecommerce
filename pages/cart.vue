<template>
  <section class="pt-12 pb-24 overflow-hidden bg-blueGray-100">
    <div class="container px-4 mx-auto">
      <ul class="flex flex-wrap items-center mb-10 xl:mb-0">
        <li class="mr-6">
          <a
            class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
            href="#"
          >
            <span>Home</span>
            <svg
              class="ml-6"
              width="4"
              height="7"
              viewbox="0 0 4 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </li>
        <li class="mr-6">
          <a
            class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
            href="#"
          >
            <span>Store</span>
            <svg
              class="ml-6"
              width="4"
              height="7"
              viewbox="0 0 4 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            class="text-sm font-medium text-indigo-500 hover:text-indigo-600"
            href="#"
            >Your cart</a
          >
        </li>
      </ul>
      <div class="mb-8 pb-8 border-b border-gray-200 border-opacity-40">
        <h1 class="text-center text-9xl xl:text-10xl font-heading font-medium">
          Your cart
        </h1>
      </div>
      <div class="flex flex-wrap -mx-4 mb-14 xl:mb-24">
        <div class="w-full md:w-8/12 xl:w-9/12 px-4 mb-14 md:mb-0">
          <div class="py-12 px-8 md:px-12 bg-white rounded-3xl">
            <span class="inline-block mb-16 text-darkBlueGray-300 font-medium"
              >3 products</span
            >
            <div class="xl:px-10">
              <div
                class="relative flex flex-wrap items-center xl:justify-between -mx-4 mb-8 pb-8 border-b border-gray-200 border-opacity-40"
              >
                <div class="relative w-full md:w-auto px-4 mb-6 xl:mb-0">
                  <a class="block mx-auto max-w-max" href="#">
                    <img
                      class="h-28 object-cover rounded-l-lg"
                      src="https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-49..v1668971764.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="w-full md:w-auto px-4 mb-6 xl:mb-0">
                  <a
                    class="block mb-5 text-xl font-heading font-medium hover:underline"
                    href="#"
                    >Apple iPhone 12 Pro (128GB)</a
                  >
                  <div class="flex flex-wrap">
                    <p class="mr-4 text-sm font-medium">
                      <span class="font-heading">Color:</span>
                      <span class="ml-2 text-gray-400">Silver</span>
                    </p>
                    <p class="text-sm font-medium">
                      <span>Memory storage:</span>
                      <span class="ml-2 text-gray-400">128GB</span>
                    </p>
                  </div>
                </div>

                <div class="flex justify-between items-center mb-6 w-full">
                  <div
                    class="px-3 py-2 w-[40%] justify-between text-center flex bg-white"
                  >
                    <button
                      @click="productQuantity--"
                      class="border-2 border-blue-500 rounded text-blue-500 hover:text-white hover:bg-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <input
                      v-model="productQuantity"
                      type="number"
                      class="number-input w-10 outline-none focus:none"
                    />
                    <button
                      @click="productQuantity++"
                      class="border-2 border-blue-500 rounded text-blue-500 hover:text-white hover:bg-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  </div>
                  <h2 class="text-xl font-medium text-blue-500">$544.90</h2>
                </div>

                <button
                  class="absolute top-0 right-0 lg:mt-6 lg:-mr-4 text-blue-500 hover:text-blue-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="currentColor"
                      d="M416 80h-88V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v32H32c-17.7 0-32 14.3-32 32v32c0 8.8 7.2 16 16 16h16v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V176h16c8.8 0 16-7.2 16-16v-32c0-17.7-14.3-32-32-32zm-64-32h-96v-32h96v32zm-192 0v-32h96v32h-96zm176 464H96V176h256v336z"
                    ></path>
                  </svg>

                  REMOVE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12 xl:w-3/12 px-4">
          <div class="mb-14">
            <h2 class="mb-7 md:mt-6 text-3xl font-heading font-medium">
              Cart summary
            </h2>
            <div
              class="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl"
            >
              <span>Subtotal</span>
              <span class="flex items-center text-xl">
                <span class="mr-2 text-base">$</span>
                <span>710,70</span>
              </span>
            </div>
            <div
              class="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl"
            >
              <span>Shipping</span>
              <span class="flex items-center text-xl">
                <span class="mr-2 text-base">$</span>
                <span>10,00</span>
              </span>
            </div>
            <div
              class="flex items-center justify-between py-4 px-10 mb-6 leading-8 bg-white font-heading font-medium rounded-3xl"
            >
              <span>Total</span>
              <span class="flex items-center text-xl text-blue-500">
                <span class="mr-2 text-base">$</span>
                <span>720,70</span>
              </span>
            </div>
            <a
              class="inline-block w-full lg:w-auto py-5 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
              href="#"
              >Checkout</a
            >
          </div>
          <div class="text-center md:text-left">
            <img
              class="block mb-9 mx-auto md:ml-0"
              src="uinel-assets/images/ecommerce-cart/procents.svg"
              alt=""
            />
            <h4 class="mb-5 text-8xl font-heading font-medium">Shipping</h4>
            <p class="lg:pr-10 text-lg text-darkBlueGray-300">
              The nulla commodo, commodo eros.
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-96">
        <a
          class="block py-5 px-10 w-full text-xl leading-6 font-medium tracking-tighter font-heading text-center bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
          href="#"
          >Back to shop</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      productQuantity: 1,
    };
  },
};
</script>

<style>
.number-input::-webkit-inner-spin-button,
.number-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
