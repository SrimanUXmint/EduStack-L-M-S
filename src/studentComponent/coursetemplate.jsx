import PropTypes from 'prop-types';
import {  Link } from 'react-router-dom';
const Coursetemplate = ({ coursedata }) => {
    return (
       <>
          {coursedata.map((item, index) => (
            <Link 
              to={item.courseId} 
              key={index} 
              className="bkie7gg0" 
              style={{ textDecoration: 'none', color: 'black' }} // No hover effect
            >
              <h1 className="vo02f0su">{item.name}</h1>
              <img
                src={item.image}
                loading="lazy"
                sizes="(max-width: 479px) 82vw, (max-width: 767px) 81vw, (max-width: 991px) 39vw, (max-width: 1439px) 23vw, 325px"
                srcSet={`
                  ${item.image}?w=500 500w,
                  ${item.image}?w=800 800w,
                  ${item.image} 820w
                `}
                alt={item.name}
                className="image-2"
              />
              <div className="l9vyvaej">
                <div className="ucda7sxe">
                  <div className="eo8ulunt"></div>
                  <div className="dql7bfud">{item.courseId}</div>
                </div>
                <div className="hygsypnv">
                  <div className="i9ce9cep"></div>
                  <div className="xtb5sxmk">{item.teacherName}</div>
                </div>
                <div className="xwexdgfv"></div>
              </div>
            </Link>
          ))}
        </>
      );
    };
    

Coursetemplate.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      courseId: PropTypes.string.isRequired,
      teacherName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Coursetemplate;
