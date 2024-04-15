import UserModel from '../models/user-model.js'
import bcrypt from 'bcrypt'

export const singUp = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 12)

  const created = await UserModel.create({
    ...req.body,
    password: hashedPassword,
  })

  return res.status(201).json({
    status: 'success',
    data: created,
  })
}

export const singIn = async (req, res) => {
  const finded = await UserModel.findOne({ username: req.body.username })
  if (!finded) throw new Error('Usuário não cadastrado')

  const isMatch = await bcrypt.compare(req.body.password, finded.password)
  if (!isMatch) throw new Error('Credenciais inválidas')

  return res.status(200).json({
    status: 'success',
    data: finded,
  })
}
