import { useState } from 'react';
import '../src/styles/globals.css';
import Edit from './components/Edit.jsx'
import PreviewView from './components/PreviewSection.jsx'
import { initialData } from './components/InitialData.jsx';


function App() {
  const [editSection,setEditSection] = useState(0);
  const [data,setData] = useState(initialData);
  const personalInfo = data[0];
 // const experiencesRoot = data[1];
 // const educationRoot = data[2];

  function handleChange(value,parent,id,property){
    switch(parent){
      case 0:
        setData({...data, 0: {...personalInfo, [property]: value}});
        break;
      case 1:
      case 2:
        setData({...data,parent: {...parent, id:{...id,[property]: value}}})
        break;
    }
  }

  function handleAdd(parentId){
    const newId = data.length;
    const childs = data[parentId].childsId;
    childs.push(newId);
    setData({...data,parentId:{...data[parentId],childsId : childs}})
    setData({...data,newId:{
      id:newId,
      value1 : 'New value',
      value2 : 'New value',
      value3 : 'New value',
      value4 : 'New value'
    }})
  }

  console.log(editSection)
  return (
    <>
      <div className='principalContainer'>
        <div>
          <Edit
            title = 'Personal Information'
            labels = {['Name','Last Name','Phone Number','Email']}
            inputs = {['text','text','text','email']}
            isActive = {0 === editSection}
            onShow = {()=> setEditSection(0)}
            onChange = {handleChange}
            data = {data}
          />
          <Edit
            title = 'Education'
            labels = {['School','Degree','Start Date','Finish Date']}
            inputs = {['text','text','date','date']}
            isActive = {1 === editSection}
            onShow = {()=> setEditSection(1)}
            onChange = {handleChange}
            onAdd = {handleAdd}
            data = {data}
          />
          <Edit
            title = 'Experience'
            labels = {['Position','Company','Start Date','Finish Date']}
            inputs = {['text','text','date','date']}
            isActive = {2 === editSection}
            onShow = {()=> setEditSection(2)}
            onChange = {handleChange}
            onAdd = {handleAdd}
            data = {data}
          />
          <button onClick={window.print}>print</button>
        </div>
        <PreviewView
          data = {data}
        />
      </div>
    </>
  )
}



export default App