import React from 'react';

// import React from 'react'

// export const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-2 my-3 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="text-sm">
                        <p>&copy; 2024 Melody Music . All rights reserved.</p>
                        <p>Address : RajNagar Ghaziabad</p>
                        <p>Contact : shubhanshutiwari04@gmail.com, aryanshara41@gmail.com </p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zM10 14H8v-2h2v2zm0-4H8V8h2v2zm4 4h-2v-2h2v2zm0-4h-2V8h2v2z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 11-7.003 17.003A10 10 0 0112 2zm0 2a8 8 0 100 16 8 8 0 000-16z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22.46 6c-.77.34-1.6.57-2.46.68a4.27 4.27 0 001.88-2.36 8.48 8.48 0 01-2.72 1.04A4.24 4.24 0 0015.6 4a4.24 4.24 0 00-4.22 4.23c0 .33.04.65.11.96-3.51-.18-6.63-1.85-8.72-4.4a4.22 4.22 0 00-.57 2.13c0 1.47.75 2.76 1.88 3.52a4.19 4.19 0 01-1.91-.53v.05a4.24 4.24 0 003.4 4.15 4.24 4.24 0 01-1.89.07 4.25 4.25 0 003.97 2.95A8.5 8.5 0 012 18.56 11.99 11.99 0 006.29 20c7.54 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.52A8.28 8.28 0 0022.46 6z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
