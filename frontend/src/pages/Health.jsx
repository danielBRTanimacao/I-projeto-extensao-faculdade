import React, { useRef, useState } from "react";

import Pilar from "../assets/imgs/pilar.jpg";
import Socrates from "../assets/svgs/socrates.svg";
import Running from "../assets/svgs/running.svg";

export default () => {
    const [linkArticle, setLinkArticle] = useState("/");
    const [nameArticle, setNameArticle] = useState("Carregando...");

    const fetchArticles = () => {
        fetch("https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=5").then(
            (response) =>
                response.json().then((resData) => {
                    let listOfNames = [];
                    let listOfLinks = [];
                    for (let index = 0; index < resData.items.length; index++) {
                        listOfNames.push(resData.items[index].titulo);
                        listOfLinks.push(resData.items[index].link);
                    }
                    setNameArticle(listOfNames);
                    setLinkArticle(listOfLinks);
                })
        );
    };

    const [redultImc, setResultImc] = useState();
    const kgRef = useRef();
    const mRef = useRef();
    const calculateImc = () => {
        let imc = kgRef.current.value / (mRef.current.value / 100) ** 2;
        if (imc && imc > 0) {
            setResultImc(
                <div>
                    <h1 className="display-6 bg-success rounded-end text-light p-1">
                        Seu IMC é
                    </h1>
                    <span className="fs-3 border-5 border-start rounded-start-2 border-success p-1">
                        {imc.toFixed(1)}
                    </span>
                </div>
            );
        } else {
            setResultImc(
                <h1 className="display-6 text-danger">
                    Você digitou valores negativos ou invalidos!
                </h1>
            );
        }
    };

    return (
        <>
            <main className="container">
                <div className="p-4 p-md-5 mb-4 rounded row shadow-lg">
                    <div className="col-lg-6 px-0">
                        <h1 className="display-4 fw-bold text-success">
                            Você sabe a importancia de preservar sua saúde?
                        </h1>
                        <p className="lead my-3">
                            Por que você deveria cuidar mais da sua saúde? Onde
                            e como posso cuidar da minha saúde, tudo isso e
                            muito mais aqui!
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img
                            className="rounded-end img-fluid"
                            src="https://source.unsplash.com/random/550x315/?health"
                            alt="img"
                        />
                    </div>
                </div>

                <section className="row pt-5">
                    <div className="col-md-9 config-space">
                        <div>
                            <h1 className="display-5 text-success">
                                Saúde: o que é e como cuidar dela
                            </h1>
                        </div>
                        <div>
                            <aside>
                                Cuidar da saúde é um processo contínuo. É
                                importante fazer escolhas saudáveis todos os
                                dias, e procurar ajuda médica se necessário. Ao
                                cuidar da sua saúde, você está investindo no seu
                                bem-estar físico e mental, e está contribuindo
                                para uma vida mais longa e feliz.
                            </aside>
                            <article className="row pt-5">
                                <div className="col-md-6">
                                    <h3 className="text-success display-6">
                                        Pilares da saúde
                                    </h3>
                                    <p>
                                        A saúde é um estado de completo
                                        bem-estar físico, mental e social, e não
                                        apenas a ausência de doença ou
                                        enfermidade. É um direito fundamental de
                                        todos os seres humanos, e é essencial
                                        para o desenvolvimento pessoal e social.
                                        Existem muitos fatores que contribuem
                                        para a saúde, incluindo a alimentação, o
                                        exercício físico, o sono, o estresse, o
                                        ambiente e os relacionamentos sociais. É
                                        importante cuidar da saúde de forma
                                        holística, levando em consideração todos
                                        esses fatores.
                                    </p>
                                </div>
                                <div className="col-md-6 bg-secondary-subtle rounded p-3">
                                    <img
                                        className="img-fluid rounded"
                                        src={Pilar}
                                        alt="pilar-img"
                                    />
                                </div>
                            </article>
                            <aside className="row px-3">
                                <article className="col-md-6">
                                    <h3 className="text-success display-6">
                                        Alimentação
                                    </h3>
                                    <p className="m-1">
                                        A alimentação é um dos pilares da saúde.
                                        Uma dieta saudável deve ser rica em
                                        frutas, vegetais, legumes e grãos
                                        integrais. Também é importante limitar o
                                        consumo de alimentos processados,
                                        açúcares e gorduras saturadas.
                                    </p>
                                </article>
                                <article className="col-md-6">
                                    <h3 className="text-success display-6">
                                        Exercicio fisico
                                    </h3>
                                    <p className="m-1">
                                        O exercício físico é outro pilar da
                                        saúde. A atividade física regular ajuda
                                        a manter o peso saudável, fortalece os
                                        músculos e os ossos, melhora a
                                        circulação sanguínea e a função
                                        pulmonar, e reduz o risco de doenças
                                        crônicas, como diabetes, hipertensão e
                                        câncer.
                                    </p>
                                </article>
                            </aside>
                            <article>
                                <h3 className="text-success display-6">
                                    O sono
                                </h3>
                                <p>
                                    O sono é um terceiro pilar da saúde. Um
                                    adulto precisa de cerca de 7-8 horas de sono
                                    por noite. O sono é importante para a saúde
                                    mental e física, e ajuda a melhorar o humor,
                                    a concentração e a memória. O estresse é um
                                    quarto pilar da saúde.
                                </p>
                            </article>
                            <article>
                                <h3 className="text-success display-6">
                                    Estresse
                                </h3>
                                <p>
                                    O estresse é uma reação natural do corpo a
                                    situações desafiadoras. No entanto, o
                                    estresse crônico pode prejudicar a saúde
                                    física e mental. É importante encontrar
                                    formas de lidar com o estresse de forma
                                    saudável, como exercícios, meditação ou
                                    yoga.
                                </p>
                            </article>
                            <article>
                                <h3 className="text-success display-6">
                                    Ambiente
                                </h3>
                                <p>
                                    O ambiente é um quinto pilar da saúde. O
                                    ambiente em que vivemos pode ter um impacto
                                    significativo na nossa saúde. É importante
                                    viver em um ambiente limpo e saudável, com
                                    acesso a alimentos frescos e água potável.
                                </p>
                            </article>
                            <article>
                                <h3 className="text-success display-6">
                                    Relacionamentos sociais
                                </h3>
                                <p>
                                    Os relacionamentos sociais são um sexto
                                    pilar da saúde. Os relacionamentos sociais
                                    são importantes para a nossa saúde mental e
                                    física. Eles nos ajudam a sentir-nos
                                    conectados e apoiados, e podem nos ajudar a
                                    lidar com o estresse e a ansiedade.
                                </p>
                            </article>
                        </div>
                        <a href="https://g1.globo.com/saude/">
                            Saiba mais em outros sites...
                        </a>
                        <hr />
                    </div>
                    <article className="col-md-3" onLoad={fetchArticles}>
                        <ol className="p-3 list-unstyled border border-success-subtle shadow rounded">
                            <h3 className="text-success">Alguns artigos</h3>
                            <hr />
                            <li>
                                <a
                                    href={linkArticle[0]}
                                    className="d-flex justify-content-evenly align-items-center"
                                >
                                    <span className="text-truncate">
                                        {nameArticle[0]}
                                    </span>
                                    <img
                                        className="img-fluid rounded"
                                        src="https://source.unsplash.com/random/75x75/?random"
                                        alt="artigo-img"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={linkArticle[1]}
                                    className="d-flex justify-content-evenly align-items-center"
                                >
                                    <span className="text-truncate">
                                        {nameArticle[1]}
                                    </span>
                                    <img
                                        className="img-fluid rounded"
                                        src="https://source.unsplash.com/random/75x75/?people"
                                        alt="artigo-img"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={linkArticle[2]}
                                    className="d-flex justify-content-evenly align-items-center"
                                >
                                    <span className="text-truncate">
                                        {nameArticle[2]}
                                    </span>
                                    <img
                                        className="img-fluid rounded"
                                        src="https://source.unsplash.com/random/75x75/?day"
                                        alt="artigo-img"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={linkArticle[3]}
                                    className="d-flex justify-content-evenly align-items-center"
                                >
                                    <span className="text-truncate">
                                        {nameArticle[3]}
                                    </span>
                                    <img
                                        className="img-fluid rounded"
                                        src="https://source.unsplash.com/random/75x75/?health"
                                        alt="artigo-img"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={linkArticle[4]}
                                    className="d-flex justify-content-evenly align-items-center"
                                >
                                    <span className="text-truncate">
                                        {nameArticle[4]}
                                    </span>
                                    <img
                                        className="img-fluid rounded"
                                        src="https://source.unsplash.com/random/75x75/?healths"
                                        alt="artigo-img"
                                    />
                                </a>
                            </li>
                        </ol>
                    </article>
                </section>

                <section className="py-2">
                    <h1 className="display-4 fw-bold text-success">
                        Agora vamos fazer calculos simples como o indice de
                        massa corporea(IMC)
                    </h1>
                    <aside className="row pt-4">
                        <div className="col-md-6">
                            <small>
                                IMC é a sigla para Índice de Massa Corpórea,
                                parâmetro adotado pela Organização Mundial de
                                Saúde para calcular o peso ideal de cada pessoa.
                                O índice é calculado da seguinte maneira:
                                divide-se o peso do paciente pela sua altura
                                elevada ao quadrado. Diz-se que o indivíduo tem
                                peso normal quando o resultado do IMC está entre
                                18,5 e 24,9. Quer descobrir seu IMC? Insira seu
                                peso e sua altura nos campos e compare com os
                                índices da tabela.
                            </small>
                            <table className="table table-striped mt-3">
                                <thead className="table-success">
                                    <tr>
                                        <th>IMC</th>
                                        <th>Classificação</th>
                                        <th>Obesidade</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    <tr>
                                        <td>menor que 18,5</td>
                                        <td>Baixo Peso</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>18.5 a 24.9</td>
                                        <td>Normal</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>maior que 25</td>
                                        <td>Sobrepeso</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>30 a 34.9</td>
                                        <td>Obesidade</td>
                                        <td>I</td>
                                    </tr>
                                    <tr>
                                        <td>35 a 39.9</td>
                                        <td>Obesidade</td>
                                        <td>II</td>
                                    </tr>
                                    <tr>
                                        <td>Mais que 40</td>
                                        <td>Obesidade</td>
                                        <td>III</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6 py-2">
                            <div className="pb-4">
                                <label className="form-label" htmlFor="altura">
                                    Altura
                                </label>
                                <input
                                    ref={mRef}
                                    className="form-control"
                                    type="number"
                                    name="altura"
                                    id="altura"
                                    placeholder="Altura cm:"
                                    required
                                />
                                <label className="form-label" htmlFor="peso">
                                    Peso
                                </label>
                                <input
                                    ref={kgRef}
                                    className="form-control"
                                    type="number"
                                    name="peso"
                                    id="peso"
                                    placeholder="Peso Kg:"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="btn btn-success mt-2"
                                    onClick={calculateImc}
                                >
                                    Calcular
                                </button>
                            </div>
                            <div>{redultImc}</div>
                        </div>
                    </aside>
                </section>
                <section className="my-5 pt-2 text-center">
                    <h1 className="display-5 fw-bold text-success py-3">
                        Locais praticos para a execução de exercicios fisicos
                    </h1>
                    <div className="shadow-lg rounded div-max">
                        <img
                            src={Socrates}
                            width={350}
                            alt="img-fluid"
                            className="img-fluid rounded-circle shadow-lg pt-2"
                        />
                        <figure className="text-center py-2">
                            <blockquote className="blockquote py-3">
                                <p>
                                    ...Que desgraça é para o homem envelhecer
                                    sem nunca ver a beleza e força que o seu
                                    corpo é capaz!
                                </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Sócrates
                                <cite title="Source Title"> Pensador</cite>
                            </figcaption>
                        </figure>
                    </div>
                </section>
                <section>
                    <div className="text-success pb-3">
                        <h3 className="display-6">Localidade iati-Pe</h3>
                        <h4>Academias e locais de esporte publico</h4>
                    </div>
                    <article className="row">
                        <div className="col-md-6">
                            <h3>Academia açude</h3>
                            <iframe
                                className="ratio"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d402.2972613809833!2d-36.84441332671213!3d-9.046600438284303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1709208678981!5m2!1spt-BR!2sbr"
                                width="350"
                                height="325"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <h4>Um pouco sobre</h4>
                            <p className="fw-medium">
                                Localizada proximo ao velho açude na saida do
                                municipio esta academia é ao ar livre com o
                                intuito ligado à saúde municipal, trazendo
                                atividade física e as práticas corporais como as
                                principais ações de intervenção sobre os fatores
                                de risco de doenças e sedentarismo, para estes
                                grupos.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h3>Campo</h3>
                            <iframe
                                className="ratio"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1137.8891332933515!2d-36.84465666622215!3d-9.040068381694653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x707b16703d9dffb%3A0xde4b4cf3d3d7b607!2sCampo%20de%20Futebol!5e1!3m2!1spt-BR!2sbr!4v1709209100222!5m2!1spt-BR!2sbr"
                                width="350"
                                height="325"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <h4>Um pouco sobre</h4>
                            <p className="fw-medium">
                                Localizado na rua "R. Padre Nelson B Carvalho" o
                                campo e quadra são utilizadas para a realização
                                das inúmeras competições municipais, estaduais e
                                também para ensinamentos esportivos, através dos
                                Núcleos de Educação Esportiva.
                            </p>
                        </div>
                    </article>
                    <h4 className="text-success py-2">
                        Academias e locais de esporte privados
                    </h4>
                    <article className="row">
                        <div className="col-md-6">
                            <h3>AquaRc</h3>
                            <iframe
                                className="ratio"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7654.8100483897015!2d-36.851108041308585!3d-9.038426199999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x707b1f8168af439%3A0x8eab560c3a19e3db!2sACQUARC!5e1!3m2!1spt-BR!2sbr!4v1709209739102!5m2!1spt-BR!2sbr"
                                width="350"
                                height="325"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <h4>Um pouco sobre</h4>
                            <p className="fw-medium">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Inventore sapiente ullam quas
                                exercitationem placeat iusto nisi, doloremque
                                cumque hic illum nemo dolores accusantium
                                repellat! Impedit et eaque doloremque repellat
                                in.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h3>Academia Rf</h3>
                            <iframe
                                className="ratio"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1913.6816882128253!2d-36.85140207409857!3d-9.042344727144675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x707b116b2ed0d29%3A0xa9ad9156996d77cf!2sAcademia%20RF!5e1!3m2!1spt-BR!2sbr!4v1709210475060!5m2!1spt-BR!2sbr"
                                width="350"
                                height="325"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <h4>Um pouco sobre</h4>
                            <p className="fw-medium">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cumque a, dignissimos
                                excepturi velit eligendi odio hic quam cum quod
                                nostrum veritatis voluptates, fugiat qui. Autem
                                optio dolorem reprehenderit sequi. Aut.
                            </p>
                        </div>
                    </article>
                </section>
                <section className="pt-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-5">
                            <h1 className="display-4 text-success">
                                Por fim...
                            </h1>
                            <p>
                                Em conclusão, a saúde é um estado de bem-estar
                                físico, mental e social. É importante manter uma
                                dieta saudável, fazer exercício físico
                                regularmente e dormir o suficiente para manter
                                uma boa saúde. Se tiveres algum problema de
                                saúde, é importante consultar um médico para
                                obter tratamento... Neste site ainda temos mais
                                duas áreas a educação e um pouco sobre a gente
                                façam uma visita ;)
                            </p>
                        </div>
                        <img
                            className="col-md-6 img-fluid"
                            src={Running}
                            alt="person-run"
                        />
                    </div>
                </section>
            </main>
        </>
    );
};
