import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

export default function setting() {
   return (
      <div className="settings">
         <div className="settingsWrapper">
            <div className="settingsTitle">
               <span className="settingsUpdateTitle">Update your Account</span>
               <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
               <label>Profil Picture</label>
               <div className="settingsPP">
                  <img
                     src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                     alt=""
                  />
                  <label htmlFor="fileInput">
                     <i className="settingsPPIcon fas fa-user-edit"></i>
                  </label>
                  <input
                     type="file"
                     id="fileInput"
                     style={{ display: 'none' }}
                  />
               </div>
               <label>Username</label>
               <input type="text" placeholder="Hosae" />
               <label>E-mail</label>
               <input type="text" placeholder="hosae@test.com" />
               <label>password</label>
               <input type="password" placeholder="password" />
               <button className="settingsSubmitButton">UPDATE</button>
            </form>
         </div>
         <Sidebar />
      </div>
   );
}
