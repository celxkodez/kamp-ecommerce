<template>
  <ClientOnly>
    <section
      style="background: #eeeeee"
      class="pt-24 pb-32 overflow-hidden bg-blueGray-100"
    >
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
        <div class="mb-10 pb-8 border-b-4 border-gray-500 border-opacity-40">
          <h1 class="text-center text-5xl xl:text-10xl font-heading font-medium">
            Cart
          </h1>
        </div>
        <div class="flex flex-wrap mb-0 md:mb-14">
          <div
            class="w-full md:w-8/12 xl:w-9/12 p-8 md:p-10 mb-14 md:mb-0 bg-white rounded-3xl"
          >
            <h3 class="mb-10 text-darkBlueGray-300 font-medium">{{totalItems}} products</h3>
            <div class="max-h-[85vh] w-full overflow-y-auto no-scrollbar">
              <div v-for="(item, index) in cartItems" :key="item.product.id" class="mb-8 pb-2 border-b-2 border-gray-200">
                <div class="flex w-full flex-col md:flex-row mb-4">
                  <img
                    class="h-40 w-full md:w-[38%] object-cover rounded-lg"
                    src="https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-49..v1668971764.jpg"
                    alt=""
                  />
                  <div class="w-full md:w-[60%] md:px-4">
                    <a
                      class="block text-xl font-heading font-medium hover:text-blue-500"
                      href="#"
                    >{{ item.product.name }}
                    </a>
<!--                    <div class="flex flex-wrap my-3">-->
<!--                      <p class="mr-4 text-sm font-medium">-->
<!--                        Color:-->
<!--                        <span class="ml-2 text-gray-400">Silver</span>-->
<!--                      </p>-->
<!--                      <p class="text-sm font-medium">-->
<!--                        Memory storage:-->
<!--                        <span class="ml-2 text-gray-400">128GB</span>-->
<!--                      </p>-->
<!--                    </div>-->
                    <h2 class="text-sm font-medium text-gray-400 mb-3">
                      In Stock
                    </h2>
                    <h2 class="text-xl font-medium text-blue-500">KES {{item.product.price ?? 0}}</h2>
                  </div>
                </div>

                <div class="flex justify-between items-center mb-6 w-full">
                  <button
                    @click="removeItem(item)"
                    class="text-blue-500 flex items-center hover:text-blue-600 font-semibold"
                  >
                    <span class="material-icons">delete</span>
                    REMOVE
                  </button>
                  <div class="justify-between text-center flex bg-white">
                    <button
                      @click="mutateQuantity(index, 'decrement')"
                      class="border-2 border-blue-500 rounded text-blue-500 hover:text-white hover:bg-blue-500 mr-3"
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
                      v-model="item.quantity"
                      type="number"
                      class="number-input w-6 outline-none focus:none"
                    />
                    <button
                      @click="mutateQuantity(index, 'increment')"
                      class="border-2 border-blue-500 rounded text-blue-500 hover:text-white hover:bg-blue-500 ml-3"
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
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12 xl:w-3/12 px-8 mb-8">
            <h2 class="mb-7 md:mt-6 text-3xl font-heading font-medium">
              Cart summary
            </h2>
<!--            <div-->
<!--              class="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl"-->
<!--            >-->
<!--              <p>Total Amount</p>-->
<!--              <p class="flex items-center text-xl">-->
<!--                <span class="mr-2">$</span>-->
<!--                {{ totalAmount }}-->
<!--              </p>-->
<!--            </div>-->
<!--            <div-->
<!--              class="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-medium rounded-3xl"-->
<!--            >-->
<!--              <p>Shipping</p>-->
<!--              <p class="flex items-center text-xl">-->
<!--                <span class="mr-2">$</span>-->
<!--                10,00-->
<!--              </p>-->
<!--            </div>-->
            <div
              class="flex w-full items-center justify-between bg-white py-4 px-10 mb-6 rounded-3xl"
            >
              <p class="font-semibold">Total</p>

              <p class="flex items-center font-semibold text-xl text-blue-500">
                <span class="mr-2">KES</span>{{ totalAmount }}
              </p>
            </div>
            <a
              class="inline-block w-full py-3 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
              href="/checkout"
              type="button"
            >Checkout</a>
          </div>
        </div>
        <div class="md:w-96">
          <a
            class="block py-5 px-10 w-full text-xl leading-6 font-medium tracking-tighter font-heading text-center bg-white hover:bg-blue-600 hover:text-white rounded-xl"
            href="/products"
          >Back to shop</a
          >
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
      open: true,
      cartItems: [],
      productQuantity: 1,
    };
  },
  watch: {
    cartItems: {
      handler(val){
        localStorage.setItem('cartItems', JSON.stringify( this.cartItems))
      },
      deep: true
    }
  },
  created() {
    if (process.client) {
      this.cartItems = JSON.parse(localStorage.getItem('cartItems')) ?? []
    }
  },
  computed: {
    totalItems() {
      if (process.client) {
        return (JSON.parse(localStorage.getItem('cartItems')) ?? []).length
      }

      return 0;
    },
    totalAmount() {
      let totalAmount = 0;
      this.cartItems.forEach(order => {
        totalAmount += order.quantity * (order.product.price ?? 0)
      })

      return totalAmount
    }
  },
  methods: {
    removeItem(item) {
      this.cartItems = this.cartItems.filter(order => order.product.id !== item.product.id)

      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },
    mutateQuantity(index, direction) {
      if (direction === 'increment') {
        this.cartItems[index].quantity += 1
      } else {
        this.cartItems[index].quantity -= 1
      }
      if (this.cartItems[index].quantity < 1) {
        this.cartItems = this.cartItems.filter(item => item.quantity > 0)
      }
    },
  }
};
</script>

<style>
.number-input::-webkit-inner-spin-button,
.number-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
