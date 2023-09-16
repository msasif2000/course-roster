
import { PropTypes } from 'prop-types';
const CourseList = ({ courseList, index }) => {
    const { course_name } = courseList;
    return (
        <div className='px-4'>
            <ol className='list-decimal text-sm'>
                {index + 1}. {course_name}
            </ol>
        </div>
    );
};
CourseList.propTypes = {
    courseList: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired
}
export default CourseList;