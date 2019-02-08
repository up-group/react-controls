import React from 'react';

import '../src/Common/theming/style.css'

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
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

export default class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if (this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div style={styles.main}>
        <h1>Welcome to React-Controls</h1>
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
