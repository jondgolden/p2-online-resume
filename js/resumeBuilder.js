// *BIO SECTION*
var bio = {
    "name" : "Jonathan Golden",
    "role" : "Designer & Developer",
    "welcomeMessage" : "Professional designer. Aspiring developer. Amateur napper.",
    "skills" : ["Design", "HTML", "CSS", "Collaboration"],
    "contacts" : {
        "mobile" : "(423) 284-8120",
        "email" : "jondgolden@me.com",
        "github" : "jondgolden",
        "twitter" : "@jonogolden",
        "location": "Cleveland, TN"
    },
    "biopic" : "images/me.jpg"
};

// *WORK SECTION*
var work = {
    "jobs" : [
        {
            "employer" : "Life Care Centers of America, Inc.",
            "title" : "Graphic Designer",
            "location" : "Cleveland, TN",
            "dates" : "September 2008 - present",
            "description" : "I provide art direction for quarterly magazine that is distributed nationwide. Designing marketing collateral which is in use at over 220 locations nationwide."
        },
        {
            "employer" : "Heritage Fellowship Church of God",
            "title" : "Technical Director",
            "location" : "Mcdonald, TN",
            "dates" : "December 2005 - present",
            "description" : "I supervise the audio/visual team and oversee all aspects of the production side of all services."
        }
    ]
};

// *PROJECTS SECTION*
var projects = {
    "projects" : [
        {
            "title" : "Life Matters",
            "dates" : "Every quarter beginning in 2011",
            "description" : "A quarterly magazine distributed nationwide.",
            "images" : ["images/lifematterscover.jpg"]
        },
        {
            "title" : "Leader",
            "dates" : "Yearly beginning in 2011",
            "description" : "A yearly special edition publication distributed nationwide.",
            "images" : ["images/leadercover.jpg"]
        }
    ]
};

// *EDUCATION SECTION*
var education = {
    "schools" : [
        {
            "name" : "The Art Institute of Pittsburgh",
            "location" : "Pittsburgh, PA",
            "degree" : "Certificate",
            "majors" : ["Visual Design"],
            "dates" : "2010 - 2011",
            "url" : "aionline.edu"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front-end Web Development",
            "school" : "Udacity",
            "dates" : "April 2015 - present",
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

bio.display = function () {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

  var formattedContactInfo = [];
  formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
  formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
  formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);

  if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      for (i in bio.skills) {
          $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }

  for(i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
  }
};

work.display = function () {

    if (work.jobs.length > 0) {

      $("#workExperience").append(HTMLworkStart);

      for (i in work.jobs) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

        $(".work-entry:last").append(formattedEmployerWorkTitle);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedDatesWorked);
        $(".work-entry:last").append(formattedWorkDescription);
      }

    }
};

projects.display = function () {

  if(projects.projects.length > 0) {
    for(i in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

      for(img in projects.projects[i].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        $(".project-entry:last").append(formattedProjectImage);
      }

    }
  }
};

education.display = function () {

  if(education.schools.length > 0 || education.onlineCourses.length > 0) {
    for(i in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
    };

    if(education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for(i in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
      }
    }

  }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
