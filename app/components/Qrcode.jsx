import { useRef, useEffect } from 'react';
import QRCode from 'qrcode';

function CodigoQR({ texto }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Obtenemos el contexto del canvas
    const ctx = canvasRef.current.getContext('2d');
    // Configuramos la librería para generar el código QR
    const qr = new QRCode({
      level: 'M',
      version: 1,
      quiet: 4,
      mode: 'BYTE',
      size: 200
    });
    // Generamos el código QR a partir del texto que se pasó como parámetro
    qr.makeCode(texto);
    // Dibujamos el código QR en el canvas
    qr.renderTo2dContext(ctx, 0, 0);
  }, [texto]);

  return (
    <canvas ref={canvasRef} width="200" height="200" />
  );
}

export default CodigoQR;
