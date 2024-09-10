// import React from 'react'
// import './Header.css'
// import './Header.module.css'

// function Header() {
//     const mystyle ={
//         color:"green",
//         // backgroundColor:"gray",
//         padding:"10px",
//         fontFamily:"timesroman"
//     }
//   return (
//     <div>
//         <h1 style = {{color:"skyblue",fontFamily:"cursive"}}>I'm Vaibhav Singh</h1>
//         <h2 style={{color:"green",fontFamily:"inherit"}}>Hello, I'm in LPU now!</h2>
//         <h3 style={{color:"gray",fontFamily:"revert-layer"}}>And currently student in CSE</h3>
//         <p style={{color:"Yellow",fontFamily:"serif"}}>It's My React Class</p>
//         <p style={mystyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore aliquid libero saepe in officia eos perferendis, mollitia, ad nihil cumque. Accusantium nihil ipsa velit placeat ab veniam commodi harum.</p>

//     </div>
//   )
// }

// export default Header


import React from 'react'
import './Header.css'
import styles from'./Header.module.css'

function Header() {
    const mystyle ={
        color:"green",
        // backgroundColor:"gray",
        padding:"10px",
        fontFamily:"timesroman"
    }
  return (
    <div>
        <h1 className={styles.Bigboss}>I'm Vaibhav Singh</h1>
        <h2 className={styles.Bigboss}>Hello, I'm in LPU now!</h2>
        {/* <h3 style={{color:"gray",fontFamily:"revert-layer"}}>And currently student in CSE</h3>
        <p style={{color:"Yellow",fontFamily:"serif"}}>It's My React Class</p>
        <p style={mystyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore aliquid libero saepe in officia eos perferendis, mollitia, ad nihil cumque. Accusantium nihil ipsa velit placeat ab veniam commodi harum.</p> */}

    </div>
  )
}

export default Header