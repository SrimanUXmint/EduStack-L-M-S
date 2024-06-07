
const Events=({event})=>{
    return (
      <>
      {event.map((item,index)=>(
         <div className="cyyal10c" key={index}>
         <div className="mdo5cei4">{item.quiztime}</div>
         <div className="mdo5cei4">{item.quiz}</div>
         <div className="mdo5cei4">{item.courseid}</div>
       </div>
      ))}
       </>
    )
   
  }
export default Events;