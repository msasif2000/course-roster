import { FiBookOpen } from "react-icons/fi";
import PropTypes from 'prop-types';

const Course = ({ course, handleCourseList }) => {
    const { cover_image, course_name, price, description, credit } = course;
    return (
        <div className="">
            <div className="bg-white rounded-xl p-4">
                <img className='rounded-xl w-full h-[180px]' src={cover_image} alt="" />
                <h3 className='text-center text-[20px] font-bold h-[60px]'>{course_name}</h3>
                <p>{description}</p>
                <div>
                    <div className="flex justify-between my-2">
                        <p><span>$ Price: </span>{price}</p>
                        <div className="flex items-center gap-2">
                            <FiBookOpen />
                            <p><span>Credit: </span>{credit}<span>hr</span></p>
                        </div>
                    </div>
                </div>
                <button onClick={() => handleCourseList(course)} className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full">Select</button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleCourseList: PropTypes.func.isRequired
}

export default Course;