import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Vinicius!
            </h3>

            <img
                src={"https://github.com/vinimllr.png"}
                alt="Foto do Vinicius"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>Oi, tudo bem? Estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Atualmente estou cursando Análise e Desenvolvimento de Sistemas na universidade UniRitter e Programação na Alura, no momento sei programar em JavaScript e estou me aperfeiçoando em React, que são ferramentas fundamentais para o desenvolvimento Front End e Web, como este site que você está lendo! Além de noções básicas em DevOps, redes, C# e .NET.
            </p>
            <p className={styles.paragrafo}>
                Além de cursar Análise e Desenvolvimento de Sistemas, busco aprimorar ainda mais minhas habilidades por meio de estudos na plataforma Alura. Lá, estou me dedicando a estudos mais focados diretamente na área de programação Web, nas stacks mencionadas, desenvolvendo projetos práticos.
            </p>
            <p className={styles.paragrafo}>
                Se você está em busca de um Desenvolvedor Front End para agregar valor à sua equipe, pode entrar em contato comigo. Estou ansioso para contribuir para o sucesso da sua empresa!
            </p>
            <p className={styles.paragrafo}>
            Construí este site em conjunto com a Alura para compartilhar os conhecimentos adquiridos durante o curso de Análise e Desenvolvimento de Sistemas. Hoje sou muito feliz de ter a oportunidade de trazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante!
            </p>
        </PostModelo>
    )
}
