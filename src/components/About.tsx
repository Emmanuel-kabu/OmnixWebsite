'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Globe, Target, Users, TrendingUp, Shield } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      icon: Brain,
      title: 'AI Expertise',
      description: 'Deep understanding of AI/ML technologies and their practical applications in African contexts.'
    },
    {
      icon: Globe,
      title: 'Local Focus',
      description: 'Tailored solutions designed specifically for African businesses and challenges.'
    },
    {
      icon: Target,
      title: 'Problem-Solving',
      description: 'Focus on real business problems rather than just technology for technology\'s sake.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with local businesses to understand their unique needs and constraints.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Building sustainable AI ecosystems that can grow with African businesses.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Ensuring data privacy and security while delivering powerful AI capabilities.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Challenge We're Solving
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While AI is transforming industries globally, Africa — and especially Ghana — is still lagging behind. 
            We're here to change that.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Africa Needs AI Now
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Africa's tech ecosystem continues to thrive in traditional software engineering, but AI remains 
                underutilized or misunderstood in business transformation. Many companies are hesitant to hire 
                AI/ML engineers, creating a significant gap between potential and implementation.
              </p>
              <p>
                This gap represents both a challenge and an opportunity. While businesses may not be ready to 
                build AI teams internally, they desperately need AI solutions to compete globally and solve 
                local problems effectively.
              </p>
              <p>
                That's where Omnix AI comes in. We bridge this gap by delivering ready-to-use AI tools that 
                integrate seamlessly into existing business processes, making AI accessible and practical for 
                African enterprises.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Make Africa an AI Innovator</h4>
                  <p className="text-gray-600 text-sm">
                    Not just a consumer, but a creator of AI solutions that work for African contexts.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Empower Local Businesses</h4>
                  <p className="text-gray-600 text-sm">
                    Provide practical AI tools that solve real business problems across all sectors.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Build Sustainable Ecosystems</h4>
                  <p className="text-gray-600 text-sm">
                    Create lasting AI infrastructure that grows with African economies.
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About 