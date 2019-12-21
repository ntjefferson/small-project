import React from 'react';
import { shallow } from 'enzyme';
import { AddHeroForm } from './index';

// Only doing a shallow render
// We are not using a mock store, just using the unconnected component
describe("Add Hero Form Component", () => {
    it('Render without errors', () => {
        const component = shallow(<AddHeroForm />)
        const wrapper = component.find(`[data-test='addHeroForm']`)
        expect(wrapper.length).toBe(1);
    })
})
