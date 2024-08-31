import Form from './Form.jsx'
import '../styles/globals.css'


export default function edit({title,labels,inputs,isActive,onShow,onChange,onAdd,data,onRemove}){
    return <div className='edit'>
                <div className='encabezado'>
                    <h1>{title}</h1>
                    <button onClick={onShow}>Edit</button>
                </div>
                {title == 'Personal Information' &&(
                    isActive &&(
                        <>
                            <Form
                            labels={labels}
                            inputs={inputs}
                            onChange={onChange}
                            id={0}
                            data={data}
                            parent={0}
                            />
                        </>
                    ) 
                )
                }
                {title == 'Education'&&(
                    isActive &&(
                        <>
                        {data[2].childsId.length > 0 &&(
                            data[2].childsId.map(e=>(
                            <>
                                <Form
                                labels={labels}
                                inputs={inputs}
                                onChange={onChange}
                                id={e}
                                data={data}
                                parent={2}
                                key={e}
                                />
                                <button onClick={()=>onRemove(2,e)} className='remove'>Remove</button>
                            </>)))
                        }
                        {
                            data[2].childsId.length < 5 &&
                            <button onClick={()=>onAdd(2)}>Add</button>
                        }
                        </>
                    )
                )
                }
                {title == 'Experience'&&(
                    isActive&&(
                        <>
                    {   data[1].childsId.length > 0 &&(
                        data[1].childsId.map(e=>(
                            <>
                                <Form
                                labels={labels}
                                inputs={inputs}
                                onChange={onChange}
                                id={e}
                                data={data}
                                parent={1}
                                key={e}
                                />
                                <button onClick={()=>onRemove(1,e)} className='remove'>Remove</button>
                            </>)))
                        }
                        {
                            data[1].childsId.length < 5 &&
                            <button onClick={()=>onAdd(1)}>Add</button>
                        }
                        </>
                    )
                )
                }

            </div>       
             
}