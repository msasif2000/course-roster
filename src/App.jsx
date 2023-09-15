import { useState } from 'react' 
import './App.css'
import Courses from './component/Courses/Courses'
import CourseLists from './component/CourseLists/CourseLists'
import Header from './component/Header/Header'
//import { ToastProvider, useToasts } from 'react-toast-notifications';

function App() {
  const [courseLists, setCourseLists] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);

  const handleCourseLists = course => {
    // Add course to courseLists
    const newCourseLists = courseLists.filter(c => c.id !== course.id);
    if(newCourseLists && (remainingCredit >= course.credit)){
      newCourseLists.push(course);
      setCourseLists(newCourseLists);
    }
    

    // Calculate remaining credit
    
    if(remainingCredit < course.credit){
      return;
    }
    else if((remainingCredit >= course.credit) && courseLists.filter(c => c.id === course.id).length === 0){
      const newRemainingCredit = remainingCredit - course.credit;
      setRemainingCredit(newRemainingCredit);
      const newTotalCredit = totalCredit + course.credit;
      setTotalCredit(newTotalCredit);
    }
  }

  return (
    <>
      <section className='bg-[#F3F3F3]'>
        <div className='md:container mx-auto'>
          <Header />
          <div className='lg:flex gap-4 p-4'>
            <Courses handleCourseList={handleCourseLists} ></Courses>    
            <CourseLists courseLists ={courseLists} remainingCredit={remainingCredit} totalCredit={totalCredit}></CourseLists>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
