"use client"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import { SessionProvider } from 'next-auth/react';
import UserButton from "@/components/user-button"
const HomePage = ({ children }) => {
    return (
        <div>
            <SessionProvider>
                {/* <div className='border-2 border-black'> */}
                <Header />
                {/* <UserButton/> */}
                {/* </div> */}
                {children}
                <Footer />
            </SessionProvider>
        </div>
    );
}

export default HomePage;