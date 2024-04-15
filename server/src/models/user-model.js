import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Usuário obrigatório'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Senha obrigatório'],
    },
  },
  { timestamps: true }
)

export default mongoose.model('User', UserSchema)
