import * as React from "react";
import {Button, PageHeader} from "antd";
import './Header.css';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <PageHeader
                className="site-page-header-responsive"
                extra={[
                    <Link to='/users' key="1">
                      <Button type="text" style={{color: '#fff'}}>
                        Users
                      </Button>
                    </Link>,
                    <Link to='/stars' key="1">
                      <Button type="text" style={{color: '#fff'}}>
                        Stars
                      </Button>
                    </Link>,

                ]}
                style={{backgroundColor: '#00334E'}}
            />
        )
    }
}

export default Header;