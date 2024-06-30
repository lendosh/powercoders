import Image from "next/image";

const POWERCODERS_WEBSITE = 'https://powercoders.org/';

export default function Home() {
    return (
        <main className='flex justify-center content-center h-[100vh] items-center'>
            <div className="grid sm:grid-rows-2 sm:grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-8 w-full lg:max-w-[60%]">
                <div className='relative'>
                    <Image
                        src='/capybara-main.png'
                        alt='Capybara drinks coffee'
                        height={400}
                        width={400}
                    />
                </div>
                <div className='flex flex-col leading-relaxed'>
                    <p className='text-5xl'>Hello there!</p>
                    <p className='py-8 text-2xl'>
                        Welcome to Web Portfolio of Vladyslav to<br/>
                        <a
                            href={POWERCODERS_WEBSITE}
                            target='_blank'
                            className='font-extrabold text-3xl'
                        >
                            <span className='text-powercoders-red'>&#10100;</span>POWER<span
                            className='text-powercoders-red'>.</span>CODERS<span
                            className='text-powercoders-red'>&#10101;</span>
                        </a>
                        <br/>
                        Feel free to check my Web Portfolio and also my&nbsp;
                        <a
                            href='https://github.com/lendosh'
                            target='_blank'
                            className='font-extrabold underline decoration-2 decoration-sky-400'
                        >
                            GitHub
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
