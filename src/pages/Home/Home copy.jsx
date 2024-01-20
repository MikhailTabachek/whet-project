import NavBar from "../../components/NavBar/NavBar"
import { useState } from "react"

const Home = () =>{
  const [stocks, setStocks] = useState([])
  
  return(
    <>
    <NavBar />
      <main>
        <div>
        <div id="widget-root"></div>
          {/* <script type="text/javascript" src="https://watchlist-widget.finam.dev/widget/limex/v2/widget.js"></script>
          <script type="text/javascript">
            const widget = new WatchlistWidget();
            widget.mount({"containerId":"widget-root","withChart":false});
          </script> */}

        </div>
        <div className="main-left">
          <div className="widget-watchlist">
            
          </div>
          <h1>Watchlist</h1>
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Strong Sell Signals</button>
              <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Strong Buy Signals</button>
              <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Top 10 Ranking</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">Profile tab</div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">Contact tab</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home