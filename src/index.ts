import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/health", async () => ({ status: "ok" }));

const start = async () => {
  try {
    await app.listen({ port: 8080, host: "0.0.0.0" });
    app.log.info("🚀 Revv Backend running...");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
