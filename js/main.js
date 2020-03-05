// Section variables to be looped through

const about = $('.about-section');
const projectTitle = $('.projects-title');
const projectFirst = $('.project-1');
const projectSecond = $('.project-2');
const projectThird = $('.project-3');
const projectFourth = $('.project-4');
const projectFifth = $('.project-5');
const skills = $('.skills-section');
const contact = $('.contact-section');

// Array containing section variables
const sections = [about, projectTitle, projectFirst, projectSecond, projectThird, projectFourth, projectFifth, skills, contact];


// Loop through each element in the array, adding the visible class when its pixel position becomes less than the window's and removing the class when it becomes greater again
$(document).on("scroll", function () {
  const pageTop = $(document).scrollTop();
  const pageBottom = pageTop + $(window).height();
  for (let i=0; i < sections.length; i++) {
    const section = sections[i];
    if ($(section).position().top < pageBottom) {
      $(section).addClass("visible");
    } else {
      $(section).removeClass("visible");
    }
  }
});