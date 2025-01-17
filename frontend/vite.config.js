
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5012',  // Proxy API requests to your backend server
    }
  }
  
});
