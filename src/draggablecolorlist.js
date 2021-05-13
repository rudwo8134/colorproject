import React from 'react'
import Draggable from './draggable'
import {SortableContainer} from 'react-sortable-hoc'

const Draggablelist = SortableContainer(({colors, removecolor})=>{
    return(
        <div style={{height: "100%"}}>
        {colors.map((color, i)=>(
            <Draggable index= {i}key={color.name} color={color.color} name={color.name} handleclick={()=>removecolor(color.name)}/>
        ))}
        </div>
    )
}
)
export default Draggablelist