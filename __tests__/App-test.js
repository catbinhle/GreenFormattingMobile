/**
 * @format
 */

import 'react-native';

import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import App from '../App';

it('renders correctly', () => {
  renderer.create(<App />);
});

/// ///////////////

// import sum from '../test/test';

// test('multiply 3 + 2 to equal 5', () => {
//   expect(sum(3, 2)).toBe(5);
// });
