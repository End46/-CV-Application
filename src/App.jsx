import { useState } from 'react';
import '../src/styles/globals.css';
import Edit from './components/Edit.jsx'
import PreviewView from './components/PreviewSection.jsx'
import { initialData } from './components/InitialData.jsx';
import ViewSection from './components/View.jsx'


function App() {
  const [editSection,setEditSection] = useState(0);
  const [data,setData] = useState(initialData);
  const [view,setview] = useState(false);
 // const experiencesRoot = data[1];
 // const educationRoot = data[2];

  function handleChange(value,id,property){
    setData({...data, [id]: {...data[id], [property]: value}});
  }

  function handleAdd(parentId){
    const parent = data[parentId];
    const dataArray = Object.values(data);
    const newId = dataArray.length;
    const newChilds = parent.childsId;
      newChilds.push(newId);
      setData({...data,[parentId]:{...data[parentId], childsId : newChilds }})
      setData({...data,[newId]:{
      id : newId,
      value1 : "new",
      value2 : "new",
      value3 : "new",
      value4 : "new"
    }})
  }

 /* function handleRemove(parentId,id){
    const parent = data[parentId]:
    const childsId = parent.childsId;
    const newChildsArray = childsId.filter((id)=>{
      
    })
  }*/

  function onView(){
    setview(!view);
  }

  return (
    <>
      {
      view ?(
        <ViewSection
          data = {data}
        />
      )
        :
        <>
          <div className='titulo'>
            <h1>Cv Application:</h1>
            <h3 className='show'> Press print to see your curriculum.</h3>
          </div>
          <div className='principalContainer '>
            <div>
              <Edit
                title = 'Personal Information'
                labels = {['Name','Last Name','Phone Number','Email']}
                inputs = {['text','text','text','email']}
                isActive = {0 === editSection}
                onShow = {()=> setEditSection(0)}
                onChange = {handleChange}
                onAdd = {handleAdd}
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
              <button onClick={onView}>print</button>
            </div>
            <PreviewView
              data = {data}
            />
          </div> 
        </>
      }
    </>
  )
}



export default App