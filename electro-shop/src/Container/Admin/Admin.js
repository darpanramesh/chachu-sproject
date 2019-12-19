import React from 'react'
import  PersistentDrawerLeft from '../../Component/Drawer/drawer'

export default class Admin extends React.Component{
render(){
    let value = [];
    console.log(value)
    return(
        <div>
            <PersistentDrawerLeft value={[]} />
        </div>
    )
}
}