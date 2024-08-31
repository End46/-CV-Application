

export default function previewSection({data}){
    return(
        <div className="preview">
            <div className="personalInfo">
                <h3>{data[0].value1} {data[0].value2}</h3>
                <div>
                    <p>Contact:</p>
                    <li><em>{data[0].value3}</em></li>
                    <li><em>{data[0].value4}</em></li>
                </div>
            </div>
            <div className="information">
                <div className="derecha">
                    <h3>Experience:</h3>
                    {
                        data[1].childsId.length > 0 &&(
                        data[1].childsId.map(e=>(
                            <div key={e}>
                                <h4>{data[e].value2}:</h4>
                                <li>{data[e].value1}</li>
                                <li>Start Date: {data[e].value3}</li>
                                <li>Finish Date: {data[e].value4}</li>
                            </div>
                        )))
                    }
                </div>
                <div className="izquierda">
                <h3>Education:</h3>
                    {
                        data[2].childsId.length > 0 &&(
                        data[2].childsId.map(e=>(
                            <div key={e}> 
                                <h4>{data[e].value1}:</h4>
                                <li>{data[e].value2}</li>
                                <li>Start Date: {data[e].value3}</li>
                                <li>Finish Date: {data[e].value4}</li>
                            </div>
                        )))
                    }
                </div>
            </div>
        </div>
    )
}