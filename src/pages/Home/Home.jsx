import NavBar from "../../components/NavBar/NavBar"
import { useState } from "react"
import * as widget from "./script.js"

const Home = () =>{
  const [stocks, setStocks] = useState([])
  
  return(
    <>
    <NavBar />
      <main>
        <div>

          <h1>Watchlist</h1>
          <h2>test</h2>
          
          
          
        </div>

        
      </main>
    </>
  )
}

export default Home