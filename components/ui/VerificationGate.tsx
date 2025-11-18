'use client'

import { ReactNode } from 'react'
import { Card } from './Card'
import { Button } from './Button'
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react'

interface VerificationGateProps {
  isVerified: boolean
  children: ReactNode
  level?: 'basic' | 'advanced' | 'premium'
  onVerify?: () => void
}

export function VerificationGate({
  isVerified,
  children,
  level = 'basic',
  onVerify,
}: VerificationGateProps) {
  if (isVerified) {
    return <>{children}</>
  }

  const levelInfo = {
    basic: {
      title: 'Basic Verification Required',
      description:
        'Complete basic KYC verification to access this feature and start trading.',
      benefits: [
        'Trade cryptocurrencies',
        'Deposit and withdraw funds',
        'Access market data',
      ],
    },
    advanced: {
      title: 'Advanced Verification Required',
      description:
        'Upgrade to advanced verification for higher limits and additional features.',
      benefits: [
        'Increased trading limits',
        'Priority support',
        'Advanced trading features',
        'API access',
      ],
    },
    premium: {
      title: 'Premium Verification Required',
      description:
        'Complete premium verification for institutional-grade features and highest limits.',
      benefits: [
        'Unlimited trading',
        'OTC desk access',
        'Dedicated account manager',
        'Custom API solutions',
      ],
    },
  }

  const info = levelInfo[level]

  return (
    <div className="relative">
      {/* Blurred background */}
      <div className="blur-sm pointer-events-none select-none opacity-50">
        {children}
      </div>

      {/* Verification overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <Card variant="glass" className="max-w-md w-full">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-xl font-heading font-bold mb-2">
              {info.title}
            </h3>
            <p className="text-sm text-gray-400 mb-6">{info.description}</p>

            <div className="space-y-3 mb-6 text-left">
              {info.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="glass p-3 rounded-lg mb-6 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <strong className="text-white">MiCAR Compliance:</strong> EU
                regulations require identity verification for all users.
              </p>
            </div>

            <Button
              variant="gradient"
              size="lg"
              className="w-full"
              onClick={onVerify}
            >
              Start Verification
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
