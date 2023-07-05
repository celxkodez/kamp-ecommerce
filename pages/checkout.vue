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
            >Checkout</a
            >
          </li>
        </ul>
        <form @submit.prevent="checkout" class="text-center align-center mb-5">
          <div class="mb-10 pb-8 border-b-4 border-gray-500 border-opacity-40">
            <h1 class="text-center text-5xl xl:text-10xl font-heading font-medium">
              Checkout
            </h1>
          </div>
          <div class="sm:w-4/6 md:w-3/6 m-auto align-center text-center my-5">
            <h4 class="mb-7 md:mt-6 text-3xl font-heading font-medium">
              Contact Details
            </h4>
            <div class="text-start my-3">
              <label class="block">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Customer Name
                  </span>
                <input type="text" required v-model="customerName" name="customer_name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="No.6 Girls high School Close" />
              </label>
            </div>

            <div class="text-start my-3">
              <label class="block">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Customer Address
                  </span>
                <input type="text" required v-model="customerAddress" name="customer_address" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Celestine Stephen" />
              </label>
            </div>
          </div>
          <button
            class="inline-block sm:w-full md:w-3/6 py-3 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
            type="submit"
          >Checkout</button>
        </form>
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
      productQuantity: 1,
      customerName: '',
      customerAddress: '',
    };
  },
  computed: {
    totalItems() {
      if (process.client) {
        return (JSON.parse(localStorage.getItem('cartItems')) ?? []).length
      }

      return 0;
    },
    cartItems() {
      if (process.client) {
        return (JSON.parse(localStorage.getItem('cartItems')) ?? [])
      }

      return [];
    }
  },
  methods: {
    async checkout() {
      const orders = JSON.parse(localStorage.getItem('cartItems')) ?? [];
      const formData = {
        customer_name: this.customerName,
        customer_address: this.customerAddress,
        orders
      }
      if (orders.length) {
        const checkout = await this.$axios.post(`/shop/checkout`, formData);

        console.log(checkout)
        if (checkout.data.status) {
          this.$route.push('/products')
        }
      }
    }
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
