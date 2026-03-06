import React from 'react'
import { motion } from 'framer-motion'
import { recommendations } from '../data/recommendations'

export default function Recommendations() {
  return (
    <section id="recommendations" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="section-heading">
            What People Say About <span className="gradient-text">Sharath</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Recommendations from colleagues and collaborators.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="text-primary-400 text-4xl leading-none mb-3">❝</div>
              <p className="text-gray-400 text-sm leading-relaxed">{rec.text}</p>
              <div className="border-t border-white/10 mt-4 pt-4">
                <p className="text-white font-semibold text-sm">{rec.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{rec.title} · {rec.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://linkedin.com/in/sharath-mahadevan-a55246209"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
          >
            View all recommendations on LinkedIn →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
