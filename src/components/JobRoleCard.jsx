import React from 'react'

export default function JobRoleCard({ role }) {
  const getMatchColors = (percentage) => {
    if (percentage >= 80) return {
      text: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      bar: 'bg-gradient-to-r from-teal-400 to-emerald-500'
    }
    if (percentage >= 60) return {
      text: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      bar: 'bg-gradient-to-r from-yellow-400 to-amber-500'
    }
    return {
      text: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20',
      bar: 'bg-gradient-to-r from-red-400 to-rose-500'
    }
  }

  const colors = getMatchColors(role.match_percentage)

  return (
    <div className="bg-slate-900/30 backdrop-blur-md border border-slate-800 rounded-2xl p-5 hover:border-slate-700/80 hover:-translate-y-0.5 transition-all duration-300 shadow-xl hover:shadow-indigo-500/5">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg text-white tracking-wide">{role.role_name}</h3>
        <span className={`text-xl font-extrabold px-3 py-1 rounded-xl ${colors.text} ${colors.bg} border ${colors.border}`}>
          {role.match_percentage}% Match
        </span>
      </div>

      {/* Visual match percentage bar */}
      <div className="w-full bg-slate-950/60 rounded-full h-2 mb-4 overflow-hidden border border-slate-900">
        <div className={`h-full rounded-full ${colors.bar}`} style={{ width: `${role.match_percentage}%` }}></div>
      </div>
      
      <div className="space-y-3.5">
        {role.matched_skills && role.matched_skills.length > 0 && (
          <div>
            <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1.5 flex items-center">
              <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Matched Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {role.matched_skills.map((skill, i) => (
                <span key={i} className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-lg border border-emerald-500/20 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {role.required_skills && role.required_skills.length > 0 && (
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1.5 flex items-center">
              <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              Required Skills To Develop
            </p>
            <div className="flex flex-wrap gap-1.5">
              {role.required_skills.map((skill, i) => (
                <span key={i} className="px-2.5 py-1 bg-slate-800 text-gray-300 text-xs font-semibold rounded-lg border border-slate-700/50 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}