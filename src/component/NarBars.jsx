import Pro from "../assets/Pro.png";
import { useNavigate } from "react-router-dom";

export function NavBar() {
    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
                <div className="max-w-2xl mx-auto md:mx-0 px-6 md:px-12 flex flex-col justify-center text-center md:text-left">
                    {/* Marquee */}
                    <div className="mb-6">
                        <p className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-5 py-2 rounded-full border border-red-200">
                            🚧 This site is under construction
                        </p>
                    </div>

                    <h1 className="text-blue-700 text-5xl md:text-6xl font-bold leading-tight mb-6">
                        Star Tech
                    </h1>

                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                        Achieve your career goals with Star Tech. We create innovative tech solutions 
                        that empower businesses and individuals. From software development to digital 
                        transformation  powered by AI, cloud, and modern technologies.
                    </p>

                    <button 
                        onClick={() => navigate('/apply')}
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 
                                   rounded-2xl text-lg font-semibold transition-all duration-300 
                                   shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 active:scale-95">
                        Get Started Now
                    </button>
                </div>

                {/* Image Section - Enhanced */}
                <div className="hidden md:flex items-center justify-center relative px-6">
                    <div className="relative">
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-[3.5rem] -z-10" />
                        
                        <img 
                            src={Pro} 
                            alt="Star Tech Hero" 
                            className="w-full max-w-lg rounded-3xl shadow-2xl 
                                       opacity-90 hover:opacity-100 
                                       transition-all duration-500 
                                       ring-1 ring-white/50" 
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        Why Choose <span className="text-blue-600">Star Tech</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        {/* Feature 1 */}
                        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <i className="fa-solid fa-laptop-code text-blue-600 text-3xl"></i>
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Learn from Experts</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Gain practical skills from experienced tech professionals and industry leaders.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <i className="fa-solid fa-certificate text-blue-600 text-3xl"></i>
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Certificates & Recognition</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Earn globally recognized certificates to boost your professional profile.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <i className="fa-solid fa-clock text-blue-600 text-3xl"></i>
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Learn at Your Pace</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Flexible online learning — study anytime, anywhere, on any device.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}