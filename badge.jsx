import React from 'react'

export function Badge({ className='', children, ...props }) {
  return <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${className}`} {...props}>{children}</span>
}