import Navbar from "@/components/Navbar";
import React, { useState } from 'react';
import "../app/globals.css"; // refer to format file
import GreenBar from "@/components/Green-diary-bar";

{/* Diary Entries */}
const userEntries = [
    {
        id: 1,
        href: '#',
        entry:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        plant: 'Orchid',
        plantImage: '/plants/Orchid.svg',
    },
    {
        id: 2,
        href: '#',
        entry:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        plant: 'Mountauk Daisies',
        plantImage: '/plants/Montauk-daisies.svg',
    },
    {
        id: 3,
        href: '#',
        entry:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        plant: 'New England Aster',
        plantImage: '/plants/New-england-aster.svg',
    },
    {
        id: 4,
        href: '#',
        entry:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        plant: 'Japanese Bonsai',
        plantImage: '/plants/Japanese-maple-bonsai.svg',
    },
    {
        id: 5,
        href: '#',
        entry:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        plant: 'Japanese Bonsai',
        plantImage: '/plants/Japanese-maple-bonsai.svg',
    },
    {
        id: 6,
        href: '#',
        entry:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        plant: 'Japanese Bonsai',
        plantImage: '/plants/Japanese-maple-bonsai.svg',
    },
    {
        id: 7,
        href: '#',
        entry:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        plant: 'Japanese Bonsai',
        plantImage: '/plants/Japanese-maple-bonsai.svg',
    },
]

export default function entries() {
    return (
        <main className="overflow-y-auto">
            <Navbar />

            <div className="bg-white -z-10 mt-5 sm:py-20">

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    
                    {/* Header Content */ }
                    <div className="flex items-start mx-auto max-w-2xl lg:mx-0 space-x-4">
                        {/* Image on the left */}
                        <img
                            src="/farmer.png"
                            alt="Diary Garden Illustration"
                            className="w-20 h-20 object-cover rounded-lg"
                        />

                        {/* Text content */}
                        <div>
                            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Your Diary Entries
                            </h2>
                            <p className="mt-2 text-lg/8 text-gray-600">
                                Explore your reflections and growth through your diary garden!
                            </p>
                        </div>
                    </div>

                    {/* Diary Entries on Grid */}
                    <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16
                    border-t border-gray-200 pt-4 sm:mt-4 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 overflow-y-auto">
                        {userEntries.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center justify-center gap-x-4 text-xs">
                                    <div className="relative flex items-center gap-x-4">
                                        <img alt="" src={post.plantImage} className="h-10 w-10 rounded-full bg-gray-50" />
                                    </div>
                                    <a
                                        href={post.plant.href}
                                        className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600"
                                        style={{ backgroundColor: '#8FBC8F' }}
                                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#527B52')}
                                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#8FBC8F')}
                                    >
                                        {post.plant}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <p className="mt-5 line-clamp-7 text-sm/6 text-gray-600">{post.entry}</p>
                                </div>

                                <time dateTime={post.datetime} className="text-gray-500 mt-3 text-sm">
                                    {post.date}
                                </time>

                            </article>
                        ))}
                    </div>
                </div>
            </div>
            <GreenBar style={{ height: 110, width: '100%', marginTop: 'auto' }} />
        </main>
    )
}
