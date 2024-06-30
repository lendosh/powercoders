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
        href: 'https://github.com/lendosh'
    },
    {
        title: 'Contacts',
        href: '/contacts'
    }
]

const Header = () => {
    return (
        <header className='mx-auto flex max-w-7xl items-center justify-center px-2 lg:px-8'>
            {sections.map((section, index) =>
                <a
                    key={index}
                    href={section.href}
                    target={section.href.includes('https') ? '_blank' : undefined}
                    className='py-8 px-3 lg:px-6'
                >
                    {section.title}
                </a>
            )}
        </header>
    );
};

export default Header;
