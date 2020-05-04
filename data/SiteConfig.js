const config = {
  siteTitle: "Pranav Malvawala",
  siteTitleShort: "Pranav's site",
  siteTitleAlt: "Pranav Malvawala",
  siteLogo: "/logos/logo-1024.png",
  siteUrl: "https://www.pranavmalvawala.com",
  repo: "https://github.com/pranavmalvawala/pranavmalvawala.com",
  pathPrefix: "",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "MMMM Do, YYYY",
  siteDescription:
    "Pranav Malvawala is full stack software developer specializing in JavaScript.",
  siteRss: "/rss.xml",
  googleAnalyticsID: "UA-47311644-5",
  email: "pranavmalvawala@gmail.com",
  github: "https://github.com/pranavmalvawala",
  userName: "Pranav Malvawala",
  userEmail: "pranavmalvawala@gmail.com",
  userTwitter: "pranavmalvawala",
  navLinks: [
    {
      name: "About me",
      link: "/me/",
    },
    {
      name: "Blog",
      link: "/blog/",
    },
    {
      name: "Contact",
      link: "/contact/",
    },
  ],
  themeColor: "#c62828",
  backgroundColor: "#e0e0e0",
  navHeight: 100,
  // navLinks: [
  //   {
  //     name: "About",
  //     url: "/#about",
  //   },
  //   {
  //     name: "Work",
  //     url: "/#work",
  //   },
  //   {
  //     name: "Articles",
  //     url: "/articles",
  //   },
  //   {
  //     name: "Contact",
  //     url: "/#contact",
  //   },
  // ],
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/pranavmalvawala",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/pranav-malvawala-3b8364b7/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/pranavmalvawala",
    },
  ],
  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
