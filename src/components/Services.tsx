import React, { useState, useRef, useEffect } from 'react';
import { 
  Share2, 
  Target, 
  Search, 
  Palette, 
  ShoppingBag, 
  Code,
  ArrowRight,
  CheckCircle,
  X,
  TrendingUp,
  Users,
  Globe,
  Zap,
  Shield,
  Clock,
  DollarSign,
  RefreshCw,
  CreditCard
} from 'lucide-react';

interface ServicesProps {
  onBookingClick?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBookingClick }) => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [visibleServices, setVisibleServices] = useState<boolean[]>([]);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Boost your brand presence across all major social platforms with engaging content and strategic campaigns.',
      features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics & Reporting'],
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'from-blue-600 to-cyan-600',
      stats: '300% avg. engagement increase',
      detailedInfo: {
        overview: 'Transform your social media presence into a powerful marketing engine that drives engagement, builds brand loyalty, and generates measurable ROI.',
        benefits: [
          'Increase brand awareness and reach new audiences',
          'Build authentic relationships with your customers',
          'Drive website traffic and lead generation',
          'Improve customer engagement and retention',
          'Gain valuable insights into audience behavior',
          'Boost sales through targeted social commerce'
        ],
        services: [
          {
            title: 'Content Strategy & Creation',
            description: 'Develop compelling, platform-specific content that resonates with your target audience and aligns with your brand voice.',
            includes: ['Content calendars', 'Visual design', 'Copywriting', 'Video production']
          },
          {
            title: 'Community Management',
            description: 'Foster meaningful relationships with your audience through active engagement and community building.',
            includes: ['Comment moderation', 'Direct messaging', 'User-generated content', 'Crisis management']
          },
          {
            title: 'Paid Social Advertising',
            description: 'Maximize your reach and ROI with targeted paid campaigns across all major social platforms.',
            includes: ['Campaign strategy', 'Ad creative design', 'Audience targeting', 'Performance optimization']
          },
          {
            title: 'Analytics & Reporting',
            description: 'Track performance, measure success, and optimize your social media strategy with comprehensive analytics.',
            includes: ['Performance tracking', 'Competitor analysis', 'ROI measurement', 'Strategy recommendations']
          }
        ],
        process: [
          'Audit current social media presence',
          'Develop comprehensive strategy',
          'Create engaging content calendar',
          'Implement and monitor campaigns',
          'Analyze performance and optimize',
          'Scale successful initiatives'
        ]
      }
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'Comprehensive digital strategies that drive growth, engagement, and conversions across all channels.',
      features: ['Campaign Strategy', 'Multi-Channel Marketing', 'Lead Generation', 'Performance Tracking'],
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'from-purple-600 to-pink-600',
      stats: '250% ROI improvement',
      detailedInfo: {
        overview: 'Create a unified digital marketing ecosystem that connects all touchpoints, maximizes customer lifetime value, and delivers sustainable business growth.',
        benefits: [
          'Increase market share and competitive advantage',
          'Improve customer acquisition and retention',
          'Optimize marketing spend and ROI',
          'Build brand authority and trust',
          'Generate qualified leads consistently',
          'Scale business operations efficiently'
        ],
        services: [
          {
            title: 'Strategic Planning & Consulting',
            description: 'Develop data-driven marketing strategies aligned with your business objectives and target audience.',
            includes: ['Market research', 'Competitive analysis', 'Audience segmentation', 'Channel strategy']
          },
          {
            title: 'Multi-Channel Campaign Management',
            description: 'Execute coordinated campaigns across email, social media, search, and display advertising.',
            includes: ['Campaign coordination', 'Cross-channel optimization', 'Budget allocation', 'Performance tracking']
          },
          {
            title: 'Lead Generation & Nurturing',
            description: 'Build and nurture high-quality leads through targeted content and automated workflows.',
            includes: ['Lead magnets', 'Email sequences', 'Lead scoring', 'Conversion optimization']
          },
          {
            title: 'Marketing Automation',
            description: 'Streamline marketing operations and personalize customer experiences at scale.',
            includes: ['Workflow automation', 'Personalization', 'A/B testing', 'CRM integration']
          }
        ],
        process: [
          'Conduct comprehensive market analysis',
          'Develop integrated marketing strategy',
          'Create and launch campaigns',
          'Monitor and optimize performance',
          'Analyze results and iterate',
          'Scale successful initiatives'
        ]
      }
    },
    {
      icon: Search,
      title: 'Content Creation',
      description: 'Create compelling, engaging content that resonates with your audience and drives meaningful engagement.',
      features: ['Blog Writing', 'Social Media Content', 'Video Production', 'Email Marketing'],
      color: 'from-green-500 to-emerald-500',
      hoverColor: 'from-green-600 to-emerald-600',
      stats: '400% engagement increase',
      detailedInfo: {
        overview: 'Develop high-quality, engaging content that connects with your audience, builds brand authority, and drives conversions through strategic storytelling.',
        benefits: [
          'Increase audience engagement and interaction',
          'Build brand authority and thought leadership',
          'Improve customer relationships and loyalty',
          'Drive organic traffic and visibility',
          'Support marketing and sales efforts',
          'Enhance brand storytelling and messaging'
        ],
        services: [
          {
            title: 'Blog & Article Writing',
            description: 'Create informative, engaging blog posts and articles that provide value to your audience.',
            includes: ['Topic research', 'SEO-optimized writing', 'Content calendars', 'Editorial planning']
          },
          {
            title: 'Social Media Content',
            description: 'Develop compelling social media posts that engage your audience across all platforms.',
            includes: ['Platform-specific content', 'Visual design', 'Copywriting', 'Content scheduling']
          },
          {
            title: 'Video & Multimedia Content',
            description: 'Create engaging video content and multimedia assets that tell your brand story.',
            includes: ['Video scripting', 'Production coordination', 'Editing', 'Distribution strategy']
          },
          {
            title: 'Email Marketing Content',
            description: 'Craft compelling email campaigns that nurture leads and drive conversions.',
            includes: ['Newsletter creation', 'Campaign sequences', 'Personalization', 'Performance tracking']
          }
        ],
        process: [
          'Conduct content audit and strategy',
          'Develop content calendar',
          'Create engaging content',
          'Optimize for platforms',
          'Publish and promote',
          'Analyze and optimize performance'
        ]
      }
    },
    {
      icon: Palette,
      title: 'Brand Building',
      description: 'Create a memorable brand identity that resonates with your audience and stands out in the market.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
      color: 'from-orange-500 to-red-500',
      hoverColor: 'from-orange-600 to-red-600',
      stats: '400% brand recognition boost',
      detailedInfo: {
        overview: 'Develop a compelling brand identity that differentiates your business, builds customer loyalty, and drives long-term business success.',
        benefits: [
          'Increase brand recognition and recall',
          'Build customer trust and loyalty',
          'Command premium pricing',
          'Differentiate from competitors',
          'Create emotional connections',
          'Support business expansion'
        ],
        services: [
          {
            title: 'Brand Strategy & Positioning',
            description: 'Define your brand\'s unique value proposition and market positioning for maximum impact.',
            includes: ['Brand positioning', 'Value proposition', 'Target audience analysis', 'Competitive differentiation']
          },
          {
            title: 'Visual Identity Design',
            description: 'Create a cohesive visual system that communicates your brand values and personality.',
            includes: ['Logo design', 'Color palette', 'Typography', 'Visual elements']
          },
          {
            title: 'Brand Guidelines & Standards',
            description: 'Establish comprehensive guidelines to maintain brand consistency across all touchpoints.',
            includes: ['Brand guidelines', 'Usage standards', 'Asset library', 'Training materials']
          },
          {
            title: 'Brand Implementation',
            description: 'Apply your brand identity consistently across all marketing materials and touchpoints.',
            includes: ['Website design', 'Marketing materials', 'Social media', 'Print collateral']
          }
        ],
        process: [
          'Conduct brand research and analysis',
          'Develop brand strategy and positioning',
          'Create visual identity system',
          'Establish brand guidelines',
          'Implement across all touchpoints',
          'Monitor and maintain consistency'
        ]
      }
    },
    {
      icon: ShoppingBag,
      title: 'Shopify Development',
      description: 'Build high-converting e-commerce stores with custom Shopify solutions tailored to your business.',
      features: ['Store Setup', 'Theme Customization', 'App Integration', 'Payment Solutions'],
      color: 'from-indigo-500 to-purple-500',
      hoverColor: 'from-indigo-600 to-purple-600',
      stats: '350% conversion rate increase',
      detailedInfo: {
        overview: 'Create powerful, scalable e-commerce experiences that drive sales, enhance customer satisfaction, and support business growth.',
        benefits: [
          'Increase online sales and revenue',
          'Improve customer shopping experience',
          'Reduce cart abandonment rates',
          'Streamline order management',
          'Enhance mobile commerce',
          'Scale business operations'
        ],
        services: [
          {
            title: 'Store Setup & Configuration',
            description: 'Launch your Shopify store with optimal settings and configurations for success.',
            includes: ['Store setup', 'Domain configuration', 'Payment gateway setup', 'Shipping configuration']
          },
          {
            title: 'Custom Theme Development',
            description: 'Create unique, conversion-optimized themes that reflect your brand and drive sales.',
            includes: ['Custom design', 'Responsive development', 'Performance optimization', 'SEO optimization']
          },
          {
            title: 'App Integration & Customization',
            description: 'Integrate essential apps and develop custom solutions to enhance store functionality.',
            includes: ['App selection', 'Custom development', 'API integration', 'Workflow automation']
          },
          {
            title: 'E-commerce Optimization',
            description: 'Optimize your store for maximum conversions and customer satisfaction.',
            includes: ['Conversion optimization', 'User experience design', 'Mobile optimization', 'Performance tuning']
          }
        ],
        process: [
          'Analyze business requirements',
          'Design store architecture',
          'Develop custom theme',
          'Integrate essential apps',
          'Test and optimize',
          'Launch and maintain'
        ]
      }
    },
    {
      icon: RefreshCw,
      title: 'Shopify Migration',
      description: 'Seamlessly migrate your e-commerce store from any platform to Shopify with zero downtime and data preservation.',
      features: ['Platform Migration', 'Data Transfer', 'Theme Customization', 'Post-Launch Support'],
      color: 'from-indigo-500 to-purple-500',
      hoverColor: 'from-indigo-600 to-purple-600',
      stats: 'Zero downtime migration',
      detailedInfo: {
        overview: 'Expertly migrate your e-commerce business from any platform to Shopify, ensuring a smooth transition with preserved data, enhanced functionality, and improved performance.',
        benefits: [
          'Seamless migration with zero business interruption',
          'Complete data preservation and transfer',
          'Enhanced Shopify features and capabilities',
          'Improved site performance and user experience',
          'Access to Shopify\'s extensive app ecosystem',
          'Ongoing support and optimization'
        ],
        services: [
          {
            title: 'Platform Assessment & Planning',
            description: 'Comprehensive analysis of your current platform and strategic planning for Shopify migration.',
            includes: ['Current platform audit', 'Data mapping strategy', 'Migration timeline planning', 'Risk assessment']
          },
          {
            title: 'Data Migration & Transfer',
            description: 'Secure transfer of all product data, customer information, and order history to Shopify.',
            includes: ['Product catalog migration', 'Customer data transfer', 'Order history preservation', 'SEO URL mapping']
          },
          {
            title: 'Design & Theme Migration',
            description: 'Recreate your brand identity and design on Shopify with enhanced functionality.',
            includes: ['Custom theme development', 'Brand consistency', 'Mobile optimization', 'Conversion optimization']
          },
          {
            title: 'Post-Migration Support',
            description: 'Comprehensive support and optimization after successful migration to Shopify.',
            includes: ['Performance monitoring', 'Bug fixes', 'Training and documentation', 'Ongoing optimization']
          }
        ],
        process: [
          'Assess current platform and requirements',
          'Plan migration strategy and timeline',
          'Set up Shopify store and configure settings',
          'Migrate data and customize theme',
          'Test thoroughly and launch',
          'Provide post-migration support'
        ]
      }
    },
    {
      icon: CreditCard,
      title: 'POS Software Solutions',
      description: 'Modern point-of-sale systems that streamline operations, enhance customer experience, and boost sales efficiency.',
      features: ['POS Integration', 'Inventory Management', 'Payment Processing', 'Analytics & Reporting'],
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'from-purple-600 to-pink-600',
      stats: '40% faster checkout process',
      detailedInfo: {
        overview: 'Implement cutting-edge POS solutions that transform your business operations, improve customer satisfaction, and provide real-time insights for better decision-making.',
        benefits: [
          'Streamline checkout process and reduce wait times',
          'Improve inventory management and reduce stockouts',
          'Enhance customer experience with modern payment options',
          'Gain real-time insights into sales and performance',
          'Reduce human errors and improve accuracy',
          'Integrate with existing business systems seamlessly'
        ],
        services: [
          {
            title: 'POS System Implementation',
            description: 'Deploy modern POS systems tailored to your business needs and industry requirements.',
            includes: ['Hardware setup', 'Software installation', 'Staff training', 'System configuration']
          },
          {
            title: 'Payment Processing Integration',
            description: 'Integrate multiple payment methods and ensure secure, fast transaction processing.',
            includes: ['Credit card processing', 'Digital wallets', 'Contactless payments', 'Security compliance']
          },
          {
            title: 'Inventory Management System',
            description: 'Automate inventory tracking and management to prevent stockouts and optimize ordering.',
            includes: ['Real-time tracking', 'Automated reordering', 'Barcode scanning', 'Stock alerts']
          },
          {
            title: 'Analytics & Business Intelligence',
            description: 'Provide comprehensive reporting and analytics to drive informed business decisions.',
            includes: ['Sales analytics', 'Customer insights', 'Performance reports', 'Trend analysis']
          }
        ],
        process: [
          'Assess business requirements and current systems',
          'Design and configure POS solution',
          'Install hardware and integrate software',
          'Train staff and test system functionality',
          'Launch and monitor performance',
          'Provide ongoing support and optimization'
        ]
      }
    },
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom websites that combine stunning design with powerful functionality and seamless user experience.',
      features: ['Responsive Design', 'Custom Development', 'CMS Integration', 'Performance Optimization'],
      color: 'from-teal-500 to-blue-500',
      hoverColor: 'from-teal-600 to-blue-600',
      stats: '99.9% uptime guarantee',
      detailedInfo: {
        overview: 'Build high-performance, scalable websites that deliver exceptional user experiences and drive business objectives.',
        benefits: [
          'Improve user experience and engagement',
          'Increase website performance and speed',
          'Enhance search engine visibility',
          'Reduce maintenance costs',
          'Improve security and reliability',
          'Support business growth and scalability'
        ],
        services: [
          {
            title: 'Custom Web Development',
            description: 'Build tailored websites that meet your specific business needs and objectives.',
            includes: ['Frontend development', 'Backend development', 'Database design', 'API development']
          },
          {
            title: 'Responsive Design & UX',
            description: 'Create intuitive, mobile-first experiences that engage users across all devices.',
            includes: ['Responsive design', 'User experience design', 'Accessibility compliance', 'Cross-browser testing']
          },
          {
            title: 'CMS Integration & Management',
            description: 'Implement content management systems for easy website updates and maintenance.',
            includes: ['WordPress integration', 'Custom CMS development', 'Content migration', 'Training and support']
          },
          {
            title: 'Performance & Security Optimization',
            description: 'Ensure your website loads quickly, performs reliably, and remains secure.',
            includes: ['Speed optimization', 'Security hardening', 'SSL implementation', 'Backup systems']
          }
        ],
        process: [
          'Gather requirements and plan',
          'Design user interface and experience',
          'Develop frontend and backend',
          'Integrate content management',
          'Test and optimize performance',
          'Deploy and maintain'
        ]
      }
    }
  ];

  useEffect(() => {
    const observers = serviceRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleServices(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const openServiceModal = (index: number) => {
    setSelectedService(index);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="services" className="py-20 bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-200 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-100 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 border border-slate-800/50 mb-6 hover:scale-105 transition-transform duration-300">
              <span className="text-sm font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 bg-clip-text text-transparent">Premium Digital Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-relaxed overflow-visible text-slate-900">
              Premium Digital Services
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive digital solutions designed to elevate your brand and drive meaningful results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={el => serviceRefs.current[index] = el}
                className={`group bg-gradient-to-br from-white to-slate-50/50 rounded-3xl p-8 border border-slate-200/50 hover:border-slate-300/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer transform ${
                  visibleServices[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => openServiceModal(index)}
              >
                <div className={`w-16 h-16 ${index === 0 ? 'bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600' : `bg-gradient-to-r ${hoveredService === index ? service.hoverColor : service.color}`} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:rotate-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-slate-900 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Stats Badge */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-xs font-medium rounded-full">
                    {service.stats}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-900">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-200/50">
                  <button className="flex items-center text-slate-700 font-medium hover:text-slate-900 transition-colors duration-300 group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your digital goals and drive growth.
              </p>
              <button 
                onClick={onBookingClick}
                className="bg-gradient-to-r from-slate-800 to-stone-700 hover:from-slate-900 hover:to-stone-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white rounded-t-3xl p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${services[selectedService].color} rounded-xl flex items-center justify-center mr-4`}>
                    {React.createElement(services[selectedService].icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">{services[selectedService].title}</h2>
                    <p className="text-slate-600">{services[selectedService].stats}</p>
                  </div>
                </div>
                <button
                  onClick={closeServiceModal}
                  className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-500" />
                  Overview
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {services[selectedService].detailedInfo.overview}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services[selectedService].detailedInfo.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                  What's Included
                </h3>
                <div className="space-y-6">
                  {services[selectedService].detailedInfo.services.map((service, index) => (
                    <div key={index} className="bg-gradient-to-r from-slate-50 to-stone-50 rounded-2xl p-6 border border-slate-200/50">
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">{service.title}</h4>
                      <p className="text-slate-600 mb-4">{service.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.includes.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center text-sm text-slate-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-purple-500" />
                  Our Process
                </h3>
                <div className="space-y-4">
                  {services[selectedService].detailedInfo.process.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                        {index + 1}
                      </div>
                      <span className="text-slate-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200/50">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Ready to Get Started?</h3>
                <p className="text-slate-600 mb-6">
                  Let's discuss how our {services[selectedService].title} services can help you achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Get Free Quote
                  </button>
                  <button className="border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;