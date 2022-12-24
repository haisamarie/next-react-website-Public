export default function Hero({ title, subtitle, imgOn = false }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {imgOn && <figure>[画像]</figure>}
    </div>
  )
}
