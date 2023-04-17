import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

// BUGS IDENTIFIED ARE
// 1. HEADER IS PLACE INSIDE SWITCH PLACE OUTSIDE TO ENSURE NO BUG
// 2. NOT FOUND IS PLACE AT THE FIRST OF THE SWITCH COMPONENT
// 3. PATH ABOUT(abou) IS MISSPELLED MAKE SURE THAT
// 4. COMPONENT WHICH NEEDS TO BE RENDERED ARE NOT ASSIGNED RESPECTIVELY TO THE RESPECTIVE PATH FOR PATH '/contact'  Home COMPONENT IS ASSIGNED and path '/' Contact is assigned [2 bugs].
// 5. FOR ROUTE path '/blogs/id' while passing params colon ":" is missed.
// 6. Switch component not imported from react-router-dom.
const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/blogs/:id" component={BlogItemDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
