<template>
  <div>
    <ClientOnly>
      <!--    Desktop Navigation-->
      <nav
        class="bg-white hidden sm:block dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
      >
        <div
          class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
          <a href="/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 mr-3"
              alt="Kamp Logo"
            />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >Kamp</span
            >
          </a>
          <div class="flex md:order-2">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <a
                  href="/"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="/products"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Products</a
                >
              </li>
              <li>
                <a
                  href="/cart"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Cart</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!--    Mobile Navigation-->
      <nav
        class="left-0 right-0 fixed sm:hidden bottom-0 w-full max-w-md px-7 py-10 mx-auto bg-transparent rounded-2xl shadow-xl"
      >
        <!-- Navigation Bar -->
        <div class="px-5 pt-3 bg-white shadow-lg rounded-2xl">
          <div class="flex flex-row space-x-1 items-center justify-center">
            <!-- Item #1 -->
            <div class="flex group">
              <a
                href="/"
                :class="
                  `p-2 hover:text-yellow-500 ` +
                  ($route.name === 'index'
                    ? 'text-yellow-500'
                    : 'text-gray-400')
                "
              >
                <span class="flex flex-col items-center">
                  <!-- Icon -->
                  <!--								<i class="mdi mdi-home-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700-->
                  <!--									transition-color duration-200">-->
                  <!--                </i>-->
                  <span
                    class="material-icons text-gray-500 group-hover:text-gray-700 transition-color duration-200"
                    >home</span
                  >

                  <!-- Text -->
                  <span class="text-xs mb-2 transition-all duration-200">
                    Home
                  </span>

                  <!-- Focus Dot -->
                  <template v-if="$route.name === 'index'">
                    <span
                      class="h-1 w-5 rounded-full bg-yellow-500 group-hover:bg-yellow-500 hover:h-3 hover:w-3 transition-all duration-150 delay-100"
                    ></span>
                  </template>
                  <template v-else>
                    <span
                      class="h-2 w-2 rounded-full group-hover:bg-yellow-500 transition-all duration-150 delay-100"
                    ></span>
                  </template>
                </span>
              </a>
            </div>

            <!-- Item #2 -->
            <div class="flex group">
              <a
                href="/products"
                :class="
                  `p-2 hover:text-yellow-500 ` +
                  ($route.name === 'products'
                    ? 'text-yellow-500'
                    : 'text-gray-400')
                "
              >
                <span class="flex flex-col items-center">
                  <!-- Icon -->
                  <span
                    class="material-icons text-gray-500 group-hover:text-gray-700 transition-color duration-200"
                    >shop</span
                  >
                  <!--								<i class="mdi mdi-compass-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700-->
                  <!--									transition-color duration-200"></i>-->

                  <!-- Text -->
                  <span class="text-xs mb-2 transition-all duration-200">
                    Products
                  </span>

                  <!-- Focus Dot -->
                  <template v-if="$route.name === 'products'">
                    <span
                      class="h-1 w-5 rounded-full bg-yellow-500 group-hover:bg-yellow-500 hover:h-3 hover:w-3 transition-all duration-150 delay-100"
                    ></span>
                  </template>
                  <template v-else>
                    <span
                      class="h-2 w-2 rounded-full group-hover:bg-yellow-500 transition-all duration-150 delay-100"
                    ></span>
                  </template>
                </span>
              </a>
            </div>

            <!-- Item #4 -->
            <div class="flex group">
              <a
                href="/cart"
                :class="
                  `p-2 hover:text-yellow-500 ` +
                  ($route.name === 'cart' ? 'text-yellow-500' : 'text-gray-400')
                "
              >
                <span class="flex flex-col items-center">
                  <!-- Icon -->
                  <!--								<i class="mdi mdi-basket-plus-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700-->
                  <!--									transition-color duration-200"></i>-->

                  <span
                    class="material-icons w-10 text-gray-500 group-hover:text-gray-700 transition-color duration-200"
                    >shopping_cart</span
                  >

                  <!-- Text -->
                  <span class="text-xs mb-2 transition-all duration-200">
                    Cart
                  </span>

                  <!-- Focus Dot -->
                  <template v-if="$route.name === 'cart'">
                    <span
                      class="h-1 w-5 rounded-full bg-yellow-500 group-hover:bg-yellow-500 hover:h-3 hover:w-3 transition-all duration-150 delay-100"
                    ></span>
                  </template>
                  <template v-else>
                    <span
                      class="h-2 w-2 rounded-full group-hover:bg-yellow-500 transition-all duration-150 delay-100"
                    ></span>
                  </template>
                </span>
              </a>
            </div>

            <!-- Item #5 -->
            <div class="flex group">
              <a href="#" class="p-2 text-gray-400 hover:text-yellow-500">
                <span class="flex flex-col items-center">
                  <!-- Icon -->
                  <!--                      <i class="mdi mdi-account-circle-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700-->
                  <!--                        transition-color duration-200"></i>-->
                  <!--                      <span class="material-icons account mx-1 text-gray-500 group-hover:text-gray-700 transition-color duration-200">account</span>-->

                  <span
                    class="material-icons text-gray-500 group-hover:text-gray-700 transition-color duration-200"
                    >account_circle</span
                  >
                  <!-- Text -->
                  <span class="text-xs mb-2 transition-all duration-200">
                    Account
                  </span>

                  <!-- Focus Dot -->
                  <span
                    class="h-2 w-2 rounded-full group-hover:bg-yellow-500 transition-all duration-150 delay-100"
                  ></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </ClientOnly>
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
