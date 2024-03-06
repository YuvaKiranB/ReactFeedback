import './index.css'

const GetItem = props => {
  const {content, clickedEmoji} = props
  const {name, imageUrl} = content

  const clicked = () => {
    clickedEmoji(content.id)
  }

  return (
    <li>
      <img onClick={clicked} className="image" src={imageUrl} alt={name} />
      <p className="p1">{name}</p>
    </li>
  )
}

export default GetItem
