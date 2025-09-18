import React from 'react'

export function Card({ className='', children, ...props }) {
  return <div className={`rounded-xl border bg-white ${className}`} {...props}>{children}</div>
}
export function CardHeader({ className='', children }) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>
}
export function CardTitle({ className='', children }) {
  return <h3 className={`font-semibold ${className}`}>{children}</h3>
}
export function CardContent({ className='', children }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}