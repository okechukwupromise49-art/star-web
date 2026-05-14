export  function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div>
            <h2 className="text-white text-4xl font-bold mb-4">Star Tech</h2>
            <p className="text-gray-400 leading-relaxed">
              Innovative technology solutions empowering businesses and individuals in the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/service" className="hover:text-white transition">Services</a></li>
              <li><a href="/clients" className="hover:text-white transition">Clients</a></li>
              <li><a href="/apply" className="hover:text-white transition">Join Now</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Solar Installation</li>
              <li>CCTV & Security</li>
              <li>Photocopier Maintenance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Get In Touch</h3>
            <p className="text-gray-400 mb-2">Abuja, Nigeria</p>
            <p className="text-gray-400 mb-6">info@startech.com.ng</p>
            
            {/* Social Icons */}
            <div className="flex gap-5 text-2xl">
              <a href="#" className="hover:text-blue-500 transition"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="hover:text-blue-500 transition"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="hover:text-blue-500 transition"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="hover:text-blue-500 transition"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          
          <p>© {new Date().getFullYear()} Star Tech. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {/* Language & Currency */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition">
                <i className="fa-solid fa-globe"></i>
                <span>English</span>
              </div>
              
              <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition">
                <i className="fa-solid fa-dollar-sign"></i>
                <span>USD</span>
              </div>
            </div>

            <div className="hidden md:block text-gray-700">•</div>

            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}