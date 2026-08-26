import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          courses: path.resolve(__dirname, 'pages/courses.html'),
          courseDetails: path.resolve(__dirname, 'pages/course-details.html'),
          dashboard: path.resolve(__dirname, 'pages/dashboard.html'),
          login: path.resolve(__dirname, 'pages/login.html'),
          register: path.resolve(__dirname, 'pages/register.html'),
        }
      }
    }
  };
});
