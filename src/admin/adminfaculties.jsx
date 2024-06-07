
const Faculties=({facultyData})=>{
    return (
      <>
      {facultyData.map((item,index)=>(
          <div className="cf0todif" key={index}>
                        <div className="w2mfpq6n">
                          <div className="bk6x83">{item.teacherId}</div>
                        </div>
                        <div className="bk6x83">{item.teacherName}</div>
                        <div className="bk6x83">{item.courseId}</div>
                      </div>
      ))}
      </>
    )
  }
  export default Faculties;