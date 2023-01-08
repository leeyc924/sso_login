import express from 'express';
import asyncify from "express-asyncify";

const router = asyncify(express.Router());

router.use(async (req, res, next) => {
  try {
    res.json(true);
  } catch (error) {
    res.status(401).send();
  }
});

router.post('/*', async (req, res) => {
  res.status(500).send();
});
