import express from "express";
import asyncify from "express-asyncify";
import cors from "cors";

export function configureApp() {
  const app = asyncify(express());
  app.use(cors());
  app.use(
    express.urlencoded({
      limit: "30mb",
      extended: true,
      parameterLimit: 100000,
    })
  );
  app.use(express.json({ limit: "30mb" }));

  return app;
}
