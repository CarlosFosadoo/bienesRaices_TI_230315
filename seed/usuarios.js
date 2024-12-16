import bcrypt from 'bcryptjs'
const usuarios = [
    {
        nombre: 'Carlos Isaac Fosado',
        email: 'carlitos@gmail.com',
        confirmado: 1,
        password: bcrypt.hashSync('123456789', 10)
    }
]

export default usuarios