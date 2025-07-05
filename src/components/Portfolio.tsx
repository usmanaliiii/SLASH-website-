import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Filter, ArrowRight, Star } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filters = ['All', 'Content', 'Shopify', 'Branding', 'Development', 'Marketing'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Revolution',
      category: 'Shopify',
      description: 'Complete Shopify store transformation with 300% increase in conversions',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['E-Commerce', 'Shopify', 'Conversion'],
      results: '+300% Conversions',
      rating: 5
    },
    {
      id: 2,
      title: 'Brand Identity Redesign',
      category: 'Branding',
      description: 'Complete brand overhaul for luxury fashion startup',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Branding', 'Logo', 'Identity'],
      results: '+400% Recognition',
      rating: 5
    },
    {
      id: 3,
      title: 'Content Marketing Success',
      category: 'Content',
      description: 'Strategic content creation campaign that increased engagement by 400%',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Content', 'Engagement', 'Traffic'],
      results: '+400% Engagement',
      rating: 5
    },
    {
      id: 4,
      title: 'Tech Startup Platform',
      category: 'Development',
      description: 'Custom web application with advanced analytics dashboard',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Development', 'Analytics', 'Dashboard'],
      results: '+500% Efficiency',
      rating: 5
    },
    {
      id: 5,
      title: 'Social Media Campaign',
      category: 'Marketing',
      description: 'Viral social media campaign reaching 2M+ users',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Social Media', 'Campaign', 'Viral'],
      results: '2M+ Reach',
      rating: 5
    },
    {
      id: 6,
      title: 'Restaurant Chain Website',
      category: 'Development',
      description: 'Multi-location restaurant website with online ordering system',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Development', 'Restaurant', 'E-Commerce'],
      results: '+400% Orders',
      rating: 5
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [filteredProjects]);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 border border-slate-800/50 mb-6 hover:scale-105 transition-transform duration-300">
            <Filter className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 bg-clip-text text-transparent">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-stone-700 bg-clip-text text-transparent">
            Portfolio Showcase
          </h2>
          <p className="text-xl text-slate-900 max-w-3xl mx-auto leading-relaxed">
            Explore our latest projects and see how we've helped businesses transform their digital presence
          </p>
        </div>

        {/* Filter Buttons with Animation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-slate-800 to-stone-700 text-white shadow-lg scale-105'
                  : 'bg-white/60 backdrop-blur-sm border border-slate-200/50 text-slate-700 hover:border-slate-300/50 hover:bg-white/80'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className={`group bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200/50 hover:-translate-y-2 cursor-pointer transform ${
                visibleProjects[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay with Results */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                        {project.results}
                      </span>
                      <div className="flex items-center">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-white/90 backdrop-blur-sm text-slate-800 py-2 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors duration-200 group/btn">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-slate-800 to-stone-700 hover:from-slate-900 hover:to-stone-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;