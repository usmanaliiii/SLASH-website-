import React from 'react';

const ClientsMarquee = () => {
  const clients = [
    'TechStart', 'EcoShop', 'Luxe Fashion', 'HealthTech Solutions', 'Local Restaurant Chain',
    'Digital Innovators', 'Green Energy Co', 'Fashion Forward', 'Smart Solutions', 'Creative Agency',
    'Tech Pioneers', 'Sustainable Living', 'Modern Brands', 'Future Tech', 'Elite Services'
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-100 to-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 mb-6">
            <span className="text-sm font-medium text-slate-700">Trusted By</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-stone-700 bg-clip-text text-transparent">
            Brands We've Partnered With
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join the growing list of successful businesses that trust SLASHNEST
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="mx-8 flex items-center justify-center"
              >
                <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-2xl px-8 py-4 hover:bg-white/80 transition-all duration-300 shadow-lg">
                  <span className="text-slate-700 font-semibold text-lg whitespace-nowrap">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-100 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-stone-100 to-transparent pointer-events-none"></div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600">
            Ready to join them? 
            <span className="font-semibold text-slate-800 ml-2">Let's start your success story</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;