import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import {BsLinkedin} from "react-icons/bs"


export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!<a href="https://www.linkedin.com/in/vinicius-rodrigues-müller" target="_blank" rel="noopener noreferrer"><BsLinkedin size={40}></BsLinkedin></a>
                </h1>

                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Vinicius Rodrigues Müller, estudante de Análise e Desenvolvimento de Sistemas na UniRitter e estudante de Desenvolvimento FrontEnd na Alura. Aqui compartilharei vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""
                />

                <img
                    className={styles.minhaFoto}
                    src={"https://github.com/vinimllr.png"}
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            </div>
        </div>
    )
}