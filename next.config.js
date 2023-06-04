/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname:
          "/dycw/next-js-full-course-for-beginners-blog-posts/master/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
