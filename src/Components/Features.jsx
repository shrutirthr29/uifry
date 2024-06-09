import React from 'react'

export default function Features() {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img class="w-full dark:hidden" src="src/assets/features.png" alt="dashboard image" />
                <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" />
                <div class="mt-4 md:mt-0">
                    <h3 class="mb-0 text-4l tracking-wider font-bold text-red-500 dark:text-white">FEATURES</h3>
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Uifry Premium</h2>
                    <div class="features">
                        <div class="features-list flex items-center gap-2">
                            <img src='src/assets/star.png' class=""></img>
                            <h5 class="text-4l tracking-tight font-bold text-gray-900 dark:text-white">Budgeting Intervals</h5>
                        </div>
                        <p class="mb-6 font-light text-gray-500 md:text-m dark:text-gray-400">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                        <div class="features-list flex items-center gap-2">
                            <img src='src/assets/hex.png' class=""></img>
                            <h5 class="text-4l tracking-tight font-bold text-gray-900 dark:text-white">Budgeting Intervals</h5>
                        </div>
                        <p class="mb-6 font-light text-gray-500 md:text-m dark:text-gray-400">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                        <div class="features-list flex items-center gap-2">
                            <img src='src/assets/cube.png' class=""></img>
                            <h5 class="text-4l tracking-tight font-bold text-gray-900 dark:text-white">Budgeting Intervals</h5>
                        </div>
                        <p class="mb-6 font-light text-gray-500 md:text-m dark:text-gray-400">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}