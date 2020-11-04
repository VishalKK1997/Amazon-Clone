const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")(
  "sk_test_51HjPsuE57SQoCXAVok6e587KJikTeXJx8N8gkwq459EiKOIJi5yaANVJrtJQNpSTLUX6Ep9DlOnWR45QMamGMdkc00KdBQO8Zw"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World!"));

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
// http://localhost:5001/clone-63c8c/us-central1/api
