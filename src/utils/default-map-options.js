export default {
  // backgroundColor: null,
  // center: null,
  disableDefaultUI: false,
  disableDoubleClickZoom: false,
  draggable: true,
  draggableCursor: null,
  draggingCursor: null,
  fullscreenControl: false,
  fullscreenControlOptions: {
    position: window.google.maps.ControlPosition.RIGHT_TOP,
  },
  heading: 0,
  keyboardShortcuts: true,
  mapMaker: false,
  mapTypeControl: true,
  mapTypeControlOptions: {
    mapTypeIds: [
      window.google.maps.MapTypeId.ROADMAP,
      window.google.maps.MapTypeId.SATELLITE,
    ],
    position: window.google.maps.ControlPosition.TOP_LEFT,
    style: window.google.maps.MapTypeControlStyle.DEFAULT,
  },
  mapTypeId: window.google.maps.MapTypeId.ROADMAP,
  maxZoom: null,
  minZoom: null,
  noClear: false,
  // panControl: null,
  // panControlOptions: null,
  rotateControl: false,
  rotateControlOptions: {
    position: window.google.maps.ControlPosition.TOP_LEFT,
  },
  scaleControl: false,
  scaleControlOptions: {
    style: window.google.maps.ScaleControlStyle.DEFAULT,
  },
  scrollwheel: true,
  // signInControl: null,
  streetView: null,
  streetViewControl: true,
  streetViewControlOptions: null,
  styles: [],
  tilt: 0,
  // zoom: null,
  zoomControl: true,
  zoomControlOptions: {
    position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
  },
};
