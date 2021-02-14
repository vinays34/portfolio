export const ABOUT = "ABOUT";
export const WORK = "WORK";
export const BLOG = "BLOG";
export const CONTACT = "CONTACT";
export const HOME = "HOME";

//Data for works section

export const DATA = [
  {
    title:"TAMBOLA PRO",
    url:"https://play.google.com/store/apps/details?id=com.svinay.tambolanext",
    desc: "An Indian bingo number caller."
  },
  {
    title:"LA CARTE - DIGITAL MENU",
    url:"https://play.google.com/store/apps/details?id=com.svinay.tambolanext",
    desc: "Digital menu for restaurents."
  },
  {
    title:"COVID19 WEBSITE",
    url:"https://www.worldcovid19.info",
    desc:"Website displaying covid 19 related info."
  }
  
];
export const DESC = [
  "An Indian bingo number caller.",
  "Digital menu for restaurents.",
  "Website displaying covid 19 related info.",
];

//
export const BLOGDATA =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

export const MAIN_TOOLS_DESC = [
  "App Framework",
  "State Management",
  "Query Language",
  "Headless CMS",
];

//0-frameworks
//1-programming language
export const SKILLS_SET = [
  {
    title: "FrameWorks",
    data: [
      {
        name: "React Native",
        desc:
          "A javascript frontend framework for building native ios android and web apps",
        status: true,
        type: "0",
        imageurl: "/rnlogo.png",
      },
      {
        name: "Apollo Client",
        desc:
          "Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.",
        status: true,
        type: "0",
        imageurl: "/apollo.png",
      },
      {
        name: "Graphql",
        desc:
          "GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.",
        status: true,
        type: "0",
        imageurl: "graphql.png",
      },
      {
        name: "Strapi",
        desc:
          "Strapi is a flexible, open-source Headless CMS proiding easy to build API's",
        status: true,
        type: "0",
        imageurl: "strapi.png",
      },
      {
        name: "Angular",
        desc:
          "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
        status: false,
        type: "0",
        imageurl: "/angular.png",
      },
    ],
  },
  {
    title: "Programming Languages",
    data: [
      {
        name: "Java",
        desc:
          "Java is a high-level programming language based on Object oriented programming",
        status: "true",
        type: "1",
        imageurl: "/java.png",
      },
      {
        name: "Javascript",
        desc:
          "JavaScript is a lightweight, interpreted, object-oriented language with first-class functions",
        status: "true",
        type: "0",
        imageurl: "js.png",
      },
    ],
  },
];

export const ALL_TOOLS = [
  {
    name: "React Native",
    desc:
      "A javascript frontend framework for building native ios android and web apps",
    status: "true",
    type: "0",
    imageurl: require("./../assets/rnlogo.png"),
  },
  {
    name: "Apollo Client",
    desc:
      "Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.",
    status: "true",
    type: "0",
    imageurl: require("./../assets/rnlogo.png"),
  },
  {
    name: "Graphql",
    desc:
      "GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.",
    status: "true",
    type: "0",
    imageurl: require("./../assets/rnlogo.png"),
  },
  {
    name: "Strapi",
    desc:
      "Strapi is a flexible, open-source Headless CMS proiding easy to build API's",
    status: "true",
    type: "0",
    imageurl: require("./../assets/rnlogo.png"),
  },
  {
    name: "Angular",
    desc:
      "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
    status: "false",
    type: "0",
    imageurl: require("./../assets/rnlogo.png"),
  },
  {
    name: "Java",
    desc:
      "Java is a high-level programming language based on Object oriented programming",
    status: "true",
    type: "1",
  },
  {
    name: "Javascript",
    desc:
      "JavaScript is a lightweight, interpreted, object-oriented language with first-class functions",
    status: "true",
    type: "0",
  },
];
