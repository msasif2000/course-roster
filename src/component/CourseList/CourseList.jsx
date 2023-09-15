
import { PropTypes } from 'prop-types';
const CourseList = ({ courseList}) => {
    const { course_name } = courseList;
    return (
        <div className='px-4'>
            <ol className='list-decimal'>
                   {<li > {course_name}</li>}
            </ol>
        </div>
    );
};
CourseList.propTypes = {
    courseList: PropTypes.array.isRequired,
}
export default CourseList;