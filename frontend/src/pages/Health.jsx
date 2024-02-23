import React from "react";

export default () => {
    return (
        <>
            <main className="container">
                <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                    <div className="col-lg-6 px-0">
                        <h1 className="display-4 fw-bold text-success">
                            Lorem ipsum dolor sit amet.
                        </h1>
                        <p className="lead my-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ex dolore nulla rem adipisci iure ut totam
                            itaque corporis fuga voluptatem!
                        </p>
                        <p className="mb-0">
                            <a
                                href="#"
                                className="text-body-emphasis link-success"
                            >
                                Continue lendo...
                            </a>
                        </p>
                    </div>
                </div>
                <section className="row">
                    <div className="col-md-7">Area 1</div>
                    <article className="col-md-5">Artigos 1</article>
                </section>
                <section>
                    <div>Calculos</div>
                </section>
            </main>
        </>
    );
};
