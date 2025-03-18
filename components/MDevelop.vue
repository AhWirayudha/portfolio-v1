<template>
  <div
    class="group absolute top-10 flex h-10 w-20 items-center justify-center rounded-lg border-2 bg-gray-800 shadow-lg transition-all duration-300 hover:w-80 hover:bg-gray-700"
  >
    <!-- Icon (Default View) -->
    <div
      class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
        />
      </svg>
    </div>

    <!-- Full Content (Shown on Hover) -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <p class="card-title font-mono text-xs text-white">
        develop using nuxt3 & tailwindcss
      </p>
    </div>
  </div>
</template>
