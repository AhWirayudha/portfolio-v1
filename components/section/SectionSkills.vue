<template>
  <section class="relative flex h-screen w-full flex-col bg-white p-4">
    <div
      class="absolute h-screen w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
    />
    <div class="relative p-4">
      <h1 class="text-6xl font-bold">Technical Skills</h1>
      <p class="mt-4 text-xl">
        A dynamic blend of expertise and innovation, turning challenges into
        opportunities.
      </p>
    </div>
    <div class="relative grid grid-cols-3 gap-4 p-4">
      <div class="card-dark">
        <h3 class="card-title">languages and Frameworks</h3>
        <div class="flex gap-4 py-4">
          <img
            src="/assets/images/javascript-svgrepo-com.svg"
            alt="javascript logo"
            class="h-8 w-8"
          />
          <img
            src="/assets/images/vue-9-logo-svgrepo-com.svg"
            alt="vuejs logo"
            class="h-8 w-8"
          />
          <img
            src="/assets/images/nuxt-svgrepo-com.svg"
            alt="nuxtjs logo"
            class="h-8 w-8"
          />
          <img
            src="/assets/images/typescript-official-svgrepo-com.svg"
            alt="typescript logo"
            class="h-8 w-8"
          />
        </div>
      </div>
      <div class="card-dark">
        <h3 class="card-title">databases</h3>
        <div class="flex gap-4 py-4">
          <img
            src="/assets/images/postgresql-svgrepo-com.svg"
            alt="postgresql logo"
            class="h-8 w-8"
          />
        </div>
      </div>
      <div class="card-dark">
        <h3 class="card-title">tools</h3>
        <div class="flex gap-4 py-4">
          <img
            src="/assets/images/rabbitmq-icon-svgrepo-com.svg"
            alt="rabbitmq logo"
            class="h-8 w-8"
          />
          <img
            src="/assets/images/docker-svgrepo-com.svg"
            alt="docker logo"
            class="h-8 w-8"
          />
          <img
            src="/assets/images/nodejs-icon-svgrepo-com.svg"
            alt="nodejs logo"
            class="h-8 w-8"
          />
        </div>
      </div>
    </div>
  </section>
</template>
