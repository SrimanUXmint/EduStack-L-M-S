
const Quizes=({quizdata})=>{
    return (
      <>
      {quizdata.map((item,index)=>(
        <div className="p6astchp">
        <div className="xjnr96zm">
          <div className="p6x2ftjb">
            <div className="e7hten5c">{item.quiztime}</div>
          </div>
        </div>
        <div className="yqlhntmk">{item.quiz}</div>
      </div>
      
      ))}
      
       </>
    )
   
  }
export default Quizes;