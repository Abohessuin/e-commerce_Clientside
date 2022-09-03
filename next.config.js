const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  publicRuntimeConfig: {
    // Will be available on both server and client
    API: process.env.NEXT_PUBLIC_API,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  experimental: {
    outputStandalone: true,
  },
});
