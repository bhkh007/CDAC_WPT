const express = require('express');

const cors=require("cors")
const app = express();
app.use(cors());
connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/request',ReqRoutes)
const PORT = process.env.PORT || 6655;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
