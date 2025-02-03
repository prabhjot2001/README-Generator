const themeTemplates = [
    {
      id: 0,
      name: "Classic Developer Profile",
      requiredFields: ["Your Name", "Your Project", "your.email@example.com", "YourGitHubUsername"],
      templateArray: [
        "# Hi there, I'm **[Your Name]** 👋",
        "## 🚀 About Me",
        "- 🎯 Passionate about Web Development & Open Source",
        "- 💻 Currently working on **[Your Project]**",
        "- 📚 Learning **React, TypeScript, Node.js**",
        "- 📫 Reach me at **[your.email@example.com]**",
        "## 🛠 Tech Stack",
        "<p align=\"center\">",
        "<img src=\"https://img.shields.io/badge/-React-000?style=flat&logo=react\">",
        "<img src=\"https://img.shields.io/badge/-JavaScript-000?style=flat&logo=javascript\">",
        "<img src=\"https://img.shields.io/badge/-Node.js-000?style=flat&logo=node.js\">",
        "</p>",
        "## 📊 GitHub Stats",
        "![Your GitHub stats](https://github-readme-stats.vercel.app/api?username=YourGitHubUsername&show_icons=true&theme=dark)"
      ]
    },
    {
      id: 1,
      name: "Animated Typing Profile",
      requiredFields: ["Your Current Project"],
      templateArray: [
        "<h1 align=\"center\">",
        "<p style=\"background-color: #2f9c99; text-align: center;\">",
        "<img src=\"https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=24&duration=3000&pause=500&color=F8F8F8&background=FF000000&center=true&vCenter=true&width=450&lines=Hello%2C+World!;I'm+a+Passionate+Developer!;Open+Source+Enthusiast!\">",
        "</p>",
        "</h1>",
        "### 👨‍💻 About Me",
        "- 🔭 Working on **[Your Current Project]**",
        "- 🌱 Learning **GraphQL, Docker, Kubernetes**",
        "- 🎯 Focused on **Backend & API Development**",
        "- 💬 Ask me about **JavaScript, APIs, Open Source**"
      ]
    },
    {
      id: 2,
      name: "DevOps Enthusiast",
      requiredFields: [],
      templateArray: [
        "## 🚀 DevOps | Cloud Engineer",
        "☁️ Cloud | 🛠 Automation | ⚡ Performance",
        "### 🏆 Certifications",
        "- ✅ AWS Certified Solutions Architect",
        "- ✅ Docker & Kubernetes Certified"
      ]
    },
    {
      id: 3,
      name: "Tech & Anime Lover",
      requiredFields: ["Your Name", "Your Project"],
      templateArray: [
        " <h1 align=\"center\">Hey! I'm [Your Name] 👋</h1> ",
        " <img align=\"right\" alt=\"Anime GIF\" src=\"https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif\" width=\"300\" /> ",
        " ### 👾 About Me ",
        " - 🎮 Love gaming, anime & tech ",
        " - 💡 Learning **React, Web3, Solidity** ",
        " - 🚀 Currently building **[Your Project]** "
      ]
    }
  ];
  
  export default themeTemplates;
  