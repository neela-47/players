
const SelectedPlayer = ({selectPlayer}) => {
    console.log(selectPlayer)
    const{ image, name} = selectPlayer
    return (
        <div>
            <p>Selected image</p>
            <img src={image} alt="" />
        </div>
    );
};

export default SelectedPlayer;