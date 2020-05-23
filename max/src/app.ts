import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todoes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log("listening port..."));
