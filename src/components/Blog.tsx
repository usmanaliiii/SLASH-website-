import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, ExternalLink, Tag } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'web', label: 'Web Development' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'tech', label: 'Tech News' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Web Development: What to Expect in 2024',
      excerpt: 'Discover how artificial intelligence is revolutionizing web development, from automated coding to intelligent user experiences.',
      content: `Artificial Intelligence is transforming the web development landscape at an unprecedented pace. In 2024, we're seeing AI-powered tools that can generate code, optimize performance, and create personalized user experiences automatically.

Key trends include:
• AI-powered code generation and debugging
• Intelligent website optimization
• Automated testing and quality assurance
• Personalized content delivery
• Voice and visual search integration

The integration of AI in web development is not just about automation—it's about creating more intelligent, responsive, and user-centric digital experiences.`,
      category: 'ai',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Web Development', 'Technology', '2024 Trends'],
      featured: true
    },
    {
      id: 2,
      title: 'Content Strategy for 2024: Creating Engaging Digital Experiences',
      excerpt: 'Discover the latest content creation strategies and trends that will dominate digital marketing in 2024.',
      content: `Content creation continues to evolve rapidly, and 2024 brings new opportunities for brands to connect with their audiences. The focus is shifting towards more authentic, value-driven content that resonates with users.

Key content trends for 2024:
• Interactive and immersive content experiences
• AI-powered content personalization
• Video-first content strategies
• User-generated content integration
• Storytelling and brand narrative development

Creating compelling content that engages and converts requires a strategic approach that combines creativity with data-driven insights.`,
      category: 'marketing',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Content Strategy', 'Digital Marketing', '2024 Trends', 'Engagement'],
      featured: false
    },
    {
      id: 3,
      title: 'The Power of Storytelling in Content Marketing',
      excerpt: 'How compelling storytelling can transform your content marketing strategy and create deeper connections with your audience.',
      content: `Storytelling has become the cornerstone of effective content marketing, allowing brands to connect with their audience on a deeper, more emotional level. The most successful content strategies are built around compelling narratives that resonate with target audiences.

Key elements of effective storytelling:
• Authentic brand voice and personality
• Emotional connection and relatability
• Clear narrative structure and flow
• Visual storytelling elements
• Consistent brand messaging

The power of storytelling lies in its ability to make your brand memorable and create lasting connections with your audience.`,
      category: 'marketing',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Storytelling', 'Content Marketing', 'Brand Strategy', 'User Experience'],
      featured: false
    },
    {
      id: 4,
      title: 'Web3 and the Future of E-commerce: Blockchain Integration',
      excerpt: 'Exploring how blockchain technology and Web3 are reshaping the future of online commerce.',
      content: `Web3 is revolutionizing e-commerce by introducing decentralized, transparent, and user-centric shopping experiences. Blockchain technology is enabling new business models and customer engagement strategies.

Key developments include:
• Decentralized marketplaces
• NFT-based loyalty programs
• Cryptocurrency payments
• Transparent supply chains
• User-owned data and privacy

The integration of Web3 technologies in e-commerce is creating opportunities for more secure, transparent, and customer-centric online shopping experiences.`,
      category: 'tech',
      author: 'David Thompson',
      date: '2024-01-08',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/8386436/pexels-photo-8386436.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Web3', 'Blockchain', 'E-commerce', 'Innovation'],
      featured: true
    },
    {
      id: 5,
      title: 'Progressive Web Apps (PWAs): The Future of Mobile Web',
      excerpt: 'Why Progressive Web Apps are becoming the preferred choice for businesses looking to enhance mobile user experience.',
      content: `Progressive Web Apps combine the best of web and mobile applications, offering users a native app-like experience through their browsers. PWAs are becoming increasingly popular due to their performance, accessibility, and cost-effectiveness.

Benefits of PWAs:
• Fast loading and offline functionality
• App-like user experience
• No app store requirements
• Automatic updates
• Cross-platform compatibility

PWAs represent the future of mobile web development, offering businesses a cost-effective way to provide excellent mobile experiences without the complexity of native app development.`,
      category: 'web',
      author: 'Lisa Park',
      date: '2024-01-05',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/8386444/pexels-photo-8386444.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['PWA', 'Mobile Development', 'Web Apps', 'User Experience'],
      featured: false
    },
    {
      id: 6,
      title: 'The Impact of Social Media Algorithms on Digital Marketing',
      excerpt: 'Understanding how social media algorithms work and how to optimize your content for better reach and engagement.',
      content: `Social media algorithms are constantly evolving, making it crucial for marketers to stay updated on the latest changes. Understanding these algorithms is key to creating content that reaches and engages your target audience effectively.

Current algorithm priorities:
• Authentic, original content
• User engagement and interaction
• Video content and stories
• Community building
• Consistent posting schedules

Adapting to algorithm changes requires a flexible, data-driven approach to content creation and community engagement.`,
      category: 'marketing',
      author: 'Alex Martinez',
      date: '2024-01-03',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/8386438/pexels-photo-8386438.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Social Media', 'Algorithms', 'Digital Marketing', 'Content Strategy'],
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <section id="blog" className="py-20 bg-white/70 backdrop-blur-md relative overflow-hidden">
      {/* Light blue hue overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-blue-100/30 to-indigo-100/30 pointer-events-none -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-50 to-stone-50 border border-slate-200/50 mb-6">
            <span className="text-sm font-medium text-slate-700">Latest Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-stone-700 bg-clip-text text-transparent">
            Tech Blog & Insights
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends in technology, web development, and digital marketing
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Featured Articles</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group bg-gradient-to-br from-slate-50 to-stone-50 rounded-3xl overflow-hidden border border-slate-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                      {post.title}
                    </h4>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center text-slate-700 font-medium hover:text-slate-900 transition-colors duration-300 group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-slate-800 to-stone-700 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* All Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group bg-gradient-to-br from-white to-slate-50/50 rounded-2xl overflow-hidden border border-slate-200/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">By {post.author}</span>
                  <button className="flex items-center text-slate-700 font-medium hover:text-slate-900 transition-colors duration-300 group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-50 to-stone-50 rounded-3xl p-8 border border-slate-200/50">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Stay Updated with Tech Insights
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Get the latest tech news, web development tips, and digital marketing insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-slate-800 to-stone-700 hover:from-slate-900 hover:to-stone-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog; 