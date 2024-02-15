import { useState } from 'react'
import styles from './Carousel4.module.scss'

const Carousel4 = ({title}) => {
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
      <h2>{title}</h2>
      <button onClick={prevPhotos}><i className="fa-solid fa-angle-left"></i></button>
      <button onClick={nextPhotos} className={styles.btnRight}><i className="fa-solid fa-angle-right"></i></button>

      <div className={styles.images}>
        <div className={`${styles.firstDiv} ${_style}`}>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
        <div>
          <img src="#" alt="Sem Foto" />
        </div>
      </div>
    </section>
  )
}

export default Carousel4