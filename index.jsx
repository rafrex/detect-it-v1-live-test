import React from 'react';
import { render } from 'react-dom';
import detectIt from 'detect-it';
import 'current-input';
import styles from './styles/styles';

function App() {
  function toString(item) {
    return item === undefined ? 'undefined' : item.toString();
  }

  function testResult(item, prefix) {
    const value = toString(prefix ? detectIt.state[prefix][item] : detectIt[item]);
    const color = styles.testResultColor(value);
    return <div style={styles.testResult}>{item}: <span style={{ color }}>{value}</span></div>;
  }

  return (
    <div style={styles.app}>
      <div style={styles.versionNote}>
        Note: this is the live test for{' '}
        <a href="https://github.com/rafgraph/detect-it/tree/v1.1.0">Detect It v1</a>,{' '}
        the <a href="https://github.com/rafgraph/detect-it">most recent version of Detect It is available here.</a>
      </div>

      <h1 id="detect-it" style={styles.h1}>Detect It v1 &#8212; Live Detection Test</h1>
      <div style={styles.repoLink}><a href="https://github.com/rafgraph/detect-it/tree/v1.1.0" target="_blank">https://github.com/rafgraph/detect-it/tree/v1.1.0</a></div>
      <div style={styles.code}>
        <div style={styles.detects}>
          {testResult('deviceType')}
          {testResult('passiveEvents')}
          {testResult('hasTouchEventsApi')}
          {testResult('hasPointerEventsApi')}
          {testResult('hasTouch')}
          {testResult('maxTouchPoints')}
          {testResult('primaryHover')}
          {testResult('primaryPointer')}
        </div>
      </div>


      <h2 id="detect-hover" style={styles.h2}>Detect Hover</h2>
      <div style={styles.repoLink}><a href="https://github.com/rafgraph/detect-hover" target="_blank">https://github.com/rafgraph/detect-hover</a></div>
      <div style={styles.code}>
        <div style={styles.detects}>
          {testResult('hover', 'detectHover')}
          {testResult('none', 'detectHover')}
          {testResult('anyHover', 'detectHover')}
          {testResult('anyNone', 'detectHover')}
        </div>
      </div>

      <h2 id="detect-pointer" style={styles.h2}>Detect Pointer</h2>
      <div style={styles.repoLink}><a href="https://github.com/rafgraph/detect-pointer" target="_blank">https://github.com/rafgraph/detect-pointer</a></div>
      <div style={styles.code}>
        <div style={styles.detects}>
          {testResult('fine', 'detectPointer')}
          {testResult('coarse', 'detectPointer')}
          {testResult('none', 'detectPointer')}
          {testResult('anyFine', 'detectPointer')}
          {testResult('anyCoarse', 'detectPointer')}
          {testResult('anyNone', 'detectPointer')}
        </div>
      </div>

      <h2 id="detect-touch-events" style={styles.h2}>Detect Touch Events</h2>
      <div style={styles.repoLink}><a href="https://github.com/rafgraph/detect-touch-events" target="_blank">https://github.com/rafgraph/detect-touch-events</a></div>
      <div style={styles.code}>
        <div style={styles.detects}>
          {testResult('hasApi', 'detectTouchEvents')}
          {testResult('maxTouchPoints', 'detectTouchEvents')}
        </div>
      </div>

      <h2 id="detect-pointer-events" style={styles.h2}>Detect Pointer Events</h2>
      <div style={styles.repoLink}><a className="test" href="https://github.com/rafgraph/detect-pointer-events" target="_blank">https://github.com/rafgraph/detect-pointer-events</a></div>
      <div style={styles.code}>
        <div style={styles.detects}>
          {testResult('hasApi', 'detectPointerEvents')}
          {testResult('requiresPrefix', 'detectPointerEvents')}
          {testResult('hasTouch', 'detectPointerEvents')}
          {testResult('maxTouchPoints', 'detectPointerEvents')}
        </div>
      </div>

      <h2 id="detect-passive-events" style={styles.h2}>Detect Passive Events</h2>
      <div style={styles.repoLink}><a className="test" href="https://github.com/rafgraph/detect-passive-events" target="_blank">https://github.com/rafgraph/detect-passive-events</a></div>
      <div style={styles.code}>
        <div style={styles.detects}>
          {testResult('hasSupport', 'detectPassiveEvents')}
        </div>
      </div>

    </div>
  );
}

render(<App />, document.getElementById('root'));
