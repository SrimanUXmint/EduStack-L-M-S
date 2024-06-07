
import Coursetemplate from './coursetemplate';
import Quizes from './quizes';
const Course=()=> {
  
  const data = [
    {
      name: 'John Doe',
      image: 'https://assets-global.website-files.com/6649d9640e151c6ff17d76fc/664d13eba01d0c748099af61_learning-management-systems-the-advantages.jpg',
      courseId: 'CS101',
      teacherName: 'Dr. Smith',
    },
    {
      name: 'Jane Smith',
      image: 'https://assets-global.website-files.com/6649d9640e151c6ff17d76fc/664d13eba01d0c748099af61_learning-management-systems-the-advantages.jpg',
      courseId: 'ENG201',
      teacherName: 'Prof. Johnson',
    },
    
    // Add more data as needed
  ];
  const quizes=[{quiztime:"10:00",quizname:'Quiz 1'}];
  return (
    <>
     <div>
        <div className="hqu6j3os">
          <div className="ij6mk5pj">
            <div className="jmcs0gbx">
              <div className="gyc3f8q6">
                <div className="zzxrsn6l">
                  <div className="fm5eardc">
                  <Coursetemplate coursedata={data} />
                    
                  </div>
                 
                </div>
                <div className="t7dfxse1">
                  <h4 className="u006f4f1">Upcoming quiz</h4>                        
                    <Quizes quizdata={quizes}/>
                </div>
              </div>

            </div>
          </div>
          </div>
          </div>
    </>
  )
}
export default Course;