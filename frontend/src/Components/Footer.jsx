import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
     
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <img alt="ASAP Kerala logo" className="h-10 mb-4 md:mb-0" src="asap.png"/>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:space-x-4 gap-3 text-sm">
            <a className="text-gray-600 hover:text-gray-800" href="#">About Us</a>
            <a className="text-gray-600 hover:text-gray-800" href="#">Careers</a>
            <a className="text-gray-600 hover:text-gray-800" href="#">FAQ's</a>
            <a className="text-gray-600 hover:text-gray-800" href="#">Contact</a>
            <a className="text-gray-600 hover:text-gray-800" href="#">Privacy</a>
          </div>
        </div>

        <hr className="my-6"/>

      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-sm">
        
          <div>
            <h3 className="font-semibold mb-3">Internships</h3>
            <ul className="space-y-2">
              <li><a className="text-gray-600 hover:text-gray-800" href="#">Computer Science</a></li>
              <li><a className="text-gray-600 hover:text-gray-800" href="#">Electronics</a></li>
              <li><a className="text-gray-600 hover:text-gray-800" href="#">Marketing</a></li>
              <li><a className="text-gray-600 hover:text-gray-800" href="#">View all</a></li>
            </ul>
          </div>

      
          <div>
            <h3 className="font-semibold mb-3">Jobs</h3>
            <ul className="space-y-2">
              <li><a className="text-gray-600 hover:text-gray-800" href="#">Marketing</a></li>
              <li><a className="text-gray-600 hover:text-gray-800" href="#">Development</a></li>
              <li><a className="text-gray-600 hover:text-gray-800" href="#">Sales</a></li>
              <li><a className="text-gray-600 hover:text-gray-800" href="#">View all</a></li>
            </ul>
          </div>

   
          <div>
            <h3 className="font-semibold mb-3">Courses</h3>
            <ul className="space-y-2">
              <li><a className="text-gray-600 hover:text-gray-800" href="#">Digital Marketing</a></li>
              <li><a className="text-gray-600 hover:text-gray-800" href="#">UI/UX Design</a></li>
              <li><a className="text-gray-600 hover:text-gray-800" href="#">Data Science</a></li>
              <li><a className="text-gray-600 hover:text-gray-800" href="#">View all</a></li>
            </ul>
          </div>

       
          <div>
            <h3 className="font-semibold mb-3">Companies</h3>
            <ul className="space-y-2">
              <li><a className="text-gray-600 hover:text-gray-800" href="#">Top Companies</a></li>
              <li><a className="text-gray-600 hover:text-gray-800" href="#">Startups</a></li>
              <li><a className="text-gray-600 hover:text-gray-800" href="#">MNC's</a></li>
              <li><a className="text-gray-600 hover:text-gray-800" href="#">View all</a></li>
            </ul>
          </div>
        </div>

       
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center">
                  <i className="fas fa-phone-alt text-red-500 mr-2"></i>
                  +919495999623
                </p>
                <p className="flex items-center">
                  <i className="fas fa-envelope text-blue-500 mr-2"></i>
                  info@asapkerala.gov.in
                </p>
                <p className="text-gray-600 text-sm">
                  KINFRA Film and Video Park, Sainik School P.O,<br/>
                  Thiruvananthapuram, Kerala - 695585
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="font-semibold">Newsletter</h3>
              <p className="text-sm text-gray-600">Stay updated with our latest news!</p>
              <div className="flex">
                <input 
                  className="flex-1 border border-gray-300 p-2 rounded-l text-sm" 
                  placeholder="Enter email address"
                  type="email"
                />
                <button className="bg-green-500 text-white px-4 py-2 rounded-r text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            © 2024 ASAP Kerala. All Rights Reserved
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a className="text-blue-600 hover:opacity-75" href="#"><i className="fab fa-facebook-f"></i></a>
            <a className="text-blue-400 hover:opacity-75" href="#"><i className="fab fa-twitter"></i></a>
            <a className="text-pink-600 hover:opacity-75" href="#"><i className="fab fa-instagram"></i></a>
            <a className="text-blue-700 hover:opacity-75" href="#"><i className="fab fa-linkedin-in"></i></a>
            <a className="text-red-600 hover:opacity-75" href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer