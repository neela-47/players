const SelectedPlayer = ({player}) => {
    console.log(player)
    const[image, name] = player
    return (
        <div>
            <p>Selected image</p>
           <div>
            <div>
            <img src={player.image} alt="" />
            </div>
           </div>
        </div>
    );
};

export default SelectedPlayer;