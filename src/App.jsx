import { useState } from 'react'
import './App.css'
import Courses from './component/Courses/Courses';
import CourseLists from './component/CourseLists/CourseLists';
import Header from './component/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [courseLists, setCourseLists] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCourseLists = course => {
    // Add course to courseLists
    const newCourseLists = courseLists.filter(c => c.id !== course.id);
    if(courseLists.filter(c => c.id === course.id).length > 0) {
      toast.warning('You have already selected this course', {
        position: toast.POSITION.TOP_CENTER, autoClose: 2000, style: {backgroundColor: 'red', text: 'black'}, closeOnClick: true,  theme: 'colored'

    });
    }
    else if (newCourseLists && (remainingCredit >= course.credit)) {
      newCourseLists.push(course);
      setCourseLists(newCourseLists);
    }



    // Calculate remaining credit

    if (remainingCredit < course.credit) {
      toast.warning('you have not enough credit', {
        position: toast.POSITION.TOP_CENTER, autoClose: 2000,  closeOnClick: true, theme: 'colored'
    });
    }
    else if ((remainingCredit >= course.credit) && courseLists.filter(c => c.id === course.id).length === 0) {
      const newRemainingCredit = remainingCredit - course.credit;
      setRemainingCredit(newRemainingCredit);
      const newTotalCredit = totalCredit + course.credit;
      setTotalCredit(newTotalCredit);
      const newTotalPrice = totalPrice + course.price;
      setTotalPrice(newTotalPrice);
    }
  }

  return (
    <>
      <ToastContainer />
      <section className='bg-[#F3F3F3]'>
        <div className='md:container mx-auto'>
          <Header />
          <div className='lg:flex gap-4 p-4'>
            <Courses handleCourseList={handleCourseLists} ></Courses>
            <CourseLists courseLists={courseLists} remainingCredit={remainingCredit} totalCredit={totalCredit} totalPrice={totalPrice}></CourseLists>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
