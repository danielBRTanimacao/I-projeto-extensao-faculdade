import React from "react";
import { useState } from "react";

import Health from "./pages/Health";
import About from "./pages/About";

export default () => {
    const [renderAreaClicked, setRenderAreaClicked] = useState(<Health />);
    const [textArea, setTextArea] = useState(
        "É importante cuidar da sua saúde para que possa viver uma vida longa e feliz..."
    );

    const changeAreaRender = (e) => {
        if (e == "Sobre-area") {
            let sceneChange = document.querySelector("header#change");
            sceneChange.classList.remove("bg-health");
            sceneChange.classList.add("bg-header");
            setRenderAreaClicked(<About />);
            setTextArea(
                "Agora que tal saber mais um pouco sobre o cursilho MCC?"
            );
        } else if (e == "Saúde-area") {
            let sceneChange = document.querySelector("header#change");
            sceneChange.classList.remove("bg-header");
            sceneChange.classList.add("bg-health");
            setTextArea(
                "É importante cuidar da sua saúde para que possa viver uma vida longa e feliz..."
            );
            setRenderAreaClicked(<Health />);
        }
    };

    return (
        <>
            <header
                className="bg-health
            text-light shadow-lg"
                id="change"
            >
                <article>
                    <h1 className="display-1">
                        MCC <span>Iati - PE</span>
                    </h1>
                    <p>{textArea}</p>
                </article>
            </header>
            <nav className="nav-config m-5">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            onClick={() => changeAreaRender("Saúde-area")}
                        >
                            Saúde
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            onClick={() => changeAreaRender("Educação-area")}
                        >
                            Educação
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            onClick={() => changeAreaRender("Sobre-area")}
                        >
                            Sobre nós
                        </a>
                    </li>
                </ul>
            </nav>
            {renderAreaClicked}
        </>
    );
};
