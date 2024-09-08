import React from 'react'
class ClassComp1 extends React.Component{
    render(){
        const {fruitShop} = this.props;
        const {name,colour} = fruitShop;
        return(
            <div>
                <h1>Class Component</h1>
                <p>I have a fruit {name} and my fruit colour us {colour}</p>
            </div>
        )
    }
}
export default ClassComp1;
