import React from 'react'
// import Logo from '../assets/images/Frame 20.png'
// import HomeLogo from '../assets/images/Frame.png' 
// import plusLogo from '../assets/images/Frame (2).png'
// import searchIcon from '../assets/images/Frame (1).png'
// import profile from '../assets/images/Rectangle.png'
// import ProfileName from './profileName'
// import Post from './post'
import { Link } from 'react-router-dom'
function SideBar() {
    return (
        <div>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-2 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            {/* <img className='w-[102.4px] h-[28.99px] mb-5 mt-5 ml-5' src={Logo} alt="Logo" /> */}
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="/home" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                {/* <img src={HomeLogo} alt="HomeLogo" /> */}
                                <span className="ms-3">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                {/* <img src={searchIcon} alt="searchIcon" /> */}
                                <span className="flex-1 ms-3 whitespace-nowrap">Search</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                {/* <img src={plusLogo} alt="plusLogo" /> */}
                                <span className="flex-1 ms-3 whitespace-nowrap">Create</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                {/* <img src={profile} alt="profile" /> */}
                                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
          

          
        </div>
    )
}

export default SideBar