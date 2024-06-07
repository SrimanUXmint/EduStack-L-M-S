
const Faculty=({faculties})=>{
  return (
    <>
    {faculties.map((item,index)=>(
        <div className="cf0todif" key={index}>
                      <div className="w2mfpq6n">
                        <div className="bk6x83">{item.userid}</div>
                      </div>
                      <div className="bk6x83">{item.name}</div>
                      <div className="bk6x83">{item.course}</div>
                    </div>
    ))}
    </>
  )
}
export default Faculty;