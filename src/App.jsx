import Banner from './components/Banner'
import Cart from './components/Cart'
import Footer from './components/Footer'
import ShoppingList from './components/ShoppingList'
import logo from './assets/logo.png'
import './styles/Layout.css'


const App = () => {
    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart />
                <ShoppingList />
            </div>
            <Footer />
        </div>
    )
}

export default App