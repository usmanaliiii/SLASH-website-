import React, { useState, useEffect, useRef } from 'react';
import { Users, Globe, FolderOpen } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    countries: 0,
    projects: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = {
    clients: 250,
    countries: 15,
    projects: 500
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        clients: Math.floor(finalCounts.clients * easeOutQuart),
        countries: Math.floor(finalCounts.countries * easeOutQuart),
        projects: Math.floor(finalCounts.projects * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      count: counts.clients,
      suffix: '+',
      label: 'Happy Clients',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      count: counts.countries,
      suffix: '+',
      label: 'Countries Served',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FolderOpen,
      count: counts.projects,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-sky-400/30 to-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-cyan-400/30 to-sky-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 border border-slate-800/50 mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 bg-clip-text text-transparent">Our Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-slate-900">
            Numbers That Speak
          </h2>
          <p className="text-base md:text-xl text-slate-900 max-w-3xl mx-auto leading-relaxed">
            Every project we complete adds to our growing legacy of digital excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className={`w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r ${stat.color} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-8 md:w-10 h-8 md:h-10 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-1.5 md:mb-2">
                {stat.count}
                <span className="text-2xl md:text-3xl lg:text-4xl">{stat.suffix}</span>
              </div>
              
              <div className="text-base md:text-lg text-slate-900 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-base md:text-lg text-slate-900">
            Join hundreds of satisfied clients who trust SLASHNEST
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;