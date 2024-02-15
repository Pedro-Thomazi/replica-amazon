import styles from './Header.module.scss'

// Images
import logo1 from '../../Images/logoAmazon1.png'
import { useState } from 'react';

const Header = () => {
  const [bordaAtiva, setBordaAtiva] = useState(false);

  // Manipulador de evento para quando o input filho estiver focado
  function handleFocus() {
    setBordaAtiva(true)
  }

  // Manipulador de evento para quando o input filho perder o foco
  function handleBlur() {
    setBordaAtiva(false)
  }

  return (
    <header id={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo1} alt="amazon.com logo" />
      </div>

      <div className={styles.localizationCEP}>
        <p>A entrega será feita em São Paulo 01000000</p>
        <p className={styles.icon}><i className="fa-solid fa-location-dot"></i> <span className='emphasis'>Atualizar local</span></p>
      </div>

      <div className={`${styles.searchContainer} ${bordaAtiva ? styles.addBorder : ''}`}>
        <button className={styles.btnAll}>Todos <i className="fa-solid fa-caret-down"></i></button>
        <input onFocus={handleFocus} onBlur={handleBlur} type="text" placeholder='Pesquisa Amazon.com' />
        <button className={styles.btnSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>

      <div className={styles.cardContainer}>
        <p>Olá, faça seu login <br />
          <span className='emphasis'>Contas e Listas <i className="fa-solid fa-caret-down"></i></span>
        </p>
        <p>Devoluções <br />
          <span className='emphasis'>e Pedidos</span>
        </p>
        <p className={styles.iconCart}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span className={styles.qtyProductsInCart}>0</span>
          <span className='emphasis'>Carrinho</span>
        </p>
      </div>
    </header>
  )
}

export default Header