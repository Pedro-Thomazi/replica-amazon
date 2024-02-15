import styles from './Footer.module.scss'

import logo2 from '../../Images/logoAmazon2.png'

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <section className={styles.login}>
        <div>
          <p>Veja recomendações personalizadas</p>
          <a className={styles.btnLogin} href="/">Faça seu login</a>
          <p>Cliente novo? <a href="/">Começe aqui</a></p>
        </div>
      </section>
      <a href='/' className={styles.btnTop}>Voltar ao início</a>
      <section className={styles.informations}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div>
              <h3>Conheça-nos</h3>
              <p>Sobre a Amazon</p>
              <p>Informações corporativas</p>
              <p>Carreiras</p>
              <p>Comunicados à imprensa</p>
              <p>Comunidade</p>
              <p>Acessibilidade</p>
              <p>Amazon Science</p>
            </div>
            <div>
              <h3>Ganhe dinheiro conosco</h3>
              <p>Venda na Amazon</p>
              <p>Proteja e construa a sua marca</p>
              <p>Publique seus livros</p>
              <p>Seja um associado</p>
              <p>Anuncie seus produtos</p>
            </div>
            <div>
              <h3>Pagamento</h3>
              <p>Meios de Pagamento</p>
              <p>Compre com Pontos</p>
              <p>Cartão de Crédito</p>
            </div>
            <div>
              <h3>Deixe-nos ajudar você</h3>
              <p>Sua conta</p>
              <p>Frete e prazo de entrega</p>
              <p>devoluçoes e reembolsos</p>
              <p>Gerencie seu conteúdo e dispositivos</p>
              <p>Ajuda</p>
            </div>
          </div>

          <hr />

          <div className={styles.secondContent}>
            <img src={logo2} alt="Amazon logo" />
            <div>
              <p>Austráli |</p>
              <p>Alemanha |</p>
              <p>Canadá |</p>
              <p>China |</p>
              <p>Cingapura |</p>
              <p>Espanha |</p>
              <p>Estados Unidos |</p>
              <p>França |</p>
              <p>Holanda |</p>
              <p>Índia |</p>
              <p>Japão |</p>
              <p>México |</p>
              <p>Polôna |</p>
              <p>Emirados Árabes Unidos |</p>
              <p>Reino Unido |</p>
              <p>Turquia</p>
            </div>
            <p className={styles.martop}>E não se esqueça: </p>
            <p>Amazon Web Services</p>
          </div>
        </div>
      </section>
      <section className={styles.localizations}>
        <div>
          <p>Condição de Uso |</p>
          <p>Notificação de Privacidade |</p>
          <p>Cookies |</p>
          <p>Anúncios Baseados em Interesses </p>
        </div>
        <p>&copy; 2021-2024 Amazon.com, Inc. ou suas afiliadas</p>

        <p>Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03</p>
        <p>Av. Juscelino Kubitschek, 2041, Torre E, 18° andar - São Paulo CEP: 04543-011| <a href="/">Fale conosco</a> | ajuda-amazon@amazon.com.br</p>
        <p>Formas de pagamento aceitas: cartões de crédito (Visa, MasterCard, Elo e American Express), cartões de débito (Visa e Elo), Boleto e Pix.</p>
      </section>
    </footer>
  )
}

export default Footer