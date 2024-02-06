import Link from 'next/link';
import React from 'react';

const Dashlayout = ({ children }) => {
    return (
        <div className='flex gap-3 max-w-6xl mx-auto'>
            <div className='bg-slate-300 w-1/5 rounded h-[90vh]'>
                <ul className='my-2 gap-3'>
                    <li className='my-3'><Link href="/dashbord/hoome"><button class="btn w-full btn-outline btn-secondary">Acount</button></Link></li>
                    <li className='my-3'><Link href="/dashbord"><button class="btn w-full btn-outline btn-secondary">Home</button></Link></li>
                    <li className='my-3'><Link href="/dashbord/missin"><button class="btn w-full btn-outline btn-secondary">Missin</button></Link></li>
                    <li className='my-3'><Link href="/dashbord/about"><button class="btn w-full btn-outline btn-secondary">not found</button></Link></li>
                    <hr></hr>
                    <li className='my-3'><Link href="/"><button class="btn w-full btn-outline btn-secondary">Home</button></Link></li>
                </ul>
            </div>
            {children}
        </div>
    );
};

export default Dashlayout;