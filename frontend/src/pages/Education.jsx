import React from "react";

import Develop from "../assets/svgs/develop.svg";

export default () => {
    return (
        <>
            <main className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <h1 className="display-4 fw-bold">
                            Em desenvolvimento...
                        </h1>
                    </div>
                    <div className="col-md-6">
                        <img
                            className="img-fluid"
                            src={Develop}
                            alt="img-develop"
                        />
                    </div>
                </div>
            </main>
        </>
    );
};
