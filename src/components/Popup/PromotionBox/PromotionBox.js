import { useAppContext } from '../../../contexts/Context'

import { clearCandidates, makeNewMove } from '../../../reducer/actions/move'

import { copyPosition } from '../../../helper.js'
import './PromotionBox.css'

const PromotionBox = ( {onClosePopup, dispatch}) => {
    const options = ['q','r','b','n']
    
    const { appState } = useAppContext()
    const { promotionSquare } = appState

    if(!promotionSquare)
        return null

    const color = promotionSquare.x === 7 ? 'w' : 'b'

    const getPromotionBoxPosition = () =>{
        const style ={}

        if(promotionSquare.x === 7)
            style.top = '40%'
        else
            style.top = '40%'


        if(promotionSquare.y <= 1)
            style.left = '-60%'
        else if(promotionSquare.y >= 6)
            style.left = '-60%'
        else
            style.left = '-60%'
        return style
    }
    const onClick = option => {
        onClosePopup()
        const newPosition = copyPosition(appState.position[appState.position.length -1])
        newPosition[promotionSquare.x][promotionSquare.y] = color + option
        dispatch(clearCandidates())
        dispatch(makeNewMove({newPosition}))
    }
    return <div className='popup-inner promotion-choices' style={getPromotionBoxPosition()}>
        {options.map(option =>
            <div key={option}
                className={`piece ${color}${option}`}
                onClick={() => onClick(option)}>

                </div>)}
                
            </div>
}

export default PromotionBox