function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  // console.log('TODO - validate the longitude, latitude values before submitting');

  const latitudeRes = locationValidation(
    document.getElementById("latitude").value
  );
  if (!latitudeRes) {
    return false;
  }

  const longitudeRes = longitudeValidation(
    document.getElementById("longitude").value
  );
  if (!longitudeRes) {
    return false;
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};

function locationValidation(location) {
  const reg = /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/;
  const latitudeDom = document.getElementById("latitudeMessage");
  latitudeDom.innerText = "";
  if (!reg.test(location)) {
    latitudeDom.innerText = "must be a valid Latitude(-90 to 90)";
    return false;
  }
  return true;
}

function longitudeValidation(longitude) {
  const reg = /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/;
  const longitudeDom = document.getElementById("longitudeMessage");
  longitudeDom.innerText = "";
  if (!reg.test(longitude)) {
    longitudeDom.innerText = "must be a valid Longitude(-180 to 180)";
    return false;
  }
  return true;
}
