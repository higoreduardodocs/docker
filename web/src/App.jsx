import { useEffect, useState } from 'react'

import api from './libs/api'
import PostCard from './components/post-card'

export default function App() {
  const subdomain = window.location.host.split('.')[0]
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    const { data } = await api.get('/posts')
    setPosts(data?.data)
  }
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <main>
      <h2>Você está na página:</h2>
      <span>{subdomain}</span>
      <section className="post-grid">
        {!posts?.length ? (
          <h2 className="post-empty">Nenhum post encontrado</h2>
        ) : (
          posts.map((item) => (
            <PostCard
              key={item._id}
              title={item.title}
              description={item.body}
            />
          ))
        )}
      </section>
    </main>
  )
}
