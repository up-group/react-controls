import React from 'react';

import '../src/Common/theming/style.css'

import {style} from 'typestyle';

const styles = {
  main: {
    lineHeight: 1.4,
    fontFamily: '"-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Arial, freesans, sans-serif',
    backgroundColor : 'rgb(245, 145, 0)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width:'100%',
    height: '100%',
    color:'white',
    paddingLeft: '60px',
    paddingRight: '60px',
    textShadow: '0 1px 2px rgba(0,0,0,0.25)',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: '2px 5px',
    border: '1px solid #eae9e9',
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },

  note: {
    opacity: 0.5,
  },
};

const Heading = style({
  fontSize: '56px',
  lineHeight: '64px',
  fontWeight: 700,
  color: 'white',
})

export default class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if (this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div style={styles.main}>
        <h1 className={Heading}>Design System by Up</h1>
        <p>
          This is a UI component design book for the library <code>react-controls</code>.
        </p>
        <p>
          We've added some basic stories inside the
          {' '}
          <code style={styles.code}>src/stories</code>
          {' '}
          directory.
          <br />
          A story is a single state of one or more UI components.
        </p>

        <p>
          Our component's hierarchy is based on 3 main categories :
          <ul>
            <li><code>Containers</code> components</li>
            <li><code>Display</code> components</li>
            <li><code>Inputs</code> components</li>
          </ul>
        </p>
      </div>
    );
  }
}
