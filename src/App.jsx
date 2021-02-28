import React, {useState, useEffect} from 'react'
import './App.css';
import NavBar from "./components/NavBar";
import {
    BrowserRouter,
    Switch,
    Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import Preloader from "./components/Preloader";
import Messages from "./pages/Messages";
import Support from "./pages/Support";

const App = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <>
            {
                !loading ?
                    <BrowserRouter basename={process.env.PUBLIC_URL}>
                        <NavBar />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/reports' component={Reports} />
                            <Route exact path='/products' component={Products} />
                            <Route exact path='/messages' component={Messages} />
                            <Route exact path='/support' component={Support} />
                        </Switch>
                    </BrowserRouter>
                    : <Preloader />
            }

        </>
    )
}

export default App;
