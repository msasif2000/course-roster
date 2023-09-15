
import './App.css'
import Courses from './component/Courses/Courses'
import Credit from './component/Credit/Credit'
import Header from './component/Header/Header'

function App() {

  return (
    <>
      <section className='bg-[#F3F3F3]'>
        <div className='md:container mx-auto'>
          <Header />
          <div className='flex gap-4 p-4'>
            <Courses></Courses>
            <Credit></Credit>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
