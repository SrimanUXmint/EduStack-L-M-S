
const Batch=({batchData})=>{
  return (
    <>
    {batchData.map((item,index)=>(
        <div className="cf0todif" key={index}>
                      <div className="w2mfpq6n">
                        <div className="bk6x83">{item.courseIds}</div>
                      </div>
                      <div className="bk6x83">{item.batch}</div>
                      <div className="bk6x83">{item.strength}</div>
                    </div>
    ))}
    </>
  )
}
export default Batch;