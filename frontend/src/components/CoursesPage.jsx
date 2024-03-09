import React from "react";

export default ({ course_name, link_course, img_course }) => {
    return (
        <>
            <a href={link_course} className="bg-light rounded p-2 m-1 col-lg-3">
                <img
                    className="img-fluid p-1"
                    src={img_course}
                    alt="img-course"
                />
                <h5>{course_name}</h5>
                <p>Link course</p>
            </a>
        </>
    );
};
