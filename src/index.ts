import express from "express";
import cors from "cors";
import projectRoutes from "./api/routes/projectRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", projectRoutes);

app.listen(5000, () => {
  console.log(
    "Servidor rodando em http://localhost:5000"
  );
});
