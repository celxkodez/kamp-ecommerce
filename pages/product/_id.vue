<template>
  <ClientOnly>
    <section
      class="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden"
      style="background: #eeeeee"
    >
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap lg:mt-10">
          <div class="w-full px-4">
            <ul class="flex flex-wrap items-center mb-9">
              <li class="mr-6">
                <a
                  class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                  href="/"
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
                  href="/products"
                >
                  <span>Products</span>
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
                  >{{ product.name }}</a
                >
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div class="flex flex-col items-center">
              <div class="w-full mb-5 lg:h-[45vh] px-4">
                <img
                  class="w-full mb-4 rounded-lg h-full"
                  :src="selectedImage"
                  alt=""
                />
                <p class="text-sm text-gray-300 md:hidden">
                  Roll over image to zoom in
                </p>
              </div>

              <div
                class="w-full px-4 justify-between flex items-center justify-center"
              >
                <a
                  class="inline-block mx-3 transform -rotate-90 hover:text-darkBlueGray-400"
                  href="#"
                  @click="prevImage"
                >
                  <svg
                    width="12"
                    height="8"
                    viewbox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                  >
                    <path
                      d="M1.54064 7.21015C1.18719 7.59662 0.615928 7.59662 0.265087 7.21015C-0.087058 6.82369 -0.0896663 6.19929 0.265087 5.81282L5.36206 0.289847C5.71421 -0.0966173 6.28416 -0.0966172 6.63892 0.289847L11.7359 5.81282C12.088 6.19785 12.088 6.82369 11.7359 7.21015C11.3824 7.59662 10.8112 7.59662 10.4603 7.21015L5.99853 2.68073L1.54064 7.21015Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>

                <div class="flex overflow-x-auto w-30">
                  <div
                    @click="selectImage(image)"
                    v-for="(image, index) in productImages"
                    :key="index"
                    class="h-20 w-20 mx-2 cursor-pointer"
                    href="#"
                  >
                    <img class="h-full rounded-xl w-full" :src="image" alt="" />
                  </div>
                </div>

                <a
                  class="mx-3 transform -rotate-90 hover:text-darkBlueGray-400"
                  href="#"
                  @click="nextImage"
                >
                  <svg
                    width="12"
                    height="8"
                    viewbox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                  >
                    <path
                      d="M10.4594 0.289849C10.8128 -0.0966154 11.3841 -0.0966154 11.7349 0.289849C12.0871 0.676313 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880364 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.0966159 1.53966 0.289848L6.00147 4.81927L10.4594 0.289849Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-4">
            <div class="max-w-md mb-2">
              <h4 class="text-sm mb-3 text-gray-400 tracking-wider">Product</h4>
              <h2
                class="mb-3 text-5xl md:text-7xl lg:text-4xl font-heading font-medium"
              >
                {{ product.name }}
              </h2>
              <p class="text-3xl text-blue-500 font-medium mb-2">$44.90</p>
              <p class="text-lg text-gray-600">
                {{ product.description }}
              </p>
            </div>
            <div class="flex mb-3 items-center">
              <button
                v-for="index in stars"
                :key="index"
                class="mr-3"
                @click="rate(index + 1)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  :class="{ active: index < currentRating }"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                    :fill="index < currentRating ? activeColor : inactiveColor"
                  ></path>
                </svg>
              </button>

              <span class="text-md text-gray-400"
                >{{ currentRating - 1 }}.0</span
              >
            </div>
            <div class="mb-6">
              <h4 class="mb-3 font-heading font-medium">
                Color:
                <span class="text-gray-600 ml-1">Silver</span>
              </h4>
              <div class="flex">
                <button
                  v-for="(color, index) in productColors"
                  :key="index"
                  class="mr-2 border border-gray-300 rounded-full p-1"
                >
                  <div
                    class="h-6 w-6 rounded-full"
                    :class="`bg-${color}`"
                  ></div>
                </button>
              </div>
            </div>
            <div class="flex justify-between items-center mb-6">
              <div
                class="px-3 py-2 w-[40%] justify-between text-center flex bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
              >
                <button @click="productQuantity--">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6 text-blue-500 hover:text-blue-600"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <input
                  v-model="productQuantity"
                  type="number"
                  class="number-input w-10 outline-none focus:none"
                />
                <button @click="productQuantity++">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6 text-blue-500 hover:text-blue-600"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
              <div
                class="hover:bg-opacity-60 bg-white rounded-full p-2 flex justify-center items-center cursor-pointer"
              >
                <svg
                  width="23"
                  height="22"
                  viewbox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="flex justify-center items-center w-full">
              <a
                class="p-2 w-full text-center justify-center flex items-center font-medium text-xl text-white text-center bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-800 rounded-xl"
                href="#"
              >
                <span class="material-icons mr-2"> shopping_cart </span>
                ADD TO CART</a
              >
            </div>
          </div>
        </div>
        <div class="w-full bg-white drop-shadow-lg mt-10 rounded-lg">
          <h2 class="border-b-2 p-6 border-gray-400 text-xl">
            Product details
          </h2>
          <div class="w-full p-6">
            <p class="font-normal text-gray-600">
              <span class="font-bold text-gray-700">iPhone 12pro: </span>Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              expedita cumque neque quas, repellat sit perferendis perspiciatis
              reiciendis et harum excepturi quibusdam, asperiores possimus
              corrupti voluptatibus modi nihil non odit!
            </p>
            <div class="w-full">
              <h4 class="font-bold text-gray-700">Description:</h4>
              <ul class="list-disc mx-6">
                <li>
                  Super good service：we use only the highest-grade materials,
                  so we do have the confidence to provide industry-leading 3
                  years warranty.
                </li>
                <li>
                  High-speed Charging：Outpace your mates and charge 1.4x faster
                  through our exclusive UPower+ technology. Support charging and
                  discharging simultaneously.
                </li>
              </ul>
            </div>
            <div class="w-full">
              <h4 class="font-bold text-gray-700">General specs:</h4>
              <ul class="list-disc mx-6">
                <li>Brand: Floveme</li>
                <li>Model: P2W</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ClientOnly>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "app",

  data() {
    return {
      product: {},
      productImages: [
        "https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-49..v1668971764.jpg",
        "https://media.wired.com/photos/62d75d34ddaaa99a1df8e61d/master/w_2560%2Cc_limit/Phone-Camera-Webcam-Gear-GettyImages-1241495650.jpg",
        "https://i.pcmag.com/imagery/roundups/02YK0Taryq7yVkwdYcgZ7TJ-14..1611339380.jpg",
        "https://www.cnet.com/a/img/resize/06d2cf640e9d9dadd9fdd675699d16d91b0365b4/hub/2022/09/17/1b245795-b741-44b7-be8a-5f41eefdb310/20220916-iphone-14-pro-01.jpg?auto=webp&fit=crop&height=360&width=640",
      ],
      selectedImage:
        "https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-49..v1668971764.jpg",
      currentRating: 0,
      stars: [1, 2, 3, 4, 5],
      activeColor: "#FFD700",
      inactiveColor: "#C1C9D3",
      productColors: ["white", "orange-800", "blue-900", "yellow-500"],
      productQuantity: 1,
    };
  },

  methods: {
    rate(rating) {
      this.currentRating = rating;
    },
    selectImage(src) {
      this.selectedImage = src;
    },
    nextImage() {
      const currentIndex = this.productImages.findIndex(
        (image) => image === this.selectedImage
      );
      const nextIndex = (currentIndex + 1) % this.productImages.length;
      this.selectedImage = this.productImages[nextIndex];
    },

    prevImage() {
      const currentIndex = this.productImages.findIndex(
        (image) => image === this.selectedImage
      );
      const nextIndex = (currentIndex - 1) % this.productImages.length;
      this.selectedImage = this.productImages[nextIndex];
    },
  },
  async created() {
    const productResponse = await this.$axios.get(
      `/shop/product/${this.$route.params.id}`
    );

    if (!productResponse.data.status) {
      throw { statusCode: 404, message: productResponse.data?.message };
    }
    this.product = productResponse.data.data;
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
