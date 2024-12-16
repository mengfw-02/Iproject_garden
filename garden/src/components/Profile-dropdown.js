import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
    ArrowRightStartOnRectangleIcon,
    PencilSquareIcon,
    BookOpenIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline'

{/* Menu Options for Popover Panel */ }
const panelOptions = [
    { name: 'Create New Entry', description: 'Write a new page in your diary', href: 'diary-page', icon: PencilSquareIcon },
    { name: 'Past Entries', description: 'See your past diary entries and profile', href: 'user-entries', icon: BookOpenIcon },
]

{/* Profile Management Options */ }
const profileActions = [
    { name: 'My Profile', href: '#', icon: UserCircleIcon },
    { name: 'Logout', href: '/', icon: ArrowRightStartOnRectangleIcon },
]

{/* Profile Object */}
const profile = {
    user: 'farmer818',
    imagesrc: '/Farmer.png',
    alt: 'profile picture',
}


export default function PfpDropdown() {
    return (
        <Popover className="relative">

            {/* Popover Button, PFP with arrow */}
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                <img src={profile.imagesrc} alt={profile.alt} className="h-10 w-10 rounded-full" />
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
            </PopoverButton>

            {/* Popover Panel */}
            <PopoverPanel
                transition
                className="absolute right-0 mt-5 flex w-screen max-w-max px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="w-screen z-15 max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">

                    <div className="relative bg-blue-500 h-32 rounded-t-3xl">
                        {/* Banner */}
                        <div className="absolute inset-0 bg-gradient-to-b to-transparent rounded-t-3xl" style={{ backgroundColor: '#bae1ff' }}></div>

                        {/* Profile Picture */}
                        <img
                            src={profile.imagesrc}
                            alt={profile.alt}
                            className="absolute left-1/2 transform -translate-x-1/2 bottom-[-40px] h-28 w-28 rounded-full border-4 border-white"
                        />
                    </div>
                    
                    {/* Greeting */}
                    <h2 className="text-xl font-semibold tracking-tight text-center mt-12 text-gray-900 sm:text-xl">
                            Hello, <span style={{ color: '#8FBC8F' }}>{profile.user}</span>!
                        </h2>


                    {/* Popover menu options */}
                    <div className="p-4 pt-4">
                        {panelOptions.map((item) => (
                            <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                </div>
                                <div>
                                    <a href={item.href} className="font-semibold text-gray-900">
                                        {item.name}
                                        <span className="absolute inset-0" />
                                    </a>
                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Profile Options */}
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {profileActions.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                            >
                                <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </PopoverPanel>
        </Popover>
    )
}
