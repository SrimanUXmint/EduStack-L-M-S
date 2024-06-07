const Session= ({sessions})=> {
  return (
    <>{sessions.map((item, index)=>(
    <div className="euezgvat" key={index}>
    <div className="anpijo">
      <div className="ctskqs">{item.courseId}</div>
    </div>
    <div className="ctskqs">{item.courseName}</div>
    <div className="ctskqs">{item.strength}</div>

  </div>))}
    </>
  )
}
export default Session;