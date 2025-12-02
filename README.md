# Chambliss Group International Website

This is a React application for the Chambliss Group International website, designed to showcase the organization's mission, values, and services. The website is built using React and styled with Tailwind CSS for a modern and responsive design.

## Project Structure

The project is organized as follows:

```
chambliss-group-website
├── src
│   ├── components          # Reusable components for the website
│   │   ├── Header.jsx      # Mobile header with logo and menu button
│   │   ├── Sidebar.jsx     # Fixed sidebar navigation for desktop
│   │   ├── Hero.jsx        # Hero section of the homepage
│   │   ├── About.jsx       # About section detailing the organization
│   │   ├── Team.jsx        # Leadership section showcasing the CEO
│   │   ├── Pillars.jsx     # Section outlining the pillars of strength
│   │   ├── Contact.jsx      # Contact information and call-to-action
│   │   └── Footer.jsx      # Footer with copyright information
│   ├── pages
│   │   └── Home.jsx        # Main page of the application
│   ├── hooks
│   │   └── useSidebar.js    # Custom hook for managing sidebar state
│   ├── styles
│   │   └── index.css       # Global styles and Tailwind CSS imports
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point of the React application
│   └── index.css          # Additional global styles
├── public
│   ├── CEO.jpeg            # CEO profile picture
│   ├── Life Guard Logo.png  # Life Guard Security logo
│   ├── camera1.jpg         # Security camera feature image
│   └── camera4.jpg         # Additional security camera feature image
├── package.json            # Project metadata and dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd chambliss-group-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

This application is designed to provide information about Chambliss Group International, including its leadership, mission, and services. Users can navigate through different sections using the sidebar or the mobile header.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.