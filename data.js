let posts = [
    { 
      id: 1, 
      title: 'Introduction to Blogging', 
      content: 'Blogging is a fantastic way to share your thoughts and ideas with the world. In this post, we will explore the basics of blogging and why it has become such a popular medium for communication.', 
      date: '2022-01-01', // Date format: YYYY-MM-DD
      author: 'John Doe' 
    },
    { 
      id: 2, 
      title: 'The Art of Writing', 
      content: 'Writing is a craft that requires skill and dedication. In this post, we\'ll delve into the art of writing, discussing techniques, tips, and the creative process that goes into crafting compelling content.', 
      date: '2022-02-15',
      author: 'Jane Smith'
    },
    { 
      id: 3, 
      title: 'Web Development Tips and Tricks', 
      content: 'Are you interested in web development? In this post, we\'ll share some valuable tips and tricks to enhance your web development skills. From front-end technologies to back-end frameworks, we\'ve got you covered.', 
      date: '2022-03-20',
      author: 'Alex Johnson'
    },
    { 
      id: 4, 
      title: 'Exploring Node.js and Express', 
      content: 'Node.js and Express are powerful tools for building scalable and efficient web applications. Join us on a journey as we explore the fundamentals of Node.js and how to use Express to create robust server-side applications.', 
      date: '2022-04-10',
      author: 'Chris Williams'
    },
    { 
      id: 5, 
      title: 'Mastering CSS Flexbox', 
      content: 'CSS Flexbox is a layout model that allows you to design complex web layouts with ease. In this post, we\'ll master the art of using Flexbox, covering its properties and real-world examples.', 
      date: '2022-05-05',
      author: 'Emily Davis'
    },
    { 
      id: 6, 
      title: 'JavaScript ES6: The Future of Web Development', 
      content: 'ECMAScript 6 (ES6) introduced several new features to JavaScript, making it more powerful and expressive. Learn about arrow functions, template literals, and other ES6 features that are revolutionizing web development.', 
      date: '2022-06-12',
      author: 'Mike Anderson'
    },
    { 
      id: 7, 
      title: 'Building Responsive Websites with Bootstrap', 
      content: 'Bootstrap is a popular front-end framework that simplifies the process of building responsive and mobile-friendly websites. Discover how to leverage Bootstrap\'s grid system, components, and utilities in this post.', 
      date: '2022-07-30',
      author: 'Sophie Clark'
    },
    { 
      id: 8, 
      title: 'The Importance of UX/UI Design', 
      content: 'User experience (UX) and user interface (UI) design play a crucial role in creating successful websites and applications. Explore the principles and best practices of UX/UI design in this informative post.', 
      date: '2022-08-18',
      author: 'Daniel Lee'
    },
    { 
      id: 9, 
      title: 'Getting Started with React.js', 
      content: 'React.js is a JavaScript library for building user interfaces. Whether you\'re a beginner or experienced developer, this post will guide you through the basics of React.js and its component-based architecture.', 
      date: '2022-09-22',
      author: 'Eva Martinez'
    },
    { 
      id: 10, 
      title: 'Diving into API Development with Express', 
      content: 'Building a robust API is essential for creating dynamic and interactive web applications. Learn the ins and outs of API development using Express.js, Node.js, and RESTful principles in this comprehensive post.', 
      date: '2022-10-05',
      author: 'Brian Wilson'
    },
    // Add more posts as needed
  ];
  
  
  
module.exports = {
    getPosts: () => posts,
    getPostById: (id) => posts.find(post => post.id === parseInt(id)),
  };
  