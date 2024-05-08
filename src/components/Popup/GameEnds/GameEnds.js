import { useAppContext } from '../../../contexts/Context'

import { clearCandidates, makeNewMove } from '../../../reducer/actions/move'

import { copyPosition } from '../../../helper.js'
import './GameEnds.css'
import { Status } from '../../../constants.js'
import { setupNewGame } from '../../../reducer/actions/game.js'

const GameEnds = ( {onClosePopup}) => {
    // const options = ['q','r','b','n']
    
    const { appState : {status}, dispatch } = useAppContext();

    if (status === Status.ongoing || status === Status.promoting)
        return null

    const isWin = status.endsWith('wins')
    
    const newGame = () => {
        dispatch(setupNewGame())
    }

    return <div className="popup--inner popup--inner_center">
        <h1>{isWin ? status : 'Draw'}</h1>   
        <p>{!isWin && status}</p>  
        <div className={status}></div>
        <h2>{"Click Go Back for new game"}</h2> 

        </div>
}

export default GameEnds