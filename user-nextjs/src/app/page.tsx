// Home page - Main landing page with all marketing sections and animations
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-accent text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Book Your Perfect Sports Ground
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-white/90"
            >
              Find and reserve top-quality sports facilities near you
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/login"
                className="bg-white text-primary px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Get Started
              </Link>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark"
          >
            Why Choose GroundWale?
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: '🏟️',
                title: 'Premium Venues',
                description: 'Access to top-rated sports facilities with excellent amenities'
              },
              {
                icon: '⚡',
                title: 'Instant Booking',
                description: 'Book your ground in seconds with our easy-to-use platform'
              },
              {
                icon: '💰',
                title: 'Best Prices',
                description: 'Competitive pricing with transparent costs and no hidden fees'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-dark">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark"
          >
            How It Works
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { step: '1', title: 'Search', description: 'Find grounds near you' },
              { step: '2', title: 'Compare', description: 'Check availability & prices' },
              { step: '3', title: 'Book', description: 'Reserve your slot' },
              { step: '4', title: 'Play', description: 'Enjoy your game!' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-primary to-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-dark">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Top Grounds Section */}
      <section className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark"
          >
            Top Grounds Near You
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: 'Champions Arena', sport: 'Football', price: '₹500/hr', rating: '4.8' },
              { name: 'Victory Courts', sport: 'Basketball', price: '₹400/hr', rating: '4.9' },
              { name: 'Elite Turf', sport: 'Cricket', price: '₹600/hr', rating: '4.7' }
            ].map((ground, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-accent"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-dark">{ground.name}</h3>
                  <p className="text-gray-600 mb-2">{ground.sport}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-accent font-bold">{ground.price}</span>
                    <span className="text-yellow-500">⭐ {ground.rating}</span>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-2xl hover:shadow-lg transition-all">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark"
          >
            What Our Users Say
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Rahul Sharma',
                comment: 'Amazing platform! Found the perfect ground for our weekend matches.',
                rating: 5
              },
              {
                name: 'Priya Patel',
                comment: 'Super easy to use and great customer service. Highly recommended!',
                rating: 5
              },
              {
                name: 'Amit Kumar',
                comment: 'Best booking experience ever. Clean grounds and fair pricing.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&quot;{testimonial.comment}&quot;</p>
                <p className="font-semibold text-dark">- {testimonial.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Book Your Ground?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Join thousands of satisfied users and start booking today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/login"
              className="inline-block bg-white text-primary px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Sign Up Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
