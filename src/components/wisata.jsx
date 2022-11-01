import React from 'react'
import Judul from './judul'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Subjudul from './subjudul'


function Wisata() {

    const subjudul = "Gili Trawangan, Nusa Tenggara Barat"
    const judul = "What You Get ?"
    return (
        <div className='relative z-20 mt-52 '>
            <section className='bg-cyan-800 h-[34rem] rounded-tl-[6.5rem] py-10 rounded-br-[6.5rem] drop-shadow-2xl relative z-20'>
                <section className=' text-center bg-clip-text text-transparent bg-gradient-to-l from-zinc-100 to-cyan-200'>
                    <Judul judul={judul} />
                </section>
                <section className='py-20 flex justify-around items-center'>
                    <figure>
                        <img className='rounded-full' src="./bunaken-bundar.png" alt="" />
                    </figure>
                    <section>
                        <section className='flex items-center gap-3'>
                            <FontAwesomeIcon className='h-7 text-white' icon={faLocationDot} />
                            <Subjudul subjudul={subjudul} />
                        </section>
                        <ul className='list-disc list-inside leading-relaxed font-normal text-base font-sans text-slate-100'>
                            <li>Hopping Islan Snorkeling</li>
                            <li>Tour Glass Bottom Boat</li>
                            <li>Diving </li>
                            <li>Water Sport</li>
                            <li>Culinary</li>
                        </ul>
                    </section>
                </section>
            </section>

        </div>
    )
}

export default Wisata
