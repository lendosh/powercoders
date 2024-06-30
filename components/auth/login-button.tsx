'use client'

import React from 'react';
import {useRouter} from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode
    mode?: 'modal' | 'redirect',
    asChild?: boolean
}

const LoginButton: React.FC<LoginButtonProps> = ({
                                                     children,
                                                     mode = 'redirect',
                                                     asChild
                                                 }) => {
    const router = useRouter();
    const onClick = () => {
        router.push('/auth/login')
    }

    if (mode === 'modal') {
        <span>
            TODO: implement modal
        </span>
    }

    return (
        <span onClick={onClick} className='cursor-pointer'>
            {children}
        </span>
    );
};

export default LoginButton;
