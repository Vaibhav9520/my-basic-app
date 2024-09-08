// import React from "react";
// import Collage from "./Collage";

// function University() {
//     // const course1 = "React JS";
//     // const course2 = "Node JS";
//     // const course3 = "PHP";
//   return (
//     <>
//         <h1><u>List of Courses: </u></h1>
//         <p>1- {'React JS'} tought by {course1T}</p>
//         <p>2- {"Node JS"} tought by</p>
//         <p>3- {"PHP"} tought by</p>
//     </>
//   )
// }

// export default University
import React from 'react';
import Collage from './Collage';

export default function University() {
  let course1 = "React Js";
  let course2 = "Node JS";
  let course3 = "PHP";
  return (
    <div>
      <p>
      <Collage t1 ={course1} t2 ={course2} t3 = {course3} />
      </p>
    </div>
        
  )
}