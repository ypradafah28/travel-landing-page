import React from 'react'
import Card from './card'
import Judul from './judul'
import Teks from './teks'
import { faClock, faDollarSign, faUserShield, faCouch } from '@fortawesome/free-solid-svg-icons'


function Company() {
    const subjudul = {

        nama1: 'On Time',
        nama2: 'Cheap',
        nama3: 'Safe',
        nama4: 'Comfortable',

    }

    const icon = {
        icon1:faClock,
        icon2:faDollarSign,
        icon3:faUserShield,
        icon4:faCouch
    }
    const judul = "Our Company"
    const teks = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, illum."
    return (
        <div className='py-16 h-[63rem]'>
            <section className='text-center bg-clip-text text-transparent bg-gradient-to-l from-zinc-100 to-cyan-200'>
                <Judul judul={judul} />
            </section>
            <section className='text-center my-6 bg-clip-text text-transparent bg-gradient-to-l from-zinc-100 to-cyan-200'>
                <Teks teks={teks} />
            </section>
            <section>
                <section className='justify-center flex gap-[6.5rem] my-10'>

                    <Card subjudul={subjudul.nama1} icon={icon.icon1} />

                    <Card subjudul={subjudul.nama2} icon={icon.icon2} />
                </section>
                <section className='my-10 justify-center flex gap-[6.5rem]'>

                    <Card subjudul={subjudul.nama3} icon={icon.icon3} />

                    <Card subjudul={subjudul.nama4} icon={icon.icon4} />
                </section>
            </section>
        </div>
    )
}

export default Company
