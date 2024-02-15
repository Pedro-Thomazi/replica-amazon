import { useState } from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const news = ['Chegou o Amazon Quase Novo', '+ 1 milhão de títulos para ler de graça', 'Compras Internacionais', 'Prime Video | Assista a filmes e séries']
  const [_new] = useState(news[Math.floor(Math.random() * news.length)])

  return (
    <nav id={styles.navbar}>
      <div className={styles.allDivs}>
        <div className={styles.divAll}>
          <i className="fa-solid fa-bars"></i>
          <span className='emphasis'>Todos</span>
        </div>
        <div>
          <p>Venda na Amazon</p>
        </div>
        <div>
          <p>Mais Vendidos</p>
        </div>
        <div>
          <p>Ofertas do Dia</p>
        </div>
        <div>
          <p>Prime <i className="fa-solid fa-caret-down"></i></p>
        </div>
        <div>
          <p>Livros</p>
        </div>
        <div>
          <p>Música</p>
        </div>
        <div>
          <p>Ideias de Presente</p>
        </div>
        <div>
          <p>Eletrônicos</p>
        </div>
        <div>
          <p>Novidades na Amazon</p>
        </div>
        <div>
          <p>Computadores</p>
        </div>
        <div>
          <p>Casa</p>
        </div>
        <div>
          <p>Games</p>
        </div>
      </div>
      <div className={styles.news}>{_new}</div>
    </nav>
  )
}

export default Navbar