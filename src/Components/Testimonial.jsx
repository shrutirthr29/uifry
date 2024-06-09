import React from 'react'

export default function Testimonial() {
    return (
        <section class="bg-white dark:bg-gray-900">
        <h3 class="mb-0 text-center text-4l tracking-wider font-bold text-gray-900 dark:text-white">TESTIMONIAL</h3>
            <h2 class="mb-0 text-center text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What Our Users Say About Us?</h2>
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img class="w-full dark:hidden" src="src/assets/testimonial.png" alt="dashboard image" />
                <img class="w-full hidden dark:block" src="src/assets/testimonial.png" alt="dashboard image" />
                <div class="w-96 mt-4 md:mt-0">
                    <h2 class="text-3xl tracking-tight font-bold text-gray-900 dark:text-white">The Best Financial Accounting App Ever!</h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p>
                    <img src="src/assets/users.png" class="mb-6"></img>
                    <h2 class="text-3l tracking-tight font-bold text-gray-900 dark:text-white">Nick Jonas</h2>
                </div>
            </div>
        </section>
    )
}