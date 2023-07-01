<template>
  <div class="items-center justify-center">
    <section class="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden" style="background: #EEEEEE">
      <div class="container px-4 mx-auto">
<!--        <section class="bg-gray-200 py-10">-->
<!--          <div class="container mx-auto">-->
<!--            <h1 class="text-4xl font-bold text-center mb-4">Welcome!</h1>-->
<!--            <p class="text-lg text-center">Discover a wide range of products at great prices.</p>-->
<!--          </div>-->
<!--        </section>-->

        <!-- Product Grid -->
        <section class="py-10">
          <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            <template v-for="product in products">
              <!-- Product Card -->
              <NuxtLink :to="`/product/${product.id}`">
                <div class="bg-white rounded-lg shadow-lg">
                  <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover">
                  <div class="p-4">
                    <h2 class="text-xl font-bold mb-2">{{product.name}}</h2>
                    <p class="text-gray-700 text-base">{{product.description}}</p>
                    <div class="flex justify-between items-center mt-4">
                      <span class="font-bold text-lg">$ {{ product.price ?? 0 }}</span>
                      <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onclick="openCheckoutModal()">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </NuxtLink>

              <!-- Repeat the product card markup for each product -->
            </template>

          </div>
        </section>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'app',
  data() {
    return {
      products: []
    }
  },
  async created() {
    const productsResponse = await this.$axios.get(`/shop/products`)

    this.products = productsResponse.data.data
  }
}
</script>
