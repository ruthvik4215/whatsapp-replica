import './Sidebar.css';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from '@material-ui/icons';
import SidebarChats from './SidebarChats';

function Sidebar() {
    return (
        <div className="sidebar" >
            <div className="sidebar_header">
                <Avatar className="avatar" src="https://avatars.githubusercontent.com/u/69630463?s=460&u=001314824006f396ff0e47e6e205ce29623eb970&v=4" />
                <div className="sidebar_header_right" >
                    <IconButton>
                        <DonutLargeIcon className="donutbutton" />
                    </IconButton>
                    <IconButton>
                        <ChatIcon className="chatbutton" />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon className="morevertbutton" />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search" >
                <div className="sidebar_search_container" >
                    <SearchOutlined style={{color:"#555555"}} />
                    <input placeholder="Search or start new chat" type="text" className="searchbox" />
                </div>
            </div>

            <div className="sidebar_chats" >
                <SidebarChats />
                <SidebarChats />
                <SidebarChats />
            </div>
        </div>
    )
}

export default Sidebar
