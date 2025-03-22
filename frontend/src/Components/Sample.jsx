// import React from 'react'

// function Sample() {
//   return (
//     <div>

      

//         const Sidebar = () => (
//             <aside className="w-full lg:w-1/4 bg-white shadow rounded-lg p-4 mb-8 lg:mb-0">
//                 <div className="text-center">
//                     <img src="https://placehold.co/100x100" alt="Profile Picture" className="h-24 w-24 rounded-full mx-auto" />
//                     <h2 className="text-xl font-semibold mt-4">Abhishek Shankar</h2>
//                     <p className="text-gray-500">@abhisheks2024</p>
//                     <div className="mt-4">
//                         <span className="text-gray-700">60%</span>
//                         <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
//                             <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mt-6">
//                     <div className="flex items-center text-gray-700 mb-2">
//                         <i className="fas fa-phone-alt mr-2"></i>
//                         <span>+91 9876543210</span>
//                     </div>
//                     <div className="flex items-center text-gray-700 mb-2">
//                         <i className="fas fa-envelope mr-2"></i>
//                         <span>abhishekshankar123@gmail.com</span>
//                     </div>
//                     <div className="flex items-center text-gray-700 mb-2">
//                         <i className="fas fa-map-marker-alt mr-2"></i>
//                         <span>Thiruvananthapuram, Kerala</span>
//                     </div>
//                 </div>
//                 <div className="mt-6">
//                     <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Edit/Update Profile</button>
//                 </div>
//                 <div className="mt-6">
//                     <ul>
//                         <li className="flex items-center text-gray-700 mb-2">
//                             <i className="fas fa-user mr-2"></i>
//                             <span>My Profile</span>
//                         </li>
//                         <li className="flex items-center text-gray-700 mb-2">
//                             <i className="fas fa-file-alt mr-2"></i>
//                             <span>Payments</span>
//                         </li>
//                         <li className="flex items-center text-gray-700 mb-2">
//                             <i className="fas fa-clipboard-list mr-2"></i>
//                             <span>Application Status</span>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="mt-6">
//                     <button className="w-full bg-red-500 text-white py-2 rounded-lg">Logout</button>
//                 </div>
//                 <div className="mt-6 text-gray-500 text-sm">
//                     <p>Last updated on 10 Oct 2024</p>
//                 </div>
//             </aside>
//         );

//         const BasicInformation = () => (
//             <div className="bg-white shadow rounded-lg p-4 mb-8">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold">Basic Information</h2>
//                     <button className="text-blue-500">Update</button>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                         <p className="text-gray-700"><strong>Full Name:</strong> Abhishek Shankar</p>
//                         <p className="text-gray-700"><strong>Date of Birth:</strong> 18/10/1999</p>
//                         <p className="text-gray-700"><strong>Gender:</strong> Male</p>
//                     </div>
//                     <div>
//                         <p className="text-gray-700"><strong>Mobile:</strong> +91 9876543210 <i className="fas fa-check-circle text-green-500"></i></p>
//                         <p className="text-gray-700"><strong>Email:</strong> abhishekshankar123@gmail.com <i className="fas fa-check-circle text-green-500"></i></p>
//                         <p className="text-gray-700"><strong>Aadhar:</strong> 330X XXXX XXXX XX22 <button className="text-red-500">Verify</button></p>
//                     </div>
//                 </div>
//                 <p className="text-gray-700 mt-4"><strong>Address:</strong> Sweet Home, Evergreen Street, Varkala, Thiruvananthapuram, Kerala, 695001, India</p>
//             </div>
//         );

//         const PaymentPending = () => (
//             <div className="bg-white shadow rounded-lg p-4 mb-8">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold">Payment Pending</h2>
//                     <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Pay Now</button>
//                 </div>
//                 <p className="text-gray-700">Registration fee 500 rupees pending. Pay now and get access to all services.</p>
//             </div>
//         );

//         const Education = () => (
//             <div className="bg-white shadow rounded-lg p-4 mb-8">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold">Education</h2>
//                     <button className="text-blue-500">Update Education</button>
//                 </div>
//                 <div className="mb-4">
//                     <p className="text-gray-700"><strong>Master of Business Administration (MBA)</strong> <button className="text-blue-500">Edit</button></p>
//                     <p className="text-gray-500">XYZ University, Thiruvananthapuram, Kerala</p>
//                     <p className="text-gray-500">2018 – 2020</p>
//                 </div>
//                 <div className="mb-4">
//                     <p className="text-gray-700"><strong>Higher Secondary Certificate (HSC)</strong> <button className="text-blue-500">Edit</button></p>
//                     <p className="text-gray-500">St. Mary's Higher Secondary School, Ernakulam, Kerala</p>
//                     <p className="text-gray-500">2012 – 2014</p>
//                 </div>
//                 <div>
//                     <p className="text-gray-700"><strong>Secondary School Certificate (SSC)</strong> <button className="text-blue-500">Edit</button></p>
//                     <p className="text-gray-500">Govt. Model School, Alappuzha, Kerala</p>
//                     <p className="text-gray-500">2010 – 2012</p>
//                 </div>
//             </div>
//         );

//         const CareerObjective = () => (
//             <div className="bg-white shadow rounded-lg p-4 mb-8">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold">Career Objective</h2>
//                     <button className="text-blue-500">Update</button>
//                 </div>
//                 <p className="text-gray-700">For Entry-Level Position</p>
//                 <p className="text-gray-500">Enthusiastic and highly motivated graduate with a degree in Business Administration, eager to apply strong analytical and communication skills in a fast-paced corporate environment. Looking for an entry-level role in marketing where I can contribute to team success while gaining hands-on experience and advancing my career.</p>
//             </div>
//         );

//         const KeySkills = () => (
//             <div className="bg-white shadow rounded-lg p-4 mb-8">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold">Key Skills</h2>
//                     <button className="text-blue-500">Update Skills</button>
//                 </div>
//                 <div className="flex flex-wrap">
//                     <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">Communication</span>
//                     <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">UI Designing</span>
//                     <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">UI Development</span>
//                     <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">Leadership</span>
//                     <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">Human Resource</span>
//                     <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">php</span>
//                     <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">Accounting</span>
//                     <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">Data Science</span>
//                 </div>
//             </div>
//         );

//         const Resume = () => (
//             <div className="bg-white shadow rounded-lg p-4 mb-8">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold">Resume</h2>
//                     <button className="text-blue-500">Update Resume</button>
//                 </div>
//                 <div className="flex items-center mb-4">
//                     <img src="https://placehold.co/50x50" alt="Resume Icon" className="h-12 w-12 mr-4" />
//                     <div>
//                         <p className="text-gray-700">abhishek_resume.pdf</p>
//                         <p className="text-gray-500">Uploaded on Sep 30, 2024</p>
//                     </div>
//                 </div>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Add Video Resume</button>
//             </div>
//         );

//         const Portfolio = () => (
//             <div className="bg-white shadow rounded-lg p-4 mb-8">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold">Portfolio</h2>
//                     <button className="text-blue-500">Update Portfolio</button>
//                 </div>
//                 <div className="mb-4">
//                     <p className="text-gray-700"><strong>GitHub</strong></p>
//                     <p className="text-gray-500">https://github.com/abhishekshankar</p>
//                 </div>
//                 <div className="mb-4">
//                     <p className="text-gray-700"><strong>Behance</strong></p>
//                     <p className="text-gray-500">https://www.behance.net/abhishekshankar</p>
//                 </div>
//                 <div>
//                     <p className="text-gray-700"><strong>Personal Website</strong></p>
//                     <p className="text-gray-500">http://www.abhishekshankar.info</p>
//                 </div>
//             </div>
//         );

//         const WorkExperience = () => (
//             <div className="bg-white shadow rounded-lg p-4 mb-8">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold">Work Experience</h2>
//                     <button className="text-blue-500">Add Experience</button>
//                 </div>
//                 <div className="mb-4">
//                     <p className="text-gray-700"><strong>Software Developer</strong> <button className="text-blue-500">Edit</button></p>
//                     <p className="text-gray-500">Tech Innovations Inc., Kozhikode</p>
//                     <p className="text-gray-500">January 2021 - Present</p>
//                     <p className="text-gray-500">Top Projects: ASAP CSP, Kannur International Airport, Kerala Police</p>
//                 </div>
//                 <div>
//                     <p className="text-gray-700"><strong>Project Manager</strong> <button className="text-blue-500">Edit</button></p>
//                     <p className="text-gray-500">BuildRight Construction Co., Pune</p>
//                     <p className="text-gray-500">June 2016 - November 2021</p>
//                 </div>
//             </div>
//         );

//         const Preferences = () => (
//             <div className="bg-white shadow rounded-lg p-4 mb-8">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold">Preferences</h2>
//                     <button className="text-blue-500">Add Preferences</button>
//                 </div>
//             </div>
//         );

//         const DocumentsCertificates = () => (
//             <div className="bg-white shadow rounded-lg p-4 mb-8">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold">Documents & Certificates</h2>
//                     <button className="text-blue-500">Add Documents</button>
//                 </div>
//             </div>
//         );

//         const Footer = () => (
//             <footer className="bg-white shadow mt-8">
//                 <div className="container mx-auto px-4 py-8">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div>
//                             <img src="https://placehold.co/100x50" alt="ASAP Logo" className="h-12 mb-4" />
//                             <p className="text-gray-500">© 2024 ASAP Kerala. All Rights Reserved</p>
//                             <p className="text-gray-500">Powered by SRV InfoTech</p>
//                         </div>
//                         <div>
//                             <h3 className="text-gray-700 font-semibold mb-4">Quick Links</h3>
//                             <ul className="text-gray-500">
//                                 <li><a href="#" className="hover:text-blue-500">Internship by Stream</a></li>
//                                 <li><a href="#" className="hover:text-blue-500">Jobs by Stream</a></li>
//                                 <li><a href="#" className="hover:text-blue-500">Guaranteed Courses</a></li>
//                                 <li><a href="#" className="hover:text-blue-500">Explore Companies</a></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-gray-700 font-semibold mb-4">Are you having any issues?</h3>
//                             <p className="text-gray-500">Call Support: +91 9495999623</p>
//                             <p className="text-gray-500">Email Support: info@asapkerala.gov.in</p>
//                             <h3 className="text-gray-700 font-semibold mt-4 mb-4">Newsletter</h3>
//                             <form>
//                                 <input type="email" placeholder="Enter your email address" className="w-full p-2 border border-gray-300 rounded-lg mb-2" />
//                                 <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Subscribe</button>
//                             </form>
//                         </div>
//                     </div>
//                     <div className="mt-8 text-center">
//                         <p className="text-gray-500">Stay Connected with Us</p>
//                     </div>
//                 </div>
//             </footer>
//         );

//         const SampleComponent = () => (
//             <div>
//                 <Header />
//                 <div className="container mx-auto px-4 py-8">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div>
//                             <Sidebar />
//                         </div>
//                         <div className="md:col-span-2">
//                             <BasicInformation />
//                             <PaymentPending />
//                             <Education />
//                             <CareerObjective />
//                             <KeySkills />
//                             <Resume />
//                             <Portfolio />
//                             <WorkExperience />
//                             <Preferences />
//                             <DocumentsCertificates />
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />
//             </div>
//         );

//         ReactDOM.render(<SampleComponent />, document.getElementById('root'));
//     </script>
// </div>


<body class="bg-gray-50 p-4">
  <div class="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
   <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl font-semibold">
     Basic Information
    </h2>
    <button class="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg">
     Update
    </button>
   </div>
   <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="md:col-span-2">
     <div class="bg-gray-50 p-4 rounded-lg border">
      <div class="mb-4">
       <div class="flex justify-between">
        <div>
         <p class="font-semibold">
          Full Name
         </p>
         <p>
          Abhishek Shankar
         </p>
        </div>
        <div>
         <p class="font-semibold">
          Date of Birth
         </p>
         <p>
          18/10/1999
         </p>
        </div>
        <div>
         <p class="font-semibold">
          Gender
         </p>
         <p>
          Male
         </p>
        </div>
       </div>
      </div>
      <div class="mb-4">
       <div class="flex justify-between">
        <div>
         <p class="font-semibold">
          Mobile
         </p>
         <p class="flex items-center">
          +91 9876543210
          <i class="fas fa-check-circle text-green-500 ml-2">
          </i>
         </p>
        </div>
        <div>
         <p class="font-semibold">
          Email
         </p>
         <p class="flex items-center">
          abhisheksankar123@gmail.com
          <i class="fas fa-check-circle text-green-500 ml-2">
          </i>
         </p>
        </div>
       </div>
      </div>
      <div class="mb-4">
       <p class="font-semibold">
        Aadhar
       </p>
       <p class="flex items-center">
        33XX XXXX XXXX XX22
        <button class="bg-red-500 text-white px-2 py-1 rounded-lg ml-2">
         Verify
        </button>
       </p>
      </div>
      <div>
       <p class="font-semibold">
        Address
       </p>
       <p>
        Sweet Home, Evergreen Street, Varkkala, Thiruvananthapuram, Kerala, 695001, India
       </p>
      </div>
     </div>
    </div>
    <div>
     <div class="bg-white p-4 rounded-lg border">
      <ul class="space-y-2">
       <li class="flex items-center">
        <input checked="" class="mr-2" name="section" type="radio"/>
        <span class="font-semibold">
         Basic Information
        </span>
       </li>
       <li class="flex items-center">
        <input class="mr-2" name="section" type="radio"/>
        <span>
         Education
        </span>
       </li>
       <li class="flex items-center">
        <input class="mr-2" name="section" type="radio"/>
        <span>
         Career Objective
        </span>
       </li>
       <li class="flex items-center">
        <input class="mr-2" name="section" type="radio"/>
        <span>
         Key Skills
        </span>
       </li>
       <li class="flex items-center">
        <input class="mr-2" name="section" type="radio"/>
        <span>
         Resume/Portfolio
        </span>
       </li>
       <li class="flex items-center">
        <input class="mr-2" name="section" type="radio"/>
        <span>
         Preferences
        </span>
       </li>
       <li class="flex items-center">
        <input class="mr-2" name="section" type="radio"/>
        <span>
         Work Experience
        </span>
       </li>
       <li class="flex items-center">
        <input class="mr-2" name="section" type="radio"/>
        <span>
         Additional Documents
        </span>
       </li>
      </ul>
     </div>
    </div>
   </div>
   <div class="mt-6 bg-green-50 p-4 rounded-lg flex items-center justify-between">
    <div class="flex items-center">
     <img alt="Payment Pending Icon" class="mr-4" src="https://placehold.co/50x50"/>
     <div>
      <p class="font-semibold">
       Payment Pending
      </p>
      <p>
       Registration fee 500 rupees pending. Pay now and get access to all services.
      </p>
     </div>
    </div>
    <button class="bg-red-500 text-white px-6 py-2 rounded-lg">
     Pay Now
    </button>
   </div>
  </div>
 </body>

