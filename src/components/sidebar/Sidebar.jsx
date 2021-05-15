import './sidebar.css';

export default function Sidebar() {
   return (
      <div className="sidebar">
         <div className="sidebarItem">
            <span className="sidebarTitle">About ME!</span>
            <img
               src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
               alt=""
            />
            <p>Let't study with me!</p>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
               <li className="sidebarIcon">Life</li>
               <li className="sidebarIcon">Music</li>
               <li className="sidebarIcon">Style</li>
               <li className="sidebarIcon">Computer</li>
               <li className="sidebarIcon">Cinema</li>
               <li className="sidebarIcon">Treavel</li>
            </ul>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">Follow US!</span>
            <div className="sidebarSocial">
               <i className="topIcon fab fa-facebook-square"></i>
               <i className="topIcon fab fa-instagram"></i>
               <i className="topIcon fab fa-pinterest-square"></i>
               <i className="topIcon fab fa-twitter-square"></i>
            </div>
         </div>
      </div>
   );
}
