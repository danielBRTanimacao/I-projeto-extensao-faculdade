import React from "react";

import MccLogo from "../assets/icons/logo.svg";
import Git from "../assets/icons/git.svg";
import Book from "../assets/icons/book.svg";
import Insta from "../assets/icons/insta.svg";

export default () => {
    return (
        <>
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a
                        href="/"
                        className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
                    >
                        <img src={MccLogo} alt="logo-mcc" />
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">
                        © 2024
                    </span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a
                            className="text-body-secondary"
                            href="https://github.com/danielBRTanimacao"
                        >
                            <img src={Git} alt="git" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a
                            className="text-body-secondary"
                            href="https://www.instagram.com/mcc_iatisaopauloap/"
                        >
                            <img src={Insta} alt="insta" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a
                            className="text-body-secondary"
                            href="https://www.unopar.com.br"
                        >
                            <img src={Book} alt="book" />
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
};
