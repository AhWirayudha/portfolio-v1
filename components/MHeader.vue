<script setup lang="ts">
import MDevelop from './MDevelop.vue';
</script>

<template>
  <header class="bg-gradient-to-b from-gray-900 to-white px-8 py-2 text-white">
    <div class="grid grid-cols-2 items-center gap-6">
      <!-- Left Column: Profile Introduction -->
      <div>
        <MDevelop />
        <h1 class="text-4xl font-bold">
          <span class="text-xl">I'M </span>AH. WIRAYUDHA
        </h1>
        <p class="mt-4 text-justify text-lg">
          Results-driven
          <span
            class="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text font-semibold text-transparent"
            >Software Engineer</span
          >
          with a passion for innovation and creative problem-solving. Eager to
          learn and grow in dynamic environments, I thrive on tackling complex
          technical challenges with meticulous attention to detail. Proficient
          in multiple programming languages and technologies. Committed to
          staying ahead of industry trends and embracing new technologies.
        </p>
        <div class="mt-4 flex gap-4">
          <a
            href="https://github.com/AhWirayudha"
            target="_blank"
            class="rounded bg-white px-4 py-2 font-semibold text-blue-500 shadow hover:bg-gray-100"
          >
            GitHub
          </a>
        </div>
      </div>

      <!-- Right Column: Profile Image -->
      <div class="relative flex justify-center">
        <!-- Background Text -->
        <div
          class="absolute inset-0 flex flex-col items-center justify-center gap-4"
        >
          <p
            class="absolute left-60 top-20 font-mono text-2xl font-bold text-gray-200 opacity-20"
          >
            system.out.println("Hello, World!");
          </p>
          <p
            class="absolute left-20 top-40 font-mono text-xl font-bold text-gray-200 opacity-20"
          >
            console.log('Hello, World!');
          </p>
          <p
            class="absolute right-0 top-[15rem] font-mono text-xl font-bold text-gray-200 opacity-20"
          >
            $ bun add -g AhWirayudha
          </p>
          <p
            class="absolute right-5 top-[13rem] font-mono text-[12px] font-bold text-gray-200 opacity-20"
          >
            fn fib(n: u32) -> u32 { if n < 2 { n } else { fib(n - 1) + fib(n -
            2) } }
          </p>
          <p
            class="absolute left-20 font-mono text-sm font-bold text-gray-200 opacity-20"
          >
            fib = lambda n, a=0, b=1: a if n == 0 else fib(n-1, b, a+b)
          </p>
          <p
            class="absolute bottom-40 left-[10rem] font-mono text-3xl font-bold text-gray-200 opacity-20"
          >
            $ docker compose up -d
          </p>
          <p>
            <span
              class="absolute bottom-[15rem] right-10 font-mono text-lg font-bold text-gray-200 opacity-20"
              >$ git commit -m "Initial commit"</span
            >
          </p>
          <p
            class="absolute bottom-[13rem] left-[4rem] font-mono text-[16px] font-bold text-gray-200 opacity-20"
          >
            .card .card-body { @apply text-sm text-gray-200 dark:text-gray-800;
            }
          </p>
        </div>

        <!-- Profile Image -->
        <div class="relative">
          <img src="/assets/images/profile-ui.png" alt="Profile Picture" />
        </div>
      </div>
    </div>
  </header>
</template>
