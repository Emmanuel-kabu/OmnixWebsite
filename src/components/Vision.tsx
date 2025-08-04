'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Lightbulb, Rocket, Target, Users, Globe, Zap } from 'lucide-react'

const Vision = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const visionPoints = [
    {
      icon: Lightbulb,
      title: 'Healthcare Revolution',
      description: 'AI-powered diagnostics, telemedicine, and healthcare optimization across Africa.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Rocket,
      title: 'Agricultural Innovation',
      description: 'Smart farming solutions, pest prediction, and market analysis for farmers.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      title: 'Financial Inclusion',
      description: 'AI-driven fraud detection, predictive modeling, and financial advisory services.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Education Transformation',
      description: 'AI tutors, curriculum optimization, and personalized learning experiences.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Globe,
      title: 'Logistics Optimization',
      description: 'Computer vision for traffic analysis, urban planning, and supply chain efficiency.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Research & Development',
      description: 'Cutting-edge AI research, policy development, and innovation labs.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section id="vision" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Vision for Africa's Future
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We envision a future where Africa leads in AI innovation, creating solutions that work for African 
            contexts and benefit the entire continent.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              The Future We're Building
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Our vision extends beyond just implementing AI solutions. We're building a comprehensive 
                ecosystem where African businesses can access, understand, and leverage AI to solve their 
                most pressing challenges.
              </p>
              <p>
                We see a future where every sector — from healthcare to agriculture, finance to education — 
                is transformed by intelligent, locally-adapted AI solutions that understand African contexts, 
                languages, and business environments.
              </p>
              <p>
                This isn't about importing foreign AI solutions. It's about building AI that's designed for 
                Africa, by Africans, solving African problems with global impact potential.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why This Matters
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Economic Growth</h4>
                  <p className="text-gray-600 text-sm">
                    AI adoption can accelerate Africa's economic development and global competitiveness.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Job Creation</h4>
                  <p className="text-gray-600 text-sm">
                    Building AI expertise creates new opportunities and career paths for African talent.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Global Leadership</h4>
                  <p className="text-gray-600 text-sm">
                    Africa can become a global leader in AI innovation and problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${point.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {point.title}
                  </h3>
                </div>
                <p className="text-gray-600">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Shape Africa's AI Future?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join us in building the AI infrastructure that will power Africa's next generation of innovation 
              and growth. Let's make Africa an AI innovator, not just a consumer.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Involved Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Vision 