import avatarVangogh from "./assets/avatar-vangogh.jpg";
import postVangogh from "./assets/post-vangogh.jpg";
import avatarCourbet from "./assets/avatar-courbet.jpg";
import postCourbet from "./assets/post-courbet.jpg";
import avatarDucreux from "./assets/avatar-ducreux.jpg";
import postDucreux from "./assets/post-ducreux.jpg";

export default interface Post {
  name: string;
  username: string;
  location: string;
  avatar: string;
  post: string;
  comment: string;
  likes: number;
}

export const posts: Post[] = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: avatarVangogh,
    post: postVangogh,
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: avatarCourbet,
    post: postCourbet,
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: avatarDucreux,
    post: postDucreux,
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
