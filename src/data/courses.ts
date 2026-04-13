export type Course = {
  id: number;
  title: string;
  overview: string;
  objectives: string[];
  category: string;
};

export const CATEGORIES = [
  "All",
  "Leadership & Management",
  "Communication",
  "Sales & Marketing",
  "HR & Talent",
  "Finance & Business",
  "Safety & Compliance",
  "Project Management",
  "Personal Development",
  "Training & Facilitation",
  "Technology & Digital",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const COURSES: Course[] = [
  {
    "id": 1,
    "title": "Accounting Skills for New Supervisors",
    "overview": "Many of us flinch when we hear terms like depreciation, cash flow, balance sheet, and (worst of all!) budgets. However, these are all important concepts to understand if you’re going to succeed in today’s business world, particularly as a supervisor. Even better, financial terms are not as scary as they seem!",
    "objectives": [
      "Describe the art of finance and financial management Explain key financial terms",
      "Determine your role in company finances",
      "Find the rules and regulations for your area and industry",
      "Discuss various types of financial reports, including income statements, balance sheets, cash flow statements, and statements of retained earnings",
      "Explain how a chart of accounts is created",
      "Tell the difference between cash and accrual accounting Explain single-entry and double-entry bookkeeping Differentiate between debits and credits",
      "Identify and analyze important financial data Make financial decisions",
      "Read annual reports",
      "Determine whether a company is financially high or low risk Recognize different types of organizational financial plans Explain what budgets are and how to prepare them",
      "Recognize what computer skills you need to make you a financial whiz Deal with financial situations that impact the people that work for you"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 2,
    "title": "Active Listening",
    "overview": "Communication skills are at the heart of everything we do each day, whether at home, at work, or at play. Active listening encompasses the best of communication, including listening to what others are saying, processing the information, and responding to it in order to clarify and elicit more information. This course will help participants develop and practice their active listening skills.",
    "objectives": [
      "Define active listening and its key components Identify ways to become a better listener",
      "Use body language to reflect a positive listening attitude",
      "Understand the difference between sympathy and empathy, and when each is appropriate",
      "Create a listening mindset using framing, positive intent, and focus Be genuine in your communications",
      "Understand the communication process",
      "Ask questions, probe for information, and use paraphrasing techniques Build relationships to create an authentic communication experience Identify common listening problems and solutions"
    ],
    "category": "Communication"
  },
  {
    "id": 3,
    "title": "Advanced Project Management",
    "overview": "It’s easy to forget the “manager” part of your “project manager” title among the other range of activities you are responsible for. However, your management skills are an important part of your success as a project manager, so it is crucial that you grow both of those skill sets. There are also some advanced project management techniques that you can master to help bring your projects to successful completion. This course presumes that students have a thorough understanding of project management, including topics such as preparing a statement of work, setting project goals, scheduling, budgeting, managing project risks, and executing a project.",
    "objectives": [
      "Think critically when choosing a project team Make the best of an assigned project team",
      "Help teams move through various stages to become a high-functioning unit Maximize productivity at team meetings",
      "Reward and motivate your team",
      "Develop and execute a communication plan",
      "Communicate with sponsors and executives more effectively Identify strategies for working with problem team members"
    ],
    "category": "Finance & Business"
  },
  {
    "id": 4,
    "title": "Advanced Skills for the Practical Trainer",
    "overview": "Behind every spectacular training session is a lot of preparation and meticulous attention to detail. The truly skilled trainer can make a program exciting. The learners will have fun while they are learning if the facilitator is able to involve their emotions as well as their minds. You will see the involvement, and you will feel the energy. To reach this stage as an adult educator isn’t always easy, but success isn’t just for the naturally gifted. It is possible for all of us who put effort into our personal growth and development. We want the enormous satisfaction that comes from working with others to help them reach their potential as human beings. This course will help you reach that goal.",
    "objectives": [
      "Demonstrate your understanding of learning styles and how to accommodate all four learning styles in the classroom",
      "Apply the key principles of effective communication in a workshop setting Use a variety of training techniques to stimulate participation",
      "Develop a plan and prepare for an effective training session Explain the different levels of evaluation and when to use each Identify advanced interventions for difficult situations",
      "Put your skills to work for a training presentation"
    ],
    "category": "Personal Development"
  },
  {
    "id": 5,
    "title": "Advanced Writing Skills",
    "overview": "This course is for those who already are good writers. Our time will be devoted to writing letters of recommendation, of persuasion, of refusal, or of action, that reflect current word usage and up-to-date formats. You can also learn some basics about writing business cases, proposals, and reports.",
    "objectives": [
      "Make your writing clear, complete, concise, and correct Improve sentence construction and paragraph development Deal with specific business requests",
      "Create effective business cases, proposals, and reports Thoroughly document sources that you use in your writing"
    ],
    "category": "Communication"
  },
  {
    "id": 6,
    "title": "An Environmental Audit Primer",
    "overview": "This course provides participants with the knowledge and skills to conduct internal environmental audits. Practical, proven techniques for planning, conducting, and reporting on internal environmental audits will be introduced. Role-plays and case studies based on actual audits will be used to reinforce the concepts and provide participants with practice in applying the principles to situations typically encountered during internal auditing.",
    "objectives": [
      "Explain the different types of audits and the levels of auditing available. Know the qualifications of auditors and the preparation that they need to conduct an audit.",
      "Understand the basics steps in an audit and how auditors gather information and evidence.",
      "Develop open-ended questions which will help in audit interviews. Understand the essential aspects of an audit checklist.",
      "Develop an audit checklist based on EMS procedures. Prepare for an audit.",
      "Use an Internal Audit Noncompliance and Corrective Action Report to record non-conformances.",
      "Understand the corrective action process and its importance in closing out non- conformances.",
      "Gain experience in conducting an audit closing meeting."
    ],
    "category": "Safety & Compliance"
  },
  {
    "id": 7,
    "title": "Anger Management – Understanding Anger",
    "overview": "Anger is a universal experience. Dogs get angry, bees get angry, and so do humans. You don’t have to be a psychologist to know that managing anger productively is something few individuals, organizations, and societies do well. Yet research tells us that those who do manage their anger at work are much more successful than those who don’t. The co-worker who can productively confront his teammate about his negative attitude increases his team’s chance of success as well as minimizes destructive conflicts. The customer service agent who can defuse the angry customer not only keeps her customers loyal but makes her own day less troublesome. This course is designed to help give you and your organization that edge.",
    "objectives": [
      "Recognize how anger affects your body, your mind, and your behavior",
      "Use the five-step method to break old patterns and replace them with a model for assertive anger",
      "Use an anger log to identify your hot buttons and triggers",
      "Control your own emotions when faced with other peoples’ anger",
      "Identify ways to help other people safely manage some of their repressed or expressed anger",
      "Communicate with others in a constructive, assertive manner"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 8,
    "title": "Appreciative  Inquiry",
    "overview": "Do you love those moments of exception, when everything seems to have come together and things are working beautifully? Would you like to create an environment where those rare extraordinary moments become the norm? Then you may just be  ready to learn the value of Appreciative Inquiry, also known as AI. AI is a method for implementing change that is rooted in being positive, sharing stories of things that work well, and leveraging people’s strengths and the power of co-creation to initiate lasting, powerful changes that can make an organization the best it has ever been, because of people who care and are committed.",
    "objectives": [
      "Recognize and work with the fundamentals of Appreciative Inquiry Describe the 4-D’s of Appreciative Inquiry: discovery, dreaming, design, and destiny Work through a simple Appreciative Inquiry process",
      "Create thoughtful, meaningful questions for your own Appreciative Inquiry initiative",
      "Help organizations review what’s important, what they can become, and how they can get there"
    ],
    "category": "Safety & Compliance"
  },
  {
    "id": 9,
    "title": "Balanced Scorecard Basics",
    "overview": "Over the past several decades, organizations have come to realize that success cannot only be measured in dollars and cents. Intangible assets (like a company’s reputation, the knowledge base created by their employees, and training initiatives) can make up a huge portion of a company’s wealth. It only makes sense, then, that we need a new tool to help us measure this expanded definition of success. Enter the balanced scorecard! This tool and its related components will help your organization identify, document, plan, and execute a balanced strategic mission. It will also help your organization evaluate and revise its strategic execution. This course will introduce you to the basics of the balanced scorecard and help you determine if this powerful tool is a good fit for your organization.",
    "objectives": [
      "Define what the balanced scorecard is Identify the benefits of the scorecard",
      "Describe the common balanced scorecard pitfalls and how to avoid them Determine if the balanced scorecard is right for your organization Describe the key elements of the balanced scorecard process",
      "Identify a strategy map, tactical action plan, and balanced scorecard Create a vision statement for the balanced scorecard",
      "Understand what corporate values, mission statements, and vision statements are and how they tie into the balanced scorecard process",
      "Identify the components of supporting balanced scorecard plans Understand what processes you will need to support the balanced scorecard Identify",
      "the members of different balanced scorecard teams"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 10,
    "title": "Basic Business Management – Boot Camp for Business Owners",
    "overview": "Owning a business requires a vision balanced with attention to detail. You need to be a generalist who understands the multiple aspects of running a business, as well as the ability to step back and see the big picture and to reach into the future. The business environment is a complex place to be. Whether you wish to work as a consultant or freelancer, establish a corporation, or set up an operation that meets a need for very particular type of customer, there is a tremendous amount of information that you need to know and to apply. This course provides essential learning for new business owners, whether the business is just in the idea stage or you have already begun and need to fill in the gaps.",
    "objectives": [
      "Apply the best methods for creating, leading, and managing your own business Establish an organizational framework through operations, finance, and leadership",
      "Set up an effective and efficient system for hiring, retaining, and succession planning",
      "Start researching and designing your strategic plan",
      "Describe the essential elements of marketing, sales, and your company brand Apply financial and accounting terms correctly"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 11,
    "title": "Becoming a Progressive Employer",
    "overview": "Many people like to think of themselves as progressive in some fashion, but is this usually the case? Employers can be considered progressive for numerous reasons, from the way they treat their staff to their approach to technology. This one-day course will point the way towards being a progressive employer for those who wish to be on the forefront of employee relations and develop an innovative stance on business.",
    "objectives": [
      "Understand what being progressive means",
      "See the process for getting from the status quo to being progressive Develop or enhance a progressive mindset",
      "Truly examine what it means to be progressive Develop innovative ideas",
      "Understand the importance of a succession plan"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 12,
    "title": "Being a Team Player",
    "overview": "Teamwork is essential in any successful enterprise, and to have effective teams, an organization must be comprised of individuals who pride themselves on being great team players. Many of us consider ourselves to be team players, but are we really? Do we know what that takes; and what managers consider to be the qualities that make a person a team player, or that make a good team player a ‘great’ team player? Everyone brings their own skills and strengths to the table; understanding how to use those skills within the context of a team is vital to help an organization succeed.",
    "objectives": [
      "Understand the definition of a team player and a non-team player Know the difference between a team player and a non-team player Learn the qualities possessed by a team player",
      "Determine what type of team player you are and how that functions in your workplace",
      "Know and understand what it takes to be a team player",
      "Discover the different types of teams that exist within a company Learn what working together as a team looks like",
      "Learn the different types of workplace teams and what types of teams successful organizations  need",
      "Develop strategies to improve teamwork",
      "Give participants a moment to write down their own learning objectives in their workbook.Course  Outline"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 13,
    "title": "Beyond Workplace Politics – Using Social and Emotional Competencies",
    "overview": "Workplace politics encompasses the power and authority processes and behaviors that are at work in a particular workplace. It is how the links between people in the workplace work. There are workplace politics at play in every organization! In 1990, two American psychologists (Dr. Jack Mayer and Dr. Peter Salovey) purported that if there was a cognitive intelligence or IQ then there must be an emotional intelligence (sometimes known as EQ). Daniel Goleman, the co-founder of the Collaborative for Academic, Social, and Emotional Learning (CASEL) theorized the social aspect of behavior as a complement to the emotional. His definition expanded to: “Social and emotional intelligence involves understanding your feelings and behaviors, as well as those of others, and applying this knowledge to your interactions and relationships.” In his work with CASEL he developed five interrelated sets of Social and Emotional Competencies: Self-Awareness, Self-Management, Social Awareness, Good Relationship Skills, and Responsible Decision Making. This course will explore the social and emotional competencies and their role in working beyond workplace politics!",
    "objectives": [
      "Understand what Workplace Politics is and why it is not always bad. Distinguish between formal and informal workplace hierarchies.",
      "Use practical steps to negate the influence of rumors.",
      "Define Social and Emotional Intelligence and understand their importance in navigating workplace politics.",
      "Understand the importance of Self-Awareness in dealing with workplace politics and think about your own strengths and abilities.",
      "Understand the role of Self-Management in the workplace and learn to improve self-management through reflection",
      "Understand the roles of Empathy, Organizational and Service Awareness in the workplace and social awareness skill development.",
      "Identify good relationship skills.",
      "See the importance of responsible decision making and identify decision traps that should be avoided.",
      "Create your own Workplace Philosophy Statement."
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 14,
    "title": "Body Language – Reading Body Language as a Sales Tool",
    "overview": "Body language can make or break our efforts to establish long, trusting relationships. Our body language can help to reinforce and add credibility to what we say, or it can contradict our words. Understanding what signals you are sending, as well as being able to read the signals that your clients send, is an essential skill in sales and throughout our lives. What is your body language saying about you? Find out in this course!",
    "objectives": [
      "Apply your knowledge of body language to improve communication Understand the impact of space in a conversation",
      "Understand the nuances of body language from a range of areas including your face, hands, arms, legs, and posture",
      "Use mirroring and matching techniques to build rapport Shake hands with confidence",
      "Dress for success"
    ],
    "category": "Communication"
  },
  {
    "id": 15,
    "title": "Branding – Creating and Managing Your Corporate Brand",
    "overview": "Your brand is the vehicle that propels your product or service into your customer’s lives, and into their hearts. A good brand is much more than an attractive image combined with some witty type. Your brand must reflect the heart and soul of your product, and offer a promise that you can live up to. This course will get you started on the road to creating a perfect brand. The first half of the course will cover the basics of branding, including how to develop a visual identity from start to finish. We will also give you some graphic design tips to help you communicate your expectations to a professional designer. The second half will focus on how to put your brand out there in the right way. We’ll also talk about how to keep your brand energized and alive with monitoring and evaluation tools.",
    "objectives": [
      "Define what a brand is (particularly a strong brand) and what branding is about Define various types of brand architecture and brand extension",
      "Identify your brand’s products, the features of those products, and their values Write a mission, vision, and style statement for a brand",
      "Describe the basics of positioning a brand",
      "Understand the basics of creating a visual identity, including a brand name, slogan, and logo",
      "Help your employees live the brand by empowering them to be ambassadors and creating strong brand touchpoints",
      "Effectively plan an internal and external brand launch",
      "Monitor and evaluate your brand, and understand how to respond to the results"
    ],
    "category": "Communication"
  },
  {
    "id": 16,
    "title": "Budgets and Managing Money",
    "overview": "For managers in today’s business world, it’s essential to have a working knowledge of finance. We all play a role in our organization’s financial health, whether we realize it or not. If you don’t have training or a background in finance, you may be at a disadvantage as you sit around the management table. Understanding the cycle of finance will help you figure out where you fit into your company’s financial structure, and how to keep your department out of the red. This course will help you prepare budgets and make decisions with confidence.",
    "objectives": [
      "Define basic financial terminology Prepare a budget of any type or size Get your budget approved",
      "Perform basic ratio analysis Make better financial decisions"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 17,
    "title": "Building an Online Business",
    "overview": "The Internet has changed the way that we work, live, shop, and play. You can take advantage of this new way of doing business whether you want to set up a part-time venture or create the next million-dollar enterprise. This course will give you everything that you need to build a successful online business.",
    "objectives": [
      "Define what an online business is",
      "Identify opportunities for an online business Find resources to support your business",
      "Create a business strategy that includes a business plan, budget, and marketing plan",
      "Begin setting up a website, mobile presence, and storefront with e-commerce support",
      "Decide whether or not your online business can benefit from joining an online marketplace",
      "Market your online business using social media and the Internet"
    ],
    "category": "Technology & Digital"
  },
  {
    "id": 18,
    "title": "Building a Brand on Social Media",
    "overview": "Your brand speaks for your company and its products and/or services. In today’s online-focused world, it’s important that your brand has a definitive, consistent, and responsive presence. Whether you’re looking to build a brand from scratch, or strengthen an existing brand, this course will help you build a brand using social media. We’ll cover how to build a social media strategy, identify social media platforms that fit your brand, craft strong messages that will engage your audience, and evaluate and revise your strategy.",
    "objectives": [
      "Define terms related to social media branding Create a strategy for your social media brand",
      "Describe various social media platforms and identify what platforms fit your brand",
      "Communicate effectively over social media Deal with negative feedback and criticism",
      "Create a social media playbook to guide brand ambassadors Evaluate your brand strength and revise your strategy"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 19,
    "title": "Building a Consulting Business",
    "overview": "Today’s business environment isn’t focused on 9-to-5, lifelong, static positions like it was decades ago. Our world is constantly shifting and evolving, meaning that businesses (and workers) must evolve with it. As a result of this shift, consultants have more opportunities than ever before. This course will show you how to build a business as a consultant.",
    "objectives": [
      "Define the term “consultants” and explain their role in today’s business world Identify consulting opportunities",
      "Create a business strategy that includes a business plan, budget, marketing plan, fee structure, and resources",
      "Use social media and networking skills to grow your consulting business Protect your work with contracts",
      "Identify ways to stay on top of trends and changes"
    ],
    "category": "Safety & Compliance"
  },
  {
    "id": 20,
    "title": "Building Better Teams",
    "overview": "Teams are an important building block of successful organizations. Whether the focus is on service, quality, cost, value, speed, efficiency, performance, or other similar goals, teams are the basic unit that supports most organizations. With teams at the core of corporate strategy, your success as an organization can often depend on how well you and other team members operate together. How are your problem-solving skills? Is the team enthusiastic and motivated to do its best? Do you work well together? This course can help you get there!",
    "objectives": [
      "Understand the value of working as a team",
      "Develop team norms, ground rules, and team contracts",
      "Identify your team player style and how it can be used effectively with your own team",
      "Build team trust",
      "Identify the stages of team development and how to help a team move through them",
      "Recognize the critical role communication skills will play in building and maintaining a team atmosphere",
      "Identify ways that team members can be involved and grow in a team setting"
    ],
    "category": "Personal Development"
  },
  {
    "id": 21,
    "title": "Building Relationships for Success in Sales",
    "overview": "No one questions that making friends is a good thing. In this course, you are going to discover that the business of business is making friends, and the business of all sales professionals is making friends and building relationships. Strategic friendships will make or break any business, no matter how big and no matter what kind of market.",
    "objectives": [
      "Discover the benefits of developing a support network of connections Understand how building relationships can help you develop your business base Learn how to apply communication techniques to build your network",
      "Identify the key elements in strong working relationships, and how you might put more of these elements in your working relationships",
      "Recognize the key interpersonal skills and practice using them"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 22,
    "title": "Building Your Self Esteem and Assertiveness Skills",
    "overview": "A healthy self-esteem is essential for growth and achieving success. Of all the judgments you make in life, none is as important as the one you make about yourself. Without some measure of self-worth, life can be painful and unrelenting. In this course, you will discover some techniques that can dramatically change how you feel about yourself, and how you approach the world to get the things that you want.",
    "objectives": [
      "Recognize that you have worth and are worthy of happiness",
      "Develop techniques for eliminating unhealthy thought patterns and replacing them with supportive patterns",
      "Learn how to turn negative thoughts into positive thoughts Learn how to make requests so that you get what you want",
      "Set goals that reflect your dreams and desires and reinforce healthy patterns"
    ],
    "category": "Communication"
  },
  {
    "id": 23,
    "title": "Bullying in the Workplace",
    "overview": "Bullying is called the silent epidemic. Although half of workers have experienced or witnessed bullying, policies and laws dealing with it are far less prevalent. This is, in  part, because bullying can be hard to identify and address. People wonder, what does bullying look like? How can we discourage it in our workplace? What can I do to protect my staff and co-workers? All of these questions (and more!) will be answered in this course.",
    "objectives": [
      "Define what bullying is and is not",
      "Understand the costs of bullying to people and organizations Identify bullying behaviors and the reasons behind them",
      "Know some ways to prevent bullying and understand what role you can play Know some ways to protect yourself from bullying",
      "Know what to do if you are bullied",
      "Identify appropriate solutions for a bullying incident (within and outside the organization)",
      "Assist in creating an anti-bullying policy"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 24,
    "title": "Business Ethics for the Office",
    "overview": "What exactly makes a decision ethical? The problem with ethics is that what may seem morally right (or ethical) to one person may seem appalling to another. This course will not provide you with an easy way to solve every ethical decision you will ever have to make. It will, however, help you define your ethical framework to make solving those ethical dilemmas easier. We’ll also look at some tools that you can use when you’re faced with an ethical decision. And, we’ll look at some techniques you can use so you don’t get stuck in an ethical quandary. Best of all, we’ll look at a lot of case studies so that you can practice making decisions in a safe environment.",
    "objectives": [
      "Understand the difference between ethics and morals Understand the value of ethics",
      "Identify some of your values and moral principles",
      "Be familiar with some philosophical approaches to ethical decisions Identify some ways to improve ethics in your office",
      "Know what is required to start developing an office code of ethics Know some ways to avoid ethical dilemmas",
      "Have some tools to help you make better decisions Be familiar with some common ethical dilemmas"
    ],
    "category": "Safety & Compliance"
  },
  {
    "id": 25,
    "title": "Business Etiquette – Gaining That Extra Edge",
    "overview": "If you’ve ever had an awkward moment where: You aren’t sure which fork to use, You don’t know which side plate is yours, You’ve ever had to make small talk with a Very Important Person and been lost for words… Then you know just how agonizing such moments can be. Even worse (and what can be even more damaging to your career) are the social gaffes you aren’t even aware you make. This course will help you handle most of those socially difficult moments. You’ll have an extra edge in areas you may not have given a lot of thought to before.",
    "objectives": [
      "Network effectively, including making introductions, shaking hands, and using business cards appropriately",
      "Dress appropriately for every business occasion",
      "Feel comfortable when dining in business and formal situations",
      "Feel more confident about your business communication in every situation Develop that extra edge to establish trust and credibility"
    ],
    "category": "Finance & Business"
  },
  {
    "id": 26,
    "title": "Business Leadership – Becoming Management Material",
    "overview": "This course is a tool for your leadership development. It is designed to help you create and accomplish your personal best, and to help you lead others to get extraordinary things done. At its core, leadership means setting goals, lighting a path, and persuading others to follow. But the responsibility entails much more. Leaders must get their message out in a way that inspires, make the most of their limited time, and build roads to precious resources. They must negotiate alliances, improve their colleagues, and align the ambitions of the many with the needs of the organization. What makes for a great leader? Is it something to do with inward characteristics, such as confidence and focus? Is it more about outward presence, including charm and compassion? Or is it about the ability to create a vision and get others to commit to it? The answer is all of the above. By accepting the challenge to lead, you come to realize that the only limits are those you place on yourself.",
    "objectives": [
      "Define your role as a manager and identify how that role differs from other roles you have had",
      "Understand the management challenge and the new functions of management Discover how you can prepare for and embrace the forces of change",
      "Identify ways to get you and your workspace organized and get a jump on the next crisis",
      "Identify your leadership profile and explore ways to use this knowledge to improve your success as a manager",
      "Enhance your ability to communicate with others in meetings and through presentations",
      "Create an action plan for managing your career success"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 27,
    "title": "Business Process Management",
    "overview": "Business process management helps organizations leverage processes to achieve their goals and be successful. Once processes are implemented, they must be monitored, evaluated, and optimized to make sure they are still meeting the goals that they were designed to accomplish. A business that can successfully manage its processes is able to maintain a competitive edge, while increasing productivity and efficiency and decreasing costs. This course will introduce you to business process management. You’ll learn how business processes can help you improve your company’s bottom line by providing a higher level of quality and consistency for your customers.",
    "objectives": [
      "Define business process management and related concepts Recognize the vital role processes play in a business Appreciate the role of technology in process management Develop a vision to guide process improvement",
      "Understand how to design or enhance an existing process using the business process life cycle",
      "Construct a process map",
      "Perform a what-if analysis to improve your processes Implement and monitor process changes",
      "Identify how Lean and Six Sigma methods can assist in managing and improving processes",
      "Use a variety of tools and techniques to eliminate waste and redundancies"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 28,
    "title": "Business Writing That Works",
    "overview": "We all know what good writing is. It’s the novel we can’t put down, the poem we never forgot, and the speech that changes the way we look at the world. Good writing is the memo that gets action and the letter that says what a phone call can’t. In business writing, the language is concrete, the point of view is clear, and the points are well expressed. Good writing is hard work, and even the best writers get discouraged. However, with practice you can feel more confident about your own writing. This course will give you the tools to become a better writer.",
    "objectives": [
      "Learn the value of good written communication",
      "Learn how to write and proofread your work so it is clear, concise, complete, and correct",
      "Apply these skills in real world situations",
      "Understand the proper format for memos, letters, and e-mails"
    ],
    "category": "Communication"
  },
  {
    "id": 29,
    "title": "Call Center Training – Sales and Customer Service Training for Call Center Agents",
    "overview": "Whether we choose to embrace them or cannot stand being interrupted by their calls, call centers are a business element that is here to stay. This course will help call center agents learn to make the most of their telephone-based work, including understanding the best ways to listen and be heard. Each phone interaction has elements of sales and customer service skills, which we will explore in detail throughout this energizing and practical  course.",
    "objectives": [
      "Understand the nuances of body language and verbal skills, which are so important in conversations that do not have a face-to-face element Learn aspects of verbal communication such as tone, cadence, and pitch Demonstrate an understanding of questioning and listening skills Acquire comfort with delivering bad news and saying no",
      "Learn effective ways to negotiate",
      "Understand the importance of creating and delivering meaningful messages Use tools to facilitate communication",
      "Realize the value of personalizing interactions and developing relationships Practice vocal techniques that enhance speech and communication ability Personalize techniques for managing stress"
    ],
    "category": "Communication"
  },
  {
    "id": 30,
    "title": "Cannabis and the Workplace",
    "overview": "One of the most commonly used recreational drugs in the world is cannabis. No matter what the legal status of using cannabis is where you live and work, employees who are under the influence of the drug can become an issue in your workplace. This course will help you develop the skills and knowledge to mitigate the risks to safety and lost productivity, and create a policy to protect employees from harm and the company from loss.",
    "objectives": [
      "Understand what cannabis and other forms of cannabis are and how they are used",
      "Understand how cannabis use affects a person physically, cognitively, and behaviorally",
      "Recognize the signs of cannabis impairment",
      "Define the potential issues cannabis use creates in the workplace Understand the legal rights of employers and employees with regards to cannabis use in the workplace",
      "Respond to incidents of suspected cannabis use in the workplace Develop a proactive workplace drug and alcohol policy"
    ],
    "category": "Communication"
  },
  {
    "id": 31,
    "title": "Coaching and Mentoring",
    "overview": "Coach, Mentor, Role Model, Supporter, Guide... do these words ring a bell? Being a coach involves being able to draw from several disciplines. Coaching is based on a partnership that involves giving both support and challenging opportunities to employees. Mentorship is a related skill that is often a part of coaching. It’s about being a guide, offering wisdom and advice when it is needed. Knowing how and when to coach (and when to use other tools, like mentoring) is an essential skill that can benefit both you and your organization.",
    "objectives": [
      "Understand how coaching can be used to develop your team",
      "Develop the coaching and mentoring skills that help improve individual performance",
      "Demonstrate the behaviors and practices of an effective coach",
      "Recognize employees’ strengths and give them the feedback they need to succeed",
      "Identify employee problems and ways you can help to correct them"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 32,
    "title": "Code of Conduct",
    "overview": "Workplaces are made up of diverse groups of people with diverse motivations, backgrounds, and ethics. When such groups are brought together, sometimes there are opportunities for ethical, moral, financial, or even legal, boundaries to be crossed. Sometimes those boundaries are crossed with disastrous results. A workplace code of conduct is a tool that can be used to prevent such digressions by providing a framework for employees to follow of what is expected of them and how to conduct themselves in various situations. This course will look at the material that goes into a code of conduct and will allow participants to build their own as the day goes on.",
    "objectives": [
      "Identify what a code of conduct is and why a business should have one Identify what goes into a code of conduct",
      "Discuss how to implement a code of conduct in the workplace Create a code of conduct for a business"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 33,
    "title": "Collaboration",
    "overview": "Collaboration is a skill that is utilized with one or more people to produce or create a result or shared goal. Everyone in the group has a shared vision or outcome. The group not only has to work together, they must think together, and the product comes from group effort. Collaborators are equal partners. Do we know what it takes to achieve successful collaboration with colleagues? What are the importance and benefits of collaboration in the workplace and how can employers create a collaborative environment and reward employees for collaborative efforts?",
    "objectives": [
      "Understand the definition of collaboration",
      "Distinguish collaborative qualities individuals often possess",
      "Know and understand what it takes to work collaboratively with your colleagues Discover the difference between collaboration, cooperation and teamwork Know what a collaborative environment looks like",
      "Know the six steps to make collaboration work Understand the advantages of collaboration  Be aware of obstacles to collaboration",
      "Develop strategies to improve a collaborative work environment Share tips for employers to reward collaboration",
      "Understand how technology affects collaboration"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 34,
    "title": "Communications for Small Business Owners",
    "overview": "Communication between individuals is a two-way street, but communication between a small business and its customers is a multi-lane highway. Navigate this highway successfully and you increase customer numbers and profits. Set out on this highway unaware, ill-prepared, or unconvinced of its importance, and you will lose ground to your competitors. This course will introduce and reinforce the essential components of written communication that will connect you with existing and potential customers. If you are new to the communications highway, this course will provide the foundation for future development. If your company has some communications expertise, this course will help you strengthen and polish your essential components.",
    "objectives": [
      "Define the essential pieces of communication Customize these essential pieces for your company",
      "Identify the processes and plans needed for clear communications Develop, maintain, and evolve effective content for your communications"
    ],
    "category": "Communication"
  },
  {
    "id": 35,
    "title": "Conducting Effective Performance Reviews",
    "overview": "Performance reviews are an essential component of employee development. The performance review meeting is an important aspect of career planning, and the outcomes of the meeting should be known to the employee and supervisor before the meeting actually takes place. Remember what the German philosopher Goethe said: “Treat people as if they were what they ought to be and you help them become what they are capable of being.” Setting goals and objectives to aim for will give both supervisors and employees a focus, and is one of the key aspects to meeting overall company objectives. Supervisors must also learn how to give feedback, both positive and negative, on a regular and timely basis so that employees can grow and develop. Performance appraisals involve all these activities.",
    "objectives": [
      "Recognize the importance of having a performance review process for employees",
      "Understand how to work with employees to set performance standards and goals",
      "Develop skills in observing, giving feedback, listening, and asking questions Identify an effective interview process and have the opportunity to practice the process in a supportive atmosphere",
      "Make the performance review legally defensible"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 36,
    "title": "Conflict Resolution – Dealing With Difficult People",
    "overview": "We can get into a routine where it feels like everyone we speak with is either having a bad day, or we are having a bad day ourselves. We feel like we constantly meet people who seem to be inconsiderate, stubborn, incorrigible, indecent, miserable, or passive- aggressive. Sometimes we can be equally awkward ourselves. While it might seem that the easiest remedy is to lock yourself up at home and avoid people, we eventually have to pick up the phone or step outside and interact with someone. Success comes from understanding how we behave, as well as how we can influence others. If difficult interactions are necessary, and we approach those conversations with a plan, we will find that we have less difficult people to deal with. More often than not, we will also have more meaningful and significant conversations. In this course, you will learn how to turn difficult situations into opportunities for growth.",
    "objectives": [
      "Recognize how your own attitudes and actions affect others",
      "Find new and effective techniques for dealing with difficult people Learn some techniques for managing and dealing with anger",
      "Develop coping strategies for dealing with difficult people and difficult situations"
    ],
    "category": "Communication"
  },
  {
    "id": 37,
    "title": "Conflict Resolution – Getting Along In The Workplace",
    "overview": "Many people see conflict as a negative experience. In fact, conflict is a necessary part of our personal growth and development. Think of when you were trying to choose your major in college, for example, or trying to decide between two jobs. However, conflict becomes an issue when the people involved cannot work through it. They become engaged in a battle that does not result in growth. When this type of conflict arises, negative energy can result, causing hurt feelings and damaged relationships. This course will give you the tools that will help you resolve conflict successfully and produce a win-win outcome.",
    "objectives": [
      "Understand what conflict is and how it can escalate Understand the types of conflict and the stages of conflict",
      "Recognize the five most common conflict resolution styles and when to use them",
      "Increase positive information flow through non-verbal and verbal communication  skills",
      "Develop effective techniques for intervention strategies",
      "Become more confident of your ability to manage conflicts to enhance productivity and performance"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 38,
    "title": "Conquering Your Fear of Speaking in Public",
    "overview": "Do you get nervous when presenting at company meetings? Do you find it hard to  make conversation at gatherings and social events? Do you lock up in awkward social situations? If so, this course is just for you! It’s aimed at anybody who wants to improve their speaking skills in informal situations. We’ll give you the confidence and the skills to interact with others, to speak in informal situations, and to present in front of small groups.",
    "objectives": [
      "Speak with more confidence in one-on-one conversations",
      "Feel more confident speaking socially or small groups such as meetings Practice developing these skills"
    ],
    "category": "Communication"
  },
  {
    "id": 39,
    "title": "Continuous Improvement with Lean",
    "overview": "Companies everywhere, no matter what their industry, can benefit from the principles of continuous improvement with Lean. Whether they adopt a very formal process or commit to something less structured, they can follow its principles and improve their bottom line by reducing wasted time and resources. This course is designed for learners who have completed the pre-requisite Lean Process Improvement course, and perhaps have been involved in implementation of its principles in their workplace. It is the ideal next step along the path of learning and creating a workplace culture committed to continuous improvement.",
    "objectives": [
      "Describe what continuous improvement with Lean is all about",
      "Explain the concepts of the continuous improvement cycle: Identify, Plan, Execute, and Review",
      "Apply Lean continuous improvement concepts to a case study Present ideas for continuous improvement"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 40,
    "title": "Creating a Dynamite Job Portfolio",
    "overview": "The job market continues to change, as does the way we look for work. This course examines the value of presenting yourself as a complete package by using a resume as an introduction to an employer and backing it up with a portfolio presented at the interview.",
    "objectives": [
      "Speak about yourself using descriptive language",
      "Apply the essential elements of cover letters and resumes",
      "Understand the need for pre-employment testing and what to expect in your target market",
      "Design a personalized portfolio",
      "Develop a plan that moves you to a new job within 60 days"
    ],
    "category": "Communication"
  },
  {
    "id": 41,
    "title": "Creating a Google AdWords Campaign",
    "overview": "Many companies advertise with pay per click ads. This course focuses on the largest machine available: Google AdWords. In this course, participants will learn how Google AdWords work, what pay per click means, the importance of correctly setting an AdWord budget, how to select keywords and set up ad groups, how to design a compelling ad, and how to make adjustments to increase success.",
    "objectives": [
      "Define Google AdWords and pay per click Set up keywords lists and groups",
      "Find tracking and statistical information Describe conversions from clickthroughs",
      "Decide whether you will write your own ads or enlist help"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 42,
    "title": "Creating a Positive Work Environment",
    "overview": "Not all of us have had the opportunity to work in a truly positive work environment. A positive work environment is important for the productivity of a company but it is also important to us personally. Our emotional and physical health can be improved by working in a positive work environment. We should wake up each morning wanting to go to work - not trying to think of excuses to not go. We want to be proud of where we work and enjoy telling others about where we work. As an employee or a leader within  a company you have a responsibility to create and maintain a positive work environment. Everyone has a responsibility to create and maintain a positive work environment. Even if this is not a companywide reality you can seek to provide this type of environment for your department/ division or those within your sphere of influence. This course will give you tools to be able to create the type of company environment that you crave through building and nurturing effective workplace relationships.",
    "objectives": [
      "Recognize what a positive workplace looks like",
      "Know and understand the key elements necessary to create and maintain a positive work environment",
      "Understand as an employee what you can to do personally to create and maintain a positive work environment",
      "Understand as a leader the responsibility you have to create and maintain a positive work environment",
      "Discover what type of team player you are and how that relates to your functioning in the team",
      "Know the importance of effective workplace relationships in creating and maintaining a positive work environment",
      "Know and understand the importance of working as a team and guidelines to good teamwork",
      "Discover your personal strengths and weaknesses in working cooperatively Discover your preference for dealing with workplace conflict",
      "Learn and practice various methods to deal with workplace problems",
      "Learn some of the common meeting problems to how make your meetings more positive and effective."
    ],
    "category": "Communication"
  },
  {
    "id": 43,
    "title": "Creating a Top–Notch Talent Management Program",
    "overview": "Organizations recognize that they do better business when their people are engaged, motivated, and yes, talented. Having the right people in place at the right time is a key aspect to continued growth, success, or even just stability. This course will provide you with just what it takes to have the right people ready. It will help you create a program to measure the talents of your people and how to help them grow in preparation for the future. It will also help you support and grow your organization by teaching you how to apply the most current research and adapt your organization to the ever-changing marketplaces.",
    "objectives": [
      "Apply the multifaceted aspects of talent management in your own organization Describe the skills required to manage high potential candidates",
      "Recognize and foster talent within an organization Explain the principles of competency-based management Use the language for talent management"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 44,
    "title": "Creating a Workplace Wellness Program",
    "overview": "Whether you are creating a workplace wellness program from scratch, or enhancing what you already have, you’re already on the right track! With increasing costs of health care, a shrinking workforce, and aging workers, a savvy workplace understands the value in supporting workers to improve their conditioning and to live a fitter lifestyle. This course includes all aspects of designing or upgrading a program, from concept through implementation, to review.",
    "objectives": [
      "Describe the necessity of workplace wellness programs",
      "Create program elements that reflect the needs of employees and the objectives of the organization",
      "Select program elements that fit the context of current operations Establish implementation and evaluation strategies"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 45,
    "title": "Creating Successful Staff Retreats",
    "overview": "A staff retreat can evoke some pretty strong emotions. Dread of a week hanging around with people you would never invite home for dinner. Queasy thinking about throwing yourself backwards hoping your ‘new friends’ will catch you. However, staff retreats still continue even in hard times. Why? Many of the things we really need to get done take longer than the two hours you have in meeting time. As well, the retreat itself can bring about a change in approach not possible sitting in your boardroom for a meeting. This course will give you tools to be able to create staff retreats that are successful and help to bolster productivity, sales and positive workplace culture.",
    "objectives": [
      "Discuss experiences with staff retreats",
      "Know the reasons why staff retreats are conducted Understand the main staff retreat undertakings categories Develop and present retreat activities",
      "Identify the critical elements for success of a staff retreat Develop a planning checklist",
      "Appreciate the keys to running a staff retreat Develop an evaluation questionnaire",
      "Rrecognize post-retreat activities that will ensure the continuing success of your staff retreats",
      "Realize your top three take home ideas for creating successful staff retreats."
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 46,
    "title": "Creating Winning Proposals",
    "overview": "Proposals are persuasive documents that are fundamental tools in organizational  funding and output.  This course will look at sources of funding, types of proposals and how to write proposals that will meet funding agencies requirements. This will include   a number of tips and techniques to increase the potential success of your proposals. An important but often overlooked aspect of proposal writing will also be covered-   Building and Maintaining Relationships. Relationships are built on honesty. Potential projects must be a good fit for your organization and your organization must be ready to do the work contained in the proposal. The most successful proposals are going to be those that fulfill the mission and values of your organization and that of the funding agencies as well!",
    "objectives": [
      "Locate potential funders for your organizations on the Internet and",
      "use evaluative skills to identify the appropriateness of funding related to your own  organization",
      "Explain the necessity of matching funders interests with organizational needs and use this knowledge in decisions about the validity of submitting a funding proposal",
      "Describe and understand the basic elements of proposal writing for not-for- profit  organizations",
      "Describe and understand the basic process for successful proposal writing Analyze effective relationship-building strategies to engage with funders and use this knowledge in writing a funding proposal",
      "Describe at least five reasons why funding proposals can be rejected Plan, write and submit a proposal in response to funders guidelines"
    ],
    "category": "Communication"
  },
  {
    "id": 47,
    "title": "Creating Winning Webinars",
    "overview": "Webinars are now a common and effective tool being used by thousands and   thousands of companies and people, across all industries. They are being used for everything from training to customer service, and education to marketing. Webinars are an affordable means of connecting with your staff, customers and online community. This course will take you through the entire process of creating an effective webinar. Why and how to use Webinars Defining your webinar objectives Choosing the structure and content of your webinar Creating the outline Choosing the platform This course will offer an introduction to Webinar Creation and provide you with a tool that is both appealing to you, the creator, and Webinar Attendees. With millions of webinars taking place online every month this is a medium to be embraced.",
    "objectives": [
      "Understand what webinars are and why they are important to your workplace Implement best practices when developing and delivering webinars",
      "Choose appropriate structure and platform for your webinar Outline a webinar for your development and delivery"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 48,
    "title": "Creative Thinking and Innovation",
    "overview": "Creative thinking and innovation are vital components in both our personal and professional lives. However, many people feel as though they are lacking in creativity. What most of us do not recognize is that we are creative on a daily basis, whether it’s picking out what clothes to wear in the morning or stretching a tight budget at work. While these tasks may not normally be associated with creativity, there is a great deal of creativity involved to get those jobs done. While some people seem to be simply bursting with creativity, others find it a struggle to think outside the square. If you fall into the latter category, it is important to understand that boosting your creative and innovative abilities takes practice. Recognizing and honing your own creative potential is a process. That’s what this course is all about.",
    "objectives": [
      "Identify the difference between creativity and innovation Recognize your own creativity",
      "Build your own creative environment",
      "Explain the importance of creativity and innovation in business Apply problem solving steps and tools",
      "Use individual and group techniques to help generate creative ideas Implement creative ideas"
    ],
    "category": "Finance & Business"
  },
  {
    "id": 49,
    "title": "Crisis Management",
    "overview": "Viable organizations need to be ready for emergencies because they are a fact of doing business. The worst plan is not to have any kind of plan at all, and the best plans are tested and adjusted so that they work over time. Fortunately, you do not need separate plans for fire, weather disasters, and all the different kinds of crises that can occur. One solid plan will help you to prevent, respond, and recover from all crises. This course will help you ensure your organization is ready to manage any kind of crisis.",
    "objectives": [
      "Assign people to an appropriate crisis team role Conduct a crisis audit",
      "Establish the means for business continuity Determine how to manage incidents",
      "Help your team recover from a crisis Apply the process in practical exercise"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 50,
    "title": "Critical  Thinking",
    "overview": "In today’s society, many people experience information overload. We are bombarded with messages to believe various ideas, purchase things, support causes, and lead our lifestyle in a particular way. How do you know what to believe? How do you separate the truth from the myths? The answer lies in critical thinking skills. The ability to clearly reason through problems and to present arguments in a logical, compelling way has become a key skill for survival in today’s world. This course will give you some practical tools and hands-on experience with critical thinking and problem solving.",
    "objectives": [
      "Define critical and non-critical thinking",
      "Identify your critical thinking style(s), including areas of strength and improvement",
      "Describe other thinking styles, including left/right brain thinking and whole-brain thinking",
      "Work through the critical thinking process to build or analyze arguments Develop and evaluate explanations",
      "Improve key critical thinking skills, including active listening and questioning Use analytical thought systems and creative thinking techniques",
      "Prepare and present powerful arguments"
    ],
    "category": "Communication"
  },
  {
    "id": 51,
    "title": "CRM – An Introduction to Customer Relationship Management",
    "overview": "This course will introduce the different facets of CRM and identify who the customers really are. It will also analyze the key components of CRM and explore how it can be integrated within an organization. As with many significant undertakings, undergoing a CRM review (even simply considering its implementation) requires learners to analyze technical and complicated systems. This course sorts through a myriad of information and brings you the basics you need to make a decision about the need for CRM, its benefits, and how to coordinate the base requirements for a CRM undertaking.",
    "objectives": [
      "Demonstrate an understanding of the terms and benefits of CRM on a",
      "company’s bottom line",
      "Analyze the different components of a CRM plan Develop a checklist for readiness and success in CRM",
      "Describe how CRM creates value for organizations and customers Consider developmental roles that have the greatest impact on CRM"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 52,
    "title": "Customer Service Training – Critical Elements of Customer Service",
    "overview": "While many companies promise to deliver an incredible customer experience, some are better at delivering than others. This course is designed around six critical elements of customer service that, when the company lives them, bring customers back to experience service that outdoes the competition.",
    "objectives": [
      "Demonstrate a customer service approach",
      "Understand how your own behavior affects the behavior of others Demonstrate confidence and skill as a problem solver",
      "Apply techniques to deal with difficult customers Make a choice to provide customer service"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 53,
    "title": "Customer Service Training – Managing Customer Service",
    "overview": "The need to lead, model, and promote the organizational values within a customer service environment is essential for business success. This course will provide you with opportunities to explore your responsibilities within your role as a leader (supervisor or manager) in a customer service environment.",
    "objectives": [
      "Identify ways to establish links between excellence in customer service and your business practices and policies",
      "Develop the skills and practices that are essential elements of a customer service-focused   manager",
      "Recognize what employees are looking for to be truly engaged Recognize who the customers are and what they are looking for",
      "Develop strategies for creating engaged employees and satisfied customers in whatever business units you manage"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 54,
    "title": "Delegation – The Art of Delegating Effectively",
    "overview": "Effective delegation is one of the most valuable skills you can master. It reduces your workload and develops employee skills. Delegating prepares employees who work for you to be able to handle your responsibilities and simultaneously allows you to advance to other career opportunities within your organization. Delegation is often one of the hardest skills for a manager to master. However, the skill can be learned. This course will explore many of the facets of delegation, including when to delegate and whom to delegate to. We will also go through the delegation process step by step and learn about techniques to overcome problems.",
    "objectives": [
      "Clearly identify how delegation fits into your job and how it can make you more successful",
      "Identify different ways of delegating tasks",
      "Use an eight-step process for effective delegation Give better instructions for better delegation results",
      "Recognize common delegation pitfalls and how to avoid them Monitor delegation results",
      "Give effective feedback"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 55,
    "title": "Developing a High Reliability Organization",
    "overview": "Today’s world is full of the unexpected. System failures, terrorism events, disease outbreaks, and superstorms disrupt businesses every day, sometimes to an unrecoverable point. Despite these challenges, some services (such as power plants, hospitals, and airports) have no choice but to continue operating. This course will explore how these organizations maintain high reliability even in times of serious crisis and stability. We will share their secrets in a way that can be applied to all organizations in order to create high reliability and continued success.",
    "objectives": [
      "Define the characteristics of a high reliability organization",
      "Define key concepts required for high reliability, including mindfulness and expectations",
      "Describe the five principles governing high reliability organizations: preoccupation with failure, resistance to simplification, sensitivity to operations, commitment to resilience, and deference to expertise",
      "Audit activities at all stages to assess the business’ reliability"
    ],
    "category": "Personal Development"
  },
  {
    "id": 56,
    "title": "Developing a Lunch and Learn Program",
    "overview": "If you look at any successful organization they have the support of employee development as a core part of their culture. For these organizations it goes beyond professional or even personal development to offering learning opportunities that create increased energy, creativity and fun. Lunch and Learns are a venue to foster sharing and peer learning and are typically aimed at fostering cross-organization collaboration and communication. They are a tool for sharing of information, approaches and talent. Further, they offer opportunities for networking in a safe, friendly and relaxed atmosphere. This course will give you tools to be able to create a Lunch and Learn Program that creates opportunities for learning that might not otherwise happen. You will also prepare a short Lunch and Learn session and receive feedback from other course participants.",
    "objectives": [
      "Explain the benefits of implementing a Lunch and Learn Program",
      "Outline the aims and expectations of a Lunch and Learn Program for your organization",
      "Utilize a number of success factors to create a Lunch and Learn Program for your organization",
      "Develop a promotion plan for your organization’s Lunch and Learn Program Develop a list of potential Lunch and Learn session topics",
      "Maintain an ongoing Lunch and Learn Program for your organization Develop and deliver a Lunch and Learn session"
    ],
    "category": "Communication"
  },
  {
    "id": 57,
    "title": "Developing a Safety Procedures Manual",
    "overview": "Safety procedures are the backbone of an organization’s Safety Management System. They provide consistency and when followed create a safe working environment and greater productivity due to less injury down time. However, safety procedure writing is more difficult and time consuming than it at first appears. This course will give you the foundation to start writing effective safety procedures.",
    "objectives": [
      "Develop a Safety Procedure Template",
      "Develop a flowchart to accurately depict process activities",
      "Use brainstorming to gather necessary information for safety procedure creation Understand a variety of procedure types (Step-by-Step, Playscript, Decision Tree, Decision Tables)",
      "Write and revise Step-by-Step safety procedures Add communication elements to safety procedure"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 58,
    "title": "Developing a Training Needs Analysis",
    "overview": "The right training at the right time can make a huge difference in the productivity and profitability of your organization. Whether you are scanning your workplace for opportunities to make things better and training is the answer, or a client asks you to come into their organization and do an assessment, your answer is best framed in the form of a training needs analysis. Your ability to create an analysis that is comprehensive yet simply prepared is critical for it to be understood and acted upon. This course will help you to gather the information, assess the data, and present your suggestions for training or non-training solutions.",
    "objectives": [
      "Understand the value of creating a training needs analysis",
      "Apply the ICE method to assess the situation and build your training needs analysis",
      "Create a simple yet thorough training needs analysis for your organization or client"
    ],
    "category": "Communication"
  },
  {
    "id": 59,
    "title": "Developing Your Executive Presence",
    "overview": "Some people immediately command attention and respect when they walk into a room. Do you have that kind of presence? If not, is it something that you would like to develop? This course will help you do just that by building your credibility, improving your personal appearance, honing your networking skills, and enhancing your ability to communicate effectively. You will also receive an introduction to core leadership skills.",
    "objectives": [
      "Identify the elements of a strong executive presence Build trust and credibility with others",
      "Communicate effectively using verbal and non-verbal techniques",
      "Create a strong, positive first impression and maintain that impression as you build a relationship with others",
      "Develop key leadership skills, including techniques for coaching, motivating, and delivering feedback"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 60,
    "title": "Developing Your Training Program",
    "overview": "Training is an essential element of development in any organization. Being knowledgeable and continuing to learn throughout your career can make you a very valuable asset. We also know that training and orientation (or ‘onboarding’) for newly hired employees is a key factor in retention. In order for training to be valuable, the person that designs and plans the training must have an excellent understanding of what the training objectives are. In addition, if the trainer is able to research the strategic objectives of the company providing the training to their staff, what resources are available, and what elements of those plans can enhance the training experience, the entire experience is much more meaningful. At the same time, if a trainer is aware of any barriers that training could present (such as trainees being on call during a session, having to spread training over a long period of time, or trainees who are not accustomed to theory or classroom types of presentations), then the trainer can present a much stronger program that is tailored specifically to the participants’ needs. This course is designed for a trainer who wants to develop training programs that are meaningful, practical, and will benefit both trainees and the organizations they work for.",
    "objectives": [
      "Describe the essential elements of a training program Apply different methodologies to program design",
      "Demonstrate skills in preparation, research, and delivery of strong content Explain an instructional model",
      "Be prepared to create a training program proposal"
    ],
    "category": "Communication"
  },
  {
    "id": 61,
    "title": "Disability Awareness – Working with People with Disabilities",
    "overview": "People with disabilities represent a significant and largely underutilized resource for businesses. Many disabled persons are underemployed or unemployed. As a result of advocates for diversity, as well as a shrinking labor pool, employers are taking a serious look at hiring and retaining people with disabilities. This course will give supervisors, managers, and human resource consultants tools and tips for creating a diverse workplace.",
    "objectives": [
      "Prepare to welcome people with disabilities into your workplace Interact with people with disabilities",
      "Identify and overcome barriers in the workplace",
      "Use respectful, appropriate, acceptable language in any circumstance Understand what your company can do during hiring and interviewing Understand what job accommodation is and how it applies in your workplace"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 62,
    "title": "Diversity Training – Celebrating Diversity in the Workplace",
    "overview": "More than ever, a workplace is a diverse collection of individuals proud of who they are: their gender, their sexual orientation, their religion, their ethnic background, and all the other components that make an individual unique. One of the challenges for workplace leaders is how to help these diverse individuals work as a team. We all know what happens to organizations that don’t have effective teamwork: they fail. And, failing to embrace diversity can also have serious legal costs for corporations. This course will give you ways to celebrate diversity in the workplace while bringing individuals  together.",
    "objectives": [
      "Describe what diversity and its related terms mean",
      "Explain how changes in the world have affected you and your view Identify your stereotypes",
      "Use terms that are politically correct and avoid those which are not Apply the four cornerstones of diversity",
      "Avoid the pitfalls related to diversity",
      "Use a technique for dealing with inappropriate behavior Develop a management style to encourage diversity",
      "Take action if you or one of your employees feels discriminated against"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 63,
    "title": "Dynamite Sales Presentations",
    "overview": "A great sales presentation does not demand that you have all the bells and whistles to impress the client with your technical skills. Rather, try impressing your clients with your knowledge of the products and services you sell and your understanding of their problems and the solutions they need. This course will show you how to create a winning proposal and how to turn it into a dynamite sales presentation.",
    "objectives": [
      "Identify the key elements of a quality proposal",
      "Perfect your first impression, including your dress and your handshake Feel more comfortable and professional in face-to-face presentations Write a winning proposal",
      "Feel more comfortable and professional in face-to-face presentations"
    ],
    "category": "Communication"
  },
  {
    "id": 64,
    "title": "ommerce Management",
    "overview": "As the global Internet population continues to grow, electronic commerce is growing as well. By the end of 2015, e-commerce is expected to generate over $400 billion annually. This huge market encompasses traditional e-commerce, as well as m- commerce (which is growing faster than any other sector) and location-based e- commerce. This course will teach entrepreneurs how to develop, market, and manage an e- commerce business, giving them a crucial advantage in today’s competitive market.",
    "objectives": [
      "Describe what the terms e-commerce and m-commerce mean Develop an e-commerce business plan",
      "Evaluate e-commerce software options",
      "Build an online store with product pages, supporting features, a shopping cart, and an effective checkout process",
      "Test, launch, and update your e-commerce site Design engaging, responsive web content",
      "Understand e-commerce payment options and choose appropriate options for your site",
      "Use appropriate tools to track key e-commerce metrics",
      "Identify and optimize supporting e-commerce activities, such as customer service, sales, and inventory management",
      "Create a marketing plan with all the essential elements",
      "Market your online store using social media and other appropriate channels Use discounts and promotions to market your e-commerce business Understand what security and privacy issues face e-commerce businesses and handle customers’ information accordingly",
      "Protect your intellectual property",
      "Identify the rules and regulations that will govern your e-commerce businesses"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 65,
    "title": "Emotional  Intelligence",
    "overview": "Emotional intelligence, also called EQ, is the ability to be aware of and to manage emotions and relationships. It’s a pivotal factor in personal and professional success. IQ will get you in the door, but it is your EQ, your ability to connect with others and manage the emotions of yourself and others, that will determine how successful you  are in life. We have all worked with and listened to brilliant people. Some of them were great and… well, some were not so great. The mean and the meek and all those in between can teach us more than they realize. When we look at the truly extraordinary people who inspire and make a difference you will see that they do this by connecting with people at a personal and emotional level. What differentiated them was not their IQ but their EQ – their emotional intelligence. This course will help you develop your emotional  intelligence.",
    "objectives": [
      "Understand what emotional intelligence means",
      "Recognize how our emotional health and physical health are related Learn techniques to understand, use, and appreciate the role of emotional intelligence in the workplace",
      "Understand the different emotions and how to manage them Create a personal vision statement",
      "Understand the difference between optimism and pessimism Validate emotions in others"
    ],
    "category": "Communication"
  },
  {
    "id": 66,
    "title": "Employee   Accountability",
    "overview": "An article in the March 11, 2010 edition of TIME magazine purported to explain “why we have entered the post-trust era.” Indeed, we seem to be in a time where people act inappropriately and then refuse to take responsibility for their actions. Who can we blame for the world economic crisis, issues with religion, the outcomes of our governments, or the state of the environment? More to the point, why do we spend so much time and energy looking to pin the blame on someone (usually anyone but ourselves)? With this in mind, it’s no wonder that organizations who promote accountability are more successful and more productive. In this course, you will learn about what accountability is, how to promote it in your organization, and how to become more accountable to yourself and others.",
    "objectives": [
      "Understand what accountability is and what events in history have shaped our view of it",
      "Identify the requirements for personal and corporate accountability",
      "Apply the cycle of accountability and the fundamental elements required to build an accountable organization",
      "Describe what individuals must do to become accountable",
      "Build skills required for accountability, including goal setting, giving and receiving feedback, and delegation",
      "Pinpoint ways to build ownership in your organization Isolate areas for further self-improvement"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 67,
    "title": "Employee Dispute Resolution – Mediation through Peer Review",
    "overview": "Have you ever been in a workplace situation where a supervisor has made a decision that you didn’t agree with? Did you wish that you could ask someone else what they thought of the decision; whether they would have done the same thing? The peer review process offers employees just that chance, using a formalized procedure to ask, consider, and resolve just these sorts of questions. This course will teach you everything you need to know about employee dispute resolution through mediation.",
    "objectives": [
      "Describe what the peer review process is",
      "Apply a process for employees to file grievances and for management to respond Choose a facilitator and panel",
      "Understand what is involved in the hearing process, from preliminary meetings to the hearing, and the decision process",
      "Explain what responsibilities and powers a panel should have Apply professional questioning and probing techniques",
      "Understand why peer review panels fail and how to avoid those pitfalls"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 68,
    "title": "Employee Recognition – Appreciating Your Workforce",
    "overview": "Everyone likes to be recognized for a job well done. Some people like more recognition than others, but it’s all important on some level. It can be doubly important in the workplace, as it keeps employees happy and therefore results in a strong business that serves customers well and keeps the bottom line strong. Employee recognition can be a simple, but effective, tool. This course looks at the value of recognizing employees and how to carry it out in the workplace, both formally and informally.",
    "objectives": [
      "Define who employees are",
      "State why employees should be recognized Develop a program for employee recognition",
      "Implement and measure an employee recognition program"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 69,
    "title": "Encouraging Sustainability and Social Responsibility in Business",
    "overview": "The ideas behind encouraging sustainability and social responsibility in business seem noble, as organizations commit to creating optimal circumstances for people to live and work. The reality is that every company, whether it is a micro-business or a large multinational corporation, can take steps to create sustainable, socially responsible environments that contribute to positive workplaces, communities, and futures.",
    "objectives": [
      "Define sustainability and social responsibility",
      "Discuss the principles of social responsibility in business",
      "Apply the principles of sustainability and social responsibility in the context of ISO 26000",
      "Develop a program for sustainability and social responsibility in business"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 70,
    "title": "English as a Second Language – A Workplace Communications Primer",
    "overview": "“A different language is a different vision of life,” said the Italian filmmaker Federico Fellini. Employees who use English as a second language demonstrate great commitment and skill in learning a language other than their native tongue. There are subtle differences between languages because of social influences and workplace demands that can create or strengthen the language barrier for employees who have learned a language other than English in their formative years. That barrier is an obstacle for both employer and employee, severing what could be productive relationships with co-workers and clients. This course will identify any gaps in communication as the result of cultural language differences, and provide exercises to help connect those gaps. This course is written for employees with intermediate competency in English as their second language. Exercises will explore the four main categories of communication: Speaking, Listening, Reading and Writing.",
    "objectives": [
      "Acknowledge existing skills in the areas of Speaking, Listening, Reading and Writing. Recognize gaps in skills compared to workplace communication needs.",
      "Understand cultural and workplace influences on communication and how to function within them.",
      "Learn and practise effective skills for oral and written communication, including technical forms such as email and videoconferencing.",
      "Develop an individual Action Plan for continued skill reinforcement and growth."
    ],
    "category": "Communication"
  },
  {
    "id": 71,
    "title": "Entrepreneurship  101",
    "overview": "Wouldn’t it be nice to be your own boss, work on your own schedule, and make money doing something that you’re passionate about? Millions of people around the world are living that dream and running their own business. This course will teach you the basics of entrepreneurship. You’ll consider if entrepreneurship is right for you and learn the basic steps of creating your own business. At the end of the course, you’ll have a solid foundation to start your entrepreneurial  journey.",
    "objectives": [
      "Identify the traits of an entrepreneur and assess your own entrepreneurial capabilities",
      "Outline and evaluate a business idea Develop a product idea",
      "Identify your target market and customers Develop your value proposition",
      "Understand different types of business ownership and structures Evaluate franchising and business purchasing opportunities",
      "Create a pitch deck, executive summary, company presentation, technical white paper, and business plan",
      "Create financial projections for your business Identify where to find business funding",
      "Create a product development plan, marketing plan, and sales strategy Identify ways to protect your intellectual property",
      "Describe effective ways to brand your product Choose the right location for your business Launch and grow your business",
      "Demonstrate the behaviors of an entrepreneurial leader Find appropriate resources to help you on your journey"
    ],
    "category": "Finance & Business"
  },
  {
    "id": 72,
    "title": "Environmental Sustainability - A Practical Approach to Greening Your Organization",
    "overview": "Environmental Management Systems (EMS) involve a set of processes and practices that enable an organization to reduce its environmental impacts and increase its operating efficiency. A well-designed EMS can help an organization address its regulatory demands in a systematic manner thereby reducing the risk of noncompliance. An EMS can also help address non-regulated issues such as pollution prevention, odor management, water usage and energy conservation. In this course, participants will learn about EMS and how it can benefit their organization. Through the use of a Case Study and information they bring about their own company participants will leave with a draft EMS for their organization. It will include organizational Environmental Aspect and Impacts, and Objectives and Targets for their organization’s significant environmental impacts.",
    "objectives": [
      "Define what an Environmental Management System (EMS) is and the benefits of establishing one in your organization",
      "Understand ‘greenwashing’ and ways that your organization can avoid",
      "‘greenwashing’",
      "Know the six KPI areas as defined by the Eco-Management and Audit Scheme (EMAS)",
      "Know the steps necessary to develop an EMS",
      "Be able to determine the Environmental Impacts and Aspects within an organization",
      "Understand and apply an Environmental Significance standard to organizational Environmental  Impacts",
      "Set Objectives and Targets for significant organizational environmental impacts."
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 73,
    "title": "Facilitation  Skills",
    "overview": "It is impossible to be part of an organization today and not attend meetings. Staff meetings, project meetings, and planning and coordinating meetings all take time. There has been a growing realization that we have to pay attention to the process elements of meetings if we want them to be effective. With its focus on asking rather than telling, and listening to build consensus, facilitation is the new leadership ideal, the core competency everybody needs. Managers and supervisors are often asked to facilitate rather than instructor manage their meetings and training sessions. How can you facilitate, rather than control, group decision-making and team interaction? With no formal training, people may find it difficult to make the transition from instructors or managers to facilitators. This course has been created to make core facilitation skills better understood and readily available for your organization. It represents materials and ideas that have been tested and refined over twenty years of active facilitation in all types of settings.",
    "objectives": [
      "Distinguish facilitation from instruction and training",
      "Identify the competencies linked to effective small group facilitation Understand the difference between content and process",
      "Identify the stages of team development and ways to help teams through each stage",
      "Use common process tools to make meetings easier and more productive"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 74,
    "title": "From Boss to Leader",
    "overview": "Being in charge of a department or a company does not automatically make someone a leader. Becoming a good leader involves nurturing and inspiring your team while using emotional intelligence, communicating clearly and giving them confidence to do their jobs well. This course will touch on all of this and more.",
    "objectives": [
      "Know the differences between good and bad bosses",
      "Understand how those who hold management positions can develop into good leaders",
      "Recognize characteristics of good leaders Know the elements of leading by example",
      "Comprehend how to use common sense in workplace dealings Know why it is important to use clear communication techniques Understand the importance of providing effective feedback",
      "Understand how to apply emotional intelligence to your dealings with others"
    ],
    "category": "Communication"
  },
  {
    "id": 75,
    "title": "GDPR Readiness: Creating a Data Privacy Plan",
    "overview": "The Data Privacy Plan is the best way an organization can document and enforce the privacy of personal information they hold. It puts in place procedures and guidance for how to properly handle data, respond to information requests, and deal with unexpected incidents or breaches. It contains information that applies to the day-to- day work of employees, as well as higher-level policies and guiding principles that apply to the company as a whole. The Data Privacy Plan is one of the best ways for an organization to become privacy compliant.",
    "objectives": [
      "Explain what a data privacy plan will include",
      "Know the important terminology and legislation regarding data privacy Map the flow of data in an organization visually",
      "Understand and write an information request procedure Develop an internal data handling procedure Understand and write a data security policy",
      "Understand and write a personal data protection policy Adapt your current client privacy policy",
      "Develop a data breach procedure",
      "Decide on training solutions for data privacy",
      "Know the other necessary pieces of the data privacy plan",
      "Help your organization write, implement, and review a data privacy plan"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 76,
    "title": "GDPR Readiness: Getting the Message Out",
    "overview": "Good communication is essential for getting your privacy message out. Your organization’s employees need to know how to use privacy policies and procedures in their work. Customers also need to know your organization’s stance on privacy, and to be given the information they need to make informed choices.",
    "objectives": [
      "Identify methods to communicate privacy-related content internally to your team",
      "Develop an internal training program",
      "Promote a positive privacy culture in your organization Develop methods to enforce internal privacy practices",
      "Identify the important components of a good client privacy policy Properly notify clients regarding policy changes",
      "Add a privacy policy to your website",
      "Develop your own cookie disclaimer banner for your website Modify your online web forms for better compliancy"
    ],
    "category": "Communication"
  },
  {
    "id": 77,
    "title": "Generation Gap – Closing the Generation Gap in the Workplace",
    "overview": "There are currently five generations in the workforce. Only a few short years ago employers who were expecting to be faced with mass retirements are now looking at accommodating workers who cannot afford to retire, or are simply healthy and happy enough they’d like to stay at work. However, the labor force continues to put in hard work and lots of strategy to find the right people to fill vacancies and to be able to serve their customers. This course examines the history and reality of the generation gap, especially for recruiters and succession planning. In it, we will explore whether defining the actual limits of each generation is most important, or whether the merits of people within the context of employment is the bigger issue. After all, understanding others helps us to understand ourselves and to manage the people that we work with. We will also explore problems, solutions, and strategies to help overcome issues of the generation gap.",
    "objectives": [
      "Identify where the generation gap issue surfaces, and the impact it has on the modern workforce",
      "Describe and apply language that is specific to each generation currently in the workplace",
      "Explore organization strategies that overcome gap issues",
      "Evaluate the need and effectiveness of recruiting, retention, and succession plans in context of the generation gap"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 78,
    "title": "Getting Stuff Done – Personal Development Boot Camp",
    "overview": "Why are there so many different organizational systems and time management methods out there? The answer is simple: it’s like any other personal challenge, like weight loss or money management. There is no simple, one size fits all answer. You must build a solution that works for you. Over the course of this program, we will explore various time management and organizational tools and techniques so that you can build a customized productivity plan for your personal and professional lives. At the end of the course, you will emerge with a plan that works for you, so that you can start regaining control of your life!",
    "objectives": [
      "Identify what personal efficiency is, what skill sets can improve your personal productivity, and what attitudes we should cultivate",
      "Explain why multi-tasking is a myth",
      "Describe what role long-term goals play in short-term efficiency Share a personal vision and develop dreams and goals from it Apply the 80/20 rule and learn how it should affect planning Identify the characteristics of a good organizational system",
      "Develop a plan for an efficient workspace, including a customized information center and a filing system",
      "Apply a system that will allow you to process any type of information that crosses your desk, including e-mail, electronic files, paper files, voice mail, text messages, and drop-in visitors",
      "Use the Eisenhower principle to prioritize work Say no",
      "Use routines to simplify your life",
      "Understand why you procrastinate and develop methods for tackling tasks Apply ideas and tools to make your household more productive and efficient"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 79,
    "title": "Getting Your Job Search Started",
    "overview": "While looking for work can be an exciting time, it can also involve fear and discomfort about change and the unknown. Whether you are already in the midst of a job search or just thinking about it, this course will help you to determine what your skill set is made up of, the kind of work that is important and realistic to include in your search, and how to get started. Today’s job market is not the same as it was even five years ago. Knowing where to go, who to talk to, and the opportunities that are available will help to shift you from someone who dreams about having a job, to someone who has the job they always wanted.",
    "objectives": [
      "Describe your skills, values, and beliefs about work and looking for opportunities Demonstrate an understanding for the types of work available to you and where to go for more information",
      "Recognize the differences and benefits available through career coaches, counselors, and mentors",
      "Apply different approaches to job searching, such as networking and tapping into the hidden job market"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 80,
    "title": "Giving Effective Feedback",
    "overview": "As human beings, we often hunger for feedback. However, many people will tell you  that when they do get feedback, it’s often because of something they have done wrong. This course is designed to help workplace leaders learn how to provide feedback any time that the message is due. Whether feedback is formal or informal, and whether it is provided to employees, peers, or someone else, there are ways that it can be structured to be effective and lasting. This course will help students learn why the way we deliver is feedback is important, how to deliver a message so that people accept it and make changes that may be needed, and how to accept feedback that we are offered.",
    "objectives": [
      "Explain why feedback is essential",
      "Apply a framework for providing formal or informal feedback Use descriptive language in delivering feedback",
      "Describe six characteristics of effective feedback Provide feedback in real situations"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 81,
    "title": "Global Business Strategies",
    "overview": "Opportunities to take a regional business into the global market make it possible to strategically, smartly, and profitably accomplish more than you can by staying local. To prepare, you need to set your business up for success by being open to learning, to applying new ideas, and to continually reviewing how you can create success in the global market. Topics such as trade financing, regulatory considerations, international business planning, sustainability, and much more are included in this course. The materials here are well suited for small and medium sized business leaders as they prepare to take their company into the global marketplace.",
    "objectives": [
      "Describe the complexities of doing business in a global context Discuss trends in global business",
      "Apply strategies and tools needed to help shift a regional business into a global enterprise",
      "Closely evaluate your current business operation and determine its readiness for moving into a global marketplace",
      "Create an international business plan and prepare it for implementation"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 82,
    "title": "Goal Setting",
    "overview": "We all have things we want in life. The route to success is to take the things that we dream about and wish for and turn them into reality. This course will lead students through thinking, planning, and taking action on the things they really want. They will learn ways to ensure that they get where they want to go in life.",
    "objectives": [
      "Identify what’s important to you in your life",
      "Use goal setting activities and appropriate language to articulate what you want in your life",
      "Explain what your dreams and goals are for both the short and long term Use motivating techniques to help you reach your goals",
      "Understand how to deal with setbacks"
    ],
    "category": "Personal Development"
  },
  {
    "id": 83,
    "title": "Growth Hacking",
    "overview": "The new economy calls for a new way of attracting customers and sales. Growth hacking is a system of rapid growth for start-up companies, with a goal of sharing a message and making a sale. This course will teach you how to tap into this method, learning how to create your own growth hacking plan.",
    "objectives": [
      "Identify the growth hacking mindset",
      "Recognize the differences between growth hacking and marketing. Identify the customer need your business can fill",
      "Create and implement product placement and services to fit the need Learn and practice techniques of growth hacking",
      "Review and practice growth marketing strategies Identify the essentials of conversion and optimization Create your own growth hacking plan"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 84,
    "title": "Hiring for Success – Behavioral Interviewing Techniques",
    "overview": "Interviewing sounds easy enough: you arrange for a conversation between you and potential candidates, and then select the best person for a particular position. But what if you could refine the process in such a way that you were confident that you are selecting the right person? How do you separate the good from the great, when they have similar work experience and strengths to offer? This course will give you the skills and tools to hire successful candidates.",
    "objectives": [
      "Recognize the costs incurred by an organization when a wrong hiring decision is made",
      "Develop a fair and consistent interviewing process for selecting employees Prepare better job advertisements and use a variety of markets",
      "Be able to develop a job analysis and position profile",
      "Use traditional, behavioral, achievement oriented, holistic, and situational (critical incident) interview questions",
      "Enhance communication skills that are essential for a skilled recruiter Effectively interview difficult applicants",
      "Check references more effectively",
      "Understand the basic employment and human rights laws that can affect the hiring process"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 85,
    "title": "Honing and Delivering Your Message",
    "overview": "This one-day course will prepare students to develop a message and remain on topic when they are presenting that message to the media and public without straying from the point, or points, they want to make. The final session will give students the opportunity to craft and hone a message of their own.",
    "objectives": [
      "To effectively communicate a message and deliver a point in all forms of communication.",
      "To present ideas to a group or use social media to share a message. How to become a better spokesperson."
    ],
    "category": "Communication"
  },
  {
    "id": 86,
    "title": "Human Resources Training – HR for the Non–HR Manager",
    "overview": "In today’s fast-moving world, many managers and supervisors are expected to deal with some human resource issues. They may be asked to take part in developing job descriptions, take part in interviews, or take responsibility for discipline. This course will introduce those managers to human resource concepts. We will walk you through the hiring process, from performing a skills inventory to conducting the interview; discuss orientation; and cover some issues that arise after the hiring (such as diversity issues, compensation, and discipline).",
    "objectives": [
      "Discuss current issues in the human resource field and the changing role of supervisors and managers in terms of HR functions",
      "Write job specifications and identify core competencies",
      "Apply methods of finding, selecting, and keeping the best people using behavioral description interviewing techniques",
      "Get new employees off to a good start Understand compensation and benefits Maintain healthy employee relations",
      "Make performance appraisals a cooperative process"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 87,
    "title": "Identifying and Combatting Fake News",
    "overview": "In this day and age, it’s becoming increasingly important to learn how to recognize fake news and deal with it if necessary.",
    "objectives": [
      "Define ‘fake news’",
      "Recognize the difference between ‘fake news’ and objective reporting Understand the impacts of ‘fake news’ on your organization",
      "Examine proactive strategies and how they work Learn reactive strategies and why they are essential",
      "Discover opportunities for promotion and growth within ‘fake news’",
      "Create your own ‘fake news’ action plan"
    ],
    "category": "Personal Development"
  },
  {
    "id": 88,
    "title": "Influence and Persuasion",
    "overview": "When we talk about influence and persuasion, we often talk about marketing and sales. However, we influence in many ways and with great frequency. If you want a raise, sometimes you need to persuade your boss. If you want to convince your team to adopt a change, help your staff make choices, or choose the best place for lunch, there is  often influencing taking place. This course will help participants learn how to influence and persuade in a variety of areas.",
    "objectives": [
      "Make decisions about using persuasion versus manipulation",
      "Apply the concepts of pushing and pulling when influencing others Describe different techniques for getting persuasive conversations and presentations  underway",
      "Make a persuasive presentation by using the 5 S’s",
      "Apply storytelling techniques to extend influence",
      "Leverage concepts of neuro linguistic programming in everyday influence and persuasion"
    ],
    "category": "Communication"
  },
  {
    "id": 89,
    "title": "Intermediate Project Management",
    "overview": "Project management is not just restricted to certain industries, or to individuals with certification as a project manager. Lots of us are expected to complete assignments  that are not a usual part of our job, and to get the job done well, within our budget, and on time. This course is intended for those who understand the conceptual phase of a project’s life cycle, including setting goals, creating a vision statement, and creating the Statement of Work. This course will take you through the remaining three stages: planning, execution, and termination.",
    "objectives": [
      "Identify your project’s tasks and resources",
      "Order tasks using the Work Breakdown Structure Schedule tasks effectively",
      "Use basic planning tools such as a Gantt chart, PERT diagram, and network diagram",
      "Prepare a project budget",
      "Modify the project budget and schedule to meet targets Identify and manage risks",
      "Prepare a final project plan Execute and terminate a project",
      "Develop and manage a change control process"
    ],
    "category": "Finance & Business"
  },
  {
    "id": 90,
    "title": "Intrapreneurship",
    "overview": "Intrapreneurship has been described as a great way to make beneficial changes to your organization. People can choose to continue with the status quo, or they can work to make a difference in the lives of themselves and others within the company. Who wants to feel empowered and recognized for their innovative and creative ideas? Who wants to make a difference? If you answered yes to these questions, then this course will help you become energized and ready to push your ideas forward. After you complete this course, you will have ways to get started and implement your plans.",
    "objectives": [
      "Understand the importance of intrapreneurship in today’s economy",
      "Identify the characteristics of an intrapreneur and assess your own strengths Create an intrapreneurial team within your organization",
      "Understand the process of intrapreneurship Develop a new product or process idea Understand the importance of a sales strategy Create a start-up financial statement"
    ],
    "category": "Personal Development"
  },
  {
    "id": 91,
    "title": "Introduction to E-Mail Marketing",
    "overview": "mail marketing is here to stay, and knowing how to do it well is essential for marketers as well as small business owners, coaches, and consultants. In this course you’ll learn the essentials of planning, creating, and delivering exceptional e-mail marketing campaigns that support your overall marketing strategy. After this course, you will be able to reach more clients and potential clients through your efforts at being an e-mail influencer.",
    "objectives": [
      "Apply the concepts of e-mail marketing to grow the influence and reach of a business",
      "Analyze the different applications of e-mail marketing",
      "Select a campaign strategy that will help you increase your reach Apply a defined strategy to get the best out of every e-mail campaign Track and analyze the results of an e-mail campaign"
    ],
    "category": "Communication"
  },
  {
    "id": 92,
    "title": "Introduction to Neuro Linguistic Programming",
    "overview": "Your brain, thoughts, and behavior are at the core of everything that you do every day, even if you aren’t aware of it. In order to truly achieve the results that you want to achieve, you must master the art of bringing your unconscious thoughts to the surface, so that you can have real choice over how you interact with and respond to the world. Neuro linguistic programming can give you the tools to do just that. In this introductory course, you will learn the basics of neuro linguistic programming. We will give you the tools to manage your thoughts, and thereby manage yourself.",
    "objectives": [
      "Define neuro linguistic programming (NLP) and its key terms Describe the key presuppositions of NLP",
      "Describe the five senses as seen by NLP",
      "Identify states of mind and modes of thinking using predicates and visual cues Develop and refine response strategies for any situation",
      "Use enriched language to engage your audience Interpret body language based on NLP principles",
      "Ask clean, precise questions to get the information you need Use hypnotic language and positive commands to get results"
    ],
    "category": "Personal Development"
  },
  {
    "id": 93,
    "title": "Inventory Management – The Nuts and Bolts",
    "overview": "No business can survive very long without an effective program of controls over the parts and materials that are used in producing or distributing goods and services of the firm. Like many other things that depend on human interpretation, “control” means different things to different individuals. This is an introductory course for you, the warehouse or stockroom manager, the person in charge of what comes in and goes out of your company. You want a smooth and cost-effective operation, with enough products on hand to satisfy needs without stockpiling too much. This course will discuss all aspects of inventory management, including common terms, the inventory cycle, how to maintain inventory accuracy, and what some of the latest trends are.",
    "objectives": [
      "Understand terms that are frequently used in warehouse management Identify the goals and objectives of inventory management and measure your process against these goals",
      "Calculate safety stock, reorder points, and order quantities Evaluate inventory management systems",
      "Identify the parts of the inventory cycle Better maintain inventory accuracy"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 94,
    "title": "Kickstarting Your Business with Crowdsourcing",
    "overview": "Today’s fast-paced marketplace demands that businesses think fast. Crowdsourcing can help all types of businesses keep on top of trends and stay competitive. This course will show you how to leverage all types of crowdsourcing (including microwork, macrowork, crowdvoting, crowdcontests, crowdwisdom, and crowdfunding) to kickstart your business’ growth.",
    "objectives": [
      "Define what crowdsourcing is and its value to businesses Determine when crowdsourcing makes sense for a project Describe the crowdsourcing process",
      "Identify platforms and social media tools that can support your crowdsourcing campaigns",
      "Describe the major types of crowdsourcing, including microwork, macrowork, crowdvoting, crowdcontests, crowdwisdom, and crowdfunding",
      "Attract and engage your crowd"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 95,
    "title": "Knowledge Management",
    "overview": "Understanding how to manage the knowledge within your organization is the key to business success. Mismanagement of organizational knowledge comes with a price: frustrated employees, angry customers, and decreased productivity. All of these things can affect our business’ bottom line. The purpose behind knowledge management is to help us bridge organizational gaps and to use our greatest asset (our knowledge) to take our business performance to the next level. The theory of knowledge management has emerged to help us harness and enhance both the individual and collective brain power of our businesses. This course will introduce you to knowledge management tips, techniques, and proven processes.",
    "objectives": [
      "Define knowledge and knowledge management",
      "Explain the difference between explicit and tacit knowledge Identify various knowledge management theoretical models",
      "Explain how a properly implemented knowledge management program can improve efficiency",
      "Describe the steps for employing a new knowledge management program in an organization",
      "Identify the required components for implementing a knowledge management framework within an organization"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 96,
    "title": "Leadership Skills for Supervisors",
    "overview": "Supervisors are the crucial interface between the employee on the shop floor or the service desk and the managers of the organization. Although they often have more technical experience than the employees they supervise, some may not have a lot of leadership experience. This one-day course will provide the skills in communication, coaching, and managing conflict that are necessary for success.",
    "objectives": [
      "Learn ways to prioritize, plan, and manage your time Identify your primary leadership style",
      "Develop some flexibility to use other leadership styles",
      "Determine ways you can meet the needs of employees and co-workers through communication and coaching",
      "Explore ways to make conflict a powerful force for creative, well-rounded solutions to problems"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 97,
    "title": "Lean Process Improvement",
    "overview": "Lean principles have come a long way over the past 300 years. From Benjamin Franklin’s early ideas, to Henry Ford’s work in the 1920’s and the Toyoda precepts in the 1930’s, to Jeffery Liker’s publication of The Toyota Way in 2004, Lean processes have evolved from a simple concept to a set of widely used best practices. This course will give participants the foundation to begin implementing Lean process improvement tools in their workplace. The first part of the course will explore the foundations of Lean through the Toyota precepts and the five critical improvement concepts (value, waste, variation, complexity, and continuous improvement). The second part of the course will give participants tools to perform continuous improvement in their organization, including 5S, 5W-2H, PDSA, DMAIC, Kaizen, Genchi Genbutsu, and various Lean data mapping methods.",
    "objectives": [
      "Define Lean and its key terms",
      "Describe the Toyota Production System and the TPS house Describe the five critical improvement concepts",
      "Use the Kano model to understand, describe, analyze, and improve value Identify and reduce various types of waste",
      "Create a plan for a more environmentally Lean organization",
      "Use the PDSA and R-DMAIC-S models to plan, execute, and evaluate Lean changes",
      "Use Lean thinking frameworks, including 5W-2H, Genchi Genbutsu, and Gemba Prepare for and complete a basic 5-S",
      "Describe the key elements of Kaizen events, particularly a Kaizen blitz Gather, analyze, and interpret data using flow charts, Ishikawa (fishbone) diagrams, SIPOC diagrams, and value stream maps",
      "Go back to your organization with a plan to begin incorporating Lean into your corporate  culture"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 98,
    "title": "Logistics and Supply Chain Management",
    "overview": "The supply chain is a crucial part of any business’ success. Optimizing the flow of products and services as they are planned, sourced, made, delivered, and returned can give your business an extra competitive edge. This course will introduce you to the basic concepts of supply chain management, including the basic flow, core models, supply chain drivers, key metrics, benchmarking techniques, and ideas for taking your supply chain to the next level.",
    "objectives": [
      "Define supply chain management and logistics",
      "Explain the vertical integration and virtual integration models Understand the stages in the basic supply chain flow",
      "Identify participants in the supply chain",
      "Recognize supply chain drivers and ways to optimize them Align supply chain strategy with business strategy",
      "Determine what metrics to track and how to benchmark the related data Troubleshoot basic supply chain problems",
      "Identify ways to develop your supply chain, such as using third-party logistics providers (3PL’s), insourcing processes, developing sustainable and eco-friendly strategies, leveraging process improvement strategies, and adopting new techniques"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 99,
    "title": "Making Training Stick",
    "overview": "We have all participated in training courses or workshops. Some of these have been helpful and useful in our everyday lives and others have seemed redundant and a waste of time. How often have we cheered or grumbled at being asked to participate in a training day? The good news is that all training can be useful and applicable if the trainer keeps some simple tips in mind when developing and applying training. We all learn differently, but there are some truths about learning that can be applicable to most groups and can be tweaked to fit any training session.",
    "objectives": [
      "Familiarize yourself with strategies that can help learning to stick with the audience in an effective and meaningful way",
      "Know how to keep learners focused and motivated to absorb material Develop an effective training style, using appropriate training aids and techniques"
    ],
    "category": "Training & Facilitation"
  },
  {
    "id": 100,
    "title": "Managing Across Cultures",
    "overview": "Our culture defines many aspects of how we think, feel, and act. It can be challenging for managers to bridge cultural differences and bring employees together into a functioning team. This course will give supervisors and managers easy-to-use techniques for communicating across cultures, building teams, promoting multiculturalism in the organization, and leveraging the global talent pool.",
    "objectives": [
      "Define what culture is and how it shapes the workplace Identify how stereotypes shape our perception Develop useful cross-cultural attitudes",
      "Communicate effectively across cultures",
      "Effectively manage employees from different cultures Help teams overcome cross-cultural and virtual barriers",
      "Promote acceptance and awareness in your organization to help create a multicultural  environment",
      "Leverage the global talent pool"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 101,
    "title": "Managing Difficult Conversations",
    "overview": "We have so many interactions in the run of a day, it’s reasonable to expect that some of them are going to be difficult. Whether these are conversations that you have in person, or you manage a virtual team and need to speak with someone in another city, there are things that you can do to make these conversations go smoothly. This course will give you the tools to manage difficult conversations and get the best results possible out of them.",
    "objectives": [
      "Define frame of reference",
      "Establish a positive intent and a desired outcome Use good communication skills during a conversation Draft a script for a difficult conversation",
      "Use specific steps to carry out a difficult conversation Access additional resources as required",
      "Maintain safety in a conversation"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 102,
    "title": "Managing Pressure and Maintaining Balance",
    "overview": "When things are extremely busy at work and you have your hands full with many tasks and dealing with difficult people, having skills you can draw on are essential for peace of mind and growth. This course will help participants understand the causes and costs of workplace pressure, the benefits of creating balance, and how to identify pressure points. They will also learn how to apply emotional intelligence, increase optimism and resilience, and develop strategies for getting ahead.",
    "objectives": [
      "Apply a direct understanding of pressure points and their costs and payoffs Speak in terms related to emotional intelligence, optimism, and resilience Create a personalized toolkit for managing stressors and anger",
      "Work on priorities and achieve defined goals"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 103,
    "title": "Managing the Virtual Workplace",
    "overview": "Virtual workers and virtual teams are an essential part of today’s workforce. More than ever, people are using technology to work anywhere, anytime. There are big benefits to today’s virtual workplace, but there can be big challenges, too. This course will teach managers and supervisors how to prepare employees for the virtual workplace, create telework programs, build virtual teams, leverage technology, and overcome cultural barriers.",
    "objectives": [
      "Create a virtual workplace strategy",
      "Develop, implement, and maintain telecommuting programs Build a virtual team and lead them to success",
      "Plan and lead virtual meetings",
      "Use technology to support your virtual workplace Overcome cultural barriers when leading virtual teams Develop your virtual leadership skills"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 104,
    "title": "Marketing and Sales",
    "overview": "A small marketing budget doesn’t mean you can’t meet your goals and business objectives. You just have to be more creative in your marketing tactics. This course will show you how to get maximum exposure at minimum cost. You will learn effective, low-cost, and non-cost strategies to improve sales, develop your company’s image, and build your bottom line.",
    "objectives": [
      "Recognize what we mean by the term “marketing”",
      "Discover how to use low-cost publicity to get your name known Know how to develop a marketing plan and a marketing campaign",
      "Use your time rather than your money to market your company effectively Understand how to perform a SWOT analysis"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 105,
    "title": "Marketing for Small Businesses",
    "overview": "Marketing is about getting your business known and building your position within the marketplace. Small businesses don`t always have a big budget for marketing, so they have to do things a little differently than big business in order to grow their presence, increase results, and meet business goals. This course will help small business owners and managers develop their marketing message, create a marketing plan, and apply the right  strategies.",
    "objectives": [
      "Describe the essential elements of a marketing plan, no matter the size of the business",
      "Apply tools and strategy to create a marketing plan that supports the growth of your small business",
      "Use six steps to create, implement, and review a marketing plan Leverage the best of Internet and social media marketing"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 106,
    "title": "Marketing with Social Media",
    "overview": "Social media remains an evolving aspect of our daily lives in addition to being a part of our businesses. This course is designed for people who have some familiarity with social media already. Participants will learn to develop a social media marketing plan as a part of their overall marketing strategy, determine who should be on their team, and choose how they will measure what is taking place. In addition, we will explore some of the major social media sites and look at how specialty sites and social media management tools can take their social media marketing to the next level.",
    "objectives": [
      "Describe the value of social media to your marketing plan Create and launch a social media marketing plan",
      "Select the right resources for a social media marketing team Define how to use social media to build an internal community Use metrics to measure the impact of a social media plan Manage difficult social media situations",
      "Describe features of some of the key social media sites, including Facebook, LinkedIn, and Twitter",
      "Decide whether a blog adds value to a social media plan",
      "Speak about specialty sites and social medial management tools",
      "Stay on top of social media trends and adjust your plan as the online world evolves"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 107,
    "title": "Mastering the Interview",
    "overview": "The interview is one of the key elements of the job search process. As with any skill, we can get better at it with preparation and practice. In this course, participants will  explore how to prepare for an interview and become familiar with the types of questions to expect, as well as the questions they should think about asking. They will learn how to prepare for second interviews, testing, and shadowing, as well as how to follow up on their interview sessions.",
    "objectives": [
      "Understand the different types of interview questions and how to prepare to answer them",
      "Apply the most effective ways to prepare for an interview, including how to present yourself professionally",
      "Express yourself effectively",
      "Know how to ask for feedback following an interview"
    ],
    "category": "Personal Development"
  },
  {
    "id": 108,
    "title": "Measuring Training Results",
    "overview": "There are lots of good reasons to offer training, and even more reasons to participate and take training. But there is also an accountability element, where we ask ourselves: What was the value of that training? Did we meet the objectives that were set out? Did the training bring about some kind of lasting change in behavior? In this course, we’ll explore the essential elements in evaluating training and measuring results, while creating a process that is simple for trainers and human resource practitioners to implement.",
    "objectives": [
      "Identify the most effective methods of training evaluation",
      "Describe the steps required in the essential elements of measuring training results",
      "Tie training measurements back to the original training objectives",
      "Explore the most effective methods to report training results, including a return on investment"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 109,
    "title": "Meeting Management – The Art of Making Meetings Work",
    "overview": "Meetings come in all shapes and sizes, from the convention to a quick huddle in an office hallway. This course will be concerned with small working meetings; with groups that have a job to do requiring the energy, commitment, and talents of those who participate. Members of such a group want to get some kind of result out of their time together: solving problems, brainstorming, or simply sharing information. At its best, such a group knows what it is about, and knows and utilizes the strengths of individual members.",
    "objectives": [
      "Understand the value of meetings as a management tool",
      "Recognize the critical planning step that makes meeting time more effective Identify process tools that can help create an open and safe forum for discussion Develop and practice techniques for handling counterproductive behaviors"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 110,
    "title": "Mobbing in the Workplace",
    "overview": "Could mobbing take place in your workplace? There are steps you can take to ensure your organization is mobbing-resistant.",
    "objectives": [
      "Identify mobbing and how it differs from individual bullying Know why and how it occurs",
      "Know how it impacts the person targeted and the organization Know what actions to take if you are being mobbed",
      "Know how to avoid targeting someone",
      "Know what action to take as an organization to stop mobbing before it starts"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 111,
    "title": "Negotiating for Results",
    "overview": "Negotiating is about resolving differences. People who can master the process of negotiation find they can save time and money, develop a higher degree of satisfaction with outcomes at home and at work, and earn greater respect in their communities when they understand how to negotiate well. Negotiating is a fundamental fact of life. Whether you are working on a project or fulfilling support duties, this course will provide you with a basic comfort level to negotiate in any situation. This course includes techniques to promote effective communication and gives you techniques for turning face-to-face confrontation into side-by-side problem solving.",
    "objectives": [
      "Understand how often we all negotiate and the benefits of good negotiation skills",
      "Recognize the importance of preparing for the negotiation process, regardless of the circumstances",
      "Identify the various negotiation styles and their advantages and disadvantages Develop strategies for dealing with tough or unfair tactics",
      "Gain skill in developing alternatives and recognizing options",
      "Understand basic negotiation principles, including BATNA, WATNA, WAP, and the ZOPA"
    ],
    "category": "Communication"
  },
  {
    "id": 112,
    "title": "NLP Tools for Real Life",
    "overview": "Neuro linguistic programming (NLP for short) is all about bringing your unconscious thoughts to the surface, so that you can have real choice over how you interact with and respond to the world. Once you have a grasp on NLP's basic principles, you might be interested in learning about some tools that can help you do more with NLP. This course will give you some hands-on experience with important NLP techniques, including anchoring, establishing congruency, developing rapport, creating outcomes, interpreting and presenting information efficiently, and even some self-hypnosis techniques.",
    "objectives": [
      "Develop a deeper rapport with others",
      "Use anchoring to create a desired state of mind Become congruent with your inner self",
      "Understand and apply basic self-hypnosis techniques",
      "Create goals with momentum using NLP’s outcome framework",
      "Present, interpret, and analyze information using the 7±2 rule and the chunking technique"
    ],
    "category": "Communication"
  },
  {
    "id": 113,
    "title": "Onboarding – The Essential Rules for a Successful Onboarding Program",
    "overview": "Did you know that most employees decide to leave a job within their first 18 months with an organization? When an employee does leave, it usually costs about three times their salary to replace them. You can greatly increase the likelihood that a new employee will stay with you by implementing a well-designed onboarding program that will guide the employee  through their first months with the company. This course will explore the benefits of onboarding, show you how to design an onboarding framework, give you ways to customize the program for different audiences (including managers and executives), and demonstrate how to measure results from the program.",
    "objectives": [
      "Define onboarding and describe how it is different from orientation Identify the business benefits of onboarding",
      "List the factors that contribute to a successful onboarding program Build a team to create an onboarding program",
      "Prepare a vision statement and goals for an onboarding program",
      "Design a framework for an onboarding program that includes program setup, various types of training, games, progress tracking, and follow-up",
      "Customize your onboarding framework",
      "Identify which metrics you should track to evaluate program results",
      "Create a branded, unique program that will strengthen your company’s image and market position"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 114,
    "title": "Overcoming Objections to Nail the Sale",
    "overview": "If you are like most sales professionals, you are always looking for ways to overcome customer objections and close the sale. This course will help you to work through objectives effectively. We will help you plan and prepare for objections so that you can address customer concerns, reduce the number of objections you encounter, and improve your averages at closing sales.",
    "objectives": [
      "Identify the steps you can take to build your credibility Identify the objections that you encounter most frequently",
      "Develop appropriate responses when prospective buyers throw you a curve Learn ways to disarm objections with proven rebuttals that get the sale back on track",
      "Learn how to recognize when a prospect is ready to buy",
      "Identify how working with your sales team can help you succeed"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 115,
    "title": "Performance Management – Managing Employee Performance",
    "overview": "Inspiring someone to be their best is no easy task. Just how do you manage for optimum performance? How do you create a motivating environment that encourages people to go beyond their best? This course will give you some of those skills.",
    "objectives": [
      "Understand the role of goal setting in performance management Have tools to help your employees set and achieve goals",
      "Have a three-phase model that will help you prepare employees for peak performance, activate their inner motivation, and evaluate their skills Have a better knowledge of motivational tools and techniques"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 116,
    "title": "Personal Brand – Maximizing Personal Impact",
    "overview": "Abigail Van Buren, the writer of Dear Abby, once said, “There are two kinds of people: those who come into a room with the attitude, ‘Here I am!’ and those who have the attitude, ‘There you are!’” This course is an exploration about the type of impact we want to have in life and work. Participants will consider and define the influence that they can have on their life and work. They will also learn skills for success and how to create those circumstances.",
    "objectives": [
      "Speak in terms of the impact and influence that you want to have in life and work",
      "Understand your personal style in terms of your personal brand",
      "Develop skill in areas like focus, concentration, and communication to support your brand",
      "Build credibility and trust by living your brand",
      "Take ownership of your image, both online and in person"
    ],
    "category": "Communication"
  },
  {
    "id": 117,
    "title": "Problem Solving and Decision Making",
    "overview": "We make decisions and solve problems continually. We start making decisions before we even get out of bed (shall I get up now or not?). Sometimes, we will have made as many as 50 decisions by the time we leave for work. Despite all the natural decision making that goes on and the problem solving we do, some people are very uncomfortable with having to make decisions. You may know someone who has a hard time making decisions about what to eat, never mind the internal wrestling they go through in order to take on major decisions at work. Likewise, we’ve probably all looked at a solution to something and said, “I could have thought of that.” The key to finding creative solutions is not just creativity, although that will certainly help. The answer rests in our ability to identify options, research them, and then put things together in a way that works. Having a process to work through can take the anxiety out of problem solving and make decisions easier. That’s what this course is all about.",
    "objectives": [
      "Apply problem solving steps and tools",
      "Analyze information to clearly describe problems Identify appropriate solutions",
      "Think creatively and be a contributing member of a problem solving team Select the best approach for making decisions",
      "Create a plan for implementing, evaluating, and following up on decisions Avoid common decision-making mistakes"
    ],
    "category": "Personal Development"
  },
  {
    "id": 118,
    "title": "Project Management Fundamentals",
    "overview": "Project management isn’t just for construction engineers and military logistics experts anymore. Today, in addition to the regular duties of your job, you are often expected to take on extra assignments, and to get that additional job done well, done under budget, and done on time. This course is not intended to take you from a supervisory or administrative position to that of a project manager. However, these topics will familiarize you with the most common terms and practices in terms of working on projects.",
    "objectives": [
      "Describe what is meant by a project Explain what project management means Identify benefits of projects",
      "Identify the phases of a project’s life cycle",
      "Sell ideas and make presentations related to pitching a project Prioritize projects",
      "Begin conceptualizing your project, including goals and vision statements Use project planning tools",
      "Contribute to creating a Statement of Work"
    ],
    "category": "Finance & Business"
  },
  {
    "id": 119,
    "title": "Project Management – All You Need to Know",
    "overview": "Project management is no longer only for mega projects worth hundreds of thousands of dollars. Small projects can benefit from project management tools. These time tested tools can help you to get that small project done well, done under budget, and done on time. This workshop is not intended for those looking to be certified as project managers but rather for those who complete projects at work from time to time. In this course, you will gain experience using the most common project management execution tools from Project Tracking Forms, Risk Monitoring Tables to Communications Plans, Change Request Forms, Issues Logs and Lessons Learned Forms. Your small projects will be more successful than ever!",
    "objectives": [
      "Understand what is meant by a project.",
      "Know how to use simple tools to keep your project on track and on task while identifying risks.",
      "Be able to develop a simple small project communications plan.  Understand simple tools to manage change and issues in your small project. Know how to conduct an effective status meeting.",
      "Be able to close out a project and determine lessons learned."
    ],
    "category": "Communication"
  },
  {
    "id": 120,
    "title": "Project Planning – All You Need to Know",
    "overview": "Project management is no longer only for mega projects worth hundreds of thousands of dollars. Small projects can benefit from project management tools. Statements of Work, Work and Resource Breakdown Structures and Project Planning documents can help you to get that small project done well, under budget, and on time. This workshop is not intended for those looking to be certified as project managers but rather for those who complete projects at work from time to time. In this course, you will gain experience using the most common project management planning tools and will completely plan a case study project from Statement of Work through Work and Resource Breakdown, Scheduling and end up with a completed Project Planning Worksheet. Your small projects will be more successful than ever!",
    "objectives": [
      "Understand what is meant by a project",
      "Distinguish between a Project Charter and Statement of Work (SOW) Use a SOW to begin project planning",
      "Create a Work Breakdown Structure to determine tasks needed to complete a small project",
      "Create a project schedule based on project tasks and resources",
      "Create a Resource Breakdown Structure to determine specific resources needed to complete a small project",
      "Complete a Project Planning Worksheet to act as a touchstone for project completion"
    ],
    "category": "Finance & Business"
  },
  {
    "id": 121,
    "title": "Project Management Training – Understanding Project Management",
    "overview": "Project management isn’t just for construction engineers and military logistics experts anymore. Today, in addition to the regular duties of your job, you are often expected to take on extra assignments and to get that additional job done well, done under budget, and done on time. This course is not intended to take you from a supervisory or administrative position to that of a project manager. However, this course will familiarize you with the most common terms and the most current thinking about projects. In this course, we will walk you through the nuts and bolts of project management, from setting priorities to controlling expenses and reporting on the results. You may still have to cope with the unexpected, but you’ll be better prepared.",
    "objectives": [
      "Understand what is meant by a project",
      "Recognize what steps must be taken to complete projects on time and on budget Have a better ability to sell ideas and make presentations",
      "Know simple techniques and tools for planning and tracking your project Have methods for keeping the team focused and motivated"
    ],
    "category": "Finance & Business"
  },
  {
    "id": 122,
    "title": "Promoting a Marketing Webinar",
    "overview": "This course focuses on the essential steps to promoting a marketing webinar that connects with your target audience and generates your desired results.",
    "objectives": [
      "Define the marketing objectives of your webinar",
      "Create an attendee avatar to connect with your target audience Create and use a lead magnet",
      "Develop a promotion strategy",
      "Explore the potential of a joint venture Create a webinar marketing calendar"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 123,
    "title": "Prospecting for Leads Like a Pro",
    "overview": "Prospecting is one of the keys to your sales success. Keeping your pipeline full ensures that you will continue to attract new business, and so your success today is a result of the prospecting you did six months ago. Today, you will become skilled at prospecting and learn the 80/20 rule. After today, you will know who to target and how to target them, and commit to do some prospecting every day through warming up cold calls, following up on leads, or networking. You will also build your personal prospecting plan and learn how to ensure your future by planting seeds daily.",
    "objectives": [
      "Understand the importance of expanding your client base through effective prospecting",
      "Learn how to use a prospecting system to make you more successful Identify target markets and target companies with the 80/20 rule in mind Develop and practice networking skills at every opportunity",
      "Develop, refine, and execute the art of cold calling"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 124,
    "title": "Public Relations Boot Camp",
    "overview": "The field of public relations has changed with the evolution of computers and the speed with which information can spread. However, the need for public relations to be clear, concise, and accurate while being completely appropriate for the situation has not changed. In this comprehensive course, you will learn how to determine the type of information required, to approach PR strategically, create compelling releases, and manage your media relations.",
    "objectives": [
      "Apply the different purposes to strategic vs. tactical PR Design a PR strategy",
      "Develop strong relationships with reporters and journalists Take your communication skills to a higher level"
    ],
    "category": "Technology & Digital"
  },
  {
    "id": 125,
    "title": "Public Speaking – Speaking Under Pressure",
    "overview": "This course has been designed for those in positions where they must speak in front of audiences that are hostile or demanding. This material is also suitable for those who are relatively new speakers who want some encouragement to speak up in meetings or who want some training before they begin making presentations on behalf of the organization. Speaking under pressure, or thinking on your feet, means being able to quickly organize your thoughts and ideas, and then being able to convey them meaningfully to your audience to modify their attitudes or behavior. It applies to formal speeches as well as everyday business situations. It requires presence of mind, goal orientation, adaptation, and judgment. It also requires differentiating between oral and written  communications. This course is aimed at improving your skills and learning some new techniques which will give you the persuasive edge when you are making a presentation, fielding difficult questions, or presenting complex information.",
    "objectives": [
      "Apply quick and easy preparation methods that will work whether you have one minute or one week to prepare",
      "Prepare for questions, even before you know what those questions will be Overcome nervousness that you may have when speaking in front of a group, particularly if the group is not sympathetic to what you have to say",
      "Use presentation techniques that establish your credibility and get people on your side"
    ],
    "category": "Communication"
  },
  {
    "id": 126,
    "title": "Risk Management",
    "overview": "Risk management has long been a key part of project management and it has also become an increasingly important part of organizational best practices. Corporations have realized that effective risk management can not only reduce the negative impact  of crises; it can provide real benefits and cost savings. The risk management framework provided in this course is flexible enough for any organization. You can apply it to a single project, a department, or use it as a basis for an enterprise-wide risk management program.",
    "objectives": [
      "Define risk and risk management",
      "Describe the COSO ERM cube and ISO 31000 Establish a risk management context",
      "Describe the 7 R’s and 4 T’s that form the framework of risk management activities",
      "Design and complete a basic risk assessment",
      "Determine the appropriate response to risks and create a plan for those responses",
      "Describe the key components of reporting, monitoring, and evaluation of a risk management  program"
    ],
    "category": "Safety & Compliance"
  },
  {
    "id": 127,
    "title": "Safety in the Workplace",
    "overview": "Workplace accidents and injuries cost corporations millions of dollars and thousands of hours lost every year. They also have a profound, often lifelong impact on workers. Introducing a safety culture into your organization, where safety is valued as an integral part of the business’s operation, not only saves the business time and money, it also builds a committed, loyal, healthy workforce. This course will give you the foundation  to start building your safety culture.",
    "objectives": [
      "Understand the difference between a safety program and a safety culture Use resources to help you understand the regulations in your area Launch a safety committee",
      "Identify hazards and reduce them",
      "Apply hiring measures that can improve safety Explain what a safety training program will involve",
      "Identify groups particularly at risk for injury and know how to protect them Help your organization write, implement, and review a safety plan",
      "Respond to incidents and near misses",
      "Understand the basics of accident investigation and documentation"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 128,
    "title": "Self–Leadership",
    "overview": "Self-leadership puts together taking responsibility for our outcomes, setting direction for our lives, and having tools to manage priorities. Self-leaders work at all levels of an organization. They are front-line workers in every possible role, middle managers, and CEOs. Self-leaders like Walt Disney and Wayne Gretzky worked hard to achieve their dreams without using the term self-leadership. However, they have clearly demonstrated that being in control of their behavior and results, focus, practice, and learning were necessary to achieve their goals. Self-leadership requires a commitment from individuals to decide what they want from life and to do what’s necessary to get the results they want. This course will help participants internalize the four pillars of self-leadership and to make meaningful, empowered choices while taking action to get where they want to go.",
    "objectives": [
      "Define self-leadership and what it means on an individual level",
      "Assume responsibility for your results by understanding who you are, what you want, and how to reach your goals",
      "Describe the four pillars of self-leadership",
      "Use techniques related to adjusting to change, cultivating optimism, and developing good habits to build your self-leadership"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 129,
    "title": "Selling Smarter",
    "overview": "It’s no secret that the sales industry continues to change and evolve rapidly. This is an exciting and dynamic profession, although it is often underrated and misunderstood. The back-slapping, high pressure, joke-telling sales person has disappeared. In his place is a new generation of sales professionals: highly trained and well groomed, with the characteristics of honesty, trustworthiness, and competence. Today’s top salespeople are in the business of identifying needs and persuading potential customers to respond favorably to an idea that will result in mutual satisfaction for both the buyer and the seller. They do this in a way which puts the customer first, fully knowing that when they meet the customers’ needs, sales will follow.",
    "objectives": [
      "Explain and apply concepts of customer focused selling",
      "Use goal-setting techniques as a way to focus on what you want to accomplish and develop strategies for getting there",
      "Apply success techniques to get the most out of your work Understand productivity techniques to maximize your use of time Identify ways to find new clients and network effectively"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 130,
    "title": "Six Sigma – Entering the Dojo",
    "overview": "Six Sigma is a set of qualitative and quantitative quality tools that can help a business improve their processes. The efficiency built into the business processes brings about improved profits, confidence and quality. Ultimately this effort is there to ensure customer  satisfaction. The term Six Sigma comes from statistics to indicate that the process outputs fall within three standard deviations from the center (expected value) giving a range of six standard deviations (or 6 sigma- 6 σ). As a result in terms of individual outputs it means you would have 3.4 defects per million items. This course is designed to introduce students to basic concepts of Six Sigma particularly in continuous process improvement. Various quality tools used in process improvements will be explored as well as the importance of customer relationships. Courses in Lean, quality and teams will provide knowledge on the other aspects of how Six Sigma works. It is a predecessor to studies in Six Sigma Yellow, Green and Black Belt.",
    "objectives": [
      "Understand the Basics of Six Sigma.",
      "Describe the seven quality tools to solve process problems. Describe the various quality management tools.",
      "Describe incremental and breakthrough improvements and understand the methodologies of continuous improvement projects.",
      "Describe the importance of customer relationships in a quality organization."
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 131,
    "title": "Skills for the Administrative Assistant",
    "overview": "Work is not the only thing that matters in life, but most of us want to take pride in what we do. While we don’t have to like the people we work with, or report to, at the very least we should be able to interact positively with them. The biggest influence on our job satisfaction is our relationship with others. Our work should not be a burden to us and our offices shouldn’t be battlefields. We are human beings working with other human beings. This course is about working to the best of your abilities, and encouraging the best in those who work with you, or for you.",
    "objectives": [
      "Understand the importance of professional presence on the job Learn how to self-manage to become more effective and efficient",
      "Improve your communications skills, including listening, questioning, and being more assertive",
      "Increase your effectiveness in recognizing and managing conflict, and dealing with difficult people"
    ],
    "category": "Communication"
  },
  {
    "id": 132,
    "title": "Social Selling for Small Businesses",
    "overview": "Social selling isn’t just a fad or the latest approach to selling that businesses need to adopt. It’s a result of the massive integration of social media in how we conduct our lives. Sales professionals understand they can connect to and leverage these habits. This course is designed for entrepreneurs and sales professionals to learn how to function in that space. In this course, we’re going to explore how social selling is an essential requirement for sales teams, and how the relationships that are created and nurtured within social media will help you grow and sustain your business. We’ll also learn how to apply specific techniques to connect with your audience and potential fans in the social space.",
    "objectives": [
      "Describe the attributes of social selling",
      "Explore how social selling can generate results for your small business Apply social selling strategies to create relevance in social media",
      "Understand the power of leveraging different social media platforms in social selling",
      "Measure your social selling results"
    ],
    "category": "Sales & Marketing"
  },
  {
    "id": 133,
    "title": "Strategic Planning",
    "overview": "If you and the people who work with you don’t understand where the company is  going, they may all develop their own priorities and actually prevent you from getting where you need to be. Part of getting everyone on board is creating a strategic plan complete with the organization’s values, vision, and mission. Then, there’s the challenge of bringing these principles to life in a meaningful way that people can relate to. This course will help you describe what you want to do and get people where you want to go.",
    "objectives": [
      "Identify the values that support the company Define the vision for the company",
      "Write a mission statement that explains what the company’s purpose is Complete meaningful SWOT analyses",
      "Apply tools and techniques to create a strategic plan that directs the organization from the executive to the front line",
      "Implement, evaluate, and review a strategic plan",
      "Identify how related tools, such as the strategy map and balanced scorecard, can help you develop a strategic plan"
    ],
    "category": "Personal Development"
  },
  {
    "id": 134,
    "title": "Successfully Managing Change",
    "overview": "None of us can escape change, therefore it is well worth developing strategies to manage it! Because everyone has to manage change, having tools to help embrace it lead to the best outcomes. Successfully Managing Change includes the stages and pace of change, dealing with resistance, adaptive strategies, approaching change as an opportunity for growth, and more.",
    "objectives": [
      "Accept there are no normal or abnormal ways of reacting to change, but that we must start from where we are.",
      "See change not as something to be feared and resisted but as an essential element of the world to be accepted.",
      "Understand that adapting to change is not technical but attitudinal. Change is not an intellectual issue but one that strikes at who you are.",
      "Recognize that before we can embrace the way things will be, we may go through a process of grieving, and of letting go of the way things used to be. See change as an opportunity for self-motivation and innovation.",
      "Identify strategies for helping change to be accepted and implemented in the workplace."
    ],
    "category": "Personal Development"
  },
  {
    "id": 135,
    "title": "Survival Skills for the New Trainer",
    "overview": "Few people choose training and development while they are still in school, and yet there are talented and knowledgeable trainers working in every industry. Some individuals become trainers because they are passionate about sharing their knowledge and about helping people. Others become trainers because their employer asks them to get involved in mentoring, training, or coaching new or existing employees. Trainers also get started when they want to make some changes to their daily activities, but  wish to continue contributing to a particular organization or industry. If you are thinking about becoming a trainer, or have started doing some training already and want to know more about what will help you to become an excellent trainer, this course will help. This course is designed as an exploration of the essential skills that trainers need to develop, and to get you started in the learning process in an interactive and fun environment.",
    "objectives": [
      "Understand the essential background for trainers to have Explore how being genuine enhances training",
      "Identify the elements of good questions Understand how to apply listening skills Develop rapport building strategies",
      "Recognize key skills in a trainer’s toolbox and identify skill areas for development"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 136,
    "title": "Team Building – Developing High Performance Teams",
    "overview": "Success as a manager is heavily influenced by how well your team operates and what kind of results they achieve. Is your team able to solve problems? Can they resolve conflict? Are they enthusiastic and motivated to do their best? Do they work well together? This course is designed for students who want to develop their team leadership skills and unleash the talent of their individual team members.",
    "objectives": [
      "Identify different types of teams",
      "Build teamwork by recognizing and tapping into the twelve characteristics of an effective team",
      "Promote trust and rapport by exploring your team player style and how it impacts group dynamics",
      "Recognize the key elements that move a team from involvement to empowerment and how to give these elements to your team",
      "Develop strategies for dealing with team conflict and common problems Understand how action planning and analysis tools can help your team perform better"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 137,
    "title": "Telemarketing – Using the Telephone as a Sales Tool",
    "overview": "Virtually everybody in sales today sells over the phone at least part of the time. Perhaps it is time for you to evaluate how you use the telephone and where it fits into your sales and marketing mix. This course will show you how the telephone can supplement, enhance, and sometimes replace other means of marketing and selling, and how this personal approach can dramatically increase your sales success. We will also talk about how to hone your communication skills, your ability to persuade, and techniques to personalize each sales call.",
    "objectives": [
      "Build trust and respect with customers and colleagues",
      "Warm up your sales approach to improve success with cold calling Identify ways to make a positive impression",
      "Identify negotiation strategies that will make you a stronger seller Create a script to maximize your efficiency on the phone",
      "Learn what to say and what to ask to create interest, handle objections, and close the sale"
    ],
    "category": "Communication"
  },
  {
    "id": 138,
    "title": "The ABC's of Supervising Others",
    "overview": "This course is for people who are new supervisors or who are interested in a supervisory position, as well as those who are team leads or part-time supervisors without a great deal of authority. This course is designed to help students overcome many of the supervisory problems that they will encounter as a workplace leader. Dealing with the problems that a new supervisor encounters isn’t easy, but it doesn’t have to lead to discouragement.",
    "objectives": [
      "Adjust to the supervisor’s role with confidence",
      "Develop your skills in listening, asking questions, resolving conflict, and giving feedback to employees",
      "Identify key attitudes that you can develop to enhance your supervisory skills Use time management and planning techniques to maximize your success Develop a technique for giving instructions that are clear and understood Understand the importance of developing good relationships with employees and peers, so you are seen as fair and consistent"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 139,
    "title": "The Practical Trainer",
    "overview": "Most people who call themselves trainers today probably didn’t start out to be trainers. They often work in a field where they develop extensive knowledge and then are asked to share what they know. Many trainers have some experience with teaching, writing, or leadership, although they come from nearly every field. As such, people who work as trainers are often put into difficult situations without much understanding of what training is or how to do it well. We know that being a good trainer is the result of developing skills to bring information to an audience. This information will then engage, empower, and encourage continued learning and development. This course will give you the skills that you need so that your students not only learn, but also enjoy the process, retain information shared, and use their new skills back in the workplace.",
    "objectives": [
      "Recognize the importance of considering the participants and their training needs, including the different learning styles and adult learning principles",
      "Know how to write objectives and evaluate whether these objectives have been met at the end of a training session",
      "Develop an effective training style, using appropriate training aids and techniques",
      "Conduct a short group training session that incorporates these training concepts"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 140,
    "title": "The Professional Supervisor",
    "overview": "With a host of new challenges and responsibilities to tackle, new supervisors need training that helps them adjust to their new role. Learning how to supervise your new employees on a trial and error basis can lead to discouragement. This course can help you overcome many of the problems a new supervisor may encounter, and to set the groundwork for a successful change in your working life!",
    "objectives": [
      "Clarify the scope and nature of a supervisory position Learn some ways to deal with the challenges of the role",
      "Recognize the responsibilities you have as a supervisor, to yourself, your team, and your organization",
      "Learn key techniques to help you plan and prioritize effectively",
      "Acquire a basic understanding of leadership, team building, communication, and motivation, and what part they play in effective supervision",
      "Develop strategies for motivating your team, giving feedback, and resolving conflict"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 141,
    "title": "Time Management – Get Organized for Peak Performance",
    "overview": "Time is money, the saying goes, and lots of it gets lost in disorganization and disruption. We also deal with a constant barrage of technology, people, and tasks that can contribute to that disorganization. Many people find that they flit from one task to another, trying to get everything done. In this course you will learn how to make the most of your time by getting a grip on your workflow and office space, using your planner effectively, and delegating some of your work to other people.",
    "objectives": [
      "Better organize yourself and your workspace for peak efficiency",
      "Understand the importance of, and the most useful techniques for, setting and achieving goals",
      "Identify the right things to be doing and develop plans for doing them Learn what to delegate and how to delegate well",
      "Take control of things that can derail your workplace productivity"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 142,
    "title": "Tough Topics – Talking to Employees about Personal Hygiene",
    "overview": "As a manager, you’re probably used to dealing with tough situations: employees who insist on being late, team members who miss deadlines, and staff members who can’t get along. But conversations about an employee’s personal appearance are a whole different ball game. It’s something that we often avoid talking about, or worse, make light of. This course has two major themes. First, we’ll give you a framework for having those tough conversations. We’ll also give you some guidelines for customizing that framework for your organization. Then, we’ll look at some common tough conversations that come up, including body odor, flatulence, poor clothing and hair decisions, and bad breath. You’ll walk away well prepared for any kind of challenging conversation.",
    "objectives": [
      "Identify the advantages to having tough conversations",
      "Describe the components to an effective behavior modification conversation Use your organization’s resources to help you deal with hygiene issues Overcome barriers that employees put up when discussing hygiene problems Resolve hygiene issues such as bad hair days, inappropriate piercings and body art, poor clothing choices, bad breath, body odor, excessive gas, and incontinence",
      "Nip poor hygiene habits in the bud",
      "Identify ways to encourage good hygiene at your workplace"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 143,
    "title": "Trade Shows – Getting the Most Out of Your Trade Show Experience",
    "overview": "Most companies spend huge amounts of time and money designing, construction, outfitting, transporting, and setting up their trade show booth. This course aims to have you understand some of the basic skills that would allow you to get the most out of your trade show experience. The workshop will start by looking at who attends trade shows and why they are there. It will explore a number of things that should be done before the show even starts, including setting trade show goals, understanding your company, and developing good trade show introductions. It will then look at trade show etiquette and skills emphasizing active listening, body language and questioning. A special emphasis will be placed on conducting prospecting. The workshop will end with an exploration of the follow-up necessary after the show. This course will highlight basic skills that should allow you to generate more leads, prospects and especially qualified prospects at your next trade show.",
    "objectives": [
      "Understand the types of people that attend trade shows",
      "Develop trade show goals, which are S.M.A.R.T. - Specific, Measurable, Achievable, Relevant and Time-bound.",
      "Know what your company does (products, marketing strategy, your customers) in order to work successfully in the trade show booth",
      "Realize the importance of good conversation from the opening lines of introduction to the closing of the conversation, hopefully with a potential sale. Develop a variety of introductions that could be used to engage potential customers at a trade show.",
      "Understand the importance of Pre-Promotion to the success of the trade show. Realize the importance of targeted promotional giveaways.",
      "Understand the importance of good booth behavior including Active Listening, Body Language, and Questioning.",
      "Conduct prospecting activities at a trade show, including First Contact, Qualification, Determining Needs, and Closing the Deal",
      "Develop and conduct follow-up activities with leads, prospects, and qualified prospects after the trade show."
    ],
    "category": "Communication"
  },
  {
    "id": 144,
    "title": "Training with Visual Storytelling",
    "overview": "Training is constantly evolving, just as the needs and desires of learners are constantly changing. This course is for trainers who are ready to make their training stronger, more memorable, and more engaging for learners by using visual storytelling and graphical techniques to create better learning experiences that lead to better retention.",
    "objectives": [
      "Describe how storyboarding leads to better training results",
      "Apply storyboarding techniques to create a strong foundation for training Design training that uses storytelling to make it memorable, compelling, and relevant to the audience",
      "Evaluate technology tools to determine what will create the best learning experiences needed for adequate training"
    ],
    "category": "Training & Facilitation"
  },
  {
    "id": 145,
    "title": "Transgender Employees – Creating an Inclusive Work Community",
    "overview": "A safe, inclusive workplace in many jurisdictions is not just the law; it is a goal of every employee and company that values the contributions, well-being, and productivity of everyone in the organization. In society today, individuals are of many personal communities. In addition to heterosexual or ‘straight’ there is also LGBTQ2 – Lesbian, Gay, Bisexual, Transgendered, Queer, and 2, for two-spirited: an aboriginal concept of two sexualities within one body. ‘Trans’, however, refers to gender identity, whereas the other terms describe sexual orientation. The importance of understanding terms of identification is critical to creating and maintain a safe workplace. Transgender Employees: Creating an Inclusive Community is a course to introduce the importance and elements of safe inclusive workspaces for transgendered persons – those identifying as one gender but born into the body of the opposing gender. This course will offer an introduction to terminology, elements, policies, and resources to build and sustain a safe, inclusive environment for transgendered employees and increase the comfort level and productivity off all in your organization.",
    "objectives": [
      "Understand the importance and history of inclusivity in the workplace Increase your understanding of the transgendered experience",
      "Explore and address personal and societal biases, misconceptions, and choices Identify and implement elements to support a safe inclusive workplace"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 146,
    "title": "Using Activities to Make Training Fun",
    "overview": "Most people have been at a party or some other social occasion where someone has told an inappropriate joke and ruined the mood (at least temporarily). Likewise, we’ve all been somewhere where the class clown is able to lighten the mood and help people have fun. The good news is that humor can help you make your training sessions just as engaging as those fun social occasions. Even better, you don’t need to be the class clown or an award-winning comedian to do it. This course will help you identify what kind of humor you can bring to the classroom, and how games can help you engage your participants.",
    "objectives": [
      "Understand how training can include the use of humor and games Explore different types of games",
      "Identify methods to elicit participant buy-in Apply humor principles in adult learning Troubleshoot when games go badly Develop your own games"
    ],
    "category": "Training & Facilitation"
  },
  {
    "id": 147,
    "title": "Women and Leadership – Owning Your Strengths and Skills",
    "overview": "Women have a long-standing history in the workforce, in all roles from front-line worker to visionary founder, influential behind-the-scenes patron to front-and-center CEO. As women, however, what are the influences, barriers and benefits to our leadership? Do we use or even acknowledge our strengths and skills? This is a time of great change in the workforce, in part because of the increase in numbers and influence of women in the workplace. Flex time, daycare and caregiver support, and telecommuting are a few examples of workplace initiatives that benefit everyone, but evolved primarily due to the roles and influence of women who are often juggling multiple home, workplace, and community responsibilities. However, there are some areas in which women could still be more visible and vocal. This course will explore the history of women in the workforce and offer personal opportunities for exploration, identification, and development of leadership strengths and skills.",
    "objectives": [
      "Understand a brief history and evolution of women and leadership Recognize barriers to women’s leadership and how to handle them Learn how to use barriers to create benefits",
      "Define Social and Emotional Intelligence and understand its importance in workplace leadership",
      "Understand the importance of Self-Awareness in identifying and owning your own strengths and skills.",
      "Develop a basic vision and brand for your leadership Understand the essential leadership skills for women Examine steps and skills to good decision making",
      "Create your own Workplace Philosophy Statement and Action Plan"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 148,
    "title": "Working Smarter – Using Technology to Your Advantage",
    "overview": "Rudeness in the workplace is increasing to the level that universities are studying it. Everyone is busy, everyone is stressed, and most people take it out on their colleagues at one time or another. We’ve all been in a situation where we need to print something ASAP and someone has left the printer jammed, or we need coffee and the coffeepot is empty. Technology is supposed to make life easier and simpler, but most managers find themselves cleaning up the messes caused by too many gadgets. This course will show you how to leverage technology to work smarter, not harder.",
    "objectives": [
      "Make your workplace a technology-friendly place",
      "Make the most of computers, telephones, instant messaging, e-mail, contact management applications, and scheduling software",
      "Communicate better with the IT department Make the best software and training choices Set an IT budget",
      "Set expectations and responsibilities for security and privacy Keep employees safe and healthy",
      "Develop and implement a system usage policy Implement policies for dealing with company property Decide whether or not employees should telecommute Make telecommuting work",
      "Deal with workplace rage Address technological issues"
    ],
    "category": "Leadership & Management"
  },
  {
    "id": 149,
    "title": "Working With the Media – Creating a Positive Working Relationship",
    "overview": "The media is more widespread and pervasive than it’s ever been and its reach is growing all the time. Depending on your line of work or hobbies, or just a plain twist of fate, you could end up being the answer part of a question and answer session with a member of the media. It’s easy to become nervous or tongue-tied when being in this situation. Plenty of people get distracted when they consider that what they are saying could very soon be on some news organization’s website or Twitter feed. Being uneasy is perfectly understandable, but you can learn to deal with the media, on a one-off basis, or as a recurring situation. This course will give you the tools you need when dealing with the media and putting your best foot forward without putting your foot in your mouth.",
    "objectives": [
      "Prepare for an interview  Be interviewed successfully Craft a media statement",
      "Develop and issue a press release Understand libel and slander Develop a media package Understand various media outlets Build relationships with the media"
    ],
    "category": "Personal Development"
  },
  {
    "id": 150,
    "title": "Workplace Ergonomics – Injury Prevention Through Ergonomics",
    "overview": "The human body is a fragile system, and we put many demands on it every day. Activities like reaching to get supplies off of a shelf, sitting in front of a computer for hours every day, and moving heavy products around the shop can all take a toll on our bodies. In this course, you will learn how to make your environment as ergonomic as possible in order to make daily tasks easier on your body and mind.",
    "objectives": [
      "Define ergonomics and its related terms",
      "Identify where to get ergonomics information for your region Identify how ergonomics can be incorporated into your workplace",
      "Assess your environment for ergonomic hazards, create ways to resolve those issues, and plan for implementation",
      "Review and evaluate your ergonomic efforts Use change management techniques effectively Describe the basic principles of ergonomics",
      "Outline ergonomic practices for sitting, standing, lifting, carrying, pushing, and pulling",
      "Design an ergonomic workstation",
      "Identify important ergonomic features of tools and machines",
      "Understand the role that environmental factors (such as sound, air quality, and light) play in ergonomics"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 151,
    "title": "Workplace Success – Eight Key Skills You’ll Need",
    "overview": "There have been a number of studies that identify the key skills that workers need to be successful. Various studies call them different things - critical employability skills, soft skills, or transferrable skills. Regardless of the name these skills are critical for workplace success. Eight of the most commonly identified skills are: Being a Productive Team Member, Flexibility, Problem Solving, Resourcefulness, Giving and Receiving Feedback, Self-Confidence, Creative Thinking and Emotional Intelligence. Many of us possess one or more of these attributes already and perhaps all of them. Luckily these skills can be improved upon through training. This course looks to take you from where you are now to a new level of understanding for the key skills that will help to make you successful at work.",
    "objectives": [
      "Know your own team member roles and responsibilities. Understand ways to be an effective team member.",
      "Know how it feels to experience change and know your level of change tolerance. Understand ways to be flexible in times of change.",
      "Know what a problem is and ways to approach problem solving. Recognize the self-fulfilling prophecy and its relevance to their work.",
      "Appreciate the variety of behaviors that characterize resourcefulness in the workplace. Identify tips to giving and receiving feedback.",
      "Realize the uses of feedback to increase their strengths as leaders in the workplace. Recognize self-confident behaviors in the workplace.",
      "Utilize a three-step process to building your own self-confidence. Apply a number of group methods for creative thinking.",
      "Recount the history of social and emotional intelligence theory.",
      "Define Daniel Goleman’s five sets of social and emotional competencies and correlate them to workplace experiences."
    ],
    "category": "HR & Talent"
  },
  {
    "id": 152,
    "title": "Workplace Violence – How to Manage Anger and Violence in the Workplace",
    "overview": "Violence of any sort has many roots. Sometimes there are warning signs of workplace violence, but this is not always the case. It is up to us to learn whatever we can to prevent, identify, and mitigate any threats, and this comprehensive course includes everything a workplace leader needs to get started.",
    "objectives": [
      "Describe what workplace violence is Identify some warning signs of violence Apply the cycle of anger",
      "Understand Albert Bandura’s behavior wheel and how it applies to anger Develop a seven-step process for managing your anger and others’ anger Apply better communication and problem solving skills, which will reduce frustration and anger",
      "Develop some other ways of managing anger, including coping thoughts and relaxation  techniques",
      "Use the nine components of an organizational approach to managing anger, including risk assessment processes",
      "Respond if a violent incident occurs in the workplace, on both an individual and organizational level"
    ],
    "category": "HR & Talent"
  },
  {
    "id": 153,
    "title": "Writing a Business Plan",
    "overview": "This course is designed for business owners and entrepreneurs who are ready to create a business plan. All the essential steps are covered, including drafting the original document; identifying the audience; gathering information; researching; describing product plans; and marketing, sales, and accounting terms. Students will come away from the course energized and prepared to write their business plan.",
    "objectives": [
      "Research and analyze the individual components needed for a business plan Apply skills to create a business plan for different audiences, including investors, banks, and other stakeholders",
      "Explain the purpose and future of your business in easy to understand terms Use accounting terms to describe the future for your business",
      "Describe your marketing, sales, and planning strategies"
    ],
    "category": "Communication"
  }
];
