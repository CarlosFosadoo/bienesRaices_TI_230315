import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos

  // Enviar el email
  await transport.sendMail({
    from: 'BienesRaices.com',
    to: email,
    subject: 'Confirma tu cuenta en BienesRaices.com',
    text: 'Confirma tu cuenta en BienesRaices.com',
    html: `
      <div style="background-color: #F4F9FC; padding: 20px; font-family: Arial, sans-serif;">
        <!-- Cabecera con tono azul más fuerte -->
        <div style="background-color: #204F8A; padding: 20px; border-radius: 8px; color: white; text-align: center;">
          <h1 style="font-size: 28px; font-weight: 700; letter-spacing: 1px;">BienesRaices.com</h1>
          <p style="font-size: 20px; font-weight: 600; margin-top: 10px;">¡Hola ${nombre}!</p>
        </div>

        <!-- Cuerpo del correo -->
        <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <p style="font-size: 16px; color: #333;">Tu cuenta ya está lista. Solo debes confirmarla en el siguiente enlace:</p>
          
          <!-- Estilizado del botón "Confirmar cuenta" -->
          <p style="text-align: center; margin-top: 20px;">
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3001}/auth/confirmar/${token}" 
               style="display: inline-block; padding: 12px 30px; background-color: #3787D2; color: white; font-weight: 600; font-size: 16px; border-radius: 5px; text-decoration: none; box-shadow: 0 2px 5px rgba(56, 135, 210, 0.3); transition: background-color 0.3s, box-shadow 0.3s;">
              Confirmar cuenta
            </a>
          </p>

          <p style="font-size: 14px; color: #6B7280; text-align: center; margin-top: 20px;">
            Si tú no creaste esta cuenta, puedes ignorar este email.
          </p>
        </div>

        <!-- Pie de correo -->
        <div style="text-align: center; margin-top: 30px;">
          <p style="font-size: 14px; color: #9CA3AF;">BienesRaices.com</p>
        </div>
      </div>
    `
  })
}

const emailOlvidePassword = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos

  // Enviar el email
  await transport.sendMail({
    from: 'BienesRaices.com',
    to: email,
    subject: 'Restablece tu password en BienesRaices.com',
    text: 'Restablece tu password en BienesRaices.com',
    html: `
      <div style="background-color: #F4F9FC; padding: 20px; font-family: Arial, sans-serif;">
        <!-- Cabecera con tono azul más fuerte -->
        <div style="background-color: #204F8A; padding: 20px; border-radius: 8px; color: white; text-align: center;">
          <h1 style="font-size: 28px; font-weight: 700; letter-spacing: 1px;">BienesRaices.com</h1>
          <p style="font-size: 20px; font-weight: 600; margin-top: 10px;">¡Hola ${nombre}!</p>
        </div>

        <!-- Cuerpo del correo -->
        <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <p style="font-size: 16px; color: #333;">Has solicitado restablecer tu password. Para continuar, sigue el siguiente enlace:</p>
          
          <!-- Estilizado del botón "Restablecer password" -->
          <p style="text-align: center; margin-top: 20px;">
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3001}/auth/olvide-password/${token}" 
               style="display: inline-block; padding: 12px 30px; background-color: #3787D2; color: white; font-weight: 600; font-size: 16px; border-radius: 5px; text-decoration: none; box-shadow: 0 2px 5px rgba(56, 135, 210, 0.3); transition: background-color 0.3s, box-shadow 0.3s;">
              Restablecer password
            </a>
          </p>

          <p style="font-size: 14px; color: #6B7280; text-align: center; margin-top: 20px;">
            Si tú no solicitaste el cambio de password, puedes ignorar este email.
          </p>
        </div>

        <!-- Pie de correo -->
        <div style="text-align: center; margin-top: 30px;">
          <p style="font-size: 14px; color: #9CA3AF;">BienesRaices.com</p>
        </div>
      </div>
    `
  })
}

export { emailRegistro, emailOlvidePassword }
