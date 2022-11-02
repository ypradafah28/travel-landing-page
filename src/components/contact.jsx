import React from 'react'
import Judul from './judul'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Teks from './teks'



function Contact() {
    const sosmed = {
        email: "travel.id",
        whatsapp: "0123456",
        facebook: "travel-ID",
        location: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore enim maiores molestiae quam saepe!"
    }
    const judul = "Connect With Us"
    return (
        <div className='bg-gradient-to-bl from-slate-300 to-cyan-300 h-[28rem] py-24 px-48'>
            <section>
                <Judul judul={judul} />
            </section>
            <section className='flex gap-[17.5rem] mt-24'>
                <section className=' w-64 flex-row justify-center'>
                    <section className='flex items-center gap-5 my-2'>
                        <FontAwesomeIcon className='w-7 h-5' icon={faEnvelope} />
                        <Teks teks={sosmed.email} />
                    </section>
                    <section className='flex items-center gap-5 my-2'>
                        <FontAwesomeIcon className='w-7 h-5' icon={faWhatsapp} />
                        <Teks teks={sosmed.whatsapp} />
                    </section>
                    <section className='flex items-center gap-5 my-2'>
                        <FontAwesomeIcon className='w-7 h-5' icon={faFacebook} />
                        <Teks teks={sosmed.facebook} />
                    </section>
                </section>
                <section className='flex gap-5 items-center w-[32rem]'>
                    <FontAwesomeIcon className='w-6 h-7' icon={faLocationDot} />
                    <Teks teks={ sosmed.location } />
                </section>
            </section>
        </div>
    )
}

export default Contact
