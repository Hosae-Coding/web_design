import './post.css';

export default function Post() {
   return (
      <div className="post">
         <img
            className="postImg"
            src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
            alt=""
         />
         <div className="postInfo">
            <div className="postCats">
               <span className="postCat">Music</span>
               <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Super fun story</span>
         </div>
         <hr />
         <span className="postDate">1h ago</span>
      </div>
   );
}
