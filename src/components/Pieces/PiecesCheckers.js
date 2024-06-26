import './Pieces.css'
import PieceCheckers from './PieceCheckers'
import { useRef  } from 'react'
import { useAppContext }from '../../contexts/Context'
import {getnewMoveNotation} from '../../helper'
import { makeNewMove, clearCandidates } from '../../reducer/actions/move'
import arbiter from '../../arbiter/arbiter'

const PiecesCheckers = () => {

    const { appState , dispatch } = useAppContext();
    const currentPosition = appState.position[appState.position.length-1]

    const ref = useRef()

    const calculateCoords = e => {
        const {top,left,width} = ref.current.getBoundingClientRect()
        const size = width / 8
        const y = Math.floor((e.clientX - left) / size) 
        const x = 7 - Math.floor((e.clientY - top) / size)

        return {x,y}
    }

    const move = e => {
        const {x,y} = calculateCoords(e)
        const [piece,rank,file] = e.dataTransfer.getData("text").split(',')

        if(appState.candidateMoves.find(m => m[0] === x && m[1] === y)){
            const opponent = piece.startsWith('b') ? 'w' : 'b'
            

            // if ((piece==='wp' && x === 7) || (piece==='bp' && x === 0)){
            //     //openPromotionBox({rank,file,x,y})
            //     return
            // }
            const newPosition = arbiter.performCheckersMove({
                position:currentPosition,
                piece,rank,file,
                x,y
            })
            const newMove = getnewMoveNotation({
                piece,rank,file,x,y,position : currentPosition
            })
           
            
            dispatch(makeNewMove({newPosition, newMove}))
            
            

        }
        dispatch(clearCandidates())
    }

    const onDrop = e => {
        e.preventDefault()
        
        move (e)
    }
    
    const onDragOver = e => {e.preventDefault()}

    return <div 
        className='pieces' 
        ref={ref} 
        onDrop={onDrop} 
        onDragOver={onDragOver} > 
        {currentPosition.map((r,rank) => 
            r.map((f,file) => 
                currentPosition[rank][file]
                ?   <PieceCheckers 
                        key={rank+'-'+file} 
                        rank = {rank}
                        file = {file}
                        piece = {currentPosition[rank][file]}
                    />
                :   null
            )   
        )}
    </div>
}

export default PiecesCheckers