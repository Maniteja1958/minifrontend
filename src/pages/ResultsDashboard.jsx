import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import JobRoleCard from '../components/JobRoleCard'
import GapList from '../components/GapList'
import CertCard from '../components/CertCard'
import ATSMeter from '../components/ATSMeter'

export default function ResultsDashboard() {
  const location = useLocation()
  const results = location.state?.results

  const [activeTab, setActiveTab] = useState('jobs')

  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-gray-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="text-center relative z-10 bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl max-w-sm mx-auto shadow-2xl">
          <svg className="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="text-gray-400 mb-6 text-lg font-medium">No results found</p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all shadow-lg shadow-indigo-500/25 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span>Go Back to Upload</span>
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    {
      id: 'jobs',
      label: 'Job Roles',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      id: 'gaps',
      label: 'Skill Gaps',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      )
    },
    {
      id: 'certs',
      label: 'Certifications',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
        </svg>
      )
    },
    {
      id: 'ats',
      label: 'ATS Score',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"></path>
        </svg>
      )
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-bl from-indigo-900/10 via-transparent to-transparent blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-purple-900/10 via-transparent to-transparent blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-6">
        
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 gap-4 animate-fade-in">
          <div className="flex items-center space-x-3.5">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl">Analysis Report</h1>
              <p className="text-xs text-gray-400 mt-0.5">Resume scanned successfully</p>
            </div>
          </div>
          <Link
            to="/"
            className="flex items-center space-x-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white rounded-xl border border-slate-700/60 transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            <span>Analyze Another</span>
          </Link>
        </div>

        {/* Dashboard Tabs & Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Navigation Sidebar (Vertical on Desktop, Horizontal on Mobile) */}
          <div className="lg:col-span-1 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-2 gap-1 h-fit scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all w-full whitespace-nowrap lg:whitespace-normal justify-start ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-500/10 via-indigo-600/10 to-purple-500/10 text-indigo-300 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.02)]'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-slate-800/40 border border-transparent'
                }`}
              >
                <span className={activeTab === tab.id ? 'text-indigo-400' : 'text-gray-500'}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Main Panel Content Area */}
          <div className="lg:col-span-3 bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl min-h-[400px]">
            {activeTab === 'jobs' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white">Recommended Job Roles</h2>
                  <p className="text-xs text-gray-500 mt-1">AI matched positions based on your professional experience and core capabilities.</p>
                </div>
                <div className="space-y-4">
                  {results.predicted_roles?.predictions && results.predicted_roles.predictions.length > 0 ? (
                    results.predicted_roles.predictions.map((role, i) => (
                      <JobRoleCard key={i} role={role} />
                    ))
                  ) : (
                    <div className="text-center py-12 border border-dashed border-slate-800 rounded-2xl text-gray-500">
                      No matching job roles predicted
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'gaps' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white">Skill Gaps Analysis</h2>
                  <p className="text-xs text-gray-500 mt-1">Identified strength metrics and specific domains needing learning or practice.</p>
                </div>
                <GapList gaps={results.skill_gaps || {}} />
              </div>
            )}

            {activeTab === 'certs' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white">Recommended Certifications</h2>
                  <p className="text-xs text-gray-500 mt-1">Curated professional training tracks and credentials to advance your resume compatibility.</p>
                </div>
                {results.certifications?.recommendations && results.certifications.recommendations.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {results.certifications.recommendations.map((cert, i) => (
                      <CertCard key={i} cert={cert} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 border border-dashed border-slate-800 rounded-2xl text-gray-500">
                    No certifications recommended at this time
                  </div>
                )}
              </div>
            )}

            {activeTab === 'ats' && (
              <div className="space-y-8 flex flex-col items-center">
                <div className="w-full text-left">
                  <h2 className="text-xl font-bold text-white">ATS Compatibility Score</h2>
                  <p className="text-xs text-gray-500 mt-1">Calculated resume score against the provided job description criteria.</p>
                </div>
                
                <div className="flex flex-col items-center justify-center py-6 w-full">
                  <ATSMeter score={results.ats_report?.ats_score || 0} />
                </div>
                
                {results.ats_report?.suggestions && results.ats_report.suggestions.length > 0 ? (
                  <div className="w-full bg-slate-950/40 border border-slate-800/80 p-6 rounded-2xl shadow-inner">
                    <h3 className="font-semibold text-gray-200 mb-4 flex items-center space-x-2">
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                      <span>Key Suggestions to Improve Match</span>
                    </h3>
                    <ul className="space-y-3">
                      {results.ats_report.suggestions.map((s, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-sm text-gray-300 leading-relaxed">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-xs mt-0.5">
                            {i + 1}
                          </span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="w-full text-center py-6 bg-slate-950/20 border border-dashed border-slate-800 rounded-2xl text-gray-500">
                    No suggestions generated (provide a job description for tailor-made tips).
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}