import crypto from 'crypto';
import cookieParser from 'express-cookie-parser';
import { NextApiRequest, NextApiResponse } from 'next';

const secret = 'my_secret_key';

export default async function handler(req, res) {
  cookieParser()(req, res, () => {});

  // Generar un token aleatorio con crypto
  const token = crypto.randomBytes(20).toString('hex');

  // Guardar el token en una cookie
  res.setHeader('Set-Cookie', `token=${token}; HttpOnly`);

  // Devolver una respuesta con el token
  res.status(200).json({ token });
}
