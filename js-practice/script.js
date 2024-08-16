const resume = {
    "_id": "p09",
    "fullName": "Jyotika Kishor",
    "age": "56",
    "dob": "18/02/2004",
    "email": "jyotika.kishor_cs22@gla.ac.in",
    "linkedin": "https://www.linkedin.com/in/jyotika-kishor/",
    "contactNumbers": [
        {
            "type": "mobile",
            "label": "Primary Contact Number",
            "value": "7017445372"
        },
        {
            "type": "mobile",
            "label": "Secondary Contact Number",
            "value": "9812345631"
        },
        {
            "type": "mobile",
            "label": "WhatsApp Number",
            "value": "7017445372"
        }
    ],
    "currentAddress": {
        "houseNo": "13",
        "street": "",
        "cityName": "Agra",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "pincode": "282010"
    },
    "educationDetails": [
        {
            "degree": "highSchool",
            "boardName": "CBSE",
            "schoolName": "Gayatri Public School",
            "percentage": "88.2%",
            "year": "2020",
            "city": "Agra"
        },
        {
            "degree": "intermediate",
            "boardName": "CBSE",
            "schoolName": "Boston Public School",
            "percentage": "84.6%",
            "year": "2022",
            "city": "Agra"
        },
        {
            "degree": "bachelor",
            "university": "GLA University",
            "branch": "CSE",
            "year": "2022-2026",
            "city": "Mathura"
        }
    ],
    "skills": [
        {
            "skillCategory": "Programming Languages",
            "skillName": "C",
            "skillName": "Java",
            "skillName": "Python",
            "skillName": "HTML",
            "skillName": "Bash"
        },
        {
            "skillCategory": "Libraries/Frameworks",
            "skillName": "CSS",
            "skillName": "Javascript"
        },
        {
            "skillCategory": "Tools / Platforms",
            "skillName": "IntelliJ IDEA",
            "skillName": "Git",
            "skillName": "GitHub",
            "skillName": "WebStorm",
            "skillName": "PyCharm",
            "skillName": "MySQL",
            "skillName": "Postman",
            "skillName": "Operating Systems",
            "skillName": "API"
        },
        {
            "skillCategory": "Programming Languages",
            "skillName": "MySQL",
            "skillName": "SQL"
        }
    ],
    "experience": [
        {
            "companyName": "Bitmantics Solutions",
            "role": "Software Developer",
            "duration": "6 Months",
            "mode": "Remote",
            "city": "Bengaluru, India",
            "description": "As a Software Development Intern, I am actively contributing to both frontend and backend development, contributing to the creation of robust and e cient software solutions. Additionally, exploring and implementing the latest technologies to enhance my skills and contribute effectively to the team's projects."
        }
    ],
    "projects": [
        {
            "projectTitle": "Unified content manager",
            "projectTech": "HTML5, CSS, JavaScript, Angular, Node.js, MongoDB, Git, GitHub, JetBrains tools, Docker, Kubernetes, Google Cloud Platform, Jest, Postman",
            "projectDescription": "Currently working on a project to create a platform to save links and manage online content like a pro."
        },
        {
            "projectTitle": "WeatherWise",
            "projectTech": "HTML, CSS, JavaScript, React.js, API, WebStorm, Git, GitHub",
            "projectDescription": "Crafted a dynamic weather app, integrating real-time data to provide accurate forecasts, reflecting strong problem-solving skills and a keen eye for detail in software development."
        }
    ],
    "certifications": [
        {
            "certificationName": "Postman API Fundamentals Student Expert",
            "certificationAuthority": "Postman",
            "certificationDate": "2021",
            "certificationLink": "https://badgr.com/public/assertions/kb5mw7lnTLu3_nfZfXoAkw?identity__email=jyotika.kishor_cs22@gla.ac.in"
        },
        {
            "certificationName": "Hackerrank Java",
            "certificationAuthority": "Hackerrank",
            "certificationDate": "2021",
            "certificationLink": "https://www.hackerrank.com/certificates/b8de4dd55cd9"
        }
    ]
}

console.log(resume);
console.log(resume.educationDetails);
console.log(resume['currentAddress']);
console.log(resume.educationDetails.degree);
console.log(resume.educationDetails[0].degree);
console.log(resume.educationDetails[0].degree[2]);
const resumePreTag = document.getElementById("resume");
console.log(resumePreTag);

resumePreTag.innerText = JSON.stringify(resume, null, 2);

console.log(resume.contactNumbers[0]);
console.log(resume.contactNumbers[2].label);


// let contactNumbers = resume.contactNumbers;
// console.log(contactNumbers);

// const contactNumbers = resume.contactNumbers;
// console.log(contactNumbers);

var contactNumbers = resume.contactNumbers;
console.log(contactNumbers);
var contactNumbers = resume.contactNumbers;
console.log(contactNumbers);

const fullName = "sam"
// fullName = "sam";