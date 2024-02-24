import React from "react";

export default () => {
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
                    <div className="col-md-9">
                        <div>
                            <h1>Lorem ipsum dolor sit amet.</h1>
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
                    <article className="col-md-3 border rounded">
                        <ol className="m-3 list-unstyled">
                            <h3>Alguns artigos</h3>
                            <li>
                                <a href="">
                                    <span>Artigo 1</span>
                                    <img src="" alt="artigo-img" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="" alt="artigo-img" />
                                    <p>Artigo 02</p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="" alt="artigo-img" />
                                    <p>Artigo 03</p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="" alt="artigo-img" />
                                    <p>Artigo 04</p>
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
