import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Default route (to test)
app.get("/", (req, res) => {
  res.send("🚀 Backend server is running successfully!");
});

// Example API route
app.get("/api/test", (req, res) => {
  res.json({ message: "Test route working fine!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
