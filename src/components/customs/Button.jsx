import React from 'react'

function Button({title, className, onClick, children}) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={className}
      role='link'
      aria-label='Navigation Link'
      contextMenu='Navigation Link'
    >
      {children}
    </button>
  )
}

export default Button