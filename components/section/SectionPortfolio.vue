<template>
  <section class="relative flex min-h-screen w-full flex-col bg-white p-4">
    <div
      class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
    />
    <div class="relative p-4">
      <h1 class="text-6xl font-bold">Portfolio</h1>
      <p class="mt-4 text-xl">
        A showcase of passion, creativity, and results that speak louder than
        words.
      </p>
    </div>
    <div class="relative grid grid-cols-1 gap-4 p-4 lg:grid-cols-3">
      <div class="card">
        <h2 class="card-title">Card title</h2>
        <p class="card-body">This is a card component.</p>
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
</template>
