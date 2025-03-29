# Subconnect - Construction Industry Network Platform

Subconnect is a professional networking platform specifically designed for the construction industry. It provides tools for project management, tender bidding, team collaboration, and professional networking.

## Features

- **Modern UI**: Sleek, minimal, data-rich interface with dark mode support
- **Project Management**: Track and manage construction projects with details, progress, team members
- **Tender Board**: Post, browse and bid on construction tenders with integrated documentation
- **Professional Networking**: Connect with other construction professionals and companies
- **Responsive Design**: Fully responsive layout for desktop, tablet and mobile devices

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type-safe code
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide Icons**: Modern icon set

## Project Structure

- `/src/components`: Reusable UI components
  - Dashboard layout components
  - Card components (StatCard, ProjectCard, TenderCard)
  - Navigation components (Header, Sidebar)
- `/src/app`: Application pages
  - Dashboard
  - Projects
  - Tenders

## UI Components

### Navigation
- **Sidebar**: Main navigation menu with categories and links
- **Header**: Top navigation bar with search and user actions

### Cards
- **StatCard**: Data statistics display with icon and change indicator
- **ProjectCard**: Project item display with progress and team info
- **TenderCard**: Tender listing with status and action buttons

## Color Palette

- **Primary**: #0d9af9 (Blue accent)
- **Secondary**: #df9720 (Orange/yellow accent)
- **Danger**: #b15020 (Red for warnings/alerts)
- **Success**: #4CAF50 (Green for success indicators)
- **Dark**: #232425 (Main dark background)
- **Gray**: #919394 (Standard gray for text)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   bun install
   ```
3. Run the development server:
   ```
   bun run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Screenshots

- Dashboard
- Projects
- Tenders

## Future Enhancements

- Light mode toggle
- User authentication
- Real-time notifications
- Project collaboration tools
- Advanced reporting and analytics
