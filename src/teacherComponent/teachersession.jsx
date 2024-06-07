const Session= ({sessions})=> {
  
  return (
    <>{sessions.map((item, index)=>(
    <div className="euezgvat" key={index}>
    <div className="anpijo">
      <div className="ctskqs">{item.courseName}</div>
    </div>
    <div className="ctskqs">{item.batch}</div>
    <div className="ctskqs">{item.strength}</div>
    <div className="ctskqs">{item.room}</div>
    
  </div>))}
    </>
  )
}
export default Session;