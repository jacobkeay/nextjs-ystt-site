const dev = process.env.PROD_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://your_deployment.server.com";
