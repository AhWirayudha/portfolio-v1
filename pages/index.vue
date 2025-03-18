<template>
  <div class="flex min-h-screen flex-col">
    <main>
      <section
        class="relative flex h-screen w-full flex-col items-center bg-white"
      >
        <div
          class="absolute h-screen w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        />
        <div class="relative p-4">
          <h1 class="text-6xl font-bold">Work Experience</h1>
          <p class="mt-4 text-xl">
            A journey of growth, challenges, and achievements that define
            professional excellence.
          </p>
        </div>
        <div class="relative grid grid-cols-3 gap-4 p-4">
          <div class="card">
            <h2 class="card-title">Card title</h2>
            <p class="card-body">This is a card component.</p>
          </div>
          <div class="card">
            <h2 class="card-title">Card title</h2>
            <p class="card-body">This is a card component.</p>
          </div>
          <div
            class="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800"
          >
            <span
              class="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10"
            >
              <svg class="size-6 stroke-pink-700 dark:stroke-pink-500">
                <!-- ... -->
              </svg>
            </span>
            <div>
              <p class="text-gray-700 dark:text-gray-400">
                <span class="font-medium text-gray-950 dark:text-white"
                  >Tom Watson</span
                >
                mentioned you in
                <span class="font-medium text-gray-950 dark:text-white"
                  >Logo redesign</span
                >
              </p>
              <time class="mt-1 block text-gray-500" datetime="9:37"
                >9:37am</time
              >
            </div>
          </div>
          <div class="card-dark">
            <h3 class="card-title">Writes upside-down</h3>
            <p class="card-body">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
