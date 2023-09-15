/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

const CourseLists = ({ courseLists, remainingCredit, totalCredit }) => {
    return (
        <div className='lg:w-1/4 '>
            <div className='bg-white rounded-xl '>
                <div className='mb-4 bg-white py-4  border-b-2 mx-2'>
                    <h3 className='text-purple-700 text-center font-bold text-xl '>Credit Hour Remaining {remainingCredit} hr</h3>
                </div>
                <div className='py-6 border-b-2 mb-2 mx-2'>
                    <h3 className='text-xl font-bold'>Course Name</h3>
                    {
                        courseLists.map((courseList, idx) => <CourseList key={idx} courseList={courseList}></CourseList>)
                    }
                </div>
                <div className='mb-4 bg-white py-4 rounded-b-xl'>
                    <h3 className='text-purple-700 text-center font-bold text-xl'>Total Credit {totalCredit} hr</h3>
                </div>
            </div>
        </div>
    );
};
CourseLists.propTypes = {
    courseLists: PropTypes.array.isRequired,
    remainingCredit: PropTypes.number.isRequired,
    totalCredit: PropTypes.number.isRequired,
}
export default CourseLists;