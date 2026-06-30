import React from 'react'

const getPlatformColor = (platform) => {
  const normPlatform = (platform || '').toLowerCase().trim();
  
  if (normPlatform.includes('coursera')) {
    return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
  }
  if (normPlatform.includes('udemy')) {
    return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
  }
  if (normPlatform.includes('nptel')) {
    return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
  }
  if (normPlatform.includes('edx')) {
    return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
  }
  return 'bg-slate-800 text-gray-300 border-slate-700/50';
}

export default function CertCard({ cert }) {
  const title = cert.title || cert.name || 'Professional Certification';
  const platform = cert.platform || 'General';

  return (
    <div className="bg-slate-900/30 backdrop-blur-md border border-slate-800 hover:border-indigo-500/30 rounded-2xl p-5 hover:-translate-y-0.5 transition-all duration-300 shadow-xl flex flex-col justify-between relative overflow-hidden group">
      
      {/* Subtle background decoration (glowing award watermark) */}
      <div className="absolute right-[-10px] bottom-[-10px] text-slate-800/15 pointer-events-none group-hover:text-indigo-500/5 transition-colors duration-300">
        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89l-.06-.502a8.001 8.001 0 01.31-4.159zm1.758 5.626A10.477 10.477 0 0010 16.5c1.94 0 3.73-.526 5.27-1.442a1 1 0 011.15.083l.36.31a1 1 0 01-.22 1.697A12.083 12.083 0 0110 18.5a12.083 12.083 0 01-6.56-1.854 1 1 0 01-.22-1.697l.36-.31a1 1 0 011.15-.083zM15 10.12l1.69-.723a8.001 8.001 0 01.31 4.159l-.06.502a1 1 0 01-.89.89 8.97 8.97 0 00-1.05.174V10.12z"></path>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Header containing Platform Badge and duration info */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md border ${getPlatformColor(platform)}`}>
            {platform}
          </span>
          {cert.duration_estimate && (
            <span className="text-xs text-gray-400 font-medium flex items-center">
              <svg className="w-3.5 h-3.5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {cert.duration_estimate}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-base md:text-lg text-white leading-snug tracking-wide group-hover:text-indigo-300 transition-colors duration-300">
          {title}
        </h3>
      </div>

      {cert.url && (
        <div className="relative z-10 pt-4">
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-indigo-400 group-hover:text-indigo-300 transition-colors"
          >
            <span>View Course Details</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      )}
    </div>
  )
}