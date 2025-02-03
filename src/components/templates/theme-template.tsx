const themeTemplates = [
  {
    id: 0,
    name: "Classic Developer Profile",
    requiredFields: [
      "Your Name",
      "Your Project",
      "your.email@example.com",
      "Your GitHub Username",
    ],
    template: `# Hi there, I'm **[Your Name]** 👋  
    
  ## 🚀 About Me  
  - 🎯 Passionate about Web Development & Open Source  
  - 💻 Currently working on **[Your Project]**  
  - 📚 Learning **React, TypeScript, Node.js**  
  - 📫 Reach me at **[your.email@example.com]**  
    
  ## 🛠 Tech Stack  
  <p align="center">
    <img src="https://img.shields.io/badge/-React-000?style=flat&logo=react">
    <img src="https://img.shields.io/badge/-JavaScript-000?style=flat&logo=javascript">
    <img src="https://img.shields.io/badge/-Node.js-000?style=flat&logo=node.js">
  </p>

  ## 📊 GitHub Stats  
  ![Your GitHub stats](https://github-readme-stats.vercel.app/api?username=[Your GitHub Username]&show_icons=true&theme=dark)  
    `,
  },
  {
    id: 1,
    name: "Animated Typing Profile",
    requiredFields: ["Your Current Project","GitHub Username"],
    template: `<h1 align="center">
    <p style="background-color: #2f9c99; text-align: center;">
        <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=24&duration=3000&pause=500&color=F8F8F8&background=FF000000&center=true&vCenter=true&width=450&lines=Hello%2C+World!;I'm+a+Passionate+Developer!;Open+Source+Enthusiast!">
    </p>
  </h1>
  
  ### 👨‍💻 About Me  
  - 🔭 Working on **[Your Current Project]**  
  - 🌱 Learning **GraphQL, Docker, Kubernetes**  
  - 🎯 Focused on **Backend & API Development**  
  - 💬 Ask me about **JavaScript, APIs, Open Source**  

  <br/>  


## Github Stats  
<div align="center"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=[GitHub Username]&hide_border=true&layout=compact" align="center" /></div>  

<br/>  

      `,
  },
  {
    id: 2,
    name: "DevOps Enthusiast",
    requiredFields: ["Project Name","Currently Learning","Ask Me About","Fun Fact"],
    template: `## 🚀 DevOps | Cloud Engineer  
  ☁️ Cloud | 🛠 Automation | ⚡ Performance  
  
  
## About Me
<h1 align="">
  I'm a Cloud Engineer...
</h1>

## Interesting Facts About Me
👩‍💻 I'm currently working on **[Project Name]**

🧠 I'm currently learning **[Currently Learning]**

💬 Ask me about **[Ask Me About]**

⚡️ Fun fact **[Fun Fact]**


  ### 🏆 Certifications  
  - ✅ AWS Certified Solutions Architect  
  - ✅ Docker & Kubernetes Certified  
      `,
  },
  {
    id: 3,
    name: "Tech & Anime Lover",
    requiredFields: ["Your Name", "Your Project", "Your GitHub Username"],
    template: `<h1 align="center">Hey! I'm [Your Name] 👋</h1>  
  <img align="right" alt="Anime GIF" src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" width="300" />
  
  ### 👾 About Me  
  - 🎮 Love gaming, anime & tech  
  - 💡 Learning **React, Web3, Solidity**  
  - 🚀 Currently building **[Your Project]**  

  ### Technologies I work with
  - 🌐 React, HTML, CSS, JavaScript
  - 👨‍💻 GoLang, Rust, C++

  ## Github Stats  
<table><tr><td valign="top" width="50%">

<img src="https://github-readme-stats.vercel.app/api?username=[Your GitHub Username]&show_icons=true&count_private=true&hide_border=true" align="left" style="width: 100%" />

</td><td valign="top" width="50%">

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=[Your GitHub Username]&hide_border=true&layout=compact" align="left" style="width: 100%" />

</td></tr></table>  

<br/>  

<br/>  

<div align="center">
<img src="https://komarev.com/ghpvc/?username=[Your GitHub Username]&&style=flat-square" align="center" />
</div>  

<br/>  
      `,
  },
  {
    id: 4,
    name: "Open Source Contributor",
    requiredFields: [
      "Project Name",
      "Famous Open Source Repo",
      "Your GitHub Username",
    ],
    template: `## 🌍 Open Source Contributor  
  
  ### 🎯 Contributions  
  - 🔥 Maintainer of **[Project Name]**  
  - ✨ Contributed to **[Famous Open Source Repo]**  
  
  ### 🏆 GitHub Trophies  
  ![GitHub Trophies](https://github-profile-trophy.vercel.app/?username=[Your GitHub Username])  
      `,
  },
  {
    id: 5,
    name: "Terminal Style Profile",
    requiredFields: ["Your Name"],
    template: `<h1 align="center">🦄 Code | Automate | Innovate</h1>
  
  \`\`\`console
  $ whoami
  > [Your Name]
  $ sudo rm -rf /bugs
  > Success! 🦾
  \`\`\`
      `,
  },
  {
    id: 6,
    name: "Creative Designer",
    requiredFields: ["Your image URL", "Your Website URL"],
    template: `# 🎨 **Creative Developer | Designer**  
  
  ![Your Name]([Your image URL])  
  
  ### 🖌️ Design & Code  
  - 🎨 UI/UX Enthusiast  
  - ✨ Frontend Developer  
  
  🎭 **Portfolio:** [Your Website URL]  
      `,
  },
  {
    id: 7,
    name: "Minimalist Developer",
    requiredFields: ["Your Name"],
    template: `<h1 align="center">
    <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35">  
    Hi there, I'm [Your Name]!  
  </h1>
  
  ### ⚡ Tech Stack  
  <p align="center">
    <img src="https://img.shields.io/badge/-React-000?style=flat&logo=react">
    <img src="https://img.shields.io/badge/-JavaScript-000?style=flat&logo=javascript">
    <img src="https://img.shields.io/badge/-Node.js-000?style=flat&logo=node.js">
  </p>
      `,
  },
];

export default themeTemplates;
