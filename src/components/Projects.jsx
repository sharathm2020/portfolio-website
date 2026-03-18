import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, categories } from '../data/projects'

const categoryColors = {
  'AI / LLM':        'bg-violet-500/15 text-violet-400 border-violet-500/30',
  'Machine Learning':'bg-blue-500/15 text-blue-400 border-blue-500/30',
  'NLP':             'bg-teal-500/15 text-teal-400 border-teal-500/30',
  'AI / Algorithms': 'bg-orange-500/15 text-orange-400 border-orange-500/30',
  'Web Development': 'bg-pink-500/15 text-pink-400 border-pink-500/30',
  'Full Stack AI':   'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
}

// Mock portfolio data for the Argus risk dashboard visualization
// Scores reflect DistilBERT output: Positive / Neutral / Negative weighted %
const mockTickers = [
  { ticker: 'NVDA', name: 'NVIDIA Corp',    pos: 18, neu: 24, neg: 58 },
  { ticker: 'AAPL', name: 'Apple Inc',      pos: 34, neu: 24, neg: 42 },
  { ticker: 'MSFT', name: 'Microsoft Corp', pos: 61, neu: 22, neg: 17 },
  { ticker: 'TSLA', name: 'Tesla Inc',      pos: 12, neu: 17, neg: 71 },
]

function RiskMockup() {
  return (
    <div className="rounded-xl border border-white/10 bg-dark-900 overflow-hidden font-mono text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-gray-300 font-semibold tracking-wide">Portfolio Sentiment</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-emerald-400">Live</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 px-4 pt-3 pb-1">
        <span className="flex items-center gap-1 text-emerald-400"><span className="w-2 h-2 rounded-sm bg-emerald-500 inline-block" /> Pos</span>
        <span className="flex items-center gap-1 text-gray-400"><span className="w-2 h-2 rounded-sm bg-gray-500 inline-block" /> Neu</span>
        <span className="flex items-center gap-1 text-red-400"><span className="w-2 h-2 rounded-sm bg-red-500 inline-block" /> Neg</span>
      </div>

      {/* Ticker rows */}
      <div className="px-4 pb-3 pt-2 space-y-3">
        {mockTickers.map((t, i) => (
          <div key={t.ticker}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold w-10">{t.ticker}</span>
                <span className="text-gray-500">{t.name}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-emerald-400">{t.pos}%</span>
                <span>/</span>
                <span className="text-red-400">{t.neg}%</span>
              </div>
            </div>
            {/* Stacked pos / neu / neg bar */}
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden flex">
              <motion.div
                className="h-full bg-emerald-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${t.pos}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              />
              <motion.div
                className="h-full bg-gray-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${t.neu}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
              />
              <motion.div
                className="h-full bg-red-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${t.neg}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio summary */}
      <div className="px-4 pb-4 border-t border-white/5">
        <div className="flex items-center justify-between mb-2 pt-3">
          <span className="text-gray-400">Portfolio Sentiment</span>
          <span className="text-yellow-400 font-semibold">Neg 47% · Elevated Risk</span>
        </div>
        {/* Stacked aggregate bar */}
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden flex">
          <motion.div className="h-full bg-emerald-500" initial={{ width: 0 }} whileInView={{ width: '31%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.7 }} />
          <motion.div className="h-full bg-gray-500"   initial={{ width: 0 }} whileInView={{ width: '22%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }} />
          <motion.div className="h-full bg-red-500"    initial={{ width: 0 }} whileInView={{ width: '47%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.9 }} />
        </div>
        <div className="flex justify-between text-gray-600 mt-1">
          <span>Pos 31%</span>
          <span>Neu 22%</span>
          <span>Neg 47%</span>
        </div>
      </div>
    </div>
  )
}

function FeaturedSpotlight({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16 relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-dark-800"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-primary-500/5 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative p-8 lg:p-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Left: content */}
        <div>
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-medium">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Live in Production
            </span>
            <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${categoryColors['Full Stack AI']}`}>
              Full Stack AI
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-primary-500/15 text-primary-400 border border-primary-500/30 font-medium">
              ★ Spotlight
            </span>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-emerald-400/80 font-medium text-sm mb-4 tracking-wide">Portfolio Risk Copilot</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

          {/* Feature list */}
          <ul className="space-y-2 mb-6">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-7">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-gray-400">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Live Demo
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Right: animated risk dashboard mockup */}
        <RiskMockup />
      </div>
    </motion.div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="card group flex flex-col h-full hover:-translate-y-1"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="p-2.5 bg-primary-500/10 rounded-xl border border-primary-500/20 group-hover:bg-primary-500/20 transition-colors">
          <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-600 hover:text-white rounded-lg hover:bg-white/10 transition-all"
          aria-label={`View ${project.title} on GitHub`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      {/* Category badge */}
      <span className={`self-start text-xs px-2.5 py-1 rounded-full border font-medium mb-3 ${categoryColors[project.category] || 'bg-gray-500/15 text-gray-400 border-gray-500/30'}`}>
        {project.category}
      </span>

      {/* Title & description */}
      <h3 className="text-white font-semibold text-base mb-2 group-hover:text-primary-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm text-primary-400 hover:text-primary-300 font-medium transition-colors mt-auto"
      >
        View on GitHub
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showAll, setShowAll]           = useState(false)

  // Argus is surfaced in the featured spotlight; the remaining projects go in the filter grid
  const spotlightProject = projects.find(p => p.live)
  const gridProjects     = projects.filter(p => !p.live)

  const filtered = activeFilter === 'All'
    ? gridProjects
    : gridProjects.filter((p) => p.category === activeFilter)

  const visible = showAll ? filtered : filtered.slice(0, 6)

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I've Built
          </p>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            12 public repositories on GitHub — from ML models built from scratch to full-stack AI applications in production.
          </p>
        </motion.div>

        {/* Argus featured spotlight */}
        {spotlightProject && <FeaturedSpotlight project={spotlightProject} />}

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveFilter(cat); setShowAll(false) }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more / less */}
        {filtered.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline"
            >
              {showAll ? 'Show Less' : `Show All ${filtered.length} Projects`}
            </button>
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 card text-center border-dashed border-white/10 hover:border-primary-500/30"
        >
          <p className="text-gray-400 mb-4">
            Want to see all my code?
          </p>
          <a
            href="https://github.com/sharathm2020?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Repos on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
