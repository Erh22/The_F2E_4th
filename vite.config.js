import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
const path = require('path');

export default defineConfig({
    base: "/the_f2e_4th/",
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        react()
    ],
});