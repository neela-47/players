import SelectedPlayer from './SelectedPlayer';

const SelectedPlayers = ({selectPlayer}) => {
    return (
        <div>
            <div>
                {
                    selectPlayer.map((player) => <SelectedPlayer key={player.id}
                    player = {player}
                    ></SelectedPlayer>)
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;