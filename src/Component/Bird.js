import React from 'react'
class Bird extends React.Component{
    render(){
        const {Bird11,Bird22,Bird33} = this.props;
        
        return(
            <div>
                <h1>Class Birds Component</h1>
                
                <p>First Bird: {Bird11}</p>
                <p>Second Bird: {Bird22}</p>
                <p>Third Bird: {Bird33}</p>
                
            </div>
        )
    }
}
export default Bird;
