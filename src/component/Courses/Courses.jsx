import  { useEffect, useState } from 'react';
import Course from '../Course/Course';
import PropTypes from 'prop-types';

const Courses = ({handleCourseList}) => {
    const [courses, setCourses]=useState([]);

    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className='lg:w-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                courses.map(course => <Course 
                    key={course.id}
                     course={course}
                     handleCourseList={handleCourseList}>
                     </Course>)
            }
        </div>
    );
};

Courses.propTypes ={
    handleCourseList: PropTypes.func.isRequired,
    handleCredit: PropTypes.func.isRequired
}

export default Courses;


