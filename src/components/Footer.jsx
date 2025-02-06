// components/Footer.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Importing icons
import { useSession } from "next-auth/react"; // Import useSession
import { useRouter } from "next/navigation"; // Import useRouter
import './Footer.css';

const Footer = () => {
    const { data: session } = useSession(); // Get session data
    const router = useRouter(); // Initialize router

    const handleLinkClick = (link) => {
        // Check if the user is logged in
        if (!session) {
            // If not logged in, redirect to login page
            router.push("/sign-in");
        } else {
            // If logged in, navigate to the link
            router.push(link);
        }
    };

    return (
        <>
            {/* Footer Start */}
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container-fluid py-5 w-[100%]">
                    <div className="footer-main grid justify-items-center xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
                        <div className="footer-sub">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4 text-2xl">About Us</h4>
                                <p className="mb-3 abt-text">
                                    Whether you need an economy car for a short trip, a luxury vehicle for a special occasion, or a spacious minivan for a family holiday, we’ve got you covered. Our fleet is regularly maintained to ensure safety, comfort, and reliability.
                                </p>
                            </div>
                        </div>
                        <div className="footer-sub col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4 text-2xl">Quick Links</h4>
                                <a href="/" onClick={() => handleLinkClick("/")} className='mb-2'>Home</a>
                                <a href="/booking?index=1" onClick={() => handleLinkClick("/booking?index=1")} className='mb-2'>Transfer</a>
                                <a href="/local" onClick={() => handleLinkClick("/local")} className='mb-2'>Local Transfer</a>
                                <a href="/services" onClick={() => handleLinkClick("/services")} className='mb-2'>Services</a>
                                <a href="/our-fleet" onClick={() => handleLinkClick("/our-fleet")} className='mb-2'>Our Fleet</a>
                                <a href="/about-us" onClick={() => handleLinkClick("/about-us")} className='mb-2'>About Us</a>
                            </div>
                        </div>
                        <div className="footer-sub col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4 text-2xl">Business Hours</h4>
                                <div className="mb-3">
                                    <h6 className="text-muted mb-0">Mon - Friday:</h6>
                                    <p className="text-white mb-0">09.00 am to 07.00 pm</p>
                                </div>
                                <div className="mb-3">
                                    <h6 className="text-muted mb-0">Saturday:</h6>
                                    <p className="text-white mb-0">10.00 am to 05.00 pm</p>
                                </div>
                                <div className="mb-3">
                                    <h6 className="text-muted mb-0">Vacation:</h6>
                                    <p className="text-white mb-0">All Sunday is our vacation</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-sub col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex">
                                <h4 className="text-white mb-4 text-2xl">Contact Info</h4>
                                <a href="#"><FaMapMarkerAlt className="me-2 mt-0.5" /> 123 Street, INDIA </a>
                                <a href="mailto:info@example.com"><FaEnvelope className="me-2 mt-0.5" /> Kaushalgaur@gmail.com</a>
                                <a href="tel:+1234567890"><FaPhoneAlt className="me-2 mt-0.5" /> +123 456 7890</a>
                                <div className="social-icons mt-3">
                                    <a href="#" className="me-2 text-lg social"><FaFacebookF /></a>
                                    <a href="#" className="me-2 text-lg social"><FaTwitter /></a>
                                    <a href="#" className="me-2 text-lg social"><FaInstagram /></a>
                                    <a href="#" className='text-lg social'><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row g-4 align-items-center bottom-div">
                        <div className="col-md-6 text-center text-md-start mb-md-0">
                            <span className="text-body">
                                <a href="#" className="border-bottom text-white">
                                    <i className="fas fa-copyright text-light me-2"></i> Car Wala (Car Rental Website)
                                </a>
                            </span>
                        </div>
                        <div className="col-md-6 text-center text-md-end text-body">
                            Designed By: -
                            <a className="border-bottom text-white" href="/"> Kaushal Gaur & Lucky Soni</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;