import * as React from 'react';

const sections = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Blog',
        href: '/blog'
    },
    {
        title: 'Github',
        href: '#'
    },
    {
        title: 'Memes',
        href: '/memes'
    },
    {
        title: 'Contacts',
        href: '/contacts'
    }
]

const Header = () => {
    return (
        <div className='flex justify-center justify-items-center border-b border-b-black w-full'>
            {sections.map((section, index) =>
                <a
                    key={index}
                    href={section.href}
                    className='py-8 px-6 hover:cursor-pointer'
                >
                    {section.title}
                </a>
            )}
        </div>
    );
};

export default Header;
