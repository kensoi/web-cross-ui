/* Menu Button */
import React from "react";
import { nanoid } from "nanoid";

/* WEB-X-UI components */
import { XButton, XDropdown } from "../../XForms";

/* Material UI icons */
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from "@mui/icons-material/Login";

class ProfileButton extends React.Component {
  getSchemaButton = (item) => {
    if (item["x-dropdown"] !== undefined) {
      const dropdown = item["x-dropdown"];
      return (
        <XDropdown
          key={nanoid()}
          dropdown={this.dropdownContent(dropdown)}
          contentPosition={this.props.contentPosition || "bottom-left"}
        >
          <XButton icon={item["icon"]}>{item["title"]}</XButton>
        </XDropdown>
      );
    } else {
      return (
        <XButton key={nanoid()} icon={item["icon"]} onClick={item["action"]}>
          {item["title"]}
        </XButton>
      );
    }
  };

  dropdownContent = (dropdown) => {
    return <> {dropdown.map(this.getSchemaButton)} </>;
  };
  profileContent = () => {
    return <>
      {this.dropdownContent(this.noAccountList)}
      {this.dropdownContent(this.globalList)}
    </>
  }

  render() {
    
    this.noAccountList = [
      {
        icon: <PersonIcon />,
        title: "Регистрация",
        action: () => {
          this.props.toolkit.showCard("register")
        },
      },
      {
        icon: <LoginIcon />,
        title: "Войти",
        action: () => {
          this.props.toolkit.showCard("login")
        },
      },
    ]
    this.globalList = [
        {
          icon: <SettingsIcon />,
          title: "Настройки",
          action: () => {
            this.props.toolkit.showCard("settings")
          },
        },
        {
          icon: <HelpOutlineIcon />,
          title: "О программе",
          action: () => {
            this.props.toolkit.showCard("hello")
          },
        },
      ];
    return (
      <XDropdown
        dropdown={<this.profileContent />}
        contentPosition={this.props.contentPosition || "bottom-right"}
        listDirection="row"
      >
        <XButton icon={<MenuIcon />} hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}/>
      </XDropdown>
    );
  }
}

export default ProfileButton;
