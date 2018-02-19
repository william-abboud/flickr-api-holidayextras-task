import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import PhotoWithDetails from '../js/PhotoWithDetails';

describe("Photo with details component", () => {
  const props = {
    photoURL: "some-url-string",
    photoLink: "some-photo-link",
    authorLink: "some-author-link",
    title: "Some title",
    description: "This is a fake description",
    tags: ["tag one", "tag two", "tag three"],
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<PhotoWithDetails {...props} />);
  });

  it("shows an image based on supplied image url", () => {
    expect(wrapper.find(`[src="${props.photoURL}"]`)).toHaveLength(1);
  });

  it("shows title based on supplied title", () => {
    expect(wrapper.text().indexOf(props.title)).not.toBe(-1);
  });

  it("shows description", () => {
    expect(wrapper.text().indexOf(props.description)).not.toBe(-1);
  });

  it("shows tags", () => {
    const text = wrapper.text();
    const isTagShown = tag => expect(text.indexOf(tag)).not.toBe(-1);

    props.tags.forEach(isTagShown);
  });

  it("provides link to author", () => {
    expect(wrapper.find(`[href="${props.authorLink}"]`)).toHaveLength(1);
  });

  it("provides link to image", () => {
    expect(wrapper.find(`[href="${props.photoLink}"]`)).toHaveLength(1);
  });
});
