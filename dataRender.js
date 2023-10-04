// contact details below
const contactDetails = [
  { img: "/Assets/call.png", url: "+917505480521" },
  { img: "/Assets/github.png", url: "https://github.com//Fayeemahmad398" },
  { img: "/Assets/mail.png", url: "https://mail.google.com/mail/" },
  {
    img: "/Assets/linkedin.png",
    url: "https://www.linkedin.com/in/fayeem-ahmad398/",
  },
];
const constactDetailsEle = document.querySelector(".contact-details");

const contactDetailsFunc = () => {
  constactDetailsEle.innerHTML = "";

  contactDetails.forEach((obj, i) => {
    constactDetailsEle.innerHTML += `
      <div class="platform">

      <img src=${obj.img} alt=""  class=${i == 2 ? "mailimg" : ""} />
      <a href=${obj.url}>
      ${obj.url}
      </a>
      </div>
`;
  });
};
contactDetailsFunc();
// ------------------------------

// institute details below
const instituteDetails = [
  {
    institute: "Bootcamp-Acciojob",
    course: "Full Statck Web Development Course",
    duration: "10/2022 – Present",
    location: "Remote,India",
  },
  {
    institute: "Delhi Institute of Engineering and Technology(AKTU)",
    duration: "07/2019 – 07/2022",
    location: "Meerut U.P, India",
    course:
      "Bachelor of Technology (B.Tech) in Mechanical Engineering - 7.4 CGPA -",
  },
  {
    institute: "Jamia Millia Islamia University",
    course: "Diploma in Mechanical Engineering - Percentage - 79.25%",
    duration: "07/2016 – 06/2019",
    location: "New Delhi,India",
  },
];

const instituteDetailsEle = document.querySelector(".educations-institute");
const instituteDetailsFunc = () => {
  instituteDetailsEle.innerHTML = "";

  instituteDetails.map((obj) => {
    instituteDetailsEle.innerHTML += `
<div class="educations">
<div class="institute">
  <h3>${obj.institute}</h3>
  <strong class="course">${obj.course}</strong>
</div>
<div class="duration">
  <strong>${obj.duration}</strong>
  <address>${obj.location}</address>
</div>
</div>

`;
  });
};

instituteDetailsFunc();
// --------------------------------------
// project details below

const projectsDetails = [
  {
    projectName: " 1.Typing Speed Test Website",
    arrowIcons: "/Assets/arrow-project.png",
    projectUrl: "https://typing-speed-booster.netlify.app/",
    techStacks: " Tech Stack - React, Javascript, Material UI, Firebase",
    points: {
      p1:
        "Implemented a multimode theme options typing test website with using <strong>Styled-Components JS library.</strong>",

      p2:
        "Used firebase to implement login/signup authentication and database to save data for better analysis <strong>(firestore).</strong>",
      p3: "User will be notified with  <strong>react-toastify.</strong>",
      p4:
        "User’s data are used to show the animated graph of latest typing speed analysis and progress of user then previous situation of himself/herself using tech <strong> Chart.js Js library.</strong>",
      p5:
        "Used various react hooks and context API to implement major functionalities <strong>(ReactJs).</strong>",
    },
  },
  {
    projectName: "2.E-Commerce Web App",
    projectUrl: "https://fayeemahmad398.github.io/shoppingApp/",
    techStacks: "HTML5, CSS3, JAVASCRIPT",
    arrowIcons: "/Assets/arrow-project.png",
    points: {
      p1:
        "Fully responsive user friendly interface with functionalities of filter the products on the basis of <strong>price,range,color,and size .</strong> ",

      p2:
        "User can search the products on the basis of category and title name with <strong>searching functionality.</storng>",
      p3:
        "User can see <strong>add to cart functionality with shipping information then checkout and pay through the trusted third party payment gateway Integration.</strong>.",
      p4:
        "Application fetching the data from fake store API and storing in Local Storage .",
        p5:"Solved the Complex DOM manupulation problems there "
    },
  },
];

const projectsDetailsEle = document.querySelector(".projects");

const projectsDetailsFunc = () => {
  projectsDetailsEle.innerHTML = "";

  projectsDetails.map((obj) => {
    projectsDetailsEle.innerHTML += `
  <div class="one-project">
            <div class="project-name">
              <div class="name-link">
                <h3>${obj.projectName}</h3>
                <a href=${obj.projectUrl}>
                  <img src=${obj.arrowIcons} alt="" />
                </a>
                <div class="tech-stacks">
                  ${obj.techStacks}
                </div>
              </div>
              <div>Aug 2023</div>
            </div>

            <div class="projects-points">
              <ul>
                <li>
                 ${obj.points.p1}.
                </li>
                <li>
                  ${obj.points.p2}.
                </li>
                <li>${obj.points.p3}.</li>
                <li>
                  ${obj.points.p4}.
                </li>
                <li>
                  ${obj.points.p5}.
                </li>
              </ul>
            </div>
          </div>

  
  
  `;
  });
};

projectsDetailsFunc();
