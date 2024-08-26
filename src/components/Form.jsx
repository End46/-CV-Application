

export default function form({labels,inputs,onChange,id,data,parent}){
    if(parent.id == 0){
        id=0;
        parent=0;
    }
    console.log(id)
    return(
        <form className='form'>
            <label htmlFor={labels[0]}>{labels[0]}:</label>
            <input type={inputs[0]} id={labels[0]} name={labels[0]} onChange = {(e)=>{onChange(e.target.value,parent,id,'value1')}} value={data[id].value1}/>

            <label htmlFor={labels[1]}>{labels[1]}:</label>
            <input type={inputs[1]} id={labels[1]} name={labels[1]} onChange = {(e)=>{onChange(e.target.value,parent,id,'value2')}} value={data[id].value2}/>

            <label htmlFor={labels[2]}>{labels[2]}:</label>
            <input type={inputs[2]} id={labels[2]} name={labels[2]} onChange = {(e)=>{onChange(e.target.value,parent,id,'value3')}} value={data[id].value3}/>

            <label htmlFor={labels[3]}>{labels[3]}:</label>
            <input type={inputs[3]} id={labels[3]} name={labels[3]} onChange = {(e)=>{onChange(e.target.value,parent,id,'value4')}} value={data[id].value4}/>
        </form>
    )
}