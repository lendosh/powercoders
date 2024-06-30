import React from 'react';
import Image from "next/image";

const contactsData = [
    {
        title: 'Gmail',
        href: 'mailto:vladyslav.pomazanov@gmail.com',
        icon: '/gmail-logo.svg'
    },
    {
        title: 'Telegram',
        href: 'https://t.me/lendosgh',
        icon: '/telegram-logo.svg'
    },
    {
        title: 'Whatsapp',
        href: 'https://wa.me/+41794573691',
        icon: '/whatsapp-logo.svg'
    }
]
const ContactsPage = () => {
    return (
        <main className='flex items-center justify-center h-[100vh]'>
            <div className='grid sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:space-x-12 sm:space-y-4'>
                <Image src='/capybara.png' alt='Photo' width={400} height={400}/>
                <div className='flex flex-col'>
                    <h2 className="text-start text-lg font-semibold leading-8 text-balance">
                        {`Let's stay in touch!`}<br/>Feel free to write me at any contacts bellow:
                    </h2>
                    <div className='grid grid-cols-1'>
                        {contactsData.map(contact => (
                            <a key={contact.title} href={contact.href}
                               className='flex space-y-6 md:space-y-8 h-full text-center items-center'>
                                <Image key={contact.title} src={contact.icon} alt={contact.title} height={36}
                                       width={36}/>
                                <p className='pl-2 h-full'>{contact.title}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactsPage;
