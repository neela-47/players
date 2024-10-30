import { useState } from "react";
import AvailablePlayers from "./Componentss/available-selected/AvailablePlayers";
import NavBar from "./Componentss/Navbar/NavBar";
import AllPlayers from "./Componentss/AllPlayers/AllPlayers";
import Modal from "./Componentss/Navbar/Modal";
import Footer from "./Componentss/Footer/Footer";
import SelectedPlayers from "./Componentss/SelectedPlayer/Selectedplayers";


const App = () => {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "available"
  })

const [coin, setCoins] = useState(0)
const [selectPlayer, setSelectPlayer] = useState([])

  const handleIsActive = (status) =>{
    if(status === "available"){
      setIsActive({
        cart: true,
    status: "available",
      })
    }else{
      setIsActive({
        cart: false,
    status: "selected",
      })
    }

  }

  const handleCoin = ()=>{
    
      setCoins(coin + 123456000)
      alert('Credit Added to Your Account')
  }

  const handleSelectedPlayer = (player) =>{
    const isExist = selectPlayer.find(prevPlayer => prevPlayer.id === player.id)
     if(!isExist){
      const newSelectedPlayer = [...selectPlayer, player];
      setSelectPlayer(newSelectedPlayer)
      
     }else{
      alert('player exist already .')
     }
  }

  return (
    <div>
      <NavBar handleCoin= {handleCoin} coin={coin}></NavBar>
      <Modal></Modal>
      <AvailablePlayers handleIsActive={handleIsActive} 
      selectPlayer={selectPlayer}
     isActive={isActive}
></AvailablePlayers >
<AllPlayers handleSelectedPlayer={handleSelectedPlayer} selectPlayer={selectPlayer}></AllPlayers>

<SelectedPlayers selectPlayer={selectPlayer} ></SelectedPlayers>
<Footer></Footer>
    </div>
  );
};

export default App;