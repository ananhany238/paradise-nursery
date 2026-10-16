import { useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { ArrowRight, Leaf, Sprout } from 'lucide-react'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'
import { selectCartCount, selectCartItems, selectCartTotal } from './store/CartSlice'

const formatPrice = (price) => `$${price.toFixed(2)}`

function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-shade" />
        <div className="hero-content content-wrap">
          <div className="hero-kicker"><span /> Houseplants for considered spaces</div>
          <h1>Bring the<br /><em>outside in.</em></h1>
          <p>Make room for a slower rhythm with plants that feel like they belong.</p>
          <Link className="button button-light" to="/plants">
            Explore the collection <ArrowRight size={18} />
          </Link>
        </div>
        <div className="hero-foot content-wrap">
          <span>Est. 2012 / Portland, Oregon</span>
          <span>Scroll to grow ↓</span>
        </div>
      </section>
      <section className="about-section content-wrap">
        <AboutUs />
        <div className="about-aside">
          <div className="leaf-orbit"><Leaf size={34} strokeWidth={1.2} /></div>
          <p>“The right plant changes the way a room breathes.”</p>
          <span>— Our growing philosophy</span>
        </div>
      </section>
      <section className="home-invite">
        <div className="content-wrap invite-inner">
          <div>
            <p className="eyebrow">Your next green chapter</p>
            <h2>Ready to make<br /><em>room for growth?</em></h2>
          </div>
          <Link className="text-link" to="/plants">Shop all plants <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  )
}

function CartPage() {
  const items = useSelector(selectCartItems)
  const totalCount = useSelector(selectCartCount)
  const total = useSelector(selectCartTotal)
  const [checkoutMessage, setCheckoutMessage] = useState('')

  return (
    <main className="cart-page content-wrap">
      <section className="cart-heading">
        <div>
          <p className="eyebrow">Your growing collection</p>
          <h1>Shopping<br /><em>cart.</em></h1>
        </div>
        <p className="cart-heading-note">A home is a living thing. Keep adding what makes yours feel like you.</p>
      </section>

      {items.length === 0 ? (
        <section className="empty-cart">
          <Sprout size={42} strokeWidth={1.2} />
          <p className="eyebrow">Nothing here yet</p>
          <h2>Your cart is ready<br />for a little green.</h2>
          <Link className="button button-dark" to="/plants">Browse plants <ArrowRight size={18} /></Link>
        </section>
      ) : (
        <>
          <div className="cart-list">
            <div className="cart-list-header"><span>{totalCount} {totalCount === 1 ? 'plant' : 'plants'}</span><span>Details</span></div>
            {items.map((item) => <CartItem item={item} key={item.id} />)}
          </div>
          <section className="cart-summary">
            <div className="summary-copy">
              <p className="eyebrow">A little housework</p>
              <h2>Make space<br /><em>for good things.</em></h2>
              <p>Plants are shipped in recyclable packaging with a care card for their first week home.</p>
            </div>
            <div className="summary-panel">
              <div className="summary-row"><span>Total plants</span><strong>{totalCount}</strong></div>
              <div className="summary-row total-row"><span>Estimated total</span><strong>{formatPrice(total)}</strong></div>
              <button className="button button-dark checkout-button" type="button" onClick={() => setCheckoutMessage('Checkout is coming soon — your plants are safe in this cart.')}>Checkout <ArrowRight size={18} /></button>
              {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
              <Link className="continue-link" to="/plants">← Continue shopping</Link>
            </div>
          </section>
        </>
      )}
    </main>
  )
}

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<><Header /><ProductList /></>} />
        <Route path="/cart" element={<><Header /><CartPage /></>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="site-footer content-wrap">
        <span>Paradise Nursery © 2026</span>
        <span>Grow slowly. Live fully.</span>
      </footer>
    </div>
  )
}
