import CategoryCard from '../category-card/category-card.component'
import './categories-container.styles.scss'

const CategoriesContainer = ({ categories }) => {
  return(
    <div className='categories-container'>
        {
          categories.map(({id, title, imageUrl}) => ( 
            <CategoryCard key={id} title={title} imageUrl={imageUrl} />
          ))
        }
    </div>
  )
}
export default CategoriesContainer;