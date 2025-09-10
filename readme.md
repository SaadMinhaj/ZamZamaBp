# ZamZama Beauty Parlor – Website

A professionally designed web application for **ZamZama Beauty Parlor**, offering a smooth and engaging digital experience for customers seeking beauty services such as bridal makeup, hair styling, facials, and mehndi. The website includes a modern landing page, image gallery, service highlights, testimonials, and integrated booking/contact forms.

This is a full-stack application built with a React frontend and Express.js backend. It supports basic data handling for customer inquiries and appointment requests, and is built to scale with future features like authentication and database integration.

---

## Key Features

- Modern, responsive landing page optimized for desktop and mobile users
- Service showcase for makeup, hair, mehndi, facials, and more
- Gallery featuring real customer work and style inspirations
- Customer testimonials to build trust and credibility
- Online contact and booking forms to simplify appointment scheduling
- WhatsApp integration for direct communication

---

## Tech Stack Overview

### Frontend

- **React + TypeScript** – Built with Vite for fast performance
- **UI Components** – Shadcn/UI and Radix UI
- **Styling** – Tailwind CSS with a beauty-themed pastel color palette
- **Routing** – Wouter for lightweight client-side routing
- **State Management** – React Query (TanStack) for handling server state

### Backend

- **Express.js + TypeScript** – RESTful API for contact and booking
- **Validation** – Zod schemas for secure form handling
- **Storage** – In-memory storage setup (ready for PostgreSQL integration)

---

## Database Architecture (Planned for Production)

- **ORM** – Drizzle ORM
- **Database** – PostgreSQL (serverless via Neon)
- **Schema includes**:
  - `Users` – for future authentication
  - `Contacts` – stores customer inquiries
  - `Bookings` – stores appointment requests

---

## Authentication (Planned)

- Basic user model prepared
- Infrastructure is in place for future login/authentication features

---

## Integrations

- WhatsApp Business – Direct messaging from the website
- Image Hosting – Unsplash & Pixabay used for visual content
- Email-style workflow – For contact and booking form submissions

---

## Development & Build Tools

- **Build Tool** – Vite
- **Type Checking** – TypeScript
- **Component Libraries** – Radix UI, Lucide Icons, React Icons
- **Fonts** – Google Fonts (Poppins)
- **Deployment** – Optimized for Replit environment

---

## Deployment

The application is designed for easy deployment on platforms like Replit or any Node-compatible server. The backend is modular and ready for integration with cloud databases and production-ready hosting.

---

## Notes

- Current version uses in-memory data storage, suitable for development/demo purposes.
- Ready for future enhancements including authentication, full database support, and admin dashboard.

---

## Live Preview

\*https://zamzamabp.vercel.app/

---

## License

This project is for demonstration and client use only. Not open for public redistribution.
