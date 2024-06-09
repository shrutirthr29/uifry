import React from 'react'

export default function Advantages1() {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div class="mt-4 md:mt-0">
                    <h3 class="mb-0 text-4l tracking-wider font-bold text-red-500 dark:text-white">ADVANTAGES</h3>
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why Choose Uifry?</h2>
                    <div class="features-list flex items-center gap-4 mb-6 mt-6">
                        <img src='src/assets/notifi.png' class=""></img>
                        <h2 class="text-xl tracking-tight font-bold text-gray-900 dark:text-white">Clever Notifications</h2>
                    </div>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p>
                </div>
                <img class="w-full dark:hidden" src="src/assets/adv.png" alt="dashboard image" />
                <img class="w-full hidden dark:block" src="src/assets/adv.png" alt="dashboard image" />
            </div>
        </section>
    )
}