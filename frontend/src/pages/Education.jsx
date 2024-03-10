import React from "react";
import CoursesPage from "../components/CoursesPage";

import CursoEmVideoImg from "../assets/svgs/thumbs/CursoEmVideo.svg";
import JoaoRibeiro from "../assets/svgs/thumbs/JoaoRibeiro.svg";
import DevDojo from "../assets/svgs/thumbs/DevDoja.svg";

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
                <section className="pt-5">
                    <hr />
                    <section className="text-center py-2" id="free-course">
                        <article className="pt-3">
                            <h1 className="display-4 fw-bold color-primary">
                                Cursos Tecnologia Gratuitos
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
                                />
                            </div>
                        </article>
                        <article className="pt-3">
                            <h1 className="display-4 fw-bold color-primary">
                                Cursos Lorem ipsum dolor sit amet
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
                                <CoursesPage />
                            </div>
                        </article>
                    </section>
                </section>
                <div>cursos iati</div>
                <div>Recomendações</div>
            </main>
        </>
    );
};
