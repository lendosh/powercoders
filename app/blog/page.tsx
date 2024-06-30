import React from 'react';
import LoginButton from "@/components/auth/login-button";
import {Button} from "@/components/ui/button";

const Blog = () => {
    return (
        <div className='flex flex-col space-y-4 items-center justify-center'>
            <h5>Page in progress</h5>
            <LoginButton mode='redirect'>
                <Button
                    size='lg'
                >
                    Login
                </Button>
            </LoginButton>
        </div>
    );
};

export default Blog;
