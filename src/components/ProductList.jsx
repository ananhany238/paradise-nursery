import { Check, Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCartItems } from '../store/CartSlice'
import { categories, plants } from '../data/plants'

const formatPrice = (price) => `$${price.toFixed(2)}`

export default function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  return (
    <main className="plants-page">
      <section className="page-intro content-wrap">
        <div>
          <p className="eyebrow">The collection / 2026</p>
          <h1>Find your<br /><em>forever green.</em></h1>
        </div>
        <p className="intro-note">
          Thoughtful plants for every room, routine, and level of plant-parent confidence.
          Start small, grow at your own pace.
        </p>
      </section>

      <section className="catalog content-wrap" aria-label="Houseplant collection">
        {categories.map((category) => {
          const categoryPlants = plants.filter((plant) => plant.category === category.id)
          return (
            <section className="category-section" key={category.id}>
              <div className="category-heading">
                <div>
                  <p className="eyebrow">{category.eyebrow}</p>
                  <h2>{category.name}</h2>
                </div>
                <p>{category.description}</p>
              </div>
              <div className="product-grid">
                {categoryPlants.map((plant) => {
                  const isAdded = cartItems.some((item) => item.id === plant.id)
                  return (
                    <article className="product-card" key={plant.id}>
                      <div className="product-image-wrap">
                        <img src={plant.image} alt={`${plant.name} houseplant`} loading="lazy" />
                        <span className="product-size">{plant.size}</span>
                      </div>
                      <div className="product-info">
                        <div>
                          <h3>{plant.name}</h3>
                          <p className="botanical">{plant.botanical}</p>
                        </div>
                        <p className="product-price">{formatPrice(plant.price)}</p>
                      </div>
                      <p className="product-accent">{plant.accent}</p>
                      <button
                        className={`add-button ${isAdded ? 'is-added' : ''}`}
                        type="button"
                        disabled={isAdded}
                        onClick={() => dispatch(addToCart(plant))}
                      >
                        {isAdded ? <><Check size={16} /> Added to cart</> : <><Plus size={16} /> Add to cart</>}
                      </button>
                    </article>
                  )
                })}
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}
