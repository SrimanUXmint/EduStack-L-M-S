import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';



const Profile = () => {
  
const [profileData, setProfileData] = useState({ name: '', email: '', username: '',
  password: '',
  batch: '',
  courseid: '' });
  useEffect(() => {
    const userid = localStorage.getItem('userName');    
  
    fetch(`http://localhost:8080/profiledata?name=${userid}`)
      .then(response => response.json())
      .then(data => setProfileData({ userName: data.userName, email:data.email,name:data.name,password:data.password,batch:data.batch,courseid:data.courseIds }))
      .catch(error => console.error('Error fetching progress data:', error));
  
  }, []);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  Profile.propTypes = {
    profileData: PropTypes.shape({
      name: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      batch: PropTypes.string.isRequired,
      courseid: PropTypes.string.isRequired,
    }).isRequired,
  };
  return (
    <>
      <div className="z1elyala">
        <div className="fh07zvwj">
          <div className="yaho0m0x">
            <div className="eg1xjeqf" style={{ marginTop: "70px", marginLeft: "200px" }}>
              <FontAwesomeIcon icon={faUser} className="iicon" />
              <div className="p5t6hgmu">
                <div className="ano7kr8i">
                  <label className="yjfe4ehb">Name</label>
                  <div className="d6ygyoi7" style={{ padding: "0%" }}>
                    <input
                      type="text"
                      maxLength="256"
                      name="name"
                      data-name="Name"
                      value={profileData.name}
                      style={{ margin: "0", backgroundColor: "transparent", height: "100%"  , borderWidth: "0px", color: "white", flex: 1 }}
                      readOnly
                    />
                  </div>
                </div>
                <div className="w9zcu0kk">
                  <label className="qfjk0qr8">User Name</label>
                  <div className="yzdpocto" style={{ padding: "0%" }}>
                    <input
                      type="text"
                      maxLength="256"
                      name="username"
                      data-name="User Name"
                      value={profileData.userName}
                      className="gyhit165"
                      style={{ margin: "0", backgroundColor: "transparent", height: "100%"  , borderWidth: "0px", color: "white", flex: 1 }}
                      readOnly
                    />
                  </div>
                </div>
                <div className="giws8uuk">
                  <label className="s45xwzvu">Email</label>
                  <div className="y9p05ifm" style={{ padding: "0%" }}>
                    <input
                      type="email"
                      maxLength="256"
                      name="email"
                      data-name="Email"
                      value={profileData.email}
                      className="m8s0flrp"
                      style={{ margin: "0", backgroundColor: "transparent", height: "100%"  , borderWidth: "0px", color: "white", flex: 1 }}
                      readOnly
                    />
                  </div>
                </div>
                <div className="id91e70y">
                  <label className="i1jcveb5">Password</label>
                  <div className="unar5eui" style={{ display: 'flex', alignItems: 'center', padding: '0%', }}>
                    <input
                      type={isPasswordVisible ? 'text' : 'password'}
                      maxLength="256"
                      name="password"
                      data-name="Password"
                      value={profileData.password}
                      className="tt2k62i8"
                      style={{ margin: "0", backgroundColor: "transparent", height: "100%"  , borderWidth: "0px", color: "white", flex: 1 }}
                      readOnly
                    />
                    <FontAwesomeIcon
                      icon={isPasswordVisible ? faEyeSlash : faEye}
                      onClick={togglePasswordVisibility}
                      style={{ cursor: 'pointer', marginLeft: '10px', color: '#272121' }}
                    />
                  </div>
                </div>
                <div className="qj6zwo7j">
                  <label className="fuzw1nay">Batch</label>
                  <div className="ipunutn3" style={{ padding: "0%" }}>
                    <input
                      type="text"
                      maxLength="256"
                      name="dob"
                      data-name="Date of Birth"
                      value={profileData.batch}
                      className="ctjtdfzi"
                      style={{ margin: "0", backgroundColor: "transparent", height: "100%"  , borderWidth: "0px", color: "white", flex: 1 }}
                      readOnly
                    />
                  </div>
                </div>
                <div className="ifzgu4pq">
                  <label className="o12sv7lm">Course Id</label>
                  <div className="ipunutn3" style={{ padding: "0%" }}>
                    <input
                      type="text"
                      maxLength="256"
                      name="postalCode"
                      data-name="Postal Code"
                      value={profileData.courseid}
                      className="ayxdjpxv"
                      style={{ margin: "0", backgroundColor: "transparent", height: "100%"  , borderWidth: "0px", color: "white", flex: 1 }}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Profile;
