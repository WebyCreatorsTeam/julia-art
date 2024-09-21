import React from 'react'
import "@/app/(dashboard)/_style/_ui/popup/_popup.scss";
import Close from '../Components/NavBar/Close';

const Popup = ({ children, closeAction }: { children: React.ReactNode, closeAction: React.MouseEventHandler }) => {
  return (
    <div className="popup">
      <div className="popup__window">
        <button className="popup__window--closeBtn" onClick={closeAction}><Close /></button>
        {children}
      </div>
    </div>
  )
}

export default Popup