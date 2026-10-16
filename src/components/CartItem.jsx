import { Minus, Plus, Trash2 } from 'lucide-react'
import { useDispatch } from 'react-redux'
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../store/CartSlice'

const formatPrice = (price) => `$${price.toFixed(2)}`

export default function CartItem({ item }) {
  const dispatch = useDispatch()
  const lineTotal = item.price * item.quantity

  return (
    <article className="cart-item">
      <img src={item.image} alt={`${item.name} houseplant`} />
      <div className="cart-item-details">
        <p className="eyebrow">{item.category === 'pet-friendly' ? 'Pet friendly' : item.size}</p>
        <h2>{item.name}</h2>
        <p className="botanical">{item.botanical}</p>
        <p className="unit-price">{formatPrice(item.price)} <span>per plant</span></p>
      </div>
      <div className="cart-item-quantity">
        <span className="quantity-label">Quantity</span>
        <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
          <button
            type="button"
            aria-label={`Decrease ${item.name} quantity`}
            onClick={() => dispatch(decrementQuantity(item.id))}
            disabled={item.quantity === 1}
          >
            <Minus size={14} />
          </button>
          <span>{item.quantity}</span>
          <button
            type="button"
            aria-label={`Increase ${item.name} quantity`}
            onClick={() => dispatch(incrementQuantity(item.id))}
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
      <div className="cart-item-total">
        <span>Line total</span>
        <strong>{formatPrice(lineTotal)}</strong>
        <button
          className="delete-button"
          type="button"
          aria-label={`Remove ${item.name} from cart`}
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          <Trash2 size={15} /> Remove
        </button>
      </div>
    </article>
  )
}
