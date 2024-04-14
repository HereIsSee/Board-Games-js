import './Popup.css'
import { Status } from '../../constants.js'
import PromotionBox from './PromotionBox/PromotionBox.js'
import { useAppContext } from '../../contexts/Context.js'
import { closePopup } from "../../reducer/actions/popup"
const Popup = () =>{
    const {appState, dispatch} = useAppContext()
    if(appState.status === Status.ongoing)
        return null;



     const onClosePopup = () => {
        dispatch(closePopup())
    }
    return <div className='popup'>
        


        <PromotionBox onClosePopup={onClosePopup} dispatch={dispatch}/>
    </div>
}

export default Popup