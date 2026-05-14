import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        'product-detail': resolve(__dirname, 'product-detail.html'),
        accessories: resolve(__dirname, 'accessories.html'),
        'spare-parts': resolve(__dirname, 'spare-parts.html'),
        checkout: resolve(__dirname, 'checkout.html'),
        'store-locator': resolve(__dirname, 'store-locator.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
