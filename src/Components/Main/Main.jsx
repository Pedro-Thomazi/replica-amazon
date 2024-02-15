import Carousel from '../Carousel/Carousel'
import Carousel2 from '../Carousel2/Carousel2'
import Carousel3 from '../Carousel3/Carousel3'
import Carousel4 from '../Carousel4/Carousel4'
import Carousel5 from '../Carousel5/Carousel5'
import styles from './Main.module.scss'

const Main = () => {
  return (
    <main id={styles.main}>
      <Carousel />
      <Carousel2 />
      <Carousel3 />
      <Carousel4 title={'Mais Vendidos em Eletrônicos'} />
      <Carousel5 />
      <Carousel4 title={'Mais Vendidos em Games e Consoles'} />
      <Carousel4 title={'Mais Vendidos em Computadores e Informática'} />
    </main>
  )
}

export default Main