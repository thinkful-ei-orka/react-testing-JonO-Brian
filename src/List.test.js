import React from 'react';
import List from './List';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

describe('<List />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        let propsVar = {header: 'test header', cards:[{id: 'a',title:'Test Card',content:'loren ipsom'}]}
        ReactDOM.render(<List {...propsVar}/>, div);

        ReactDOM.unmountComponentAtNode(div);
});
});

describe('<List />', () => {
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        let propsVar = {header: 'test header', cards:[{id: 'a',title:'Test Card',content:'loren ipsom'}]}
        const tree = renderer.create(<List {...propsVar}/>).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
