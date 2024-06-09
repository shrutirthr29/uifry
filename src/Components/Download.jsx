import React from 'react'

export default function Download() {
    return (
        <section id="download">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div id="download-left-text" class="ml-36 mt-4 md:mt-0">
                    <h2 class="mb-4 text-5xl tracking-tight font-extrabold dark:text-gray-900 text-white">Ready To Get Started?</h2>
                    <p class="mb-6 font-light text-white md:text-lg dark:text-gray-400">Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.</p>
                    <a href="#" class="p-2 inline-flex items-center text-slate-500 bg-white hover:bg-red-400 focus:ring-4 focus:ring-primary-300 font-medium rounded text-m px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        Download App
                        <img src='/assets/apple-icon.png' class="ml-2 -mr-1 w-5 h-6"></img>
                    </a>
                </div>
                <img class="dark:hidden" src="/assets/download-phone.png" alt="dashboard image" />
                <img class="hidden dark:block" src="/assets/download-phone.png" alt="dashboard image" />
            </div>

        </section>
    )
}
