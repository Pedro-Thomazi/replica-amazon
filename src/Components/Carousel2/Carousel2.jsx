import { useState } from 'react'
import styles from './Carousel2.module.scss'

const Carousel2 = () => {
  const [index, setIndex] = useState(0)
  const stylesArr = [styles.margin0, styles.margin1, styles.margin2, styles.margin3]
  const [_style, set_Style] = useState(stylesArr[index])

  function nextPhotos() {
    if (index >= stylesArr.length - 1) {
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }
    set_Style(stylesArr[index])
  }

  function prevPhotos() {
    
    if (index <= 0) {
      setIndex(stylesArr.length - 1)
    }
    else {
      setIndex(index - 1)
    }
    set_Style(stylesArr[index])
  }

  return (
    <section id={styles.carousel2Container}>
      <h2>Navegue pelas categorias, de A a Z</h2>
      <button onClick={prevPhotos}><i className="fa-solid fa-angle-left"></i></button>
      <button onClick={nextPhotos} className={styles.btnRight}><i className="fa-solid fa-angle-right"></i></button>

      <div className={styles.images}>
        <div className={`${styles.firstDiv} ${_style}`}>
          <img src="#" alt="Sem Foto" />
          <p>Dispositivos Amazon</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Livros</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>eBooks</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Computadores e Informática</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Cuidados Pessoais</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Games e Consoles</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Cozinha</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Brinquedos e Jogos</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Bebês</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Papelaria e Escritório</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Alimentos e Bebidas</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Eletrônicos</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Ferramentas e Construção</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Casa</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Beleza</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Bebidas Alcoólicas</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Jardim e Piscina</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Pet Shop</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Casa Inteligente</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>CD e Vinil</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Moda</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Esportes e Aventura</p>
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
          <p>Automotivo</p>
        </div>
      </div>
    </section>
  )
}

export default Carousel2