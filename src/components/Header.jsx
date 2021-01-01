import { memo } from 'react'
import '../assets/_header.scss'

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__logo">Logo</h1>
      <h3 className="header__basket">Basket</h3>
    </div>
  )
}

export default memo(Header)
