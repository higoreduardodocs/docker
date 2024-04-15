import mongoose from 'mongoose'

const postsId = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
]

const posts = [
  {
    _id: postsId[0],
    title: 'Titulo 1',
    body: 'Corpo 1',
    createdAt: '2023-07-12T00:00:00.000Z',
    updatedAt: '2023-07-12T00:00:00.000Z',
    __v: 0,
  },
  {
    _id: postsId[1],
    title: 'Titulo 2',
    body: 'Corpo 2',
    createdAt: '2023-07-12T00:00:00.000Z',
    updatedAt: '2023-07-12T00:00:00.000Z',
    __v: 0,
  },
  {
    _id: postsId[2],
    title: 'Titulo 3',
    body: 'Corpo 3',
    createdAt: '2023-07-12T00:00:00.000Z',
    updatedAt: '2023-07-12T00:00:00.000Z',
    __v: 0,
  },
  {
    _id: postsId[3],
    title: 'Titulo 4',
    body: 'Corpo 4',
    createdAt: '2023-07-12T00:00:00.000Z',
    updatedAt: '2023-07-12T00:00:00.000Z',
    __v: 0,
  },
]

export default posts
