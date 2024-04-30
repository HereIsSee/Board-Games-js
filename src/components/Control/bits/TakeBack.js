// import { useAppContext } from "../../../contexts/Context"

// const TakeBack = () => {
//     const { dispatch } = useAppContext();

//     return <div >
//         <button id="TakeBack" visible="false" onClick={() => dispatch(TakeBack())} >Take Back</button>

//     </div>
// }

// export default TakeBack
import { useAppContext } from "../../../contexts/Context"

const TakeBack = () => {
    const { dispatch } = useAppContext();
    const handleTakeBackClick = () => {
        // Dispatch the action for taking back
        dispatch({ type: 'TAKE_BACK' });
    };
    return <div>
        <button id="TakeBack" onClick={handleTakeBackClick} >Take Back</button>

    </div>
}

export default TakeBack