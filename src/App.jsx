import Banner from './components/Banner'
import Cart from './components/Cart'
import logo from './assets/logo.png'
import ShoppingList from './components/ShoppingList'

const App = () => {
    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            {/* <Cart /> */}
            <ShoppingList />
        </div>
    )
}

export default App