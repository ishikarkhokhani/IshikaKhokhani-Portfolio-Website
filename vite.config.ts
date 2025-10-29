import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// REMOVED: import { componentTagger } from "lovable-tagger"; // This line caused the error

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    // REMOVED: mode === "development" && componentTagger() 
    // Filter the array to remove the "false" value if mode isn't development.
  ].filter(Boolean), 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
