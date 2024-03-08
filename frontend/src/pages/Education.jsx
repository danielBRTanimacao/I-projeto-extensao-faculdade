import React, { useRef, useState } from "react";

import OurCourses from "../assets/json/CourseList.json";

export default () => {
    const [courseSearchId, SetcourseSearchId] = useState("#item");

    const inputRef = useRef();
    const fetchCourses = () => {
        console.log(inputRef.current.value);
        console.log(OurCourses);
        return courseSearchId;
    };

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
                    <nav className="navbar">
                        <div className="container-fluid">
                            <h3 className="display-4 fs-2">
                                Cursos disponiveis
                            </h3>
                            <form
                                onSubmit={fetchCourses}
                                className="d-flex"
                                role="search"
                            >
                                <input
                                    ref={inputRef}
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Procura por um curso"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn btn-outline-primary"
                                    type="submit"
                                >
                                    Buscar
                                </button>
                            </form>
                        </div>
                    </nav>
                    <section className="pt-3">
                        <div className="bg-body-tertiary">
                            <div className="bg-light" id="#item">
                                <img src="" alt="item" />
                                <h5>item</h5>
                                <p>course</p>
                            </div>
                        </div>
                    </section>
                </section>
                <div>cursos iati</div>
                <div>Recomendações</div>
            </main>
        </>
    );
};
