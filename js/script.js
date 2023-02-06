const popupcontainer = document.createElement('section');
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header-desktop');
const crossicon = document.querySelector('.cross-icon');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const portfolio = document.getElementById('portfolio');

const Works = [
  {
      title: 'e-Visa',
      description: "The Ethiopian government's e-visa system allows travelers to apply for and receive authorization to enter Ethiopia via the internet. Foreigners can apply for and receive visas entirely online. This eliminates the need to visit an embassy or consulate in person, saving travelers time and money. Additionally, e-visa help to process visas more quickly than traditional visas. The system offers high level of security, as the process of applying for one involves submitting personal information and passport details online. This information is then verified by the issuing authority to ensure that the applicant is who they claim to be.",
      imageUrl: './images/project_images/evisa.jpg',
      technologies: ['.Net 6', 'Entity Framework', 'React', 'Redux', 'JavaScript', 'MSSQL', 'Azure', 'Microservices'],
      liveVersion: 'https://www.evisa.gov.et/',
      source: 'https://github.com/Agetuni/evisa',
  },
  {
      title: 'Procurement System',
      description: "Ethiopian Airlines Group's e-procurement system automates the manual process such as creating purchase orders and sending invoices. This can help to reduce errors and increase efficiency. Another important feature of this system is the ability to easily access and manage supplier information. This includes information such as contact details, pricing, and delivery times. The system can also help full to create and manage purchase orders, track deliveries, and generate reports. The System increased transparency. By using electronic means to purchase goods and services, Ethiopian Airlines can more easily track and monitor the purchasing process. This can help to identify any issues or problems that may arise and take steps to address them.",
      imageUrl: './images/project_images/eprocuremnt.jpg',
      technologies: ['.Net 6', 'Entity Framework', 'React', 'Redux', 'JavaScript', 'MSSQL', 'Azure', 'Power Apps'],
      liveVersion: 'https://eprocurement.ethiopianairlines.com/',
      source: 'https://github.com/Agetuni/eprocument',
  },
  {
      title: 'e-Learning',
      description: "Ethiopian Aviation academy's e-learning system allows students to access course materials and complete assignments at their own pace, on their own schedule. This is particularly beneficial for students who have busy schedules or who live in remote areas. Another benefit of this system is that it is more cost effective than traditional classroom-based learning. It does not require physical classrooms, textbooks, or other materials, which can significantly reduce costs. Additionally, e-learning systems often offer a wider range of courses than traditional classroom-based learning, which can also help to reduce costs.",
      imageUrl: './images/project_images/elearning.jpg',
      technologies: ['Moodle', '.Net 5', 'Entity Framework', 'React', 'Redux', 'JavaScript', 'MSSQL', 'Azure'],
      liveVersion: 'http://learning1.ethiopianairlines.com/',
      source: 'https://github.com/ABDULALI3468/bookMe-frontend',
      souceExist: false,
  },
  {
      title: 'Library Managment System',
      description: 'The Ethiopian Aviation Academy library management system automates many of the tasks that are typically done manually in a library. For example, an LMS can be used to keep track of which books and other materials are checked out, when they are due to be returned, and who has them. This allows librarians to quickly and easily see which materials are available and which are not, as well as who has checked out a particular item. Another important feature of this system is its ability to help librarians manage and organize library collections. This can include tasks such as cataloging new materials, classifying items by subject or genre, and creating bibliographic records. It can also be used to track and manage the acquisition of new materials, including ordering, receiving, and paying for items.',
      imageUrl: './images/project_images/library.jpg',
      technologies: ['KOHA', 'PHP', 'Rails', 'React', 'MySQL', 'Linux', 'Azure'],
      liveVersion: 'https://docs.google.com/document/d/1cjc4ivUQjxWYwR7EvY6sxU0oQAC2EEOK6vAXw5kdn7s/edit?usp=sharing',
      source: 'https://github.com/Agetuni/libraryManagmentSystem',
  },
  {
      title: 'Training Managment Service',
      description: 'Ethiopian Aviation academy’s training management system helps the academy to manage and track trainee and employee training. It is designed to streamline the entire training process, from creating and scheduling training programs to track employee progress and completion. One of the key features of this system is its ability to create and manage training programs. This can include creating and scheduling classes, managing instructor schedules, and tracking attendance. Another important feature of this system is its ability to track employee progress and completion. This can include tracking attendance, test scores, and completion of training materials. This information can be used to identify areas of improvement and to monitor employee performance.',
      imageUrl: './images/project_images/tms.jpg',
      technologies: ['ASP.NET', 'MVC', 'C#', 'PostgreSQL', 'Azure'],
      liveVersion: 'https://eaatms.ethiopianairlines.com/',
      source: 'https://github.com/Agetuni/https://github.com/Agetuni/training_managment_system',
  },
  {
      title: 'Legal Cases Monitoring system',
      description: 'This system is developed to help law firms and legal departments of Ethiopian airlines to  manage their cases more efficiently. It is a powerful tool that can streamline the legal process, increase productivity, and improve communication between team members. One of the key features of this system is its ability to store and organize all case-related information in one central location. This includes documents, emails, notes, and other relevant files. This allows for easy access and retrieval of information, which can save time and reduce the risk of errors.',
      imageUrl: './images/project_images/legal.jpg',
      technologies: ['ASP.NET', 'MVC', 'C#', 'JQuery', 'MSSQL'],
      liveVersion: 'https://docs.google.com/document/d/1HE8eg3M5ifUGWbx6t-M67z-LcKbMBOr3nWP08V-prjE/edit?usp=sharing',
      source: 'https://github.com/Agetuni/lega_case_managment_system',
  },
  {
      title: 'Space travelers (personal)',
      description: 'This is an app in wich you can reserve a tour to space and  show all your reserved tours. How this App works is like when you run the app you will see the screen with all available space ships from SpaceX. Then you can reserve any number of available tours and cancel the reservation anytime. ',
      imageUrl: './images/project_images/space.jpg',
      technologies: ['React', 'Redux', 'Space-X API', 'Bootstrap'],
      liveVersion: 'https://bookspacehub.netlify.app/',
      source: 'https://github.com/Agetuni/SpaceTravlersHub',
  },
];

const popup = (name, img, desc, tech, liveVersion, projectSource, index) => {
  popupcontainer.classList.add('mobile-popup-container');
  popupcontainer.setAttribute('data-visible', 'false');
  popupcontainer.classList.add('display-none');

  popupcontainer.innerHTML = `
  <div class="icon-image">
    <div class="back-cross">
      <img class="cross-popup-icon" src="images/cross-icon.png" alt="" />
    </div>
    <div class="popup-image">
      <img src=${img} />
    </div>
  </div>
  <div class="title-and-tech">
    <div>
      <h1 class="popup-title">${name}</h1>
    </div>
    <div>
      <ul class="popup-tech tech-list-${index}">
      </ul>
    </div>
  </div>
  <div class="popup-description">${desc}</div>
  <div class="popup-buttons">
    <div class="live-button">
      <a class="live" target="_blank" href=${liveVersion}>
        See Live
      </a>
      <img src="images/live-icon.svg" alt="" />
    </div>
    <div class="live-button ml">
      <a class="live" target="_blank" href=${projectSource}>
        See Source
      </a>
      <img src="images/source-icon.svg" alt="" />
    </div>
  </div>
  `;

  document.body.appendChild(popupcontainer);

  const techContainer = document.querySelector(`.tech-list-${index}`);
  tech.forEach((tec) => {
    techContainer.innerHTML += `<li class="popup-tech-li">${tec}</li>`;
  });

  const divbackcross = document.querySelector('.cross-popup-icon');
  document.addEventListener('click', (event) => {
    const popup = document.querySelector('.mobile-popup-container');
    const visibility = popup.getAttribute('data-visible');
    if (event.target.closest('.mobile-popup-container')) return;
    if (visibility === 'true') {
      popup.setAttribute('data-visible', 'onRight');
    }
    document.body.style.overflow = 'auto';
  });

  divbackcross.addEventListener('click', () => {
    const popup = document.querySelector('.mobile-popup-container');
    const visibility = popup.getAttribute('data-visible');
    const techDiv = popup.querySelector('.title-and-tech');
    const popupTech = popup.querySelector('.popup-tech');

    if (visibility === 'true') {
      popup.setAttribute('data-visible', 'onRight');
    }

    setTimeout(() => {
      techDiv.childNodes.forEach((tech) => {
        techDiv.removeChild(tech);
      });
      techDiv.parentElement.removeChild(techDiv);

      popupTech.childNodes.forEach((tech) => {
        popupTech.removeChild(tech);
      });
      popupTech.parentElement.removeChild(popupTech);

      // remove children elements...
      popup.childNodes.forEach((child) => {
        popup.removeChild(child);
      });
      popup.parentElement.removeChild(popup);
      popup.setAttribute('data-visible', 'false');
    }, 200);
    document.body.style.overflow = 'auto';
  });
};

const createPopup = () => {
  const storybutton = document.querySelectorAll('.seepr-button');

  for (let i = 0; i < storybutton.length; i += 1) {
    storybutton[i].addEventListener('click', () => {
      popup(Works[i].title, Works[i].imageUrl, Works[i].description,
        Works[i].technologies, Works[i].liveVersion, Works[i].source, i);
      const popupcontainer = document.querySelector('.mobile-popup-container');
      popupcontainer.classList.remove('display-none');
      popupcontainer.classList.add('display-flex');
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        const visibility = popupcontainer.getAttribute('data-visible');
        if (visibility === 'false') {
          popupcontainer.setAttribute('data-visible', 'true');
        }
      }, 50);
    });
  }
};

function cards (name, technologies, img, index) {
  const gridContainer = document.querySelector('.grid');

  gridContainer.innerHTML += `
  <div class="stories-card" style='background-image: url(${img});'>
    <div class="white-back">
      <h3 class="card-title">${name}</h3>
      <ul class="list technologies-list-${index}">
      </ul>
      <p class="seepr-button">See Project</p>
    </div>
  </div>`;

  const technologiesContainer = document.querySelector(`.technologies-list-${index}`);

  technologies.forEach((tech) => {
    technologiesContainer.innerHTML += `<li class="lang-name">${tech}</li>`;
  });
}

const cardCreator = (projects) => {
  for (let i = 0; i < projects.length; i += 1) {
    cards(projects[i].title, projects[i].technologies, projects[i].imageUrl, i);
  }
};

hamburger.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  const visibility = header.getAttribute('data-visible');
  if (visibility === 'false') {
    header.setAttribute('data-visible', 'true');
  } else if (visibility === 'true') {
    header.setAttribute('data-visible', 'false');
  }
});

crossicon.addEventListener('click', () => {
  header.setAttribute('data-visible', 'onRight');
  setTimeout(() => {
    header.setAttribute('data-visible', 'false');
  }, 400);
  document.body.style.overflow = 'auto';
});

portfolio.addEventListener('click', () => {
  header.setAttribute('data-visible', 'false');
  document.body.style.overflow = 'auto';
});

about.addEventListener('click', () => {
  header.setAttribute('data-visible', 'false');
  document.body.style.overflow = 'auto';
});

contact.addEventListener('click', () => {
  header.setAttribute('data-visible', false);
  document.body.style.overflow = 'auto';
});

window.addEventListener('load', () => {
  cardCreator(Works);
  createPopup();
});
