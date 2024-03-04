import React from "react";
import { useState } from "react";

import Education from "./pages/Education";
import Health from "./pages/Health";
import About from "./pages/About";
import Footer from "./components/Footer";

export default () => {
    // coleta e renderiza a pagina clicada
    const [renderAreaClicked, setRenderAreaClicked] = useState(<Health />);
    // formata o texto de cada pagina
    const [textArea, setTextArea] = useState(
        "É importante cuidar da sua saúde para que possa viver uma vida longa e feliz..."
    );

    // deixa a funçãod e coletar menor
    const lightRender = (removeClass, classLoad, text, areaLoad) => {
        let sceneChange = document.querySelector("header#change");
        sceneChange.classList.remove(removeClass[0], removeClass[1]);
        sceneChange.classList.add(classLoad);
        setTextArea(text);
        setRenderAreaClicked(areaLoad);
    };

    // funcão recebe a area clicada e a carrega
    const changeAreaRender = (e) => {
        if (e == "Sobre-area") {
            lightRender(
                ["bg-health", "bg-education"],
                "bg-header",
                "Agora que tal saber mais um pouco sobre o Movimento Cursilhista o MCC?",
                <About />
            );
        } else if (e == "Saúde-area") {
            lightRender(
                ["bg-header", "bg-education"],
                "bg-health",
                "É importante cuidar da sua saúde para que possa viver uma vida longa e feliz...",
                <Health />
            );
        } else {
            lightRender(
                ["bg-header", "bg-health"],
                "bg-education",
                "A aprendizagem ajuda a desenvolver habilidades, conhecimentos e valores.",
                <Education />
            );
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
            <Footer />
        </>
    );
};
