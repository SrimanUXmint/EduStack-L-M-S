import { useState ,useEffect} from "react";
import axios from 'axios';



const Signin = () => {
  useEffect(() => {
    const firsttime = async () => {
      try {
        const url = "http://165.232.185.65:8080/signup";
        await axios.post(url, {
        });
        console.log("Admin user created");
      } catch (error) {
        console.error("Error creating admin user", error);
      }
    };
    firsttime();
  }, []);
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");
 
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://165.232.185.65:8080/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);
      localStorage.setItem("userName", res.username);
      localStorage.setItem("userEmail", res.email);
      switch (res.role) {
        case 'admin':
          window.location = "/admin";
          break;
        case 'teacher':
          window.location = "/teacher";
          break;
        case 'student':
          window.location = "/";
          break;
        default:
          window.location = "/";
          break;
      }
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };


  return (
    <div className="q917rfkv" style={{ marginTop: "1px" }}>
      <div className="c2437m1m">
        <div className="iegwqvq9">
          <div className="qzu8e5zl">
            <h1 className="lq9t8ywg">Sign In</h1>
            <p className="etbmy3j0">
              Join me

              Unlock a world of knowledge and possibilities. Sign in now to access exclusive educational resources, interactive courses, and personalized learning experiences.
            </p>

            <div className="ymfdwfmv">
              <div className="oovk612b"></div>

              <div className="nu1zjh46"></div>
            </div>
            <form className="whsbw10e" onSubmit={handleSubmit}>
              <div className="eat6yoah">
                <label className="yg68876x">Username</label>
                <div className="kbpjjofz">
                  <input
                    type="name"
                    maxLength="256"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    required
                    placeholder="johndoe"
                    className="kbpjjo"
                  />
                </div>
              </div>
              <div className="xz7f3v9m">
                <label className="jkjhgp4m">Password</label>
                <div className="qk5ppt7d">
                  <input
                    type="password"
                    maxLength="256"
                    name="password"
                    placeholder="********"
                    className="kbpjjo"
                    required
                    value={data.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {error && <div className="error" style={{ width: "auto", padding: "15px", margin: "5px 0", fontSize: "14px", backgroundColor: "#f34646", color: "white", borderRadius: "5px", textAlign: "center" }}>{error}</div>}
              <div className="vl4q9c06">
                <input
                  type="submit"
                  value="Sign In"
                  data-wait="Please wait..."
                  className="qk5ppt7d"
                  style={{ color: "white" }}
                  onSubmit={handleSubmit}
                />
              </div>
            </form>
          </div>
          <div className="yxbslaim">
            <img
              src="https://assets-global.website-files.com/6649d9640e151c6ff17d76fc/664d0bfd96738d31ce7eb424_SVG_Euh8sJe.svg"
              alt=""
              className="nfwk4h2f"
            />
            <div className="t4t2kssr"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
