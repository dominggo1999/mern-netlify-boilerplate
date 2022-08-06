import express from 'express';

const authRouter = express.Router();

authRouter.get('/', (req, res) => {
  res.json({
    message: 'Backend is alive and alive',
  });
});

export default authRouter;
