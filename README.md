# Flicksy: Movie Directory App 🎬

Flicksy is a modern, feature-rich mobile application that allows users to discover and explore movies. Built with React Native and Expo, it provides a seamless experience for movie enthusiasts to browse trending movies, search for their favorites, and view detailed information about each film.

## 🌟 Features

- **Trending Movies**: Stay updated with the latest trending movies
- **Movie Search**: Powerful search functionality to find any movie
- **Detailed Movie Information**: 
  - Movie overview
  - Release date
  - Runtime
  - Ratings
  - Genres
  - Budget and revenue information
  - Production companies
- **Beautiful UI**: Modern and intuitive user interface with a dark theme
- **Responsive Design**: Optimized for both iOS and Android devices

## 🛠 Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: React Hooks
- **API Integration**: TMDB API for movie data
- **UI Components**: Custom components with React Native
- **Icons**: Expo Vector Icons
- **Image Handling**: Expo Image

## 📱 Screenshots
<!-- ![App Walkthrough](Demo.gif "App Walkthrough") -->
<video height="600" autoplay loop muted playsinline>
  <source src="Demo.mp4" type="video/mp4">
  App Walkthrough
</video>

## 🔧 Implementation Details

### Key Components

#### 1. MovieCard Component
- Displays movie information in a grid layout
- Features:
  - Movie poster with fallback image
  - Title with text truncation
  - Rating display with star icon
  - Release year
  - Responsive sizing based on screen width
- Uses NativeWind for styling
- Implements touch feedback for better UX

#### 2. TrendingCard Component
- Horizontal scrollable card for trending movies
- Features:
  - Larger poster display
  - Gradient overlay for text visibility
  - Rating and release date
  - Smooth animations
- Optimized for performance with proper image caching

#### 3. SearchBar Component
- Custom search implementation
- Features:
  - Real-time search with debouncing
  - Custom styling with dark theme
  - Search icon integration
  - Placeholder text support
- Handles both manual input and programmatic updates

#### 4. Movie Details Screen
- Comprehensive movie information display
- Features:
  - Large hero image
  - Detailed movie information:
    - Title and release date
    - Runtime
    - Rating with vote count
    - Overview
    - Genres
    - Budget and revenue
    - Production companies
  - Back navigation
  - Scrollable content with proper padding

### State Management
- Uses React Hooks for local state management
- Custom `useFetch` hook for data fetching:
  - Handles loading states
  - Error handling
  - Data caching
  - Automatic refetching
- Implements proper error boundaries

### Navigation
- Uses Expo Router for file-based routing
- Implements:
  - Tab-based navigation for main screens
  - Stack navigation for movie details
  - Deep linking support
  - Proper navigation animations

### API Integration
- TMDB API integration for movie data
- Endpoints used:
  - Trending movies
  - Movie search
  - Movie details
- Implements:
  - API key management
  - Rate limiting
  - Error handling
  - Response caching

### Styling
- Uses NativeWind (Tailwind CSS for React Native)
- Features:
  - Dark theme implementation
  - Responsive design
  - Custom color scheme
  - Consistent spacing
  - Reusable utility classes

### Performance Optimizations
- Image optimization:
  - Proper image caching
  - Lazy loading
  - Fallback images
- List optimizations:
  - Virtualized lists
  - Proper key usage
  - Pagination support
- Memory management:
  - Proper cleanup in useEffect
  - Optimized re-renders

### Error Handling
- Comprehensive error handling:
  - API errors
  - Network issues
  - Invalid data
  - User feedback
- Fallback UI components
- Error boundaries implementation

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd movie_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

### Running on Physical Device

1. **Install Expo Go**
   - iOS: [App Store Link](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Play Store Link](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Connect your device**
   - Make sure your phone and computer are on the same network
   - Scan the QR code from the Expo development server
   - The app will open in Expo Go

### Development Build

For a production-ready build:

1. **Install EAS CLI**
   ```bash
   npm install -g eas-cli
   ```

2. **Configure EAS Build**
   ```bash
   eas build:configure
   ```

3. **Create a build**
   ```bash
   eas build --platform ios
   # or
   eas build --platform android
   ```