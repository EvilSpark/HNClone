import React from 'react';
import PropTypes from 'prop-types';
import { layouts, themes } from 'store/app/utils';

import {
  Header,
  Spacer,
  NavSection,
  Content,
  Icon,
  Logo,
  ExternalLink,
} from './styles';

const Nav = ({ layout, theme, setLayout, setTheme }) => (
  <div>
    <Header>
      <Content>
        <NavSection>
          <ExternalLink
            href="https://github.com/EvilSpark/HNClone"
            target="_blank"
          >
            <Logo src="https://avatars2.githubusercontent.com/u/30311089?s=460&v=4" />{' '}
            EvilSpark
          </ExternalLink>
        </NavSection>
        <NavSection>
          <p>
            Toggles <i className="fas fa-angle-right"></i>
          </p>
          {layout === layouts.list ? (
            <Icon onClick={() => setLayout(layouts.grid)}>
              <i className="fas fa-th-large" />
            </Icon>
          ) : (
            <Icon onClick={() => setLayout(layouts.list)}>
              <i className="fas fa-th-list" />
            </Icon>
          )}
          {theme === themes.light ? (
            <Icon onClick={() => setTheme(themes.dark)}>
              <i className="fas fa-moon" />
            </Icon>
          ) : (
            <Icon onClick={() => setTheme(themes.light)}>
              <i className="fas fa-sun" />
            </Icon>
          )}
        </NavSection>
      </Content>
    </Header>
    <Spacer />
  </div>
);

Nav.propTypes = {
  layout: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  setLayout: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Nav;
