import styles from './Carousel.module.scss'

const Carousel = () => {
  return (
    <section id={styles.carousel}>
      <div className={styles.imagesContainer}>
        <button><i className="fa-solid fa-angle-left"></i></button>
        <button className={styles.btnRight}><i className="fa-solid fa-angle-right"></i></button>
      </div>
      <div className={styles.moreImages}>
        <div>
          <h2>Ofertas do Dia, de A a Z</h2>
          <img src="#" alt="Sem Foto" />
          <a href="/">Veja todas as ofertas</a>
        </div>
        <div>
          <h2>Ofertas só no app</h2>
          <img src="#" alt="Sem Foto" />
          <a href="/">Veja todas as ofertas</a>
        </div>
        <div>
          <h2>Veja Echo e Fire TV com Alexa</h2>
          <img src="#" alt="Sem Foto" />
          <a href="/">Veja todas as ofertas</a>
        </div>
        <div className={styles.divLogin}>
          <h2>Acesse uma conta para ter a melhor experiência</h2>
          <button className={styles.btnLogin}>Fazer login de forma segura</button>
        </div>
      </div>
    </section>
  )
}

export default Carousel