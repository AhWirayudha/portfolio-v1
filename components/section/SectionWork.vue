<template>
  <section
    class="relative flex min-h-screen w-full flex-col items-center overflow-y-auto bg-white p-4"
  >
    <div
      class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
    />
    <div class="relative p-4">
      <h1 class="text-6xl font-bold">Work Experience</h1>
      <p class="mt-4 text-xl">
        A journey of growth, challenges, and achievements that define
        professional excellence.
      </p>
    </div>
    <div class="relative items-center gap-4 p-4">
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li class="mb-10 ms-4">
          <div
            class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
          />
          <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >February 2022</time
          >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Application UI code in Tailwind CSS
          </h3>
          <p
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          >
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
          <a
            href="#"
            class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >Learn more
            <svg
              class="ms-2 h-3 w-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li class="mb-10 ms-4">
          <div
            class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
          />
          <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >March 2022</time
          >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Marketing UI design in Figma
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li class="ms-4">
          <div
            class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
          />
          <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >April 2022</time
          >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            E-Commerce UI code in Tailwind CSS
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
