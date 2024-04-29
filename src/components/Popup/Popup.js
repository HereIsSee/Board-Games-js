import './Popup.css'
import { Status } from '../../constants.js'
import PromotionBox from './PromotionBox/PromotionBox.js'
import { useAppContext } from '../../contexts/Context.js'
import { closePopup } from "../../reducer/actions/popup";
import './Popup.css'
import React from 'react';

const Popup = ({children}) => {

    const { appState : {status}, dispatch } = useAppContext();

    const onClosePopup = () => {
        dispatch(closePopup())
    }

    if (status === Status.ongoing)
        return null

    return <div className="popup">
        {React.Children
            .toArray(children)
            .map (child => React.cloneElement(child, { onClosePopup }))}
    </div>
}

export default Popup