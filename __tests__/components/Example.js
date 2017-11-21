//import 'react-native';
import React from 'react';
import Example from '../../app/components/example/Example';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <Example />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
