import React, { PureComponent } from "react";
import "./index.less";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        {/*<img*/}
        {/*  src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"*/}
        {/*  width="32"*/}
        {/*  height="32"*/}
        {/*  alt=""*/}
        {/*/>*/}
        {/*Emoji Search*/}
        {/*<img*/}
        {/*  src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"*/}
        {/*  width="32"*/}
        {/*  height="32"*/}
        {/*  alt=""*/}
        {/*/>*/}
        <nav className="navbar">
            <div className="container">
                <div className="navbar-header header-logo">
                    <a href="/myBlog">Nanami's Blog</a>
                </div>
            </div>
        </nav>
      </header>
    );
  }
}
