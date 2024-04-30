import './Popup.css'
import React from 'react'
import { Status } from '../../constants.js'
import { useAppContext } from '../../contexts/Context.js'
import { closePopup } from "../../reducer/actions/popup"
const Popup = ({children}) =>{
    const {appState, dispatch} = useAppContext()
    const onClosePopup = () => {
        dispatch(closePopup())
    }
    if(appState.status === Status.ongoing){
        return null;



     
    }
    return <div className='popup'>
        {React.Children
        .toArray(children)
        .map(child => React.cloneElement(child, {onClosePopup}))}


        
    </div>
}

export default Popup