import React from 'react'

export default function Footer() {
    return (
        <footer class="bg-white dark:bg-gray-900">
            <div class="mx-auto w-full max-w-screen-xl">
                <div id="footer-grid" class="grid grid-cols-2 gap-4 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <div class="features-list flex items-center gap-2 mb-2">
                            <img src='/assets/logo.png' class=""></img>
                            <h2 class="text-xl tracking-tight font-bold text-gray-900 dark:text-white">uifry™</h2>
                        </div>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li>
                                <div class="features-list flex items-center gap-2 mb-2">
                                    <img src='/assets/mail.png' class=""></img>
                                    <h2 class="text-l tracking-tight text-gray-900 dark:text-white">Help@Frybix.Com</h2>
                                </div>
                            </li>
                            <li>
                                <div class="features-list flex items-center gap-2 mb-2">
                                    <img src='/assets/phone.png' class=""></img>
                                    <h2 class="text-l tracking-tight text-gray-900 dark:text-white">+1234 456 678 89</h2>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Links</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class=" hover:underline">Home</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">About Us</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Bookings</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Terms Of Use</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Cookie Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Product</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Take Tour</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Live Chat</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Reviews</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Newsletter</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-8">
                                <a href="#" class="hover:underline">Stay Up To Date</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Your Email</a>
                            </li>


                        </ul>
                    </div>
                </div>
                <div class="px-4 py-6 text-center">
                    <span class="text-sm text-center text-gray-500 dark:text-gray-300 sm:text-center">Copyright 2022 Uifry.com All Rights Reserved</span>
                </div>
            </div>
        </footer>

    )
}
