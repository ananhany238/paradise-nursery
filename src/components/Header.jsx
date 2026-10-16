import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, ShoppingBag } from 'lucide-react'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/CartSlice'

export default function Header() {
  const cartCount = useSelector(selectCartCount)

  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Paradise Nursery home">
        <span className="wordmark-symbol" aria-hidden="true">✳</span>
        <span>Paradise <em>Nursery</em></span>
      </Link>
      <nav className="main-nav" aria-label="Primary navigation">
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/plants">
          Plants
        </NavLink>
      </nav>
      <Link className="cart-link" to="/cart" aria-label={`Shopping cart with ${cartCount} items`}>
        <ShoppingBag size={18} strokeWidth={1.8} />
        <span>Cart</span>
        <span className="cart-count">{cartCount}</span>
        <ArrowUpRight className="cart-arrow" size={15} />
      </Link>
    </header>
  )
}
