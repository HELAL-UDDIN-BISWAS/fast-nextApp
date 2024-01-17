import Link from 'next/link';
import React from 'react';

const Dashlayout = ({ children }) => {
    return (
        <div className='flex'>
            <div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/dashbord/hoome">dashbord H</Link></li>
                    <li><Link href="/dashbord/missin">missin</Link></li>
                </ul>
            </div>
            {children}
        </div>
    );
};

export default Dashlayout;