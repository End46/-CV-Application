import Form from './Form.jsx'
import '../styles/globals.css'


export default function edit({title,labels,inputs,isActive,onShow,onChange,data,onAdd}){
    return <div className='edit'>
                <div className='encabezado'>
                    <h1>{title}</h1>
                    <button onClick={onShow}>Edit</button>
                </div>
                {isActive && (
                    title == 'Personal Information' ?(
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
                        ):(title == 'Education'?(
                            data[2].childsId.length > 0 ?(
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
                                    <div className='add-remove'>
                                        <button onClick={onAdd(2)}>Add</button>
                                        <button>Remove</button>
                                    </div>
                                </>
                            ))):(
                                <>
                                <h2>Empty</h2>
                                <div className='add-remove'>
                                    <button onClick={onAdd(2)}>Add</button>
                                </div>
                                </> 
                            )
                            ):(
                                data[1].childsId.length > 0 ?(
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
                                        <div className='add-remove'>
                                            <button onClick={onAdd(1)}>Add</button>
                                            <button>Remove</button>
                                        </div>
                                        </>
                                    ))):(
                                        <>
                                        <h2>Empty</h2>
                                        <div className='add-remove'>
                                            <button onClick={onAdd(2)}>Add</button>
                                        </div>
                                        </> 
                                    )
                            )
                        )
                    )

                }
            </div>       
             
}