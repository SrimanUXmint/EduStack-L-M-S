const Leave = ({ event }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Approved':
        return { color: 'green', backgroundColor: '#4cb44c',border: "1px solid #4cb44c" }; // Light green background
      case 'Rejected':
        return { color: '#460000', backgroundColor: '#c54c4c' ,border: "1px solid #c54c4c"}; // Light red background
      case 'Pending':
        return { color: 'orange', backgroundColor: '#b88c61' ,border: "1px solid #b88c61" }; // Light orange background
      default:
        return { color: 'black', backgroundColor: '#e0e0e0',border: "1px solid #e0e0e0" }; // Light grey background
    }
  };

  return (
    <>
      {event.map((item, index) => (
        <div key={index} className="rgl11gfq" >
          <form className="vagp65x5">
            <label className="cbvuduft">
              <span className="l4f56e32">{item.leaveId}</span>
            </label>
          </form>
          <div className="pd2slhja">
            <div className="r8hqsylp"></div>
            <div className="qdclirz3">{item.type}</div>
          </div>
          <div className="pyo8nnfp">
            <span className="v6tejatb" style={{ ...getStatusStyle(item.status), padding: '5px', borderRadius: '5px', display: 'inline-block' }}>
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Leave;
