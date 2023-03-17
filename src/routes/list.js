import express from 'express';
const router = express.Router();

router.get('/list', (request, response) => {
  response.status(200).json({
    ok: true,
    message: 'Hello World',
  });
});

export default router;