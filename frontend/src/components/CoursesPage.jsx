import React from "react";

export default ({ course_name, link_course }) => {
    return (
        <>
            <a href={link_course} className="bg-light rounded p-2 m-1">
                <img
                    width={300}
                    className="img-fluid"
                    src="https://source.unsplash.com/random/450x415/?education"
                    alt="img-course"
                />
                <h5>{course_name}</h5>
                <p>Link course</p>
            </a>
        </>
    );
};
