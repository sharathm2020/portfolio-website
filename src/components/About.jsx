import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'GitHub Projects', value: '11+' },
  { label: 'ML Models Built', value: '8+' },
  { label: 'Years Coding',    value: '6+' },
  { label: 'Current Role',    value: 'AI Eng' },
]

const interests = [
  { icon: '🤖', label: 'Large Language Models' },
  { icon: '📈', label: 'AI for Finance' },
  { icon: '🏀', label: 'Sports Analytics' },
  { icon: '🧠', label: 'Reinforcement Learning' },
  { icon: '🔬', label: 'AI in Healthcare' },
  { icon: '🎮', label: 'Game AI' },
  { icon: '🔧', label: 'AI/GenAI Tooling' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="section-heading mb-6">
              Passionate about building{' '}
              <span className="gradient-text">AI processes and intelligent systems</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed text-base">
              <p>
                I'm <span className="text-white font-medium">Sharath Mahadevan</span>, an AI/ML
                engineer who has experience in building AI tools, systems and processes. I just finished a position as an {' '}
                <span className="text-primary-300 font-medium">AI/Data Engineer and Lead Customer Solutions Engineer</span>{' '}
                at <span className="text-white font-medium">Ryght AI</span>, where I built
                AI-powered solutions to transform the Clinical Trials industry.
              </p>
              <p>
                I'm a graduate of{' '}
                <span className="text-white font-medium">Drexel University</span>,
                where I developed a deep passion for machine learning, AI powered applications, natural language processing,
                and large language models. My philosophy is simple: I build what I think is
                interesting.
              </p>
              <p>
                From implementing ML algorithms from scratch to deploying LLM-based products, I
                love the full spectrum — the math behind the models and the implementation of LLMs through the code that ships.
              </p>
              <p>
                I am passionate about AI/ML tools and platforms, constantly keeping up to date with the latest and greatest tools.
                I constantly build on my skills by building personal projects, whether it is a new generative AI model, open-source model, AI tools such as CoWork/Claude CLI,
                or a newly found vector database to be used in a RAG pipeline.
              </p>
            </div>

            {/* Interests */}
            <div className="mt-8">
              <p className="text-sm text-gray-500 font-medium mb-3 uppercase tracking-wide">Current Interests</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-primary-500/40 transition-colors"
                  >
                    {item.icon} {item.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Stats + Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {/* Avatar placeholder */}
            <div className="relative mx-auto w-52 h-52">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 opacity-20 blur-xl" />
              <div className="relative w-full h-full rounded-3xl bg-dark-700 border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Replace the initials block below with an <img> tag once you have a photo */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-3xl font-bold">
                    SM
                  </div>
                  <p className="text-gray-500 text-xs">Add your photo here</p>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card text-center hover:-translate-y-1 transition-transform duration-200"
                >
                  <p className="text-3xl font-extrabold gradient-text mb-1">{s.value}</p>
                  <p className="text-gray-500 text-sm">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/sharathm2020"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/sharath-mahadevan-a55246209"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary-600/20 hover:bg-primary-600/30 border border-primary-500/30 rounded-xl text-sm font-medium text-primary-300 hover:text-primary-200 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
