const Session= ({sessions})=> {
  return (
    <>{sessions.map((item, index)=>(
    <div className="euezgv" key={index}>
    <div className="anpijo">
      <div className="ctskqs">{item.courseName}</div>
    </div>
    <div className="ctskqs">{item.time}</div>
    <div className="ctskqs">{item.teacherId}</div>
    <div className="ctskqs">{item.room}</div>
  </div>))}
    </>
  )
}
export default Session;