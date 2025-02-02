const themeTemplates = [
  {
    id: 0,
    name: "Classic Developer Profile",
    template: `# Hi there, I'm **[Your Name]** 👋  
  
  ## 🚀 About Me  
  - 🎯 Passionate about Web Development & Open Source  
  - 💻 Currently working on **[Your Project]**  
  - 📚 Learning **React, TypeScript, Node.js**  
  - 📫 Reach me at **[your.email@example.com]**  
  
  ## 🛠 Tech Stack  
  ![JavaScript](https://img.shields.io/badge/-JavaScript-000?style=flat&logo=javascript)  
  ![React](https://img.shields.io/badge/-React-000?style=flat&logo=react)  
  ![Node.js](https://img.shields.io/badge/-Node.js-000?style=flat&logo=node.js)  
  
  ## 📊 GitHub Stats  
  ![Your GitHub stats](https://github-readme-stats.vercel.app/api?username=YourGitHubUsername&show_icons=true&theme=dark)  
      `,
  },
  {
    id: 1,
    name: "Animated Typing Profile",
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
      `,
  },
  {
    id: 2,
    name: "DevOps Enthusiast",
    template: `## 🚀 DevOps | Cloud Engineer  
  ☁️ Cloud | 🛠 Automation | ⚡ Performance  
  
  ### 🏆 Certifications  
  - ✅ AWS Certified Solutions Architect  
  - ✅ Docker & Kubernetes Certified  
      `,
  },
  {
    id: 3,
    name: "Tech & Anime Lover",
    template: `<h1 align="center">Hey! I'm [Your Name] 👋</h1>  
  <img align="right" alt="Anime GIF" src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" width="300" />
  
  ### 👾 About Me  
  - 🎮 Love gaming, anime & tech  
  - 💡 Learning **React, Web3, Solidity**  
  - 🚀 Currently building **[Your Project]**  
      `,
  },
  {
    id: 4,
    name: "Open Source Contributor",
    template: `## 🌍 Open Source Contributor  
  
  ### 🎯 Contributions  
  - 🔥 Maintainer of **[Project Name]**  
  - ✨ Contributed to **[Famous Open Source Repo]**  
  
  ### 🏆 GitHub Trophies  
  ![GitHub Trophies](https://github-profile-trophy.vercel.app/?username=YourGitHubUsername)  
      `,
  },
  {
    id: 5,
    name: "Terminal Style Profile",
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
    template: `# 🎨 **Creative Developer | Designer**  
  
  ![Your Name](https://your-image-url.com)  
  
  ### 🖌️ Design & Code  
  - 🎨 UI/UX Enthusiast  
  - ✨ Frontend Developer  
  
  🎭 **Portfolio:** [yourwebsite.com](https://yourwebsite.com)  
      `,
  },
  {
    id: 7,
    name: "Minimalist Developer",
    template: `<h1 align="center">
    <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35">  
    Hi there, I'm **[Your Name]**!  
  </h1>
  
  ### ⚡ Tech Stack  
  <p align="center">
    <img src="https://img.shields.io/badge/-React-000?style=flat&logo=react">
    <img src="https://img.shields.io/badge/-JavaScript-000?style=flat&logo=javascript">
    <img src="https://img.shields.io/badge/-Node.js-000?style=flat&logo=node.js">
  </p>
      `,
  },
  {
    id: 8,
    name: "Ultimate Dev",
    template: `<!-- Welcome GIF -->
<p align="center">
  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35">
  <p style="background-color: #009900; text-align: center;">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=22&duration=3000&pause=1000&color=F8F8F8&background=FF000000&center=true&vCenter=true&width=435&lines=Hello,+World!;I'm+a+Passionate+Developer!;Open+Source+Enthusiast;Geek+by+Nature+%F0%9F%92%BB" alt="Typing SVG">
  </p>
</p>

<!-- About Me -->
name: Your Name
username: YourGitHubUsername
located_in: "Earth 🌍"
interests:
  - Coding 💻
  - Open Source ❤️
  - AI 🤖
  - Cybersecurity 🔒
  - Hacking the Matrix ☕
current_status: "Building cool stuff 🚀"

---

## 🛠 **Tech Stack**  
![Python](https://img.shields.io/badge/-Python-000?style=flat&logo=python)
![JavaScript](https://img.shields.io/badge/-JavaScript-000?style=flat&logo=javascript)
![TypeScript](https://img.shields.io/badge/-TypeScript-000?style=flat&logo=typescript)
![Node.js](https://img.shields.io/badge/-Node.js-000?style=flat&logo=node.js)
![React](https://img.shields.io/badge/-React-000?style=flat&logo=react)
![C++](https://img.shields.io/badge/-C++-000?style=flat&logo=cplusplus)
![Linux](https://img.shields.io/badge/-Linux-000?style=flat&logo=linux)
![Docker](https://img.shields.io/badge/-Docker-000?style=flat&logo=docker)
![Git](https://img.shields.io/badge/-Git-000?style=flat&logo=git)
![Neovim](https://img.shields.io/badge/-Neovim-000?style=flat&logo=neovim)
![Arch Linux](https://img.shields.io/badge/-Arch_Linux-000?style=flat&logo=archlinux)

---

## 📊 **GitHub Stats**
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=YourGitHubUsername&show_icons=true&theme=dracula" height="170">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=YourGitHubUsername&theme=dracula" height="170">
</p>

---

## 🔥 **Geeky Repositories**
- ⚡ [**My Awesome Project**](https://github.com/YourGitHubUsername/your-awesome-project) - A cool project that does awesome things.
- 🔥 [**Dotfiles**](https://github.com/YourGitHubUsername/dotfiles) - My custom Linux configuration files (for the real geeks).
- 🤖 [**AI Experiments**](https://github.com/YourGitHubUsername/ai-experiments) - Playing with machine learning and AI models.

---

## 🤝 **Let's Connect**
<p align="center">
  <a href="https://twitter.com/yourhandle"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"></a>
  <a href="https://linkedin.com/in/yourhandle"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="mailto:your.email@example.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://yourwebsite.com"><img src="https://img.shields.io/badge/Website-FF7139?style=for-the-badge&logo=firefox&logoColor=white"></a>
</p>

---

## 🧑‍💻 **Random Dev Quote**
![Quote](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical)

---

## 🎮 **Code is Life**
\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello, GitHub Geeks! Keep coding and stay curious! 🚀\n");
    return 0;
}
\`\`\`

---

⚡ **Pro Tip:** *If you can think it, you can code it!* 🤓
  
---
`,
  },
];

export default themeTemplates;
