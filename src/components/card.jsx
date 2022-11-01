import React from 'react'
import Teks from './teks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Card(props) {
    const teks = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero mollitia incidunt veniam iste maiores unde magnam assumenda nemo totam, iure, optio ducimus aperiam aliquid cupiditate perferendis maxime. Facere, obcaecati labore."
    return (
        <div>
            <section className='w-[21.5rem]'>
                <section className='flex gap-3 items-center'>
                    <FontAwesomeIcon className='text-teal-400 h-10' icon={props.icon} />
                    <h1 className='text-white font-normal text-3xl py-6 font-sans'>{props.subjudul}</h1>
                </section>
                <section className=' text-white'>
                    <Teks teks={teks} />
                </section>
            </section>
        </div>
    )
}

export default Card
