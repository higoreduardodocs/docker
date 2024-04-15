/* eslint-disable react/prop-types */

export default function PostCard({ title, description }) {
  return (
    <article className="post-card">
      <h3 className="post-card--title">{title}</h3>
      <p className="post-card--description">{description}</p>
    </article>
  )
}
