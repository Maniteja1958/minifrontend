import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function ATSMeter({ score }) {
  const getColor = (score) => {
    if (score >= 80) return '#10b981' // Emerald
    if (score >= 60) return '#f59e0b' // Amber
    return '#f43f5e' // Rose
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-950/30 border border-slate-800 rounded-3xl w-fit mx-auto shadow-xl">
      <div className="w-40 h-40">
        <CircularProgressbar
          value={score || 0}
          text={`${score || 0}%`}
          styles={buildStyles({
            textColor: '#ffffff',
            pathColor: getColor(score),
            trailColor: '#1e293b',
            textSize: '18px',
          })}
        />
      </div>
      <p className="mt-4 text-sm font-bold text-gray-400 uppercase tracking-wider">Overall Match Strength</p>
    </div>
  )
}