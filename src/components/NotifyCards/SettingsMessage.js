import React from "react";

import { Headline, Paragraph } from "../x-ui/XBlock";
import { XRaw } from "../x-ui/Separators";
import { XTumbler } from "../x-ui/XForms";

import ColorSchemaChanger from "../ColorSchemaChanger";

class NotifyCard extends React.Component {
    contexts = [
        {
            name: "OFF",
            context: false
        },
        {
            name: "ON",
            context: true
        },
    ]
    render() {
        const XTumbleHeader = <XTumbler 
            tumbleConfig={this.contexts} 
            context={this.props.toolkit.enableHeader} 
            setContext={this.props.toolkit.setHeaderState}/>;
        const XTumbleFooter = <XTumbler 
            tumbleConfig={this.contexts} 
            context={this.props.toolkit.enableFooter} 
            setContext={this.props.toolkit.setFooterState}/>;
        
        return <> 
            <Headline> 
                Настройки 
            </Headline>
            <Paragraph> 
                <XRaw>
                    Включить Header {XTumbleHeader}
                </XRaw>
                <XRaw>
                    Включить Footer {XTumbleFooter}
                </XRaw>
                <XRaw>
                    Цветовая схема <ColorSchemaChanger toolkit={this.props.toolkit} />
                </XRaw>
            </Paragraph>
        </>
    }
    
}

export default NotifyCard;