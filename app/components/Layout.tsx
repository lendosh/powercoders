import React, {Fragment, ReactNode} from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: ReactNode }> = ({children}) => {
    return (
        <div>
            <Header/>
            <div className='px-12 md:px-20 lg:px-36 w-full py-8 md:py-12 lg:py-32'>
                <Fragment>
                    {children}
                </Fragment>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
