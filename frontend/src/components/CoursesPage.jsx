import React from "react";

import NotFound from "../assets/svgs/not_found.svg";

export default ({
    course_name = "Não encontrado",
    link_course = "#",
    img_course = NotFound
}) => {
    return (
        <>
            <a href={link_course} className="col-lg-3 hover-anim-img">
                <img
                    className="img-fluid p-1"
                    src={img_course}
                    alt="img-course"
                />
                <h5 className="pt-3">{course_name}</h5>
            </a>
        </>
    );
};
