import React from 'react'

export default function Home() {
  return (
    <section id="home" class= "bg-white dark:bg-gray-900">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
    <div id="#home-left">
        <div id="home-text" class="w-full mt-4 md:mt-4">
            <h2 class="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">Make The Best</h2>
            <h2 class="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">Financial Decisions</h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
            <a href="#" class="inline-flex items-center text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Watch Video
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <img id="shade-left" class="dark:hidden" src="src/assets/bg_shade.png" alt="dashboard image"/>
        <img id="strip-left" class="dark:hidden" src="src/assets/strip.png" alt="dashboard image"/>
    </div>
        <img id="shade-right" class="w-full dark:hidden" src="src/assets/mobile-op.png" alt="dashboard image"/>
        <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/>
    </div>
   </section>
  )
}