import { faBusSimple, faFerry, faPlaneUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Judul from './judul'

function Transport() {
    const judul = "Our Transport"
    return (
        <div className='bg-teal-400 h-[33rem] -mt-24 py-40 '>
            <section className='bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-zinc-700 text-center'>
                <Judul judul={judul} />
            </section>
            <section className='m-28 flex justify-evenly'>
                <FontAwesomeIcon className='h-24 text-teal-900 ' icon={faBusSimple} />
                <FontAwesomeIcon className='h-24 text-teal-900' icon={faFerry} />
                <FontAwesomeIcon className='h-24 text-teal-900' icon={faPlaneUp} />
            </section>
        </div>
    )
}

export default Transport
