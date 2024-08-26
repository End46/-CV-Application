
export default function previewSection({data}){
    return(
        <div className="preview">
            <h1>{data[0].value1}</h1>
            <p>{data[3].value1}</p>
        </div>
    )
}