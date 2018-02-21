jest.mock('../../__mocks__/fetch-jsonp');

import flickrApi from '../js/flickr-service';

it('gets public photos', () => {
  expect.assertions(3);
  return flickrApi.getPublicPhotos()
    .then(response => response.json())
    .then(data => {
      data.items.forEach(item => {
        expect(item.media.m.includes(".jpg")).toEqual(true);
      })
    });
});
