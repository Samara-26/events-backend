import '#db';
import express from "express";
import { userRoutes, eventRoutes } from '#routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/events', eventRoutes);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));