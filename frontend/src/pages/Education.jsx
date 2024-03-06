import React from "react";

export default () => {
    return (
        <>
            <main className="container">
                <header className="navbar navbar-expand-lg">
                    <div>
                        <h2 className="fw-bold color-primary">
                            Lorem ipsum dolor sit amet.
                        </h2>
                    </div>
                    <nav className="collapse navbar-collapse">
                        <ul className="navbar-link navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Cursos grátis
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Cursos em nossa cidade
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Recomendações
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </main>
        </>
    );
};
