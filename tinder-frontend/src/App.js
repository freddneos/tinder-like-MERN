import './App.css';
import Header from './components/header'
import TinderCards from './components/tinderCards'
import SwipeButtons from './components/swipeButtons'



function App() {
    return (
        <div className="app" >
            <Header />
            <TinderCards />
            <SwipeButtons />
        </div>
    );
}

export default App;