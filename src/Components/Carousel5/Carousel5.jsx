import styles from './Carousel5.module.scss'

const Carousel = () => {
  return (
    <section id={styles.carousel}>
      <div className={styles.moreImages}>
        <div>
          <h2>Móveis para Casa</h2>
          <img src="#" alt="Sem Foto" />
          <a href="/">Veja mais em Móveis</a>
        </div>
        <div>
          <h2>Loja de Jardim</h2>
          <img src="#" alt="Sem Foto" />
          <a href="/">Veja mais em Jardim</a>
        </div>
        <div>
          <h2>Mais vendidos em Proteção e Segurança</h2>
          <img src="#" alt="Sem Foto" />
          <a href="/">Veja mais em Proteção e Segurança</a>
        </div>
        <div>
          <h2>Brincadeira ao Ar Livro</h2>
          <img src="#" alt="Sem Foto" />
          <a href="/">Veja mais em Brinquedos</a>
        </div>
      </div>
    </section>
  )
}

export default Carousel