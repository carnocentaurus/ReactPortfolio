// postcss.config.js
import tailwindPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    // Use the explicitly imported plugin
    tailwindPostcss, 
    autoprefixer,
  ]
};