import { ReactNode } from 'react'
import { Card } from './Card'
import { cn } from '@/lib/utils'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatsCardProps {
  icon: ReactNode
  label: string
  value: string | number
  change?: number
  changeLabel?: string
  trend?: 'up' | 'down' | 'neutral'
  className?: string
}

export function StatsCard({
  icon,
  label,
  value,
  change,
  changeLabel,
  trend = 'neutral',
  className,
}: StatsCardProps) {
  const getTrendColor = () => {
    if (trend === 'up') return 'text-success'
    if (trend === 'down') return 'text-error'
    return 'text-gray-400'
  }

  const getTrendIcon = () => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4" />
    if (trend === 'down') return <TrendingDown className="w-4 h-4" />
    return null
  }

  return (
    <Card variant="glass" className={className}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              {icon}
            </div>
            <span className="text-sm font-medium">{label}</span>
          </div>
          <div className="text-2xl font-heading font-bold text-white mb-1">
            {value}
          </div>
          {change !== undefined && (
            <div className={cn('flex items-center gap-1 text-sm', getTrendColor())}>
              {getTrendIcon()}
              <span>
                {change >= 0 ? '+' : ''}
                {change}%
              </span>
              {changeLabel && (
                <span className="text-gray-500 ml-1">{changeLabel}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
