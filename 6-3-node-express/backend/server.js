import express from "express";
import cors from "cors";
import morgan from "morgan";
import { getRandomQuote } from "./quotes.js";
// TODO 1: Initialize Express app and Define PORT
const app = express();
const PORT = 3000;

// TODO 4: Import and Apply CORS middleware
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// TODO 5: Import and apply Morgan middleware
// TODO 5: Apply Morgan middleware
app.use(morgan("dev"));

// (Leave this empty for now until we do TODO 6)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});// TODO 5: Apply Morgan middleware
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// TODO 6.1: Create root route "/"
app.get('/', (req, res) => {
  res.send('Welcome to the Quote API!');
});

// TODO 6.2: Create "/api/quote" route
app.get('/api/quote', (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote: quote });
});

// TODO 7: Start server using app.listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});