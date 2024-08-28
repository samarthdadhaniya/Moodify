# Moodify 😀

Moodify is a modern mood-tracking app built with **Next.js**, **Firebase**, and **TailwindCSS**. This app allows users to log their daily emotions, visualize mood trends over time, and enjoy a seamless user experience with real-time updates and a beautifully designed interface.

## Features

- **User Authentication with Firebase:** Secure and easy-to-use authentication system to manage user accounts.
- **Mood Tracking:** Users can log their daily emotions and thoughts, making it easy to track their mood over time.
- **Data Visualization:** Beautiful graphs and charts to help users see their mood trends over days, weeks, and months.
- **Real-Time Updates:** Firebase Firestore integration ensures that user data is updated in real time, providing a smooth and responsive experience.
- **Beautiful UI:** Crafted with TailwindCSS, the UI is clean, modern, and responsive, offering an excellent user experience across all devices.

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 14.x or later)
- **npm** or **yarn**
- **Firebase Account**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/samarthdadhaniya/Moodify.git
   cd Moodify
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set up Firebase:**

   - Create a new project in the Firebase console.
   - Enable **Authentication** and **Firestore** database.
   - Get your Firebase config object and add it to the `.env.local` file:

   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please open an issue or fork the repository and submit a pull request.

## 📬 Contact

For any inquiries or support, feel free to reach out:

- **Samarth Dadhaniya**
- GitHub: [@samarthdadhaniya](https://github.com/samarthdadhaniya)
- Email: samarthdadhaniya7@gmail.com
