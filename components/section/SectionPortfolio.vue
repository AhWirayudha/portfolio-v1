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
    <div class="relative grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div
        class="h-fit max-w-lg rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
      >
        <a href="#">
          <img
            class="rounded-t-lg"
            src="/assets/images/hcm_dashboard.png"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            >
              HCM Recruitment Dashboard
            </h5>
          </a>
          <p
            class="mb-3 text-justify text-base font-normal text-gray-700 dark:text-gray-400"
          >
            HCM Recruitment Dashboard is an application for viewing recruitment
            data in chart form to make it easier to read the data. This
            application is built using HTML, CSS, JavaScript and ChartJs.
          </p>
        </div>
      </div>
      <div
        class="grid h-fit max-w-lg grid-cols-2 rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
      >
        <a href="#">
          <img
            class="rounded-t-lg"
            src="/assets/images/appsheetrengel.png"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            >
              AppSheet Rengel Tuban
            </h5>
          </a>
          <p
            class="mb-3 text-justify text-base font-normal text-gray-700 dark:text-gray-400"
          >
            AppSheet Rengel Tuban is a monitoring application for the work of
            the public works department in the Rengel area of Tuban Regency.
            This application is built using Laravel.
          </p>
        </div>
      </div>
      <div
        class="grid h-fit max-w-lg grid-cols-2 rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
      >
        <a href="#">
          <img class="rounded-t-lg" src="/assets/images/porgan.jpg" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Poros Ganjaran
            </h5>
          </a>
          <p
            class="mb-3 text-justify text-base font-normal text-gray-700 dark:text-gray-400"
          >
            Poros Ganjaran is an Android-based mobile application built with
            React Native. This application is a monitoring activity of Poros
            Ganjaran volunteers during the 2024 presidential election.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
