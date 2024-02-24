import React, { useState } from "react";

export default () => {
    const [linkArticle, setLinkArticle] = useState("/");
    const [nameArticle, setNameArticle] = useState("Lorem ipsum Dolor");

    return (
        <>
            <main className="container">
                <div className="p-4 p-md-5 mb-4 rounded row shadow-lg">
                    <div className="col-lg-6 px-0">
                        <h1 className="display-4 fw-bold text-success">
                            Lorem ipsum dolor sit amet.
                        </h1>
                        <p className="lead my-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ex dolore nulla rem adipisci iure ut totam
                            itaque corporis fuga voluptatem!
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
                                Lorem ipsum dolor sit amet.
                            </h1>
                        </div>
                        <div>
                            <article>
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsum esse velit non, a hic,
                                sequi reprehenderit incidunt magni consectetur
                                delectus perferendis optio omnis vitae
                                necessitatibus? Voluptate similique officiis
                                consectetur architecto?
                            </article>
                            <article>
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsum esse velit non, a hic,
                                sequi reprehenderit incidunt magni consectetur
                                delectus perferendis optio omnis vitae
                                necessitatibus? Voluptate similique officiis
                                consectetur architecto?
                            </article>
                            <article>
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsum esse velit non, a hic,
                                sequi reprehenderit incidunt magni consectetur
                                delectus perferendis optio omnis vitae
                                necessitatibus? Voluptate similique officiis
                                consectetur architecto?
                                <h5>Lorem ipsum dolor sit amet.</h5>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsum esse velit non, a hic,
                                sequi reprehenderit incidunt magni consectetur
                                delectus perferendis optio omnis vitae
                                necessitatibus? Voluptate similique officiis
                                consectetur architecto? Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Ipsum esse
                                velit non, a hic, sequi reprehenderit incidunt
                                magni consectetur delectus perferendis optio
                                omnis vitae necessitatibus? Voluptate similique
                                officiis consectetur architecto?
                            </article>
                        </div>
                        <aside>Lorem ipsum dolor sit amet.</aside>
                    </div>
                    <article className="col-md-3">
                        <ol className="p-3 list-unstyled border border-success shadow rounded">
                            <h3 className="text-primary">Alguns artigos</h3>
                            <hr />
                            <li>
                                <a
                                    href={linkArticle}
                                    className="d-flex justify-content-evenly align-items-center"
                                >
                                    <span>{nameArticle}</span>
                                    <img
                                        className="img-fluid rounded"
                                        src="https://source.unsplash.com/random/75x75/?health"
                                        alt="artigo-img"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={linkArticle}
                                    className="d-flex justify-content-evenly align-items-center"
                                >
                                    <span>{nameArticle}</span>
                                    <img
                                        className="img-fluid rounded"
                                        src="https://source.unsplash.com/random/75x75/?people"
                                        alt="artigo-img"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={linkArticle}
                                    className="d-flex justify-content-evenly align-items-center"
                                >
                                    <span>{nameArticle}</span>
                                    <img
                                        className="img-fluid rounded"
                                        src="https://source.unsplash.com/random/75x75/?day"
                                        alt="artigo-img"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={linkArticle}
                                    className="d-flex justify-content-evenly align-items-center"
                                >
                                    <span>{nameArticle}</span>
                                    <img
                                        className="img-fluid rounded"
                                        src="https://source.unsplash.com/random/75x75/?save"
                                        alt="artigo-img"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={linkArticle}
                                    className="d-flex justify-content-evenly align-items-center"
                                >
                                    <span>{nameArticle}</span>
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

                <section className="calc-area">
                    <div>Calculos</div>
                </section>
            </main>
        </>
    );
};
