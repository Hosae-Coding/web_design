import './singlePost.css';

export default function SinglePost() {
   return (
      <div className="singlePost">
         <div className="singlePostWrapper">
            <img
               src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
               alt=""
               className="singlePostImg"
            />
            <h1 className="singlePostTitle">
               Amazing!
               <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit"></i>
                  <i className="singlePostIcon far fa-trash-alt"></i>
               </div>
            </h1>
            <div className="singlePostInfo">
               <span className="singlePostAuthor">
                  Autor: <b>Hosae</b>
               </span>
               <span className="singlePostDate">
                  <b>1h ago</b>
               </span>
            </div>
            <p>
               asf asefasef sefa sef asf asef asef a sefasf asefasef sefa sef
               asf asef asef a sefasf asefasef sefa sef asf asef asef a sefasf
               asefasef sefa sef asf asef asef a sefasf asefasef sefa sef asf
               asef asef a sefasf asefasef sefa sef asf asef asef a sefasf
               asefasef sefa sef asf asef asef a sefasf asefasef sefa sef asf
               asef asef a sefasf asefasef sefa sef asf asef asef a sefasf
               asefasef sefa sef asf asef asef a sefasf asefasef sefa sef asf
               asef asef a sefasf asefasef sefa sef asf asef asef a sefasf
               asefasef sefa sef asf asef asef a sefasf asefasef sefa sef asf
               asef asef a sefasf asefasef sefa sef asf asef asef a sefasf
               asefasef sefa sef asf asef asef a sefasf asefasef sefa sef asf
               asef asef a sefasf asefasef sefa sef asf asef asef a sef
            </p>
         </div>
      </div>
   );
}
