import React from "react";
import Profile from "./Profile/Profile";

const everithing = [
  {
    title: "water",
    logo:
      "https://s3.amazonaws.com/tinycards/image/0c771449acaecb388c58d8805d966f61",
    id: 1,
    isShow: true
  },
  {
    title: "dedpul",
    logo: "http://eskipaper.com/images/cool-wallpapers-hd-31.jpg",
    id: 2,
    isShow: false
  },
  {
    title: "star",
    logo:
      "https://images.unsplash.com/photo-1490365728022-deae76380607?ixlib=rb-1.2.1&w=1000&q=80",
    id: 3,
    isShow: false
  }
];

const App = () => (
  <>
    <Profile everithing={everithing} />
  </>
);

export default App;
