'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Bot, Search, Heart, GraduationCap, Sprout, DollarSign, Eye, MessageSquare, Layers, Beaker, ArrowRight } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      icon: Bot,
      title: 'OmniAuto',
      subtitle: 'Autonomous AI Agents',
      description: 'Intelligent autonomous agents that automate complex business processes, from healthcare diagnostics to legal document analysis.',
      features: ['Business process automation', 'Healthcare diagnostics', 'Legal document analysis', 'Custom GPT assistants'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Search,
      title: 'OmniSearch',
      subtitle: 'R&D & Strategy Division',
      description: 'Our dedicated research division focused on AI, ML, and business innovation with cutting-edge research and market analysis.',
      features: ['Market analysis', 'Policy development', 'Whitepapers', 'Academic collaborations'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'OmniHealth',
      subtitle: 'AI Healthcare Solutions',
      description: 'Comprehensive AI tools for healthcare, including early diagnostics, telemedicine chatbots, and workflow optimization.',
      features: ['Early diagnostics', 'Telemedicine chatbots', 'Workflow optimization', 'Sign language translation'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: GraduationCap,
      title: 'OmniEdu',
      subtitle: 'AI Education Platform',
      description: 'Revolutionary AI-powered education tools including tutors for local languages and curriculum optimization.',
      features: ['AI tutors', 'Local language support', 'Curriculum optimization', 'Learning analytics'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Sprout,
      title: 'OmniAgri',
      subtitle: 'Smart Farming Solutions',
      description: 'Advanced AI solutions for agriculture using computer vision, sensors, and predictive modeling for farmers.',
      features: ['Smart farming', 'Pest prediction', 'Market analysis', 'Crop optimization'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: DollarSign,
      title: 'OmniFinance',
      subtitle: 'AI Financial Services',
      description: 'Intelligent financial solutions including fraud detection, predictive modeling, and AI advisors for savings and credit.',
      features: ['Fraud detection', 'Predictive modeling', 'AI advisors', 'Credit analysis'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Eye,
      title: 'OmniVision',
      subtitle: 'Computer Vision Products',
      description: 'Advanced computer vision solutions for security, surveillance, traffic analysis, and social good applications.',
      features: ['Security systems', 'Traffic analysis', 'Waste classification', 'Urban planning'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: MessageSquare,
      title: 'OmniNLP',
      subtitle: 'African-Centric NLP',
      description: 'Natural language processing models specifically designed for African languages and contexts.',
      features: ['Local language LLMs', 'Sentiment analysis', 'Translation tools', 'African dialects'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Layers,
      title: 'OmniStack',
      subtitle: 'Custom LLMs & MLOps',
      description: 'Enterprise-grade custom language models, MLOps infrastructure, and secure data platforms.',
      features: ['Custom LLMs', 'MLOps infrastructure', 'Data platforms', 'Enterprise security'],
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: Beaker,
      title: 'OmniAI Lab',
      subtitle: 'Innovation Laboratory',
      description: 'Our cutting-edge innovation lab where we experiment with emerging AI technologies and develop breakthrough solutions.',
      features: ['Emerging tech research', 'Prototype development', 'Innovation workshops', 'Technology incubation'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive AI solutions across 10 specialized divisions, each designed to address 
            specific challenges in African business environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Learn more</span>
                  <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Each of our services is designed to integrate seamlessly with your existing operations. 
              Let's discuss how we can customize these solutions for your specific needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 