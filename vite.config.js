import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project from <username>.github.io/Opportunity-Tracker/.
  // Setting the base here makes generated asset URLs work from that subpath.
  base: '/Opportunity-Tracker/',
});
