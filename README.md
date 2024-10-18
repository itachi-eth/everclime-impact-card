# Everclime Impact Card

## Description

This project is a React-based web application that showcases impact cards in a carousel format. It's designed to display information about environmental or social impact initiatives, including volume metrics, rewards, and sponsor details.

## Features

- Dynamic Impact Cards with customizable colors and content
- Responsive carousel for displaying multiple cards
- Interactive navigation buttons for the carousel

## Installation

To set up the project locally, follow these steps:

Requirements:

- node (v18+)
- yarn (v1.2+)

1. Clone the repository:

   ```
   git clone https://github.com/itachi-eth/everclime-impact-card.git
   ```

2. Install dependencies:
   ```
   cd everclime-impact-card
   ```
3. Install dependencies:
   ```
   yarn install or npm install
   ```
4. Start the development server:
   ```
   yarn run dev or npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173` to view the application.

## Key Components

- `ImpactCard`: Displays individual impact information with dynamic styling.
- `Carousel`: Manages the display and navigation of multiple ImpactCards.

## Configuration

The `config.ts` file contains important configurations such as:

- `mockCardData`: Sample data for impact cards
- `mappingSlugToIcon`: Mapping for dynamic icon selection

## Styling

- Tailwind CSS is used for utility-first styling
- CSS Modules (`.module.css` files) are used for component-specific styles
- Custom CSS properties are utilized for dynamic color application

## License

MIT License
