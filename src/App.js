import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import CategoryList from './components/CategoryList';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      searchText: '',
      itemUserWantDetail: {},
      category: '',
      productsCart: [],
    };
  }

  setUserInput = ({ target }) => {
    const { value } = target;
    this.setState({
      userInput: value,
    });
  }

   setSearchText = () => {
     const { userInput } = this.state;
     this.setState({
       searchText: userInput,
     });
   }

   getResultFromProductList = (item) => {
     this.setState({
       itemUserWantDetail: item,
     });
   }

   handleClick = ({ target: { id } }) => {
     this.setState({
       category: id,
     });
   }

   getProductList = (title, img, price) => {
     this.setState((oldState) => (
       { productsCart: [...oldState.productsCart, { title, img, price, quantity: 1 }] }));
   }

   render() {

     const { userInput, searchText, itemUserWantDetail, category, productsCart } = this.state;

     return (
       <div className="App">
         <div>
           <label
             htmlFor="search"
             data-testid="home-initial-message"
           >
             <input
               type="text"
               name="search"
               value={ userInput }
               data-testid="query-input"
               onChange={ this.setUserInput }
             />
             Digite algum termo de pesquisa ou escolha uma categoria.
           </label>
           <button
             type="button"
             data-testid="query-button"
             onClick={ this.setSearchText }
           >
             {' '}
             Pesquisar
             {' '}
           </button>
         </div>
         <BrowserRouter>
           <div>
             <Link
               to="/shopping-cart"
               data-testid="shopping-cart-button"
             >
               Carrinho

             </Link>
           </div>
           <CategoryList onClick={ this.handleClick } />
           <Switch>
             <Route
               exact
               path="/"
               render={
                 () => (<ProductList
                   searchText={ searchText }
                   getResultFromProductList={ this.getResultFromProductList }
                   category={ category }
                   getProductList={ this.getProductList }
                 />)
               }

             />
             <Route
               path="/product/:id"
               render={ (props) => (<ProductDetails
                 { ...props }
                 itemUserWantDetail={ itemUserWantDetail }
               />) }
             />
             <Route
               path="/shopping-cart"
               render={ () => <ShoppingCart /> }
             />
             <Route
               path="/shopping-cart"
               render={ () => <ShoppingCart productsCart={ productsCart } /> }
             />

           </Switch>
         </BrowserRouter>
       </div>
     );
   }
}

export default App;
