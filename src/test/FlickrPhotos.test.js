jest.mock('../../__mocks__/fetch-jsonp');

jest.doMock("../js/flickr-service", () => {
  return {
    getPublicPhotos() {
      return fetchJsonp("photos_public");
    }
  };
});

import fetchJsonp from 'fetch-jsonp';
import React from 'react';
import { shallow } from 'enzyme';
import flickerApi from '../js/flickr-service';
import FlickrPhotos from '../js/FlickrPhotos';
import PhotoWithDetails from '../js/PhotoWithDetails';

describe("FlickrPhotos component", () => {
  it("doesn't render anything until photos are loaded", () => {
    const wrapper = shallow(<FlickrPhotos />);
    expect(wrapper.children().length).toEqual(0);
  });

  it("successfully fetches photos", () => {
    const wrapper = shallow(<FlickrPhotos />);

    flickerApi.getPublicPhotos()
      .then(response => response.json())
      .then(data => {
        expect(wrapper.state('photos')).toEqual(data.items);
      });
  });
});
