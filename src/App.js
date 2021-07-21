import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TodoApp from './components/TodoFolder/TodoApp';
import RecipeApp from './components/RecipeFolder/RecipeApp';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact />
                    <Route path="/todo-list">
                        <TodoApp />
                    </Route>
                    <Route path="/recipe">
                        <RecipeApp />
                    </Route>

                </Switch>
            </Router>
        </>
    );
}

export default App;
