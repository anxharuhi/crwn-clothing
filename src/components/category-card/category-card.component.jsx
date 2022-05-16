import './category-card.styles.scss'

const CategoryCard = ({ title, imageUrl }) => {
  return(
    <div className='category-card'>
      <div className= 'background-image' style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className='category-tag'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryCard;