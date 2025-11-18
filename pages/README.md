# ISTOS Static HTML Pages

This directory contains standalone HTML pages for the ISTOS cryptocurrency exchange platform.

## Completed Pages

### ✅ Core Pages
- **dashboard.html** - Main dashboard with portfolio stats, charts, and recent transactions
- **portfolio.html** - Detailed asset list, performance charts, and allocation breakdown
- **markets-swap.html** - Token swap interface with exchange rate calculator

## Pages To Be Created

### Markets
- **markets-binary.html** - Binary options trading interface with chart and trading panel

### Staking
- **staking-dashboard.html** - Staking overview with featured pools and APY calculator
- **staking-pools.html** - Browse all staking pools with filters
- **staking-positions.html** - View and manage active staking positions
- **staking-guide.html** - Educational content about staking

### Token Sales (ICO)
- **token-sales.html** - C2S token ICO page with countdown and progress
- **token-buy.html** - Purchase C2S tokens with payment form
- **token-dashboard.html** - Token portfolio, vesting, and referrals

### NFTs
- **nft-explore.html** - Browse NFT collections with filters
- **nft-marketplace.html** - NFT marketplace with buy/auction features
- **nft-create.html** - Create and mint new NFTs

### Wallet
- **wallet-overview.html** - View all wallet balances and quick actions
- **wallet-deposit.html** - Deposit crypto, bank transfer, or card
- **wallet-withdraw.html** - Withdraw funds to external wallets
- **wallet-history.html** - Transaction history with filters

### Affiliate
- **affiliate-dashboard.html** - Referral earnings and statistics
- **affiliate-referrals.html** - Detailed referral list and management

### Other
- **support.html** - Help center with FAQs and contact options
- **blog.html** - Blog posts and news

## Brand System

All pages use the ISTOS brand colors:

```css
:root {
  --primary: #FF6B00;  /* Orange */
  --gold: #D4AF37;     /* Gold */
  --secondary: #0A0A0A; /* Dark */
  --success: #00C896;   /* Green */
  --error: #FF3B30;     /* Red */
}
```

## Features

- ✅ Dark theme with glassmorphism effects
- ✅ MiCAR compliance banner
- ✅ Responsive navigation and sidebar
- ✅ Chart.js integration for data visualization
- ✅ Lucide icons
- ✅ Mobile responsive design
- ✅ Smooth animations and transitions

## Usage

Each HTML file is completely standalone and can be opened directly in a browser. No build process required.

## Development

To add a new page:
1. Copy the structure from an existing page
2. Update the `<title>` and page content
3. Ensure the sidebar link is set to `active` for current page
4. Test responsiveness at mobile breakpoints
5. Add to this README

## Next Steps

The remaining pages follow the same design patterns as the completed pages:
- Compliance banner at top
- Main navigation bar
- Left sidebar for dashboard pages
- Glassmorphism cards for content
- Orange/gold gradient buttons
- Dark theme throughout
