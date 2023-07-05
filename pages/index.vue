<template>
  <div class="items-center justify-center">
    <section
      class="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden"
      style="background: #eeeeee"
    >
      <div class="container px-4 mx-auto">
        <section class="bg-gray-200 py-10">
          <div class="container mx-auto">
            <h1 class="text-4xl font-bold text-center mb-4">Welcome!</h1>
            <p class="text-lg text-center">
              Discover a wide range of products at great prices.
            </p>
          </div>
        </section>

        <!-- Product Grid -->
        <section class="py-10">
          <div
            class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            <!-- Product Card -->
            <div class="bg-white rounded-lg cursor-pointer shadow-lg">
              <img
                src="https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-49..v1668971764.jpg"
                alt="Product Image"
                class="w-full h-48 rounded-t-lg object-cover"
              />
              <div class="p-4">
                <h2 class="text-xl font-bold mb-1">Product Title</h2>
                <p class="text-gray-700 text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  aut a quasi porro, maiores ea exercitationem explicabo commodi
                  quod perferendis quisquam at natus mollitia tempora, animi
                  nostrum repellendus. Et, dolores.
                </p>
                <div class="flex justify-between items-center mt-4">
                  <h4 class="font-bold text-lg">$19.99</h4>
                  <button
                    class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    onclick="openCheckoutModal()"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <!-- Repeat the product card markup for each product -->
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "app",
  created() {
    this.$router.push('/products')
  }
};
</script>
