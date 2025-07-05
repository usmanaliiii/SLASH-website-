import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, X, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAllReviewsOpen, setIsAllReviewsOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart',
      company: 'Technology Startup',
      rating: 5,
              text: 'SLASHNEST transformed our digital presence completely. Their strategic approach to content creation and social media marketing helped us achieve 300% growth in just 6 months.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Founder, EcoShop',
      company: 'E-Commerce',
      rating: 5,
      text: 'The Shopify development team at SLASHNEST created an amazing online store for us. Our conversion rates improved by 250% and the user experience is exceptional.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director, Luxe Fashion',
      company: 'Fashion Brand',
      rating: 5,
      text: 'Working with SLASHNEST was a game-changer for our brand. Their creative team delivered a stunning brand identity that perfectly captures our vision.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Owner, Local Restaurant Chain',
      company: 'Food & Beverage',
      rating: 5,
      text: 'The custom website development exceeded our expectations. SLASHNEST created a beautiful, functional site that increased our online orders by 400%.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 5,
      name: 'Lisa Park',
      position: 'CMO, HealthTech Solutions',
      company: 'Healthcare Technology',
      rating: 5,
      text: 'SLASHNEST\'s digital marketing expertise helped us reach our target audience effectively. Their data-driven approach delivered measurable results.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 6,
      name: 'Alex Martinez',
      position: 'Founder, GreenTech Innovations',
      company: 'Environmental Technology',
      rating: 5,
      text: 'SLASHNEST helped us build a powerful online presence that perfectly represents our mission. Their attention to detail and strategic thinking is unmatched.',
      image: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 7,
      name: 'Rachel Kim',
      position: 'CEO, Creative Agency',
      company: 'Marketing Agency',
      rating: 5,
      text: 'The team at SLASHNEST delivered exceptional results for our rebranding project. Their creative vision and technical expertise exceeded all expectations.',
      image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 8,
      name: 'James Wilson',
      position: 'Operations Manager, Retail Chain',
      company: 'Retail',
      rating: 5,
      text: 'SLASHNEST transformed our e-commerce platform into a sales powerhouse. The user experience improvements led to a 180% increase in online revenue.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 9,
      name: 'Sophia Lee',
      position: 'Marketing Manager, SaaS Platform',
      company: 'Software as a Service',
      rating: 5,
      text: 'Working with SLASHNEST was a game-changer for our lead generation. Their digital marketing strategies helped us scale our business rapidly.',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 10,
      name: 'Carlos Rodriguez',
      position: 'Founder, Fitness Brand',
      company: 'Health & Fitness',
      rating: 5,
      text: 'SLASHNEST created an amazing brand identity and website that perfectly captures our fitness philosophy. The results have been incredible.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openAllReviews = () => {
    setIsAllReviewsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeAllReviews = () => {
    setIsAllReviewsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-50 to-stone-50 border border-slate-200/50 mb-6">
              <Star className="w-4 h-4 text-amber-500 mr-2" />
              <span className="text-sm font-medium text-slate-700">Client Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience
            </p>
            
            {/* View All Reviews Button */}
            <button
              onClick={openAllReviews}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              View All Reviews
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-50 to-stone-50 rounded-3xl p-8 md:p-12 border border-slate-200/50">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Client Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed italic">
                    "{testimonials[currentSlide].text}"
                  </blockquote>

                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="text-slate-600">
                      {testimonials[currentSlide].position}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      {testimonials[currentSlide].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 shadow-lg"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-amber-400 to-orange-400 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Overall Rating */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full border border-amber-200/50">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-amber-800">
                4.9/5 Average Rating from 250+ Reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Modal */}
      {isAllReviewsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white rounded-t-3xl p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-800">All Client Reviews</h2>
                  <p className="text-slate-600 mt-2">Read what our clients have to say about their experience</p>
                </div>
                <button
                  onClick={closeAllReviews}
                  className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="bg-gradient-to-br from-slate-50 to-stone-50 rounded-2xl p-6 border border-slate-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-slate-700 mb-4 leading-relaxed italic">
                          "{testimonial.text}"
                        </blockquote>
                        <div>
                          <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                          <p className="text-sm text-slate-600">{testimonial.position}</p>
                          <p className="text-xs text-slate-500">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;