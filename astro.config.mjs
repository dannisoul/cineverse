import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  server: {
    host: true
  },
  output: "server",
  adapter: vercel(),
  vite: {
    ssr:{
      noExternal: ["cookie"]
    }
  }
});