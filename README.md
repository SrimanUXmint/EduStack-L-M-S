<p align="center">
  <img src="https://th.bing.com/th/id/OIP.s6cxkhjVxE8a6dK_5luRjgHaEE?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7">
</p>
<p align="center">
  <a href="https://anubhavchaudhary.42web.io">
    <img src="https://uploads-ssl.webflow.com/64acfd314111bd7a3348ca67/64bc1d6c639b1ab02502dfbb_44f0ffa7f592917f963fda8b376aa547.png" 
     width="50px" height="50px">
  </a>
  <p align="center">Easy to use, open source, learning management system.</p>
</p>
<p align="center">
  <b>
    <a href="https://anubhavchaudhary.42web.io">Website</a> |
    <a href="">Documentation</a> | 
    <a href="">Roadmap</a>
  </b>
</p>

# EduStack-L-M-S
The MERN Stack Learning Management System (LMS) is a comprehensive platform designed for managing and delivering online courses, quizzes, assignments, and more. It serves as a real-world example of how to create a feature-rich LMS using cutting-edge technologies like  Node.js, Express.js, MongoDB,  Next.js 

### Screenshots

**1. A real landing page **

![Landing page](Screenshots/image.png)

**2. Admin dashboard**

![dmin dashboard](Screenshots/image-8.png)
**3. Admin leave tab**
![leave tab](Screenshots/image-2.png)
![2tab](Screenshots/image-3.png)
**4. Admin Attendance**

![admin attendance](Screenshots/image-4.png)
**5. Admin timetable**
![timetable](Screenshots/image-5.png)
![tab2](Screenshots/image-6.png)
![tab3](Screenshots/image-7.png)
**6. Admin Add student and teachers**
![add](Screenshots/image-9.png)

**7. Admin Add course and batch**
![add course](Screenshots/image-10.png)

**1. Teacher dashboard**

![teacher dasboard](Screenshots/image-11.png)
![tab2](Screenshots/image-12.png)
**2. Teacher Leave**
![leave](Screenshots/image-13.png)
![tab](Screenshots/image-14.png)
**3. Teacher Attendance**
![attendance](Screenshots/image-15.png)
**4. Teacher Timetable**
![timetable](Screenshots/image-16.png)
**5. Teacher course**
![tab1](Screenshots/image-17.png)
![tab2](Screenshots/image-18.png)
![tab3](Screenshots/image-19.png)

**1. Student dashboard**
![student](Screenshots/image-20.png)

**1. Student Profile**
![profile](Screenshots/image-21.png)

**1. Student Attendance**
![profile](Screenshots/image-22.png)
**1. Student timetable**
![timetable](Screenshots/image-23.png)
**1. Student course**
![course](Screenshots/image-24.png)
![coursepage](Screenshots/image-25.png)




## Features
1.Admin Dashboard

2.Admin Leave manger

3.Admin Attendance Manager

4.Admin Time table Manager

5.Admin Add student and teacher panel

5.Admin Add Course and batch panel

6.Teacher Dashboard

7.Teacher leave Apply 

8.Teacher Attendance manager

9.Teacher Timetable viewer

10.Teacher Add course content panel
 
 Add Quiz , Notice , Grade quiz

11.Student dashboard

12.Student Profile

13.Student Attendance viewer

13.Student Timetable viewer

14.Course viewer

Can view Notices , View quiz , Attempt quiz  , See grades

## Tech Stack


    "@fortawesome/free-solid-svg-icons": "^6.5.2",
    "@fortawesome/react-fontawesome": "^0.2.2",
    "axios": "^1.7.2",
    "bcrypt": "^5.1.1",
    "bcryptjs": "^2.4.3",
    "bootstrap": "^5.3.3",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.4.0",
    "react": "^18.2.0",
    "react-calendar": "^5.0.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.23.1",
    "styled-components": "^6.1.11"

## Demo & Credentials
Demo Link : https://www.ulearnpro.com/demo/

|    Username   |        Email ID        |   Password    |
| ------------- | ---------------------  | ------------- |
|    admin      | admin@gmail.com        |    admin      |
|    TUT1       | tut1@gmail.com         |    123        |
|    TUT2       | tut2@gmail.com         |    123        |
|    TUT3       | tut3@gmail.com         |    123        |
|    TUT4       | tut4@gmail.com         |    123        |
|    STU1       | stu1@gmail.com         |    123        |
|    STU2       | stu2@gmail.com         |    123        |
|    STU3       | stu3@gmail.com         |    123        |
|    STU4       | stu4@gmail.com         |    123        |



## Development

The project is organised as a mono-repo. It uses Npm workspaces for managing the mono-repo.

To set up the development environment, first clone the project on your local machine and `cd` to its diretory.

Now run the following commands from the root directory of the project.

```sh
# Install dependencies
npm install

# Build the packages
npm build

# Start the app
npm run dev
```

That's it! Now you can dive into the code base.
# Installation

- Clone the repo with

```bash
git clone https://github.com/Darkhunter674/EduStack-L-M-S.git
```

- install all dependancies

```bash
        "@fortawesome/fontawesome-free": "^6.5.2",
        "@fortawesome/free-solid-svg-icons": "^6.5.2",
        "@fortawesome/react-fontawesome": "^0.2.2",
        "axios": "^1.7.2",
        "bcrypt": "^5.1.1",
        "bcryptjs": "^2.4.3",
        "bootstrap": "^5.3.3",
        "cookie-parser": "^1.4.6",
        "cors": "^2.8.5",
        "express": "^4.19.2",
        "jsonwebtoken": "^9.0.2",
        "mongoose": "^8.4.0",
        "react": "^18.2.0",
        "react-calendar": "^5.0.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.23.1",
        "styled-components": "^6.1.11"
```

- Create database and edit server.cjs

```bash

mongoose.connect("mongodb://localhost:27017/Lms",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});
```

```bash
create database named 'Lms'
```

```bash
now you can able to sign in as admin using username and password
```
```bash
create 1 courses 
       2 batches
       3 then add teachers
       4 add students 
       5 now can easily use lms 
```
```bash
node server.cjs
```
```bash
npm run dev
```



Make sure your npm server is running

```bash

  VITE v5.2.11  ready in 662 ms

  ➜  Local:   http://localhost:5173/
```


# Connect with me

<div>
<a href="https://www.linkedin.com/in/anubhav-chaudhary-533a66248" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>
<a href="https://github.com/chaudharyanubhavsingh" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://www.instagram.com/chaudharyanubhavsinghh/?igshid=MjEwN2IyYWYwYw%3D%3D" target="_blank">
<img src= alt=Instagram style="margin-bottom: 5px; max-width:5%" />
</a>
</div>


