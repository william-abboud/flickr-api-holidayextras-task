import React from 'react';
import { mount } from 'enzyme';
import PhotoWithDetails from '../js/PhotoWithDetails';

describe("Photo with details component", () => {
  const props = {
    photoURL: "some-url-string",
    photoLink: "some-photo-link",
    authorName: "Jarvis",
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
    const isTagShown = tag => expect(wrapper.text().indexOf(tag)).not.toBe(-1);

    props.tags.forEach(isTagShown);
  });

  it("provides link to image", () => {
    expect(wrapper.find(`[href="${props.photoLink}"]`)).toHaveLength(1);
  });

  it("shows default 'Untitled' title when no title is set", () => {
    wrapper.setProps({ title: undefined });

    expect(wrapper.text().indexOf("Untitled")).not.toBe(-1);
  });

  it("shows default 'Untitled' title when empty string is passed for title", () => {
    wrapper.setProps({ title: "" });

    expect(wrapper.text().indexOf("Untitled")).not.toBe(-1);
  });

  it("shows default title when white space only string is passed for title", () => {
    wrapper.setProps({ title: "" });

    expect(wrapper.text().indexOf("Untitled")).not.toBe(-1);
  });

  it("shows author name", () => {
    expect(wrapper.text().indexOf(props.authorName)).not.toBe(-1);
  });
});
