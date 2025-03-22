import React from 'react'

function Footer() {
  return (
    <div>

<footer className="bg-white shadow mt-8">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <img src="" alt="ASAP Logo" className="h-12 mb-4" />
                            <p className="text-gray-500">© 2024 ASAP Kerala. All Rights Reserved</p>
                            <p className="text-gray-500">Powered by SRV InfoTech</p>
                        </div>
                        <div>
                            <h3 className="text-gray-700 font-semibold mb-4">Quick Links</h3>
                            <ul className="text-gray-500">
                                <li><a href="#" className="hover:text-blue-500">Internship by Stream</a></li>
                                <li><a href="#" className="hover:text-blue-500">Jobs by Stream</a></li>
                                <li><a href="#" className="hover:text-blue-500">Guaranteed Courses</a></li>
                                <li><a href="#" className="hover:text-blue-500">Explore Companies</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-700 font-semibold mb-4">Are you having any issues?</h3>
                            <p className="text-gray-500">Call Support: +91 9495999623</p>
                            <p className="text-gray-500">Email Support: info@asapkerala.gov.in</p>
                            <h3 className="text-gray-700 font-semibold mt-4 mb-4">Newsletter</h3>
                            <form>
                                <input type="email" placeholder="Enter your email address" className="w-full p-2 border border-gray-300 rounded-lg mb-2" />
                                <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-gray-500">Stay Connected with Us</p>
                    </div>
                </div>
            </footer>
    </div>
  )
}

export default Footer