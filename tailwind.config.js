/** @type {import('tailwindcss').Config} */
module.exports = {
  // Path to all components where you use className
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // We mirror the COLORS constant here so you can use 'bg-primary', etc.
        background: '#050505',
        surface: '#121212',
        primary: '#A855F7',
        secondary: '#3B82F6',
        success: '#10B981',
        error: '#EF4444',
        muted: '#94A3B8',
        border: '#1E293B',
      },
    },
  },
  plugins: [],
};