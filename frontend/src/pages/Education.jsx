import React from "react";

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
                                        href="#iati-courses"
                                    >
                                        Cursos em Iati
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
                <section className="pt-3">
                    <div>informações</div>
                    <div>cursos gratuitos</div>
                    <div>cursos iati</div>
                    <div>Recomendações</div>
                </section>
            </main>
        </>
    );
};
