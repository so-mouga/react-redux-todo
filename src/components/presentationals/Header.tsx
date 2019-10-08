import React from 'react'
import "./Header.css"
import TextInputContainer from "../containers/AddTodoContainer"

interface Props {
  
}

export const Header: React.FC<Props> = () => {
  return (
    <div className="header_app">
      <TextInputContainer />
    </div>
  )
}

export default Header;