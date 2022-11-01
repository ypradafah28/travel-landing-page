import React from 'react'

function Navbar() {
    return (
        <nav>
            <figure className='absolute z-10 top-0 left-0 w-full' >
                <img className='w-full object-cover' src="./bunaken.png" alt="" />
            </figure>
            <section className='h-[6.5rem] py-8 z-20 absolute right-16'>
                <ul className='flex gap-6 font-sans text-base text-right  mr-60'>
                    <li><a href="/#"> Home </a></li>
                    <li><a href="/#"> Services </a></li>
                    <li><a href="/#"> About </a></li>
                    <li><a href="/#"> Contact </a></li>
                    <li><a href="/#"> Sign in </a></li>
                    <li><a href="/#"> Sign up </a></li>
                </ul>
            </section>
        </nav>
    )
}

export default Navbar
