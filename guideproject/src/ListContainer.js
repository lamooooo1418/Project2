import React from 'react';
import Listitem from './listitem';

export default class ListContianer extends React.Component{

render(){
    console.log('this.props.results', this.props.trips)
let newContry=null;

if (this.props.trips !== undefined) {
    newContry = this.props.trips.map((element,index) => {
    return (
    <div>
    <Listitem country={element} key={index} adding={this.props.add}/>
    </div>)
    })
}

return (<div>
{newContry}
</div>
)  
}


}