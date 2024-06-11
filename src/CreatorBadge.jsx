const CreatorBadge = () => {
  const badgeStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    backgroundColor: '#242154cc',
    color: 'white',
    padding: '10px 1px',
    borderRadius: '5px',
    zIndex: '1000',
    fontFamily: 'ui-sans-serif',
    fontSize: '14px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    textDecoration: 'none', 
    display: 'flex',
    alignItems: 'center',
    justifyContent:"center"
   
  };
  const imgStyle = {
    maxWidth: '18%',
    marginRight: '10px'
  };
  return (
    <a href="https://anubhavchaudhary.42web.io" target="_blank" rel="noopener noreferrer" style={badgeStyle}>
    <img src="src/assets/logo.png" style={imgStyle} alt="Site Logo" />
    <h3 style={{ margin: 0 }}>Anubhav Chaudhary</h3>
  </a>
  );
};

export default CreatorBadge;
