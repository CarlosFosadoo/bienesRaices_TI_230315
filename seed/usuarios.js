import bcrypt from 'bcryptjs'
const usuarios = [
    {
        nombre: 'Esperanza',
        email: '',
        confirmado: 1,
        password: bcrypt.hashSync('password', 10)
    }
]

export default usuarios