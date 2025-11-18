import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './Button'

interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center py-12 px-4 text-center',
        className
      )}
    >
      {icon && (
        <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-4 text-gray-400">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-heading font-semibold text-white mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-400 max-w-md mb-6">{description}</p>
      )}
      {action && (
        <Button variant="gradient" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  )
}
