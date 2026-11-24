export const site = {
  name: 'Habeebu Rahman K C',
  title: 'Habeebu Rahman K C | Python Full-Stack Developer',
  url: 'https://habeeburahman.com',
  email: 'habeeburahman271@gmail.com',
  location: 'Calicut, Kerala, India',
  description:
    'Portfolio of Habeebu Rahman K C, a Python Full-Stack Developer working with Python, Django, Django REST Framework, React and PostgreSQL.',
  // Replace these with your real profile URLs and WhatsApp number before publishing.
  // Anything that still contains "YOUR_" is hidden automatically, so no dead links go live.
  github: 'https://github.com/YOUR_GITHUB_USERNAME',
  linkedin: 'https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/',
  whatsapp:
    'https://wa.me/91YOUR_PHONE_NUMBER?text=Hello%20Habeebu%2C%20I%20visited%20your%20portfolio.',
};

/** True once a placeholder such as YOUR_GITHUB_USERNAME has been replaced with a real value. */
export const isConfigured = (url: string) => !url.includes('YOUR_');

export const projects = [
  {
    slug: 'qiyammart',
    name: 'QiyamMart',
    type: 'Online supermarket',
    year: '2026',
    number: '01',
    accent: 'mint',
    quip: 'Yes, it sells groceries. No, it still cannot decide what you are cooking tonight.',
    summary:
      'A mobile-first online supermarket with a storefront, product catalogue, cart, checkout, order workflows, admin tools and offline billing.',
    contribution:
      'I worked on storefront and admin features, connected React pages to the API, wrote the product availability rules, helped troubleshoot the VPS and took part in the Android release workflow.',
    role: 'Software Developer Trainee · Qiyam Ventures',
    stack: [
      'React',
      'Vite',
      'Django REST Framework',
      'PostgreSQL',
      'Redis',
      'Django Channels',
      'Capacitor',
    ],

    screenshots: [
      {
        id: 'home',
        src: '/images/projects/qiyammart/homepage.webp',
        title: 'QiyamMart Homepage',
        label: '01 — STOREFRONT',
      },
      {
        id: 'orders',
        src: '/images/projects/qiyammart/order-tracking.webp',
        title: 'Order Tracking',
        label: '02 — TRACKING',
      },
      {
        id: 'delivery-dashboard',
        src: '/images/projects/qiyammart/delivery-partner-portal.webp',
        title: 'Delivery Partner Dashboard',
        label: '03 — DELIVERY PARTNER',
      },
      {
        id: 'admin-dashboard',
        src: '/images/projects/qiyammart/admin-dashboard.webp',
        title: 'Admin Dashboard',
        label: '04 — ADMIN PANEL',
      },
      {
        id: 'pos-offline-billing',
        src: '/images/projects/qiyammart/pos-offline-billing.webp',
        title: 'POS Offline Billing',
        label: '05 — OFFLINE BILLING',
      },
    ],
  },
  {
    slug: 'roopam',
    name: 'ROOPAM',
    type: 'Salon booking platform',
    year: '2026',
    number: '02',
    accent: 'gold',
    quip: 'Because nobody should have to phone a salon just to ask, “anything free after four?”',
    summary:
      'An appointment-booking platform where customers browse salon services, pick a professional and book a visit.',
    contribution:
      'I worked on the booking experience and on deployment, including the Nginx, Gunicorn and PostgreSQL hosting setup.',
    role: 'Full-stack development and deployment',
    stack: ['React', 'Vite', 'Django REST Framework', 'PostgreSQL', 'AWS Lightsail', 'Amazon RDS'],
  },
  {
    slug: 'waste-management',
    name: 'Waste Management System',
    type: 'Civic-service platform',
    year: '2025',
    number: '03',
    accent: 'blue',
    quip: 'Proof that even garbage needs a good schedule.',
    summary:
      'A role-based app that connects citizens, administrators and waste collectors through collection schedules, pickup requests and complaint tracking.',
    contribution:
      'I built the workflows for locality-based collection schedules, pickup requests, geotagged complaints, collector assignments and payment verification.',
    role: 'Full-stack project',
    stack: [
      'React 19',
      'Vite',
      'Django 6',
      'Django REST Framework',
      'SQLite',
      'JWT',
      'Google Maps',
      'Razorpay',
    ],
  },
  {
    slug: 'digital-voting',
    name: 'Digital Voting System',
    type: 'Academic project',
    year: '2025',
    number: '04',
    accent: 'violet',
    quip: 'Your face is the password. Sunglasses are not recommended.',
    summary:
      'A college project for online voting, with automatic vote counting and face-detection-based authentication.',
    contribution:
      'I built the Django voting application and experimented with face detection for the login step.',
    role: 'BCA project',
    stack: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap'],
  },
];

// Add only articles that have been personally written and reviewed before publishing.
export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  content: string;
};

export const posts: JournalPost[] = [
  
{
  slug: 'essential-commands-for-full-stack-developers',
  title: 'Essential Commands Every Full-Stack Developer Should Know',
  excerpt:
    'A practical reference to essential terminal, Git, React, Node.js, Python, Django, and database commands used in everyday full-stack development.',
  date: '2026-11-21',
  category: 'Development',
  readTime: '6 min read',
  tags: [
    'Full-Stack Development',
    'Terminal',
    'Linux',
    'Git',
    'React',
    'Node.js',
    'Python',
    'Django',
    'PostgreSQL',
  ],
  content: `
## Introduction

As a Full-Stack Developer, knowing programming languages and frameworks is not enough. We also need to understand the commands used to manage projects, install dependencies, run applications, work with databases, and deploy applications.

Here are some essential commands I use and want to keep as a quick reference during development.

## 1. Basic Terminal Commands

These commands help navigate and manage files and folders.

- **GET :** retrieve data
- **pwd :** Show the current working directory.
- **ls :** List files and folders.
- **cd folder :** Navigate into a folder.
- **cd .. :** Move to the parent directory.
- **mkdir folder :** Create a new directory.
- **touch file.txt :** Create a new file.
- **cp file1 file2 :** Copy a file.
- **mv file1 file2 :** Move or rename a file.
- **rm file.txt :** Delete a file.
- **clear :** Clear the terminal screen.

## 2. Git and GitHub Commands

Git helps track code changes and collaborate with other developers.

\`\`\`bash
git init
git clone <repository-url>
git status
git add .
git commit -m "Initial commit"
git push origin main
git pull origin main
git branch
git switch -c feature-name
git merge feature-name
git log
\`\`\`

Important commands:

- \`git clone\`: Download an existing repository.
- \`git status\`: Check modified and untracked files.
- \`git add .\`: Stage changes.
- \`git commit\`: Save changes in Git history.
- \`git push\`: Upload commits to a remote repository.
- \`git pull\`: Fetch and integrate remote changes.
- \`git switch\`: Change branches.

## 3. Node.js and React Commands

These commands are commonly used when working with React, Vite, and Node.js projects.

**Check versions**

\`\`\`bash
node -v
npm -v
\`\`\`

**Create and run projects**

\`\`\`bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
\`\`\`

**Manage dependencies**

\`\`\`bash
npm install axios
npm install react-router-dom
npm uninstall package-name
npm update
npm list
\`\`\`

**Build and preview**

\`\`\`bash
npm run build
npm run preview
\`\`\`

## 4. Python Commands

These commands are useful for Python backend development.

**Check Python and pip**

\`\`\`bash
python --version
pip --version
\`\`\`

**Create and activate a virtual environment**

\`\`\`bash
python -m venv venv

# Linux / macOS
source venv/bin/activate

# Windows PowerShell
.\venv\Scripts\Activate.ps1
\`\`\`

**Install and manage packages**

\`\`\`bash
pip install django
pip install -r requirements.txt
pip freeze > requirements.txt
pip list
pip uninstall package-name
\`\`\`

## 5. Django Commands

These are some of the most frequently used commands when developing Django applications.

\`\`\`bash
django-admin startproject config
python manage.py startapp myapp
python manage.py runserver
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py showmigrations
python manage.py collectstatic
\`\`\`

For Django REST Framework projects, remember to install:

\`\`\`bash
pip install djangorestframework
pip install djangorestframework-simplejwt
\`\`\`

## 6. PostgreSQL Commands

Basic PostgreSQL commands are useful when managing backend databases.

**Connect to PostgreSQL**

\`\`\`bash
sudo -u postgres psql
\`\`\`

**Useful SQL commands**

\`\`\`sql
CREATE DATABASE my_database;

CREATE USER my_user WITH PASSWORD 'password';

GRANT ALL PRIVILEGES ON DATABASE my_database TO my_user;

\\l
\\c my_database
\\dt

SELECT * FROM my_table;

\\q
\`\`\`

## 7. Linux Server and Deployment Commands

These commands are useful when deploying applications on Ubuntu VPS or Linux servers.

**Server information**

\`\`\`bash
whoami
hostname
df -h
free -h
top
ps aux
\`\`\`

**Service management**

\`\`\`bash
sudo systemctl status nginx
sudo systemctl restart nginx
sudo systemctl status postgresql
sudo systemctl restart redis
\`\`\`

**Check application ports and processes**

\`\`\`bash
sudo ss -tulpn
sudo lsof -i :8000
\`\`\`

**View logs**

\`\`\`bash
sudo journalctl -u myapp.service -f
sudo journalctl -u nginx -n 100
\`\`\`

## 8. Useful Network Commands

These commands help test APIs and troubleshoot connectivity.

\`\`\`bash
ping google.com
curl https://example.com
curl -I https://example.com
curl http://127.0.0.1:8000/api/
nslookup example.com
\`\`\`

- \`curl\`: Send HTTP requests and test APIs.
- \`ping\`: Check network connectivity.
- \`curl -I\`: Check HTTP response headers.
- \`nslookup\`: Check DNS resolution.

## Key Takeaways

A Full-Stack Developer should be comfortable with:

- Navigating files and directories using terminal commands.
- Managing source code using Git and GitHub.
- Installing dependencies and running React applications.
- Creating Python environments and managing packages.
- Running Django projects and database migrations.
- Managing PostgreSQL databases.
- Monitoring Linux servers and application services.
- Testing APIs and troubleshooting network issues.

## Conclusion

These commands are part of everyday full-stack development. Learning them helps make development, debugging, project management, and deployment easier.

This is a quick reference rather than a complete command manual. I will continue improving my command-line knowledge as I work on real-world projects.
  `,
},


  {
    slug: 'my-seo-learning-notes',
    title: 'Understanding SEO: My Learning Notes',
    excerpt:
      'My handwritten study notes on Search Engine Optimization, including keyword research, on-page SEO, off-page SEO and technical SEO.',
    date: '2026-11-20',
    category: 'Learning',
    readTime: '8 min read',
    tags: ['SEO', 'Keyword Research', 'On-Page SEO', 'Off-Page SEO', 'Technical SEO'],
    content: `
## Introduction

Recently, I started learning about Search Engine Optimization (SEO). I wrote these notes while studying the fundamentals of SEO, its different techniques, keyword research and the tools used to improve website visibility.

This article is a collection of what I have learned so far, organized from my handwritten study notes.

## What is SEO?

SEO stands for Search Engine Optimization. It is the process of improving a website to increase its visibility in search engine results and help users discover relevant content.

I divided my SEO studies into three main areas:

- On-Page SEO
- Off-Page SEO
- Technical SEO

## 1. On-Page SEO

On-page SEO focuses on optimizing individual pages and their content.

Some important areas I studied:

- **Title tags:** Create unique and descriptive page titles.
- **Meta descriptions:** Write meaningful descriptions for search results.
- **Heading structure:** Organize content using H1, H2 and H3 tags.
- **Keyword optimization:** Use relevant keywords naturally in page content.
- **Image optimization:** Add descriptive alt text and optimize images.
- **Internal linking:** Connect related pages within the website.
- **Quality content:** Create useful and relevant content.
- **URL structure:** Use short, readable and meaningful URLs.

### Keyword Optimization

Keywords should be included naturally in titles, headings and page content. Avoid adding too many keywords just to improve rankings.

### Image Optimization

Images should have descriptive file names and meaningful alt text. Image optimization also helps improve page loading performance.

### Internal Linking

Internal links connect different pages on the same website. They help users navigate the website and help search engines discover related pages.

## 2. Off-Page SEO

Off-page SEO focuses on activities outside a website that can help improve its reputation and visibility.

Topics from my notes include:

- Quality backlinks
- Social signals
- Online reputation
- Guest blogging

### Backlinks

Backlinks are links from other websites pointing to your website.

Quality matters more than quantity. Links from relevant and trustworthy websites are more useful than links from unrelated or low-quality websites.

Buying backlinks or using manipulative link-building techniques can create SEO risks.

### Guest Blogging

Guest blogging means publishing useful content on another website. It can help reach a new audience and build relationships with other websites.

## 3. Technical SEO

Technical SEO focuses on making a website easier for search engines to crawl and understand.

Important topics I studied:

- Website crawlability and indexability
- Mobile friendliness
- Website speed
- HTTPS security
- Robots.txt
- XML sitemap

### Robots.txt

The robots.txt file provides crawling instructions to search engine crawlers.

### XML Sitemap

An XML sitemap helps search engines discover important URLs on a website.

### Mobile Friendliness

Websites should work properly across mobile phones, tablets and desktops.

### Website Speed

Optimizing images, reducing unnecessary code and using efficient hosting can improve website performance.

### HTTPS Security

HTTPS protects the connection between a website and its visitors using SSL/TLS certificates.

## 4. Keyword Research

Keyword research is the process of identifying the search terms people use when looking for information, products or services.

The first step is understanding the audience and identifying the topics they are interested in.

### Types of Keywords

**Short-tail keywords**

- Usually one or two words.
- Broad search topics.
- Often have high search volume and competition.

**Long-tail keywords**

- Usually three or more words.
- More specific search queries.
- Can target a more focused audience.

### Search Intent

Search intent describes what a user wants to achieve when searching.

The four types I studied are:

1. **Informational:** The user wants information or an answer.
2. **Navigational:** The user wants to find a particular website or page.
3. **Commercial:** The user is researching products or comparing options.
4. **Transactional:** The user is ready to take action or make a purchase.

Understanding search intent helps create content that matches what users are actually looking for.

## 5. Local SEO

Local SEO helps businesses appear in location-based searches.

Some important practices from my notes:

- Create and optimize a Google Business Profile.
- Complete business information.
- Add relevant business photos and posts.
- Encourage genuine customer reviews.
- Maintain accurate business details.

Local SEO is especially useful for businesses that serve customers in a particular area.

## 6. SEO Tools

These are some tools I noted during my studies:

- Google Analytics
- Google Search Console
- Semrush
- Ahrefs
- Google Keyword Planner

They can help with website traffic analysis, keyword research, search performance and backlink analysis.

## 7. SEO Audit

An SEO audit helps identify problems that may affect a website's search visibility and user experience.

Some important checks include:

- Broken links
- Mobile friendliness
- Page speed
- Missing or duplicated metadata
- Website structure
- Technical issues

Regular audits help identify areas that need improvement.

## 8. Common SEO Mistakes

Some mistakes I noted that should be avoided:

- Keyword stuffing
- Ignoring mobile users
- Buying low-quality backlinks
- Publishing duplicate content
- Incorrect canonical tags

SEO should focus on providing useful content and a good experience rather than trying to manipulate search engines.

## Final Thoughts

These are my notes from studying the fundamentals of SEO. I have organized the topics I learned into one article so I can revisit them whenever I work on website development and optimization.

I still have a lot to learn, especially about applying these techniques to real projects and measuring their results.

Learning never really ends in web development. There is always something new to explore!
  `,
  },

  {
    slug: 'learning-react-js',
    title: 'My React JS Learning Journey',
    excerpt:
      'My learning journey with React JS — from components and JSX to hooks, API integration, Redux Toolkit, routing, and building interactive applications.',
    date: '2026-11-21',
    category: 'Development',
    readTime: '10 min read',
    tags: [
      'React',
      'JavaScript',
      'JSX',
      'React Hooks',
      'React Router',
      'Axios',
      'Redux Toolkit',
      'Frontend Development',
    ],
    content: `
## Introduction

I started learning React JS to understand how modern, interactive web applications are developed. React is a JavaScript library used to build user interfaces, especially single-page applications (SPAs).

During my learning sessions, I explored how React makes frontend development easier through reusable components, efficient UI updates, and a component-based architecture.

This journal contains the important concepts, practical examples, and activities covered during my React JS learning journey.

## 1. Understanding React JS

The first step was understanding what React is and why developers use it.

Some important features I studied:

- **Component-Based Architecture:** Dividing the user interface into small, reusable components.
- **Virtual DOM:** React uses an in-memory representation of the UI to calculate and apply necessary updates.
- **JSX:** Writing HTML-like syntax inside JavaScript.
- **One-Way Data Binding:** Data flows from parent components to child components.
- **Reusable UI:** Creating components that can be used in multiple places.
- **Large Ecosystem:** Using different libraries and tools available in the React community.

I also studied the differences between the Real DOM and Virtual DOM and compared traditional web applications with Single Page Applications.

## 2. Setting Up a React Project

Next, I learned how to create a React application using Vite.

The basic setup process:

**Step 1 – Install Node.js**

Check the installed versions:

\`\`\`bash
node -v
npm -v
\`\`\`

**Step 2 – Create a React application**

\`\`\`bash
npm create vite@latest myapp
\`\`\`

Select React and JavaScript during setup.

**Step 3 – Install dependencies**

\`\`\`bash
cd myapp
npm install
\`\`\`

**Step 4 – Start the development server**

\`\`\`bash
npm run dev
\`\`\`

I also explored the basic Vite project structure, including \`src\`, \`public\`, \`App.jsx\`, and \`main.jsx\`.

## 3. Components, JSX and Props

Components are reusable pieces of a React user interface.

I learned how to create functional components and organize an application into smaller parts such as:

- Navbar
- Header
- Footer
- Product Card
- Button
- Page Components

I also studied JSX and its rules, including returning a single parent element and using JavaScript expressions inside JSX.

Another important concept was **Props**.

Props allow a parent component to pass data to a child component. They make components reusable and dynamic.

## 4. State and Event Handling

I explored how React handles user interactions and dynamically updates the interface.

Important concepts included:

- Managing component state.
- Handling button clicks.
- Handling input changes.
- Updating UI based on user actions.
- Passing event handlers to components.

The \`useState\` hook was one of the most important topics because it allows functional components to store and update state.

## 5. React Hooks

I studied React Hooks and how they allow functional components to use state and other React features without class components.

Some of the hooks covered were:

- **useState:** Managing component state.
- **useEffect:** Handling side effects.
- **useRef:** Storing values without triggering re-renders and accessing DOM elements.
- **useLayoutEffect:** Reading layout information before the browser paints.
- **useCallback:** Memoizing functions.
- **useMemo:** Memoizing calculated values.
- **useReducer:** Managing complex state transitions.
- **Custom Hooks:** Reusing React logic across components.

I also explored the differences between useState and useReducer, and between useEffect and useLayoutEffect.

## 6. React Router and Navigation

I learned how to navigate between different pages without reloading the entire application.

Topics covered:

- BrowserRouter
- Routes
- Route
- Link
- NavLink
- useNavigate
- Dynamic Routing
- Nested Routing
- Outlet

I also explored how dynamic routing can be used to display individual user details and how nested routing can render child pages inside a parent layout.

## 7. Working with APIs

One of the most practical topics was connecting React applications with backend APIs.

I learned that an API acts as a communication layer between the frontend and backend.

I studied the main HTTP methods:

- **GET:** retrieve data
- **POST:** create or send data
- **PUT:** update existing data
- **PATCH:** partially update data
- **DELETE:** remove data

I practiced fetching data using the Fetch API and Axios.

I also explored:

- Async/await
- Displaying API data in components
- Sending data to APIs
- Updating and deleting records
- Handling API responses

## 8. Forms and Validation

I studied controlled components, where the input value is managed by React state.

Practical examples included:

- Registration forms
- Login forms
- Form input handling
- Form validation
- Submitting form data using Axios

This helped me understand how to build interactive forms and connect them with backend services.

## 9. Local Storage and Session Storage

I learned how browser storage can be used to store information as key-value pairs.

Important methods:

- \`setItem()\`
- \`getItem()\`
- \`removeItem()\`
- \`clear()\`

I also explored how to store JavaScript objects using \`JSON.stringify()\` and retrieve them using \`JSON.parse()\`.

Practical examples included saving login state and working with localStorage and sessionStorage.

## 10. Redux and Redux Toolkit

As applications become larger, managing state across multiple components can become difficult.

I studied Redux as a global state management solution and explored how Redux Toolkit simplifies its implementation.

Important concepts:

- Store
- Actions
- Reducers
- Dispatch
- Selectors
- createSlice()
- configureStore()
- useSelector()
- useDispatch()
- Provider

I also explored asynchronous operations using \`createAsyncThunk\`, including loading, success, and error states.

Practical activities included:

- Counter application using Redux Toolkit.
- Light and dark theme toggle.
- Fetching API data using createAsyncThunk.
- CRUD Todo application using Redux Toolkit.

## 11. Advanced React Concepts

I continued exploring more advanced concepts to understand React application performance and reusable logic.

Topics included:

- useRef and useLayoutEffect.
- useCallback and useMemo.
- useReducer and dispatch.
- State transitions.
- Custom Hooks.
- Reusable logic using useLocalStorage.

I also studied how memoization can help avoid unnecessary calculations and renders.

## 12. Practical Application

As part of the learning activities, I explored the structure of a simple application containing:

1. User Registration Page
2. Login Page
3. Home Page
4. Product Page
5. Cart Page
6. Logout functionality

The project also introduced concepts such as protected routes, product data management, and shared cart state using Context.

This helped connect individual React concepts into a practical application structure.

## Key Takeaways

Through these lessons, I gained a better understanding of:

- Building reusable interfaces with React components.
- Writing JSX and managing props.
- Managing state and user interactions.
- Using React Hooks.
- Creating page navigation with React Router.
- Connecting frontend applications to APIs using Axios.
- Handling forms and browser storage.
- Managing global application state using Redux Toolkit.
- Organizing React applications into maintainable structures.

## Conclusion

Learning React JS helped me understand how modern frontend applications are structured and developed.

The most valuable part of this learning journey was connecting theoretical concepts with practical activities. Concepts such as hooks, routing, API integration, and Redux Toolkit gave me a stronger foundation for developing full-stack applications.

I look forward to applying these concepts in real-world projects and continuing to improve my frontend development skills.
  `,
  },

  

{
  slug: 'learning-python-programming',
  title: 'My Python Programming Learning Journey',
  excerpt:
    'My journey of learning Python — from basic syntax, variables, and operators to functions, data structures, OOP, file handling, exception handling, and advanced concepts.',
  date: '2026-11-21',
  category: 'Development',
  readTime: '8 min read',
  tags: [
    'Python',
    'Programming',
    'OOP',
    'Data Structures',
    'Functions',
    'Exception Handling',
    'Backend Development',
  ],
  content: `
## Introduction

I started learning Python to build a strong foundation in programming and understand how applications are developed using Python.

Python is a high-level, interpreted programming language known for its simple syntax and readability. It is widely used in web development, automation, data science, artificial intelligence, and many other areas.

During my learning sessions, I explored Python fundamentals, operators, control flow, data structures, functions, file handling, and Object-Oriented Programming.

## 1. Python Fundamentals

I learned about Python's features, history, and applications.

Some important concepts included:

- Python was created by Guido van Rossum and released in 1991.
- High-level and interpreted language.
- Simple and readable syntax.
- Platform independent.
- Supports Object-Oriented Programming.
- Provides a large standard library.

I also learned how to install Python, configure VS Code, and write my first Python programs using \`print()\`.

## 2. Variables, Identifiers and Data Types

I explored how Python stores and manages information using variables.

Important topics:

- **Identifiers:** Names used for variables, functions, and classes.
- **Keywords:** Reserved words with special meanings.
- **Variables:** Containers used to store data.
- **Statements:** Instructions executed by Python.
- **Expressions:** Combinations of values and operators that produce results.

I also studied Python naming rules and basic data types such as strings, integers, floats, and booleans.

## 3. Python Operators

Operators are used to perform calculations, comparisons, and logical operations.

I studied different categories:

- **Arithmetic:** Addition, subtraction, multiplication, division, floor division, modulus, and exponentiation.
- **Assignment:** Assigning and updating variable values.
- **Relational:** Comparing values using operators such as ==, !=, >, and <.
- **Logical:** Using \`and\`, \`or\`, and \`not\`.
- **Identity:** Using \`is\` and \`is not\`.
- **Membership:** Using \`in\` and \`not in\`.
- **Bitwise:** Performing operations on binary values.

I also practiced small programs such as calculators, area calculations, and number comparisons.

## 4. Input, Output and Type Conversion

I learned how to receive information from users using \`input()\` and display results using \`print()\`.

An important concept was that \`input()\` returns a string by default.

Type conversion helps convert values into different data types.

Examples:

\`\`\`python
age = int(input("Enter your age: "))
price = float(input("Enter price: "))

print("Age:", age)
print("Price:", price)
\`\`\`

I also explored string operations and numeric data types.

## 5. Conditional Statements and Loops

I studied how Python makes decisions and repeats instructions.

**Conditional Statements:**

- if
- elif
- else
- Nested if

**Loops:**

- for loop
- while loop
- Nested loops

I also practiced loop control statements:

- **break:** Stops the loop.
- **continue:** Skips the current iteration.
- **pass:** Acts as a placeholder.

Practical exercises included number patterns, multiplication tables, factorials, Fibonacci series, and checking prime numbers.

## 6. Python Data Structures

I explored the main built-in data structures used to store collections of values.

- **List:** Ordered and mutable collection.
- **Tuple:** Ordered and immutable collection.
- **Set:** Collection of unique elements.
- **Dictionary:** Stores data in key-value pairs.

I practiced accessing, updating, adding, removing, and iterating through collection elements.

I also studied common operations and methods used with these data structures.

## 7. Functions in Python

Functions allow us to organize code into reusable blocks.

I studied:

- Built-in functions.
- User-defined functions using \`def\`.
- Lambda functions.
- Function parameters and return values.
- Local and global scope.
- Default, positional, and keyword arguments.
- Arbitrary arguments using \`*args\` and \`**kwargs\`.
- Recursive functions.

I also practiced creating reusable functions for calculations, validations, and other operations.

## 8. List Comprehension and Functional Tools

I learned how to create and process collections using shorter and reusable expressions.

Important topics:

- **List Comprehension:** Creating lists using a compact syntax.
- **Lambda:** Creating small anonymous functions.
- **map():** Applying a function to each element.
- **filter():** Selecting elements based on a condition.
- **reduce():** Combining elements into a single result.

These concepts helped me understand different ways to process collections in Python.

## 9. Modules and File Handling

I studied how Python modules help organize and reuse code.

Topics included:

- User-defined modules.
- Built-in modules.
- Importing modules.
- Math and statistics modules.
- Random and datetime modules.

I also learned file handling operations:

- Opening files using \`open()\`.
- Reading and writing files.
- Appending content.
- Working with file modes such as \`r\`, \`w\`, \`a\`, and \`x\`.
- Using \`with\` to manage files safely.

## 10. Exception Handling

Exception handling helps manage runtime errors without unexpectedly stopping a program.

I studied:

- try
- except
- else
- finally
- raise
- Built-in exceptions.
- Multiple exception handling.
- User-defined exception classes.

I also explored shallow copy and deep copy to understand how objects and nested data are copied.

## 11. Regular Expressions

I learned about Regular Expressions (Regex) and how Python's \`re\` module can be used for pattern matching and text processing.

Some important methods:

- \`match()\`
- \`search()\`
- \`findall()\`
- \`split()\`
- \`sub()\`

## 12. Object-Oriented Programming (OOP)

One of the important parts of my Python learning journey was understanding Object-Oriented Programming.

I studied how classes and objects help organize code and represent real-world entities.

Important concepts:

- **Class:** A blueprint for creating objects.
- **Object:** An instance of a class.
- **self:** A reference to the current object.
- **Constructor:** The \`__init__()\` method, which runs when an object is created.

I also explored instance variables, class variables, and different types of methods:

- Instance methods.
- Class methods.
- Static methods.

### Main OOP Principles

**Inheritance:** Allows one class to inherit properties and methods from another class.

Types covered:
- Single inheritance.
- Multiple inheritance.
- Multilevel inheritance.
- Hierarchical inheritance.
- Hybrid inheritance.

**Polymorphism:** Allows the same method or operator to behave differently depending on the object or data type.

**Encapsulation:** Protects internal data using access conventions and methods such as getters and setters.

**Abstraction:** Hides implementation details and exposes essential functionality using concepts such as abstract classes.

## 13. Generators, Iterators and Decorators

I also explored some advanced Python concepts.

- **Generators:** Produce values one at a time using \`yield\`, helping reduce memory usage.
- **Iterators:** Allow elements to be accessed one by one using \`__iter__()\` and \`__next__()\`.
- **Decorators:** Add functionality to existing functions without directly changing their code.

These topics helped me understand reusable logic and more advanced Python programming techniques.

## Key Takeaways

Through these lessons, I gained a better understanding of:

- Python syntax, variables, and data types.
- Operators and conditional statements.
- Loops and control flow.
- Lists, tuples, sets, and dictionaries.
- Functions and reusable code.
- Modules and file handling.
- Exception handling and regular expressions.
- Object-Oriented Programming.
- Generators, iterators, and decorators.

## Conclusion

Learning Python helped me build a strong foundation in programming and problem-solving.

The most valuable part of this journey was practicing concepts through small programs and exercises. Understanding functions, data structures, exception handling, and OOP gave me a better foundation for developing backend applications.

I look forward to applying these concepts in real-world projects using Python and Django.
  `,
},

];
