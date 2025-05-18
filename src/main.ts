import "./style.css";
import logo from "./assets/logo.png";
import userAvatar from "./assets/user-avatar.jpeg";
import heartIcon from "./assets/icon-heart.png";
import dmIcon from "./assets/icon-dm.png";
import commmentIcon from "./assets/icon-comment.png";
import { setupCounter } from "./counter.ts";
import { posts } from "./posts.ts";

function renderCards() {
  let element = "";
  for (let index = 0; index < posts.length; index++) {
    element += `
      <div class="container card">
        <div class="card-header padding ">
            <img src="${posts[index].avatar}" alt="user profile photo of ${posts[index].name}" class="avatar-img card-img round" />
            <div>
              <h2>${posts[index].name}</h2>
              <p>${posts[index].location}</p>
            </div>
        </div>
        <div>
          <img src="${posts[index].post}" alt="photo of ${posts[index].name}" class="card-main-img"/>
        </div>
        <div class="card-description padding">
          <ul class="card-icons">
            <li>
              <button class="btn"><img src="${heartIcon}" alt=""/></button>
            </li>
            <li>
              <img src="${commmentIcon}" alt=""/>
            </li>
            <li>
              <img src="${dmIcon}" alt=""/>
            </li>
          </ul>
          <p>
            <span class="like-count">${posts[index].likes}</span>
            <span>likes</span>
          </p>
          <p>
            <span>${posts[index].username}</span>
            ${posts[index].comment}
          </p>
        </div>
      </div>  
    `;
  }
  return element;
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header>
    <div class="container">
      <div class="images padding">
        <img src="${logo}"  alt="Oldagram logo - stylized black script text" class="logo-img">
        <img src="${userAvatar}"  alt="user profile photo in oval frame"  class="avatar-img round">
      </div> 
    </div>
  </header>
  <main>
    ${renderCards() || ""}
  </main>
`;

const btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn')
const spansList: NodeListOf<HTMLSpanElement>  = document.querySelectorAll(".like-count")
//console.log("spanlist",spansList)
//console.log("btns",btns)


setupCounter(btns, spansList);

