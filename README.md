## Project Features:
- Can Select a Course dynamically
- Can select a course only once and see the selected course
- Can see the remaining credit, total credit, and total price

## How I managed the state in this assignment project
I have taken some steps to complete the assignment. Here I discuss step-by-step
- I follow the given github link to create a repository. 
- Then, created a folder named course-roster
- Open the git bash and create vite in react using code (npm create vite@latest course-roster -- --template react).
- then I installed the project component using some code and also installed tailwind CSS for styling the interface from the tailwind CSS guideline of vite.
- Created fake data (json format) file.
- I have created a folder in src file named component to collect all the folders. The component folders are Header, Courses, Course, CourseLists, CourseList
- then I create the header section, and then the card section by fetching data from the json folder.
- to show every card individually I have to props all the data objects from 'Courses' to 'Course' folder.
- for managing the functional activity like remaining credit hour, adding course name, total credit hour, and total price I have created some functions and props them from child node to parent node.
- I have to debug every single section for the correctness of the assignment and set the warning toast whenever I cross the limit of the credit hour or select a course more than once. 

### my-course-roster-msasif2000
