import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Título obrigatório'],
    },
    body: {
      type: String,
      required: [true, 'Post obrigatório'],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Post', PostSchema)
