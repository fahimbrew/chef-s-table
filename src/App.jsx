import Banner from './components/Banner'
import Header from './components/Header'
import Recipes from './components/Recipes'
import Sidebar from './components/Sidebar'
import OurRecipes from './OurReciepes'

function App() {
 

  return (
    <div className='container p-3 mx-auto'>
    {/* Header */}
    <Header></Header>
    {/* Banner */}
    <Banner></Banner>

    {/* Our reciepes section */}
    <OurRecipes></OurRecipes>
    {/* Recipe Card section */}
    <section className='flex'>
      {/* Recipes Cards */}
      <Recipes></Recipes>
      {/* Sidebar */}
      <Sidebar></Sidebar>
    </section>
      
      
      
    </div>
  )
}

export default App
