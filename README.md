# ETAT — Local development notes

- If you see "'pnpm' is not recognized" on Windows: ensure the npm global bin folder is on your PATH. The typical location is:
  `C:\Users\<your-username>\AppData\Roaming\npm`

- I added `C:\Users\sridh\AppData\Roaming\npm` to the User PATH on this machine so the `pnpm` command is available in new terminals.

Quick start

1. Open a new terminal (or sign out/in) so the updated PATH takes effect.
2. Verify pnpm is available:
   `pnpm -v`
3. Install dependencies (if needed):
   `pnpm install`  or `npm install`
4. Start the dev server:
   `npm run dev`

The dev server in this session started at: http://localhost:3003

If you prefer not to use pnpm, you can run `npm install` then `npm run dev` — Next.js will work with npm or yarn as well.

If you want, I can add a helpful script or update package.json to prefer npm instead of pnpm.

