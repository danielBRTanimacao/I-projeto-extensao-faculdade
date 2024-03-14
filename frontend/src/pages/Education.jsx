import React from "react";
import CoursesPage from "../components/CoursesPage";

import CursoEmVideoImg from "../assets/svgs/thumbs/CursoEmVideo.svg";
import JoaoRibeiro from "../assets/svgs/thumbs/JoaoRibeiro.svg";
import DevDojo from "../assets/svgs/thumbs/DevDoja.svg";
import CityImg from "../assets/imgs/iati.jpg";
import Completed from "../assets/svgs/completed.svg";

export default () => {
    return (
        <>
            <main className="container">
                <nav className="navbar sticky-top bg-body-tertiary navbar-expand-md color-primary shadow">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            links rapidos...
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav navbar-link">
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="#free-course"
                                    >
                                        Cursos grátis
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#city-courses"
                                    >
                                        Cursos na cidade
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#recomendation"
                                    >
                                        Recomendações
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section className="pt-4">
                    <article className="row">
                        <div className="col-md-7 d-flex align-items-center">
                            <div>
                                <h1 className="display-4 color-primary">
                                    Educação em nosso municipio.
                                    <span className="text-body-secondary">
                                        {" "}
                                        Iati-Pe
                                    </span>
                                </h1>
                                <p className="lead">
                                    Em Iati Pernambuco existem vários cursos,
                                    tanto gratuitos quanto privados. Porém,
                                    neste artigo não iremos abordar apenas
                                    cursos locais, mas sim cursos onlines de
                                    diversas áreas, todavia as principais serão
                                    tecnologia.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <iframe
                                className="ratio"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11144.64681882881!2d-36.85337971129714!3d-9.04298546977843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x707b16040b6eb6f%3A0x8c0d787d15d4dd53!2sIati%2C%20PE%2C%2055345-000!5e0!3m2!1spt-BR!2sbr!4v1709900655677!5m2!1spt-BR!2sbr"
                                height="450"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </article>
                </section>
                <section className="py-5">
                    <hr />
                    <section className="text-center py-2" id="free-course">
                        <article className="py-5">
                            <h1 className="display-4 fw-bold color-primary">
                                Canais e Cursos Tecnologia
                            </h1>
                            <div className="rounded p-2 row d-flex justify-content-center">
                                <CoursesPage
                                    course_name={"Curso em vídeo"}
                                    link_course={"https://www.cursoemvideo.com"}
                                    img_course={CursoEmVideoImg}
                                />
                                <CoursesPage
                                    course_name={"joão Ribeiro"}
                                    link_course={
                                        "https://www.youtube.com/@JLDRPT"
                                    }
                                    img_course={JoaoRibeiro}
                                />
                                <CoursesPage
                                    course_name={"DevDojo"}
                                    link_course={
                                        "https://www.youtube.com/@DevDojoBrasil"
                                    }
                                    img_course={DevDojo}
                                />
                                <CoursesPage
                                    course_name="Otavio Miranda"
                                    link_course="https://www.youtube.com/@OtavioMiranda"
                                    img_course="https://i.ytimg.com/vi/UNiRHn2iusg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCM5uRkzZpNZGfl5As2JJ1K-klvaQ"
                                />
                                <CoursesPage
                                    course_name={"Programação Dinamica"}
                                    link_course={
                                        "https://www.youtube.com/@pgdinamica/playlists"
                                    }
                                    img_course="https://yt3.googleusercontent.com/ytc/AIdro_kDwiRr4aHmcN0FIakbBH1rrKr_xcgkCSsFuGIF=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name={"Fabio Akita"}
                                    link_course={
                                        "https://www.youtube.com/@Akitando"
                                    }
                                    img_course="https://yt3.googleusercontent.com/ytc/AIdro_n55sOFHByv5ViFdq81qYB4FzivrH7BonFqhkKyD6w=s176-c-k-c0x00ffffff-no-rj"
                                />
                            </div>
                        </article>
                        <article className="py-5">
                            <h1 className="display-4 fw-bold color-primary">
                                Cursos arte, design e musica
                            </h1>
                            <div className="rounded p-2 row d-flex justify-content-center">
                                <CoursesPage
                                    course_name={"Desenho Mestre"}
                                    link_course={
                                        "https://www.youtube.com/@DesenhoMestre"
                                    }
                                    img_course="https://yt3.googleusercontent.com/N2T6rTdb3W9BRfZxFd8ZZ452y9rZx5BMFbHk1Hwc81yoys8utiLG3dvX8WAVhCF6XgjYe1wHneE=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name={"Cezar Romero Cifras"}
                                    link_course={
                                        "https://www.youtube.com/@cezarromero/videos"
                                    }
                                    img_course="https://yt3.googleusercontent.com/Ajz1V1TeaYTcoqEKIljNSdbeVfZf43n-U50uxUGGzrRyT_6wtVOY-HWznzL_H1g3w-7pVl_VcO8=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name={"CrasConversaOficial"}
                                    link_course={
                                        "https://www.youtube.com/@CrasConversaOficial"
                                    }
                                    img_course="https://yt3.googleusercontent.com/3-3QmX9gPX3vWjKJ_ni4ccrsuMqJUG2KXuxMEiSoNEoMIl44IPNHXdKosnSrB0iFguVDBTOS=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name="Eli Neves"
                                    link_course="https://www.youtube.com/@EliNeves/playlists"
                                    img_course="https://yt3.googleusercontent.com/ytc/AIdro_kt2AMROfItn-L1LoRraT-3L7fiMPpHuIq6j2V2TQ=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name={"Design de Conversão"}
                                    link_course={
                                        "https://www.youtube.com/@DesigndeConversao/featured"
                                    }
                                    img_course="https://yt3.googleusercontent.com/-3WZ1elrAl2QOAwi2uLRksxgbwPYtEXwVpF9KvlxwN6w_s6dmeLKGFwFQaFrCCPTdQAXDj1ubQ=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name={"Q28a™ // Graphic Design"}
                                    link_course={
                                        "https://www.youtube.com/@Q28a/playlists"
                                    }
                                    img_course="https://yt3.googleusercontent.com/pTUm7qWjqJVwhFRMjSmBxWbDD_1eMxPKzW2b_Ke-CfaIpfIqstlNWaawolMa2yisp92gOe2kFnQ=s176-c-k-c0x00ffffff-no-rj"
                                />
                            </div>
                        </article>
                        <article className="py-5">
                            <h1 className="display-4 fw-bold color-primary">
                                Cursos de linguagens
                            </h1>
                            <div className="rounded p-2 row d-flex justify-content-center">
                                <CoursesPage
                                    course_name="EnglishBay"
                                    link_course="https://www.youtube.com/@EnglishBay/videos"
                                    img_course="https://yt3.googleusercontent.com/ytc/AIdro_nph66qnIp5J0CLA-tCaDmOgsBVo_Lws8tsuAks2A=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name="Academia de Libras"
                                    link_course="https://www.youtube.com/@AcademiadeLibras/videos"
                                    img_course="https://yt3.googleusercontent.com/4yq3DKOthIItZ0nKz7rcG5n73vbRmDHdS95wPfBiA8-GazRiJod7odimEgK_VdAp_uJ30TxJhQw=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name="Irmão Alemão"
                                    link_course="https://www.youtube.com/@IrmaoAlemao/videos"
                                    img_course="https://yt3.googleusercontent.com/ytc/AIdro_kRV7Vapm8U_20DrzvA1V7cGDuYxW8-UCcwyiLA=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name="Flavia Penereiro"
                                    link_course="https://www.youtube.com/@FlaviaPenereiro/videos"
                                    img_course="https://yt3.googleusercontent.com/ytc/AIdro_kWmTF4d35xOy1ksvGYKih68OQaYk5h_Nu3S2gfnQ=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name="Vem a mim língua russa"
                                    link_course="https://www.youtube.com/@vemamimlinguarussa"
                                    img_course="https://yt3.googleusercontent.com/ZzjnUMH3Jaj4ZdmueYDM46qR-ZGehECAxhZx1lWPRDY5BUptsWKGIBiZrV-iZXx0e2vMtFYAM5c=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name="Programa Japonês Online"
                                    link_course="https://www.youtube.com/@aulasjapones"
                                    img_course="https://yt3.googleusercontent.com/00zNmHXJGSc7q1jKrNdW2oRO-wCd5GECDMV7p5QEBqdxpUu2663Y0J1-LhDPQgpjTX-i05zyAg=s176-c-k-c0x00ffffff-no-rj"
                                />
                            </div>
                        </article>
                        <article className="py-5">
                            <h1 className="display-4 fw-bold color-primary">
                                Cursos de Tecnicos
                            </h1>
                            <div className="rounded p-2 row d-flex justify-content-center">
                                <CoursesPage
                                    course_name="Conhecimento Aplicado - Automotivo"
                                    link_course="https://www.youtube.com/@ConhecimentoAplicado"
                                    img_course="https://yt3.googleusercontent.com/vLE4fZLYgolCl-zP0NQ_D_gKh94lClSvvy5TY6UVGxz3vFQXGOZcqF_-FK1PpsdUw5E96lZETA=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name="
                                    Dicas Flash - Cortes Engehall"
                                    link_course="https://www.youtube.com/@dicasflash-cortesengehall7488"
                                    img_course="https://yt3.googleusercontent.com/ytc/AIdro_nRyyTmVJ62HcR_yFwsqJHoXqjifZZED7c4DkoM=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name="Reinaldo Lisa"
                                    link_course="https://www.youtube.com/@reinaldolisa4711"
                                    img_course="https://yt3.googleusercontent.com/9rlWRJBt0NHcohgMXcgRwtDrhynahSfaN_54HOLy6sTHC17d05qJrAtt6-M10zVgKyJKnbHi6No=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name="Professor Eduardo Moreira"
                                    link_course="https://www.youtube.com/@ProfessorEduardoMoreira"
                                    img_course="https://yt3.googleusercontent.com/l_Pk-A55bkvT1zXt8mSaoPimyLaNbTW_OhTQW6plkvI37U1JkjL3iJKFiwJnm0PgioOB-OocoQ=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name="AgroBrasil"
                                    link_course="https://www.youtube.com/@AgroBrasil"
                                    img_course="https://yt3.googleusercontent.com/LgmP8DPnlg8ifewkhpRpQh0LZUf8NBBsZ_VrCv5bHJMLh0XiqcJTnxiQDv9bwN2ss_wY-diq=s176-c-k-c0x00ffffff-no-rj"
                                />
                                <CoursesPage
                                    course_name="Chef Du Gastronomia"
                                    link_course="https://www.youtube.com/@chefdugastronomia8197/videos"
                                    img_course="https://yt3.googleusercontent.com/hQFqxADzrvf0UlCZ7DsdHg825NOBBZ7tGMOfa6rRWSjlmtxmYqm7Ja0lXvWGtnhfzSvjcoNcM5I=s176-c-k-c0x00ffffff-no-rj"
                                />
                            </div>
                        </article>
                    </section>
                </section>
                <section className="pt-5">
                    <aside className="row">
                        <div className="col-md-7">
                            <img
                                className="img-fluid"
                                src={CityImg}
                                alt="img-city"
                            />
                        </div>
                        <div className="col-md-4">
                            <h1 className="display-4">
                                Agora em nossa cidade
                                <span className="text-body-secondary">
                                    {" "}
                                    Iati-pe
                                </span>
                            </h1>
                        </div>
                    </aside>
                    <hr />
                    <article className="row mt-5" id="city-courses">
                        <div className="col-md-3">
                            <div>
                                <h3>PRINT INFORMÁTICA CURSOS</h3>
                            </div>
                            <div>
                                <iframe
                                    className="ratio"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.101802340633!2d-36.84602623047547!3d-9.045183936221415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x707b1600ccd53f5%3A0xd2ad6e20e7712a35!2sPRINT%20INFORM%C3%81TICA%20CURSOS!5e0!3m2!1spt-BR!2sbr!4v1710278330493!5m2!1spt-BR!2sbr"
                                    height="350"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <h3>INTEL MAX TREINAMENTOS</h3>
                            </div>
                            <div>
                                <iframe
                                    className="ratio"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7880.400455358298!2d-36.8592020064209!3d-9.045492399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x707b10da5f84fcb%3A0x69221967fb31306f!2sINTELMAX%20TREINAMENTOS%20E%20SERVI%C3%87OS!5e0!3m2!1spt-BR!2sbr!4v1710364239668!5m2!1spt-BR!2sbr"
                                    height="350"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <h3>GALERIA DIVERSOS CURSOS DISPONIVEIS</h3>
                            </div>
                            <div>
                                <iframe
                                    className="ratio"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.5361420406373!2d-36.84708814719745!3d-9.045199433056764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x707b15fe715b145%3A0xb01653eeeddae075!2sAv.%20Fab%20Manoel%20Tenorio%20Alves%2C%20186%20-%20Centro%2C%20Iati%20-%20PE%2C%2055345-000!5e0!3m2!1spt-BR!2sbr!4v1710364453544!5m2!1spt-BR!2sbr"
                                    height="350"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <h3>UNICESUMAR SUPERIOR IATI-PE</h3>
                            </div>
                            <div>
                                <iframe
                                    className="ratio"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2198349218006!2d-36.851605921983705!3d-9.043701280081097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x707b19bb53f2433%3A0x506422f8a0219fe!2sUniCesumar%20Iati!5e0!3m2!1spt-BR!2sbr!4v1710364714657!5m2!1spt-BR!2sbr"
                                    height="350"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </article>
                </section>
                <div className="row pt-5" id="recomendation">
                    <div className="col-md-6">
                        <h2 className="display-4 fw-bold">
                            Recomendações e palavras finais
                            <span>👋</span>
                        </h2>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Possimus enim delectus, numquam iste
                            asperiores cum suscipit reprehenderit quis ex
                            temporibus autem tenetur consequatur necessitatibus
                            alias provident facere aperiam officiis sed!
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            className="img-fluid"
                            width={400}
                            src={Completed}
                            alt="img"
                        />
                    </div>
                    <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Delectus, nisi. Nobis accusamus illo rem
                        molestias, aperiam, ab sunt repudiandae voluptates
                        cupiditate nesciunt veritatis modi adipisci in nulla
                        mollitia temporibus. At?
                    </p>
                </div>
            </main>
        </>
    );
};
