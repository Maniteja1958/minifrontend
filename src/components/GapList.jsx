import React from 'react'

export default function GapList({ gaps }) {
  
  // Custom parser to format the 4-week improvement plan into a premium timeline
  const renderImprovementPlan = (planText) => {
    if (!planText) return null;
    
    // Split by Week headers if they exist (e.g. Week 1:, Week 2, WEEK 1:)
    const parts = planText.split(/(?=Week \d+:|Week \d|WEEK \d+:|WEEK \d)/i);
    
    if (parts.length > 1 && parts.some(p => p.trim())) {
      return (
        <div className="relative border-l-2 border-indigo-900/40 pl-6 ml-3 space-y-8 my-4">
          {parts.map((part, i) => {
            const trimmed = part.trim();
            if (!trimmed) return null;
            
            // Extract the header (e.g. "Week 1:") and body content
            const match = trimmed.match(/^(Week \d+:|Week \d|WEEK \d+:|WEEK \d)([\s\S]*)/i);
            const header = match ? match[1] : `Phase ${i + 1}`;
            const content = match ? match[2] : trimmed;
            
            return (
              <div key={i} className="relative group">
                {/* Timeline node dot */}
                <div className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0b0f19] border-2 border-indigo-500 transition-all duration-300 group-hover:border-indigo-400 group-hover:scale-125">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400"></span>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  {header}
                </h4>
                <div className="mt-2 text-sm text-gray-300 leading-relaxed whitespace-pre-line bg-slate-950/20 hover:bg-slate-950/40 border border-slate-900/60 p-4 rounded-xl transition-all">
                  {content.trim().replace(/^[\s:-]+/, '')}
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    
    // Fallback if no Week markers are found
    return (
      <div className="bg-slate-950/30 border border-slate-800 p-5 rounded-2xl">
        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap font-sans">
          {planText}
        </p>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      
      {/* Skill Status Grids */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Missing Skills card */}
        <div className="bg-rose-950/5 border border-rose-950/20 hover:border-rose-500/20 p-5 rounded-2xl shadow-lg transition-all duration-200">
          <h3 className="font-bold text-xs uppercase tracking-wider text-rose-400 mb-3.5 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>Missing Skills</span>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {gaps.missing_skills && gaps.missing_skills.length > 0 ? (
              gaps.missing_skills.map((skill, i) => (
                <span key={i} className="px-2.5 py-1 bg-rose-500/10 text-rose-400 rounded-lg text-xs font-semibold border border-rose-500/20">
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-xs text-gray-500 italic">No missing skills identified</p>
            )}
          </div>
        </div>

        {/* Weak Skills card */}
        <div className="bg-amber-950/5 border border-amber-950/20 hover:border-amber-500/20 p-5 rounded-2xl shadow-lg transition-all duration-200">
          <h3 className="font-bold text-xs uppercase tracking-wider text-amber-400 mb-3.5 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>Weak Skills</span>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {gaps.weak_skills && gaps.weak_skills.length > 0 ? (
              gaps.weak_skills.map((skill, i) => (
                <span key={i} className="px-2.5 py-1 bg-amber-500/10 text-amber-400 rounded-lg text-xs font-semibold border border-amber-500/20">
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-xs text-gray-500 italic">No weak skills identified</p>
            )}
          </div>
        </div>

        {/* Strong Skills card */}
        <div className="bg-emerald-950/5 border border-emerald-950/20 hover:border-emerald-500/20 p-5 rounded-2xl shadow-lg transition-all duration-200">
          <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-400 mb-3.5 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Strong Skills</span>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {gaps.strong_skills && gaps.strong_skills.length > 0 ? (
              gaps.strong_skills.map((skill, i) => (
                <span key={i} className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-semibold border border-emerald-500/20">
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-xs text-gray-500 italic">No strong skills identified</p>
            )}
          </div>
        </div>

      </div>

      {/* 4-Week Improvement Plan */}
      {gaps.improvement_plan && (
        <div className="border-t border-slate-800/80 pt-6">
          <h3 className="font-bold text-base text-gray-200 mb-4 flex items-center space-x-2">
            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>Custom 4-Week Upskilling Roadmap</span>
          </h3>
          {renderImprovementPlan(gaps.improvement_plan)}
        </div>
      )}
    </div>
  )
}