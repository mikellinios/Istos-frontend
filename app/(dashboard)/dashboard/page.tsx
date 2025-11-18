'use client'

import { Navigation } from '@/components/ui/Navigation'
import { Sidebar } from '@/components/ui/Sidebar'
import { StatsCard } from '@/components/ui/StatsCard'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Table } from '@/components/ui/Table'
import { EmptyState } from '@/components/ui/EmptyState'
import { Wallet, TrendingUp, DollarSign, Activity, Package } from 'lucide-react'

export default function DashboardPage() {
  // Example data for the table
  const recentTrades = [
    { pair: 'BTC/EUR', type: 'Buy', amount: '0.5 BTC', price: '€42,500', total: '€21,250', time: '2 min ago' },
    { pair: 'ETH/EUR', type: 'Sell', amount: '5 ETH', price: '€3,200', total: '€16,000', time: '15 min ago' },
    { pair: 'SOL/EUR', type: 'Buy', amount: '100 SOL', price: '€95', total: '€9,500', time: '1 hour ago' },
  ]

  const columns = [
    { key: 'pair', label: 'Pair', sortable: true },
    {
      key: 'type',
      label: 'Type',
      render: (item: any) => (
        <span className={item.type === 'Buy' ? 'text-success' : 'text-error'}>
          {item.type}
        </span>
      ),
    },
    { key: 'amount', label: 'Amount', sortable: true },
    { key: 'price', label: 'Price', sortable: true },
    { key: 'total', label: 'Total', sortable: true },
    { key: 'time', label: 'Time' },
  ]

  return (
    <>
      <Navigation />
      <Sidebar />

      <main className="ml-64 p-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold mb-2">
              Dashboard
            </h1>
            <p className="text-gray-400">
              Welcome back! Here's your portfolio overview.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              icon={<Wallet className="w-5 h-5" />}
              label="Portfolio Value"
              value="€52,450.00"
              change={12.5}
              changeLabel="vs last month"
              trend="up"
            />
            <StatsCard
              icon={<TrendingUp className="w-5 h-5" />}
              label="24h Change"
              value="+€2,340.00"
              change={4.67}
              changeLabel="vs yesterday"
              trend="up"
            />
            <StatsCard
              icon={<DollarSign className="w-5 h-5" />}
              label="Total Trades"
              value="1,234"
              change={-2.3}
              changeLabel="vs last week"
              trend="down"
            />
            <StatsCard
              icon={<Activity className="w-5 h-5" />}
              label="Active Orders"
              value="8"
              trend="neutral"
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  Chart component placeholder (use recharts)
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  Pie chart placeholder (use recharts)
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Trades */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Trades</CardTitle>
            </CardHeader>
            <CardContent>
              <Table
                data={recentTrades}
                columns={columns}
                emptyState={
                  <EmptyState
                    icon={<Package className="w-8 h-8" />}
                    title="No trades yet"
                    description="Start trading to see your transaction history here."
                  />
                }
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
