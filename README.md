# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Component Structure
App (Root Component)

Uses React Router to manage navigation.
Defines three routes:
/ → Counter
/form → UserForm
/editor → RichTextEditor
Contains navigation links for easy switching.
Counter Component

Displays a counter with increment, decrement, and reset buttons.
Uses react-spring to animate the background color based on count value.
Encapsulated logic for maintaining the count.
UserForm Component

Contains input fields for user details (name, address, email, phone).
Implements an unsaved changes warning using beforeunload event.
Saves form data to localStorage upon submission.
RichTextEditor Component

Uses TinyMCE Editor for rich text formatting.
Allows users to edit and visualize formatted text.

State Management Choices
useState for Local Component State

Each component maintains its own state using useState.
Counter stores its count state.
UserForm tracks form input data and unsaved changes.
RichTextEditor manages the editor’s content.
useEffect for Side Effects

UserForm uses useEffect to listen for browser close events and warn users of unsaved changes.
localStorage for Persistent Data

The UserForm component saves form data to localStorage on submission.
This ensures data persists across browser refreshes.
react-spring for UI Animations

Used in Counter to smoothly transition the background color.
Potential Improvements
Global State Management (Redux/RTK)
If the app scales, managing form data and counter state globally could improve efficiency.
Persist Counter State
Storing the counter value in localStorage or sessionStorage can maintain state across sessions.


![Image Alt](https://github.com/Chandan260503/React_Project_Assignment/blob/6c1f287344d8a8978475f259d5e55e035f409bad/Screenshot%202025-02-06%20212130.png)
![Image Alt](https://github.com/Chandan260503/React_Project_Assignment/blob/6c1f287344d8a8978475f259d5e55e035f409bad/Screenshot%202025-02-06%20212152.png)
![Image Alt](https://github.com/Chandan260503/React_Project_Assignment/blob/6c1f287344d8a8978475f259d5e55e035f409bad/Screenshot%202025-02-06%20212210.png)
![Image Alt](https://github.com/Chandan260503/React_Project_Assignment/blob/6c1f287344d8a8978475f259d5e55e035f409bad/Screenshot%202025-02-06%20212320.png)
![Image Alt](https://github.com/Chandan260503/React_Project_Assignment/blob/6c1f287344d8a8978475f259d5e55e035f409bad/Screenshot%202025-02-06%20212337.png)
