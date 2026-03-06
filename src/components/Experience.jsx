import React from 'react'
import { motion } from 'framer-motion'
import { experiences, education } from '../data/experience'

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-10 timeline-item"
    >
      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-primary-500 border-2 border-[#0a0a0f] ring-2 ring-primary-500/30" />

      <div className="card hover:-translate-y-0.5">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-white font-semibold text-base">{exp.role}</h3>
              {exp.current && (
                <span className="text-xs px-2 py-0.5 bg-accent-500/15 text-accent-400 border border-accent-500/30 rounded-full font-medium">
                  Current
                </span>
              )}
            </div>
            <a
              href={exp.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors"
            >
              {exp.company} ↗
            </a>
          </div>
          <div className="text-right shrink-0">
            <p className="text-gray-400 text-sm font-mono">{exp.duration}</p>
            <p className="text-gray-600 text-xs mt-0.5">{exp.location}</p>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {exp.description.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
              <svg className="w-3.5 h-3.5 text-primary-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {exp.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function EducationCard({ edu }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-accent-500/10 rounded-xl border border-accent-500/20 shrink-0">
          <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
            <h3 className="text-white font-semibold">
              {edu.degree} in {edu.major}
            </h3>
            <span className="text-gray-500 text-sm font-mono">{edu.duration}</span>
          </div>
          <a
            href={edu.schoolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-400 hover:text-accent-300 font-medium text-sm transition-colors"
          >
            {edu.school} ↗
          </a>
          <p className="text-gray-400 text-sm mt-2">{edu.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {edu.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 bg-accent-500/10 border border-accent-500/20 text-accent-400 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            My Journey
          </p>
          <h2 className="section-heading">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Professional roles and academic background that shaped my expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Work Experience */}
          <div>
            <h3 className="text-white font-semibold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary-500/20 border border-primary-500/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Work Experience
            </h3>

            <div className="relative pl-4 border-l border-white/10">
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.id} exp={exp} index={i} />
              ))}

              {/* Placeholder prompt */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-4"
              >
                <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full border-2 border-dashed border-white/20" />
                <div className="card border-dashed border-white/10 text-center py-8">
                  <p className="text-gray-600 text-sm">
                    More experience to be added —
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-white font-semibold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-accent-500/20 border border-accent-500/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                </svg>
              </span>
              Education
            </h3>

            <div className="space-y-5">
              {education.map((edu) => (
                <EducationCard key={edu.id} edu={edu} />
              ))}
            </div>

            {/* What I've been learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card mt-6"
            >
              <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                <span className="text-lg">📚</span>
                Currently Learning
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Advanced RAG Architectures',
                  'LLM Fine-tuning',
                  'Vector Databases',
                  'MLOps',
                  'Agentic AI Systems',
                  'Clinical NLP',
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:border-primary-500/40 hover:text-primary-300 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
