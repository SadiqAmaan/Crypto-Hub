# Getting Started with Create React App
# CryptoHub - Cryptocurrency Tracking Application

A modern, responsive React application for tracking cryptocurrency prices, market data, and trends. Built with a focus on user experience and real-time data visualization.

## 🚀 Features

- **Real-time Cryptocurrency Data**: Get live prices and market information from CoinGecko API
- **Multi-Currency Support**: View prices in INR, USD, and EUR
- **Comprehensive Coin Information**: Browse detailed information about various cryptocurrencies
- **Interactive Charts**: Visualize cryptocurrency trends and performance
- **Exchange Information**: Explore cryptocurrency exchanges
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Enhanced user experience with Framer Motion animations
- **Pagination**: Efficient browsing through large datasets
- **Error Handling**: Robust error handling and loading states

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern JavaScript library for building user interfaces
- **React Router DOM** - Declarative routing for React applications

### UI & Styling
- **Chakra UI** - Component library for building accessible React applications
- **Framer Motion** - Animation library for React
- **React Icons** - Icon library for React applications

### Data Management
- **React Query (TanStack Query)** - Powerful data synchronization for React
- **Axios** - HTTP client for API requests

### Data Visualization
- **Chart.js** - Simple yet flexible JavaScript charting library
- **React Chart.js 2** - React wrapper for Chart.js

### API
- **CoinGecko API** - Free cryptocurrency data API

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Home.jsx        # Landing page
│   ├── Coins.jsx       # Cryptocurrency list
│   ├── CoinDetails.jsx # Individual coin details
│   ├── Exchanges.jsx   # Exchange information
│   ├── CoinCard.jsx    # Coin card component
│   ├── Chart.jsx       # Chart visualization
│   ├── Loader.jsx      # Loading spinner
│   └── ErrorComponent.jsx # Error handling
├── api/                # API configuration
│   └── apiClient.js    # Axios client setup
├── assets/             # Static assets
│   └── crypto-home.png # Hero image
├── App.js              # Main application component
├── index.js            # Application entry point
└── routes.js           # Route configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd crypto-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌟 Key Components

### Home Page
Animated landing page with floating cryptocurrency imagery and tagline "INVEST IN CURRENCY OF THE FUTURE."

### Coins Page
- Displays paginated list of cryptocurrencies
- Currency selection (INR/USD/EUR)
- Individual coin cards with key metrics
- Real-time price updates

### Coin Details
- Detailed information about individual cryptocurrencies
- Price charts and historical data
- Market statistics and trading information

### Exchanges
- Information about cryptocurrency exchanges
- Exchange statistics and trading pairs

## 🎨 Design Features

- **Dark Theme**: Professional black and white color scheme
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations**: Subtle animations enhance user experience
- **Modern UI**: Clean, intuitive interface using Chakra UI components
- **Accessibility**: Built with accessibility best practices

## 🔧 API Integration

The application integrates with the CoinGecko API to provide:
- Real-time cryptocurrency prices
- Market capitalization data
- 24-hour price changes
- Trading volume information
- Historical price data

## 🙏 Acknowledgments

- [CoinGecko](https://www.coingecko.com/) for providing free cryptocurrency API
- [Chakra UI](https://chakra-ui.com/) for the amazing component library
- [Create React App](https://create-react-app.dev/) for the project boilerplate

---

**Built with ❤️ using React and modern web technologies**
