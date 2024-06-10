import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Coursetemplate = ({ coursedata, batchName , courseimage}) => {
  return (
    <>
      {coursedata.map((item, index) => (
        <Link 
          to={item.courseId} 
          key={index} 
          className="bkie7gg0" 
          style={{ textDecoration: 'none', color: 'black' }} // No hover effect
        >
          <h1 className="vo02f0su">{item.courseName}</h1>
          <img
            src={courseimage}
            loading="lazy"
            sizes="(max-width: 479px) 82vw, (max-width: 767px) 81vw, (max-width: 991px) 39vw, (max-width: 1439px) 23vw, 325px"
            srcSet={`
              ${courseimage}?w=500 500w,
              ${courseimage}?w=800 800w,
              ${courseimage} 820w
            `}
            alt={item.courseName}
            className="image-2"
          />
          <div className="l9vyvaej">
            <div className="ucda7sxe">
              <div className="eo8ulunt"></div>
              <div className="dql7bfud">{item.courseId}</div>
            </div>
            <div className="hygsypnv">
              <div className="i9ce9cep"></div>
              <div className="xtb5sxmk">{batchName}</div>
            </div>
            <div className="xwexdgfv"></div>
          </div>
        </Link>
      ))}
    </>
  );
};

Coursetemplate.propTypes = {
  coursedata: PropTypes.arrayOf(
    PropTypes.shape({
      courseName: PropTypes.string.isRequired,
      courseimage: PropTypes.string.isRequired,
      courseId: PropTypes.string.isRequired,
    })
  ).isRequired,
  batchName: PropTypes.string.isRequired,
};

export default Coursetemplate;
