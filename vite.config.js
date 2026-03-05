import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For a USER/ORG site (username.github.io), base should be "/".
  // If you ever deploy to a project repo like username.github.io/my-repo, set base: "/my-repo/".
  base: "/",
})
