
import Header from "../src/components/Header/Heade"
import HomePage from "../src/pages/HomePage/HomePage"
import Footer from "../src/components/Footer/Footer"
import { RouterProvider } from "react-router-dom"
import router from "./router"


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
