import React from 'react'
import Link from 'next/link';

type NavLink = {
    name: string
    url: string
}

type Navigation = NavLink[]

export const Header = () => {

    const navigation: Navigation = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'About',
            url: '/'
        },
        {
            name: 'Contact',
            url: '/'
        },
    ]
    return (
        <header>
            <div className='logo'>AvgTemp</div>
            <nav><ul>
                {navigation.map((link: NavLink, index: number) =>
                    <li key={index}><Link href={link.url}>{link.name}</Link></li>
                )}</ul></nav>
        </header>
    )
}

