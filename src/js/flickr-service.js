import fetchJsonp from 'fetch-jsonp';

const flickrApi = {
  getPublicPhotos() {
    return fetchJsonp("https://api.flickr.com/services/feeds/photos_public.gne?format=json", {
      jsonpCallbackFunction: "jsonFlickrFeed"
    });
  }
};

export default flickrApi;
