import type { NextConfig } from "next";
import path from 'path'

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      // Set up resolve alias to make the shared folder accessible
      resolveAlias: {
        'shared': path.resolve(__dirname, '../../shared'), // Alias for shared folder
      },
    },
  },
};

export default nextConfig;
