import PostModel from '../models/post-model.js'
import posts from '../../seed/post-seed.js'

export const findAll = async (req, res) => {
  const findedAll = await PostModel.find({})

  return res.status(200).json({
    status: 'success',
    results: findedAll.length,
    data: findedAll,
  })
}

export const findById = async (req, res) => {
  const finded = await PostModel.findById(req.params.id)

  return res.status(200).json({
    status: 'success',
    data: finded,
  })
}

export const save = async (req, res) => {
  const created = await PostModel.create(req.body)

  return res.status(201).json({
    status: 'success',
    data: created,
  })
}

export const update = async (req, res) => {
  const updated = await PostModel.findByIdAndUpdate(req.params.id, req.body)

  return res.status(200).json({
    status: 'success',
    data: updated,
  })
}

export const remove = async (req, res) => {
  await PostModel.findByIdAndDelete(req.params.id)

  return res.status(200).json({
    status: 'success',
  })
}

export const seed = async (req, res) => {
  await PostModel.insertMany(posts)

  return res.status(201).json({
    status: 'success',
  })
}
