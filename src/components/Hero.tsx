import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Zap, Award, ChevronDown } from 'lucide-react';

interface HeroProps {
  onBookingClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingClick }) => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const rotatingTexts = [
    "Digital Brilliance",
            "Content Creation", 
    "Brand Innovation",
    "Growth Solutions"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-slate-100 to-stone-100 rounded-full blur-3xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 md:w-4 h-3 md:h-4 bg-amber-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-2 md:w-3 h-2 md:h-3 bg-blue-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 md:w-2 h-1.5 md:h-2 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
        {/* New animated dots for digital effect */}
        <div className="absolute top-1/3 left-2/3 w-4 md:w-5 h-4 md:h-5 bg-cyan-400 rounded-full animate-float opacity-60 delay-500"></div>
        <div className="absolute bottom-1/4 left-1/5 w-2 md:w-3 h-2 md:h-3 bg-orange-400 rounded-full animate-float opacity-70 delay-800"></div>
        <div className="absolute top-1/5 right-1/5 w-5 md:w-6 h-5 md:h-6 bg-violet-400 rounded-full animate-float opacity-50 delay-1200"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-300 rounded-full animate-float opacity-80 delay-1500"></div>
      </div>

      {/* Starry Sky Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Example: 20 stars, you can add more for density */}
        <div className="absolute top-5 left-10 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse-slow" style={{animationDuration: '2.5s'}}></div>
        <div className="absolute top-1/4 left-1/3 w-0.5 h-0.5 bg-blue-200 rounded-full opacity-70 animate-pulse-slow" style={{animationDuration: '3.2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse-slow" style={{animationDuration: '2.1s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-0.5 h-0.5 bg-blue-100 rounded-full opacity-90 animate-pulse-slow" style={{animationDuration: '2.8s'}}></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse-slow" style={{animationDuration: '3.5s'}}></div>
        <div className="absolute top-1/5 left-2/3 w-0.5 h-0.5 bg-blue-200 rounded-full opacity-60 animate-pulse-slow" style={{animationDuration: '2.3s'}}></div>
        <div className="absolute top-1/3 left-2/5 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse-slow" style={{animationDuration: '2.7s'}}></div>
        <div className="absolute top-2/5 left-3/5 w-0.5 h-0.5 bg-blue-100 rounded-full opacity-70 animate-pulse-slow" style={{animationDuration: '3.1s'}}></div>
        <div className="absolute top-1/6 left-1/2 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse-slow" style={{animationDuration: '2.9s'}}></div>
        <div className="absolute top-1/8 left-4/5 w-0.5 h-0.5 bg-blue-200 rounded-full opacity-80 animate-pulse-slow" style={{animationDuration: '2.6s'}}></div>
        <div className="absolute top-3/5 left-1/6 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse-slow" style={{animationDuration: '3.3s'}}></div>
        <div className="absolute top-4/5 left-1/8 w-0.5 h-0.5 bg-blue-100 rounded-full opacity-60 animate-pulse-slow" style={{animationDuration: '2.2s'}}></div>
        <div className="absolute top-1/7 left-2/7 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse-slow" style={{animationDuration: '2.4s'}}></div>
        <div className="absolute top-2/7 left-3/7 w-0.5 h-0.5 bg-blue-200 rounded-full opacity-70 animate-pulse-slow" style={{animationDuration: '3.4s'}}></div>
        <div className="absolute top-3/7 left-4/7 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse-slow" style={{animationDuration: '2.8s'}}></div>
        <div className="absolute top-4/7 left-5/7 w-0.5 h-0.5 bg-blue-100 rounded-full opacity-80 animate-pulse-slow" style={{animationDuration: '2.7s'}}></div>
        <div className="absolute top-5/7 left-6/7 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse-slow" style={{animationDuration: '3.2s'}}></div>
        <div className="absolute top-6/7 left-1/7 w-0.5 h-0.5 bg-blue-200 rounded-full opacity-60 animate-pulse-slow" style={{animationDuration: '2.5s'}}></div>
        <div className="absolute top-1/9 left-2/9 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse-slow" style={{animationDuration: '2.3s'}}></div>
        <div className="absolute top-2/9 left-3/9 w-0.5 h-0.5 bg-blue-100 rounded-full opacity-70 animate-pulse-slow" style={{animationDuration: '3.1s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge with Animation */}
          <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 mb-6 md:mb-8 hover:scale-105 transition-transform duration-300">
            <Star className="w-3 md:w-4 h-3 md:h-4 text-amber-500 mr-1.5 md:mr-2 animate-spin-slow" />
            <span className="text-xs md:text-sm font-medium text-amber-800">Premium Digital Services</span>
          </div>

          {/* Main Heading with Typing Effect */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-slate-900 leading-tight">
            Empowering Brands with
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent font-bold transition-all duration-500">
              {rotatingTexts[currentText]}
            </span>
          </h1>

          {/* Subtitle with Stagger Animation */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Transform your business with our premium digital marketing, content creation, and development services. 
            We craft extraordinary digital experiences that drive results.
          </p>

          {/* CTA Buttons with Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 animate-fade-in-up delay-500">
            <button
              onClick={onBookingClick}
              className="group bg-gradient-to-r from-slate-800 to-stone-700 hover:from-slate-900 hover:to-stone-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Journey</span>
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={scrollToServices}
              className="bg-white/50 backdrop-blur-sm border border-stone-200 hover:border-stone-300 text-slate-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/80 flex items-center justify-center group"
            >
              View Our Services
              <ChevronDown className="w-4 md:w-5 h-4 md:h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Key Features with Stagger Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-stone-200/50 hover:border-stone-300/50 transition-all duration-300 group hover:scale-105 animate-fade-in-up delay-700">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                <Zap className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-1.5 md:mb-2">Lightning Fast</h3>
              <p className="text-sm md:text-base text-slate-600">Quick turnaround times without compromising quality</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-stone-200/50 hover:border-stone-300/50 transition-all duration-300 group hover:scale-105 animate-fade-in-up delay-900">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-slate-500 to-stone-500 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                <Award className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-1.5 md:mb-2">Award Winning</h3>
              <p className="text-sm md:text-base text-slate-600">Recognized excellence in digital innovation</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-stone-200/50 hover:border-stone-300/50 transition-all duration-300 group hover:scale-105 animate-fade-in-up delay-1100">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                <Star className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-1.5 md:mb-2">5-Star Rated</h3>
              <p className="text-sm md:text-base text-slate-600">Consistently rated by satisfied clients worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToServices}
          className="w-6 md:w-8 h-10 md:h-12 border-2 border-slate-300 rounded-full flex justify-center"
        >
          <div className="w-0.5 md:w-1 h-2 md:h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;