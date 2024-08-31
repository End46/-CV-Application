/* eslint-disable react/prop-types */

export default function View({data}){
    return(
        <div className="preview">
            <div className="personalInfo">
                <h2>{data[0].value1} {data[0].value2}</h2>
                <div>
                    <p>Contact:</p>
                    <li><em>{data[0].value3}</em></li>
                    <li><em>{data[0].value4}</em></li>
                </div>
            </div>
            <div className="information">
                <div className="derecha">
                    <h2>Experience:</h2>
                    {
                        data[1].childsId.length > 0 &&(
                        data[1].childsId.map(e=>(
                            <div key={e}>
                                <h3>{data[e].value2}:</h3>
                                <li>{data[e].value1}</li>
                                <li>Start Date: {data[e].value3}</li>
                                <li>Finish Date: {data[e].value4}</li>
                            </div>
                        )))
                    }
                </div>
                <div className="izquierda">
                <h2>Education:</h2>
                    {
                        data[2].childsId.length > 0 &&(
                        data[2].childsId.map(e=>(
                            <div key={e}> 
                                <h3>{data[e].value1}:</h3>
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