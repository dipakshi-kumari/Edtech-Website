// Sample course data (you can replace it with your own data)
const courses = [
    {
      title: 'Course 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      image: 'https://dtmvamahs40ux.cloudfront.net/gl-academy/course/course-1597-Group%202930.jpg',
    },
    {
      title: 'Course 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      image: 'https://dtmvamahs40ux.cloudfront.net/gl-academy/course/course-1597-Group%202930.jpg',
    },
  ];
  
  // Function to generate course cards dynamically
  function generateCourseCards() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';
  
    courses.forEach(course => {
      const card = document.createElement('div');
      card.classList.add('course-card');
  
      const image = document.createElement('img');
      image.src = course.image;
      image.alt = course.title;
      card.appendChild(image);
  
      const title = document.createElement('h3');
      title.textContent = course.title;
      card.appendChild(title);
  
      const description = document.createElement('p');
      description.textContent = course.description;
      card.appendChild(description);
  
      const enrollBtn = document.createElement('button');
      enrollBtn.classList.add('course-btn');
      enrollBtn.href = '#';
      enrollBtn.textContent = 'Enroll Now';
      card.appendChild(enrollBtn);
  
      courseList.appendChild(card);
    });
  }
  
  // Event listener to generate course cards on page load
  document.addEventListener('DOMContentLoaded', generateCourseCards);
  