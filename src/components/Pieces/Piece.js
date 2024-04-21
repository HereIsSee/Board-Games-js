import arbiter from '../../arbiter/arbiter';
import {useAppContext} from '../../contexts/Context'
import { generateCandidateMoves } from '../../reducer/actions/move';
const Piece = ({
    rank,
    file,
    piece,
}) => {

    const {appState, dispatch} = useAppContext()
    const {turn, castleDirection, position : currentPosition}=appState;
    

    const getMoves = () => {
        const moves = []
        const us = piece[0]
        const enemy = us === 'w' ? 'b' : 'w'

        const direction = [
            [-1,0],
            [1,0],
            [0,-1],
            [0,1],
        ]

        direction.forEach(dir => {
            for (let i = 1; i < 8; i++) {
                const x = rank + (i*dir[0])
                const y = file + (i*dir[1])
                if (currentPosition?.[x]?.[y] === undefined)
                    break
                if (currentPosition[x][y].startsWith(enemy)){
                    moves.push([x,y])
                    break
                }
                if (currentPosition[x][y].startsWith(us))
                    break

                moves.push([x,y])
            }
        })

        return moves
    }


    const onDragStart = e => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain",`${piece},${rank},${file}`)
        setTimeout(() => {
            e.target.style.display = 'none'
        },0)
        if (turn === piece[0]){
            const candidateMoves = arbiter.getValidMoves({
                position:currentPosition[currentPosition.length - 1], 
                prevPosition : currentPosition[currentPosition-2],
                castleDirection : castleDirection[turn],
                piece, 
                rank, 
                file})
            dispatch(generateCandidateMoves({candidateMoves}))
        }
    }
    const onDragEnd = e => {
       e.target.style.display = 'block'
     }
 
    return (
        <div 
            className={`piece ${piece} p-${file}${rank}`}
            draggable={true}   
            onDragStart={onDragStart} 
            onDragEnd={onDragEnd}

        />)
}

export default Piece