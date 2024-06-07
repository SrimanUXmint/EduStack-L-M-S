const Attendancetemp = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        const attendancePercentage = parseInt((item.classesAttended / item.totalClasses) * 100);
        return (
          <div className="rgl11gfq" key={index}>
            <form className="vagp65x5">
              <label className="cbvuduft">
                <span className="l4f56e32">{item.courseId}</span>
              </label>
            </form>
            <div className="pd2slhja">
              <div className="r8hqsylp"></div>
              <div className="qdclirz3">{item.courseName}</div>
            </div>
            <div className="hgihd8ua">{item.totalClasses}</div>
            <div className="qezrwjux">{item.classesAttended}</div>
            {attendancePercentage >= 75 ? (
              <div className="pyo8nnfp">
                <div className="v6tejatb">{attendancePercentage}%</div>
              </div>
            ) : (
              <div className="lg1kby1b">
                <div className="ots0242r">{attendancePercentage}%</div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Attendancetemp;
