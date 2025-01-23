# Architectural/Interior Design Site - ADMIN

## Key Features

### 1. Role-Based Access Control (RBAC)
- The Admin UI implements RBAC to manage user permissions based on their roles.
- Roles are defined in the backend and fetched during user authentication.
- The UI dynamically adjusts available options and views based on the user’s role for enhanced security and usability.

### 2. Authentication and Authorization
- Utilizes JWT for secure user authentication, with session management handled by the AuthContext.
- The `TokenExpirationChecker` component monitors token validity and manages user sessions.

### 3. Routing
- Uses `react-router-dom` for client-side navigation.
- Users access different sections of the application based on their permissions.

### 4. State Management
- Employs Redux for centralized state management, with slices for authentication and other application states.

### 5. Data Fetching and Display
- The `PaginatedDataGrid` component displays data in a user-friendly table format, supporting pagination, filtering, and sorting.

### 6. Responsive Design
- The UI adapts to various screen sizes, ensuring a consistent experience across devices.

### 7. Theming
- Supports multiple themes through the `ThemeProvider`, allowing users to customize the visual style.

### 8. Drag-and-Drop Functionality
- The `Canvas` component enables users to dynamically build pages by dragging and dropping elements.

### 9. Loading States
- Provides visual feedback during data operations using `LoaderWrapper` and `FullScreenLoader`.

### 10. Error Handling
- Displays error messages for failed operations using Ant Design’s `message` component.

## Key Components

### 1. AuthContext
- Manages user authentication state and provides methods for login, logout, and token verification.

### 2. TokenExpirationChecker
- Checks the validity of JWT tokens and logs out users if the token is expired.

### 3. AppRoutes
- Defines the routing structure of the application, mapping paths to components based on user roles.

### 4. PaginatedDataGrid
- Displays data in a grid format with pagination, filtering, and sorting capabilities.

### 5. LoaderWrapper
- Wraps other components to show a loading spinner during data fetching.

### 6. FullScreenLoader
- Shows a full-screen loading indicator during critical operations.

### 7. Canvas
- Allows users to drag and drop UI elements to dynamically create custom layouts.

### 8. ThemeProvider
- Applies the selected theme across the application.

### 9. ErrorBoundary
- Catches JavaScript errors and displays a fallback UI.

### 10. Sidebar
- Provides navigation links to different sections of the application based on user roles.

## SERVER

### 1. Environment Configuration
- The `.env` file contains environment variables such as database connection strings, JWT secrets, and server port configurations.

### 2. Logging
- Logs application events (e.g., server startup messages) in `backend/logs/combined.log` to monitor behavior and troubleshoot issues.

### 3. Package Configuration
- The `package.json` file lists dependencies, scripts, and metadata for managing the project’s packages and scripts.

### 4. Prisma Schema
- The `schema.prisma` file defines database models and relationships for entities like ApplicationLog, SecurityGroup, and ProjectService.

### 5. Configuration
- `backend/src/config/index.js` centralizes configuration management by loading environment variables and exporting a configuration object.

### 6. Controllers
- `backend/src/controller/*.js` files contain business logic for processing requests, interacting with the database, and returning responses.

### 7. Routes
- `backend/src/routes/*.js` files define API endpoints that map HTTP requests to controller functions.

### 8. Middleware
- Middleware functions handle requests before they reach route handlers, including authentication, validation, and error handling.

### 9. Error Handling
- `backend/src/handlers/errorHandler.js` provides centralized error handling, formatting errors into a consistent response structure.

### 10. Authentication
- Middleware in `backend/src/middleware/auth.js` verifies JWT tokens to authenticate users before granting access to protected routes.

### 11. Validation
- `backend/src/middleware/validateRequest.js` uses Joi to validate incoming request data against schemas.

### 12. Queries
- `backend/src/query/*.js` files contain raw SQL queries for complex database interactions.

### 13. Exceptions
- `backend/src/exceptions/http-exception.js` defines a custom exception class for structured HTTP error handling.

## CLIENT

### 1. Responsive Design
- All components (e.g., Hero, FeaturedProjects, Services, Contact, Stats) are responsive, ensuring seamless experiences on various devices.
- Tailwind CSS is used for utility-first styling, enabling responsive design directly in the markup.

### 2. Dynamic Routing
- `App.js` sets up routing with React Router for smooth transitions between pages.

### 3. Hero Section with Slider
- The Hero component features a slider showcasing key messages or promotions, managed by a custom `useSlider` hook.

### 4. Featured Projects Showcase
- Displays a selection of highlighted projects with dynamically rendered project cards linking to detailed views.

### 5. Service Listings
- Lists services offered by the company with icons, titles, and descriptions in a grid layout.

### 6. Contact Information and Inquiry Form
- Captures user input for direct communication and lead generation through a contact form.

### 7. Statistics Display
- Presents key company statistics (e.g., projects completed, clients served) in a visually appealing grid layout.

### 8. Navigation Bar
- Provides navigation links to different sections using React Router for smooth navigation.

### 9. Footer with Social Links
- Includes company information, quick links, and social media icons from the Lucide React library.

### 10. State Management
- React’s built-in state management or Context API handles global states (e.g., user authentication, theme settings).

---

### Visual Assets
![VisionExt Commercial](https://github.com/user-attachments/assets/fe2bb3b2-df2e-4a83-87e5-0da8a82cd9f3)
![VisionExt Interior](https://github.com/user-attachments/assets/1bde2c9c-339a-4219-b031-e24a59838929)
![VisionExt How Work](https://github.com/user-attachments/assets/128e3cc4-5d99-4182-b170-5c59b029b423)
![VisionExt Home](https://github.com/user-attachments/assets/cee171d7-859d-4ec4-a1c2-07acb6808d09)

