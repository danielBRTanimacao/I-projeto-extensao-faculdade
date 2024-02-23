import React from "react";

export default () => {
    return (
        <>
            <main className="container">
                <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                    <div class="col-lg-6 px-0">
                        <h1 class="display-4 fst-italic">
                            Title of a longer featured blog post
                        </h1>
                        <p class="lead my-3">
                            Multiple lines of text that form the lede, informing
                            new readers quickly and efficiently about what’s
                            most interesting in this post’s contents.
                        </p>
                        <p class="lead mb-0">
                            <a href="#" class="text-body-emphasis fw-bold">
                                Continue lendo...
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};
