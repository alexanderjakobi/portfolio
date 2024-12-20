/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Aktiviert den statischen Export
  basePath: '/portfolio', // My GitHub-Repository
  trailingSlash: true, // Fügt einen Slash am Ende von URLs hinzu, um GitHub Pages kompatibel zu machen
};

export default nextConfig;
