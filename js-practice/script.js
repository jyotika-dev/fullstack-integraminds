const resume = {
    "_id": "p09",
    "fullName": "Jyotika Kishor",
    "age": "56",
    "dob": "18/02/2004",
    "email": "jyotika.kishor_cs22@gla.ac.in",
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
            "year": "2020"
        },
        {
            "degree": "intermediate",
            "boardName": "CBSE",
            "schoolName": "Boston Public School",
            "percentage": "84.6%",
            "year": "2022"
        },
        {
            "degree": "bachelor",
            "university": "GLA University",
            "branch": "CSE",
            "year": "2022-2026"
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