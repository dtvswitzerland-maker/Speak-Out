import React from 'react'

export function Button({ asChild, className = '', children, ...props }) {
  const Tag = asChild ? 'a' : 'button'
  const base = 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-transparent shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2'
  const styles = 'bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-500'
  const outline = 'bg-transparent border-slate-200 text-slate-700 hover:bg-slate-50'
  const ghost = 'bg-transparent text-slate-700 hover:bg-slate-100'
  const variant = props.variant === 'outline' ? outline : (props.variant === 'ghost' ? ghost : styles)
  return <Tag className={`${base} ${variant} ${className}`} {...props}>{children}</Tag>
}