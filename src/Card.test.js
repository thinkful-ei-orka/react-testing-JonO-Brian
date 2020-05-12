import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card'
import ReactDOM from 'react-dom';

describe('<Card />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        let propsVar = {cards: {title:'Test Card',content:'loren ipsom'}}
        ReactDOM.render(<Card {...propsVar}/>, div);

        ReactDOM.unmountComponentAtNode(div);
});
});

describe('<Card />', () => {
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Card />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});