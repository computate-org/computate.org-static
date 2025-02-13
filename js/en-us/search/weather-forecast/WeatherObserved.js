
// Search //

async function searchWeatherObserved($formFilters, success, error) {
  var filters = searchWeatherObservedFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, textStatus, errorThrown ) {};

  searchWeatherObservedVals(filters, target, success, error);
}

function searchWeatherObservedFilters($formFilters) {
  var filters = [];
  if($formFilters) {

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterAreaServed = $formFilters.querySelector('.valueAreaServed')?.value;
    if(filterAreaServed != null && filterAreaServed !== '')
      filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

    var filterId = $formFilters.querySelector('.valueId')?.value;
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterNgsildTenant = $formFilters.querySelector('.valueNgsildTenant')?.value;
    if(filterNgsildTenant != null && filterNgsildTenant !== '')
      filters.push({ name: 'fq', value: 'ngsildTenant:' + filterNgsildTenant });

    var filterNgsildPath = $formFilters.querySelector('.valueNgsildPath')?.value;
    if(filterNgsildPath != null && filterNgsildPath !== '')
      filters.push({ name: 'fq', value: 'ngsildPath:' + filterNgsildPath });

    var filterNgsildContext = $formFilters.querySelector('.valueNgsildContext')?.value;
    if(filterNgsildContext != null && filterNgsildContext !== '')
      filters.push({ name: 'fq', value: 'ngsildContext:' + filterNgsildContext });

    var filterNgsildData = $formFilters.querySelector('.valueNgsildData')?.value;
    if(filterNgsildData != null && filterNgsildData !== '')
      filters.push({ name: 'fq', value: 'ngsildData:' + filterNgsildData });

    var filterAddress = $formFilters.querySelector('.valueAddress')?.value;
    if(filterAddress != null && filterAddress !== '')
      filters.push({ name: 'fq', value: 'address:' + filterAddress });

    var filterAlternateName = $formFilters.querySelector('.valueAlternateName')?.value;
    if(filterAlternateName != null && filterAlternateName !== '')
      filters.push({ name: 'fq', value: 'alternateName:' + filterAlternateName });

    var filterAtmosphericPressure = $formFilters.querySelector('.valueAtmosphericPressure')?.value;
    if(filterAtmosphericPressure != null && filterAtmosphericPressure !== '')
      filters.push({ name: 'fq', value: 'atmosphericPressure:' + filterAtmosphericPressure });

    var filterDataProvider = $formFilters.querySelector('.valueDataProvider')?.value;
    if(filterDataProvider != null && filterDataProvider !== '')
      filters.push({ name: 'fq', value: 'dataProvider:' + filterDataProvider });

    var filterDateCreated = $formFilters.querySelector('.valueDateCreated')?.value;
    if(filterDateCreated != null && filterDateCreated !== '')
      filters.push({ name: 'fq', value: 'dateCreated:' + filterDateCreated });

    var filterDateIssued = $formFilters.querySelector('.valueDateIssued')?.value;
    if(filterDateIssued != null && filterDateIssued !== '')
      filters.push({ name: 'fq', value: 'dateIssued:' + filterDateIssued });

    var filterDateModified = $formFilters.querySelector('.valueDateModified')?.value;
    if(filterDateModified != null && filterDateModified !== '')
      filters.push({ name: 'fq', value: 'dateModified:' + filterDateModified });

    var filterDateRetrieved = $formFilters.querySelector('.valueDateRetrieved')?.value;
    if(filterDateRetrieved != null && filterDateRetrieved !== '')
      filters.push({ name: 'fq', value: 'dateRetrieved:' + filterDateRetrieved });

    var filterDayMaximum = $formFilters.querySelector('.valueDayMaximum')?.value;
    if(filterDayMaximum != null && filterDayMaximum !== '')
      filters.push({ name: 'fq', value: 'dayMaximum:' + filterDayMaximum });

    var filterDayMinimum = $formFilters.querySelector('.valueDayMinimum')?.value;
    if(filterDayMinimum != null && filterDayMinimum !== '')
      filters.push({ name: 'fq', value: 'dayMinimum:' + filterDayMinimum });

    var filterFeelsLikeTemperature = $formFilters.querySelector('.valueFeelsLikeTemperature')?.value;
    if(filterFeelsLikeTemperature != null && filterFeelsLikeTemperature !== '')
      filters.push({ name: 'fq', value: 'feelsLikeTemperature:' + filterFeelsLikeTemperature });

    var filterGustSpeed = $formFilters.querySelector('.valueGustSpeed')?.value;
    if(filterGustSpeed != null && filterGustSpeed !== '')
      filters.push({ name: 'fq', value: 'gustSpeed:' + filterGustSpeed });

    var filterIlluminance = $formFilters.querySelector('.valueIlluminance')?.value;
    if(filterIlluminance != null && filterIlluminance !== '')
      filters.push({ name: 'fq', value: 'illuminance:' + filterIlluminance });

    var filterOwner = $formFilters.querySelector('.valueOwner')?.value;
    if(filterOwner != null && filterOwner !== '')
      filters.push({ name: 'fq', value: 'owner:' + filterOwner });

    var filterPrecipitation = $formFilters.querySelector('.valuePrecipitation')?.value;
    if(filterPrecipitation != null && filterPrecipitation !== '')
      filters.push({ name: 'fq', value: 'precipitation:' + filterPrecipitation });

    var filterPrecipitationProbability = $formFilters.querySelector('.valuePrecipitationProbability')?.value;
    if(filterPrecipitationProbability != null && filterPrecipitationProbability !== '')
      filters.push({ name: 'fq', value: 'precipitationProbability:' + filterPrecipitationProbability });

    var filterRefPointOfInterest = $formFilters.querySelector('.valueRefPointOfInterest')?.value;
    if(filterRefPointOfInterest != null && filterRefPointOfInterest !== '')
      filters.push({ name: 'fq', value: 'refPointOfInterest:' + filterRefPointOfInterest });

    var filterRelativeHumidity = $formFilters.querySelector('.valueRelativeHumidity')?.value;
    if(filterRelativeHumidity != null && filterRelativeHumidity !== '')
      filters.push({ name: 'fq', value: 'relativeHumidity:' + filterRelativeHumidity });

    var filterSeeAlso = $formFilters.querySelector('.valueSeeAlso')?.value;
    if(filterSeeAlso != null && filterSeeAlso !== '')
      filters.push({ name: 'fq', value: 'seeAlso:' + filterSeeAlso });

    var filterSource = $formFilters.querySelector('.valueSource')?.value;
    if(filterSource != null && filterSource !== '')
      filters.push({ name: 'fq', value: 'source:' + filterSource });

    var filterTemperature = $formFilters.querySelector('.valueTemperature')?.value;
    if(filterTemperature != null && filterTemperature !== '')
      filters.push({ name: 'fq', value: 'temperature:' + filterTemperature });

    var filterUVIndexMax = $formFilters.querySelector('.valueUVIndexMax')?.value;
    if(filterUVIndexMax != null && filterUVIndexMax !== '')
      filters.push({ name: 'fq', value: 'uVIndexMax:' + filterUVIndexMax });

    var filterValidFrom = $formFilters.querySelector('.valueValidFrom')?.value;
    if(filterValidFrom != null && filterValidFrom !== '')
      filters.push({ name: 'fq', value: 'validFrom:' + filterValidFrom });

    var filterValidTo = $formFilters.querySelector('.valueValidTo')?.value;
    if(filterValidTo != null && filterValidTo !== '')
      filters.push({ name: 'fq', value: 'validTo:' + filterValidTo });

    var filterValidity = $formFilters.querySelector('.valueValidity')?.value;
    if(filterValidity != null && filterValidity !== '')
      filters.push({ name: 'fq', value: 'validity:' + filterValidity });

    var filterVisibility = $formFilters.querySelector('.valueVisibility')?.value;
    if(filterVisibility != null && filterVisibility !== '')
      filters.push({ name: 'fq', value: 'visibility:' + filterVisibility });

    var filterWeatherType = $formFilters.querySelector('.valueWeatherType')?.value;
    if(filterWeatherType != null && filterWeatherType !== '')
      filters.push({ name: 'fq', value: 'weatherType:' + filterWeatherType });

    var filterWindDirection = $formFilters.querySelector('.valueWindDirection')?.value;
    if(filterWindDirection != null && filterWindDirection !== '')
      filters.push({ name: 'fq', value: 'windDirection:' + filterWindDirection });

    var filterWindSpeed = $formFilters.querySelector('.valueWindSpeed')?.value;
    if(filterWindSpeed != null && filterWindSpeed !== '')
      filters.push({ name: 'fq', value: 'windSpeed:' + filterWindSpeed });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.querySelector('.valueSessionId')?.value;
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterTitle = $formFilters.querySelector('.valueTitle')?.value;
    if(filterTitle != null && filterTitle !== '')
      filters.push({ name: 'fq', value: 'title:' + filterTitle });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterAreaServedColors = $formFilters.querySelector('.valueAreaServedColors')?.value;
    if(filterAreaServedColors != null && filterAreaServedColors !== '')
      filters.push({ name: 'fq', value: 'areaServedColors:' + filterAreaServedColors });

    var filterAreaServedTitles = $formFilters.querySelector('.valueAreaServedTitles')?.value;
    if(filterAreaServedTitles != null && filterAreaServedTitles !== '')
      filters.push({ name: 'fq', value: 'areaServedTitles:' + filterAreaServedTitles });

    var filterAreaServedLinks = $formFilters.querySelector('.valueAreaServedLinks')?.value;
    if(filterAreaServedLinks != null && filterAreaServedLinks !== '')
      filters.push({ name: 'fq', value: 'areaServedLinks:' + filterAreaServedLinks });

    var filterEntityShortId = $formFilters.querySelector('.valueEntityShortId')?.value;
    if(filterEntityShortId != null && filterEntityShortId !== '')
      filters.push({ name: 'fq', value: 'entityShortId:' + filterEntityShortId });
  }
  return filters;
}

function searchWeatherObservedVals(filters, target, success, error) {


  fetch(
    '/en-us/api/weather-forecast?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok)
        success(response, target);
      else
        error(response, target);
    })
    .catch(response => error(response, target));
}

function suggestWeatherObservedObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    $list.empty();
    data['list'].forEach((o, i) => {
      var $i = document.querySelector('<i class="fa-regular fa-cloud-bolt-sun"></i>');
      var $span = document.createElement('span');      $span.setAttribute('class', '');      $span.innerText = o['title'];
      var $li = document.createElement('li');
      var $a = document.createElement('a').setAttribute('href', o['editPage']);
      $a.append($i);
      $a.append($span);
      $li.append($a);
      $list.append($li);
    });
  };
  error = function( jqXhr, textStatus, errorThrown ) {};
  searchWeatherObservedVals($formFilters, target, success, error);
}

// GET //

async function getWeatherObserved(pk) {
  fetch(
    '/en-us/api/weather-forecast/' + entityShortId
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok)
        success(response, target);
      else
        error(response, target);
    })
    .catch(response => error(response, target));
}

// PATCH //

async function patchWeatherObserved($formFilters, $formValues, target, entityShortId, success, error) {
  var filters = patchWeatherObservedFilters($formFilters);

  var vals = {};

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  var removePk = $formValues.querySelector('.removePk')?.value === 'true';
  var setPk = removePk ? null : $formValues.querySelector('.setPk')?.value;
  var addPk = $formValues.querySelector('.addPk')?.value;
  if(removePk || setPk != null && setPk !== '')
    vals['setPk'] = setPk;
  if(addPk != null && addPk !== '')
    vals['addPk'] = addPk;
  var removePk = $formValues.querySelector('.removePk')?.value;
  if(removePk != null && removePk !== '')
    vals['removePk'] = removePk;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value === 'true';
  var setCreated = removeCreated ? null : $formValues.querySelector('.setCreated')?.value;
  var addCreated = $formValues.querySelector('.addCreated')?.value;
  if(removeCreated || setCreated != null && setCreated !== '')
    vals['setCreated'] = setCreated;
  if(addCreated != null && addCreated !== '')
    vals['addCreated'] = addCreated;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value;
  if(removeCreated != null && removeCreated !== '')
    vals['removeCreated'] = removeCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  var removeModified = $formValues.querySelector('.removeModified')?.value === 'true';
  var setModified = removeModified ? null : $formValues.querySelector('.setModified')?.value;
  var addModified = $formValues.querySelector('.addModified')?.value;
  if(removeModified || setModified != null && setModified !== '')
    vals['setModified'] = setModified;
  if(addModified != null && addModified !== '')
    vals['addModified'] = addModified;
  var removeModified = $formValues.querySelector('.removeModified')?.value;
  if(removeModified != null && removeModified !== '')
    vals['removeModified'] = removeModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  var removeArchived = $formValues.querySelector('.removeArchived')?.value === 'true';
  if(valueArchived != null)
    valueArchived = valueArchived === 'true';
  var valueArchivedSelectVal = $formValues.querySelector('select.setArchived')?.value;
  if(valueArchivedSelectVal != null)
    valueArchivedSelectVal = valueArchivedSelectVal === 'true';
  if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
    valueArchived = valueArchivedSelectVal == 'true';
  var setArchived = removeArchived ? null : valueArchived;
  var addArchived = $formValues.querySelector('.addArchived')?.checked;
  if(removeArchived || setArchived != null && setArchived !== '')
    vals['setArchived'] = setArchived;
  if(addArchived != null && addArchived !== '')
    vals['addArchived'] = addArchived;
  var removeArchived = $formValues.querySelector('.removeArchived')?.checked;
  if(removeArchived != null && removeArchived !== '')
    vals['removeArchived'] = removeArchived;

  var valueName = $formValues.querySelector('.valueName')?.value;
  var removeName = $formValues.querySelector('.removeName')?.value === 'true';
  var setName = removeName ? null : $formValues.querySelector('.setName')?.value;
  var addName = $formValues.querySelector('.addName')?.value;
  if(removeName || setName != null && setName !== '')
    vals['setName'] = setName;
  if(addName != null && addName !== '')
    vals['addName'] = addName;
  var removeName = $formValues.querySelector('.removeName')?.value;
  if(removeName != null && removeName !== '')
    vals['removeName'] = removeName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  var removeDescription = $formValues.querySelector('.removeDescription')?.value === 'true';
  var setDescription = removeDescription ? null : $formValues.querySelector('.setDescription')?.value;
  var addDescription = $formValues.querySelector('.addDescription')?.value;
  if(removeDescription || setDescription != null && setDescription !== '')
    vals['setDescription'] = setDescription;
  if(addDescription != null && addDescription !== '')
    vals['addDescription'] = addDescription;
  var removeDescription = $formValues.querySelector('.removeDescription')?.value;
  if(removeDescription != null && removeDescription !== '')
    vals['removeDescription'] = removeDescription;

  var valueLocation = $formValues.querySelector('.valueLocation')?.value;
  var removeLocation = $formValues.querySelector('.removeLocation')?.value === 'true';
  var setLocation = removeLocation ? null : $formValues.querySelector('.setLocation')?.value;
  var addLocation = $formValues.querySelector('.addLocation')?.value;
  if(removeLocation || setLocation != null && setLocation !== '')
    vals['setLocation'] = JSON.parse(setLocation);
  if(addLocation != null && addLocation !== '')
    vals['addLocation'] = addLocation;
  var removeLocation = $formValues.querySelector('.removeLocation')?.value;
  if(removeLocation != null && removeLocation !== '')
    vals['removeLocation'] = removeLocation;

  var valueAreaServed = $formValues.querySelector('.valueAreaServed')?.value;
  var removeAreaServed = $formValues.querySelector('.removeAreaServed')?.value === 'true';
  var setAreaServed = removeAreaServed ? null : $formValues.querySelector('.setAreaServed')?.value;
  var addAreaServed = $formValues.querySelector('.addAreaServed')?.value;
  if(removeAreaServed || setAreaServed != null && setAreaServed !== '')
    vals['setAreaServed'] = JSON.parse(setAreaServed);
  if(addAreaServed != null && addAreaServed !== '')
    vals['addAreaServed'] = addAreaServed;
  var removeAreaServed = $formValues.querySelector('.removeAreaServed')?.value;
  if(removeAreaServed != null && removeAreaServed !== '')
    vals['removeAreaServed'] = removeAreaServed;

  var valueId = $formValues.querySelector('.valueId')?.value;
  var removeId = $formValues.querySelector('.removeId')?.value === 'true';
  var setId = removeId ? null : $formValues.querySelector('.setId')?.value;
  var addId = $formValues.querySelector('.addId')?.value;
  if(removeId || setId != null && setId !== '')
    vals['setId'] = setId;
  if(addId != null && addId !== '')
    vals['addId'] = addId;
  var removeId = $formValues.querySelector('.removeId')?.value;
  if(removeId != null && removeId !== '')
    vals['removeId'] = removeId;

  var valueNgsildTenant = $formValues.querySelector('.valueNgsildTenant')?.value;
  var removeNgsildTenant = $formValues.querySelector('.removeNgsildTenant')?.value === 'true';
  var setNgsildTenant = removeNgsildTenant ? null : $formValues.querySelector('.setNgsildTenant')?.value;
  var addNgsildTenant = $formValues.querySelector('.addNgsildTenant')?.value;
  if(removeNgsildTenant || setNgsildTenant != null && setNgsildTenant !== '')
    vals['setNgsildTenant'] = setNgsildTenant;
  if(addNgsildTenant != null && addNgsildTenant !== '')
    vals['addNgsildTenant'] = addNgsildTenant;
  var removeNgsildTenant = $formValues.querySelector('.removeNgsildTenant')?.value;
  if(removeNgsildTenant != null && removeNgsildTenant !== '')
    vals['removeNgsildTenant'] = removeNgsildTenant;

  var valueNgsildPath = $formValues.querySelector('.valueNgsildPath')?.value;
  var removeNgsildPath = $formValues.querySelector('.removeNgsildPath')?.value === 'true';
  var setNgsildPath = removeNgsildPath ? null : $formValues.querySelector('.setNgsildPath')?.value;
  var addNgsildPath = $formValues.querySelector('.addNgsildPath')?.value;
  if(removeNgsildPath || setNgsildPath != null && setNgsildPath !== '')
    vals['setNgsildPath'] = setNgsildPath;
  if(addNgsildPath != null && addNgsildPath !== '')
    vals['addNgsildPath'] = addNgsildPath;
  var removeNgsildPath = $formValues.querySelector('.removeNgsildPath')?.value;
  if(removeNgsildPath != null && removeNgsildPath !== '')
    vals['removeNgsildPath'] = removeNgsildPath;

  var valueNgsildContext = $formValues.querySelector('.valueNgsildContext')?.value;
  var removeNgsildContext = $formValues.querySelector('.removeNgsildContext')?.value === 'true';
  var setNgsildContext = removeNgsildContext ? null : $formValues.querySelector('.setNgsildContext')?.value;
  var addNgsildContext = $formValues.querySelector('.addNgsildContext')?.value;
  if(removeNgsildContext || setNgsildContext != null && setNgsildContext !== '')
    vals['setNgsildContext'] = setNgsildContext;
  if(addNgsildContext != null && addNgsildContext !== '')
    vals['addNgsildContext'] = addNgsildContext;
  var removeNgsildContext = $formValues.querySelector('.removeNgsildContext')?.value;
  if(removeNgsildContext != null && removeNgsildContext !== '')
    vals['removeNgsildContext'] = removeNgsildContext;

  var valueNgsildData = $formValues.querySelector('.valueNgsildData')?.value;
  var removeNgsildData = $formValues.querySelector('.removeNgsildData')?.value === 'true';
  var setNgsildData = removeNgsildData ? null : $formValues.querySelector('.setNgsildData')?.value;
  var addNgsildData = $formValues.querySelector('.addNgsildData')?.value;
  if(removeNgsildData || setNgsildData != null && setNgsildData !== '')
    vals['setNgsildData'] = JSON.parse(setNgsildData);
  if(addNgsildData != null && addNgsildData !== '')
    vals['addNgsildData'] = addNgsildData;
  var removeNgsildData = $formValues.querySelector('.removeNgsildData')?.value;
  if(removeNgsildData != null && removeNgsildData !== '')
    vals['removeNgsildData'] = removeNgsildData;

  var valueAddress = $formValues.querySelector('.valueAddress')?.value;
  var removeAddress = $formValues.querySelector('.removeAddress')?.value === 'true';
  var setAddress = removeAddress ? null : $formValues.querySelector('.setAddress')?.value;
  var addAddress = $formValues.querySelector('.addAddress')?.value;
  if(removeAddress || setAddress != null && setAddress !== '')
    vals['setAddress'] = JSON.parse(setAddress);
  if(addAddress != null && addAddress !== '')
    vals['addAddress'] = addAddress;
  var removeAddress = $formValues.querySelector('.removeAddress')?.value;
  if(removeAddress != null && removeAddress !== '')
    vals['removeAddress'] = removeAddress;

  var valueAlternateName = $formValues.querySelector('.valueAlternateName')?.value;
  var removeAlternateName = $formValues.querySelector('.removeAlternateName')?.value === 'true';
  var setAlternateName = removeAlternateName ? null : $formValues.querySelector('.setAlternateName')?.value;
  var addAlternateName = $formValues.querySelector('.addAlternateName')?.value;
  if(removeAlternateName || setAlternateName != null && setAlternateName !== '')
    vals['setAlternateName'] = setAlternateName;
  if(addAlternateName != null && addAlternateName !== '')
    vals['addAlternateName'] = addAlternateName;
  var removeAlternateName = $formValues.querySelector('.removeAlternateName')?.value;
  if(removeAlternateName != null && removeAlternateName !== '')
    vals['removeAlternateName'] = removeAlternateName;

  var valueAtmosphericPressure = $formValues.querySelector('.valueAtmosphericPressure')?.value;
  var removeAtmosphericPressure = $formValues.querySelector('.removeAtmosphericPressure')?.value === 'true';
  var setAtmosphericPressure = removeAtmosphericPressure ? null : $formValues.querySelector('.setAtmosphericPressure')?.value;
  var addAtmosphericPressure = $formValues.querySelector('.addAtmosphericPressure')?.value;
  if(removeAtmosphericPressure || setAtmosphericPressure != null && setAtmosphericPressure !== '')
    vals['setAtmosphericPressure'] = setAtmosphericPressure;
  if(addAtmosphericPressure != null && addAtmosphericPressure !== '')
    vals['addAtmosphericPressure'] = addAtmosphericPressure;
  var removeAtmosphericPressure = $formValues.querySelector('.removeAtmosphericPressure')?.value;
  if(removeAtmosphericPressure != null && removeAtmosphericPressure !== '')
    vals['removeAtmosphericPressure'] = removeAtmosphericPressure;

  var valueDataProvider = $formValues.querySelector('.valueDataProvider')?.value;
  var removeDataProvider = $formValues.querySelector('.removeDataProvider')?.value === 'true';
  var setDataProvider = removeDataProvider ? null : $formValues.querySelector('.setDataProvider')?.value;
  var addDataProvider = $formValues.querySelector('.addDataProvider')?.value;
  if(removeDataProvider || setDataProvider != null && setDataProvider !== '')
    vals['setDataProvider'] = setDataProvider;
  if(addDataProvider != null && addDataProvider !== '')
    vals['addDataProvider'] = addDataProvider;
  var removeDataProvider = $formValues.querySelector('.removeDataProvider')?.value;
  if(removeDataProvider != null && removeDataProvider !== '')
    vals['removeDataProvider'] = removeDataProvider;

  var valueDateCreated = $formValues.querySelector('.valueDateCreated')?.value;
  var removeDateCreated = $formValues.querySelector('.removeDateCreated')?.value === 'true';
  var setDateCreated = removeDateCreated ? null : $formValues.querySelector('.setDateCreated')?.value;
  var addDateCreated = $formValues.querySelector('.addDateCreated')?.value;
  if(removeDateCreated || setDateCreated != null && setDateCreated !== '')
    vals['setDateCreated'] = setDateCreated;
  if(addDateCreated != null && addDateCreated !== '')
    vals['addDateCreated'] = addDateCreated;
  var removeDateCreated = $formValues.querySelector('.removeDateCreated')?.value;
  if(removeDateCreated != null && removeDateCreated !== '')
    vals['removeDateCreated'] = removeDateCreated;

  var valueDateIssued = $formValues.querySelector('.valueDateIssued')?.value;
  var removeDateIssued = $formValues.querySelector('.removeDateIssued')?.value === 'true';
  var setDateIssued = removeDateIssued ? null : $formValues.querySelector('.setDateIssued')?.value;
  var addDateIssued = $formValues.querySelector('.addDateIssued')?.value;
  if(removeDateIssued || setDateIssued != null && setDateIssued !== '')
    vals['setDateIssued'] = setDateIssued;
  if(addDateIssued != null && addDateIssued !== '')
    vals['addDateIssued'] = addDateIssued;
  var removeDateIssued = $formValues.querySelector('.removeDateIssued')?.value;
  if(removeDateIssued != null && removeDateIssued !== '')
    vals['removeDateIssued'] = removeDateIssued;

  var valueDateModified = $formValues.querySelector('.valueDateModified')?.value;
  var removeDateModified = $formValues.querySelector('.removeDateModified')?.value === 'true';
  var setDateModified = removeDateModified ? null : $formValues.querySelector('.setDateModified')?.value;
  var addDateModified = $formValues.querySelector('.addDateModified')?.value;
  if(removeDateModified || setDateModified != null && setDateModified !== '')
    vals['setDateModified'] = setDateModified;
  if(addDateModified != null && addDateModified !== '')
    vals['addDateModified'] = addDateModified;
  var removeDateModified = $formValues.querySelector('.removeDateModified')?.value;
  if(removeDateModified != null && removeDateModified !== '')
    vals['removeDateModified'] = removeDateModified;

  var valueDateRetrieved = $formValues.querySelector('.valueDateRetrieved')?.value;
  var removeDateRetrieved = $formValues.querySelector('.removeDateRetrieved')?.value === 'true';
  var setDateRetrieved = removeDateRetrieved ? null : $formValues.querySelector('.setDateRetrieved')?.value;
  var addDateRetrieved = $formValues.querySelector('.addDateRetrieved')?.value;
  if(removeDateRetrieved || setDateRetrieved != null && setDateRetrieved !== '')
    vals['setDateRetrieved'] = setDateRetrieved;
  if(addDateRetrieved != null && addDateRetrieved !== '')
    vals['addDateRetrieved'] = addDateRetrieved;
  var removeDateRetrieved = $formValues.querySelector('.removeDateRetrieved')?.value;
  if(removeDateRetrieved != null && removeDateRetrieved !== '')
    vals['removeDateRetrieved'] = removeDateRetrieved;

  var valueDayMaximum = $formValues.querySelector('.valueDayMaximum')?.value;
  var removeDayMaximum = $formValues.querySelector('.removeDayMaximum')?.value === 'true';
  var setDayMaximum = removeDayMaximum ? null : $formValues.querySelector('.setDayMaximum')?.value;
  var addDayMaximum = $formValues.querySelector('.addDayMaximum')?.value;
  if(removeDayMaximum || setDayMaximum != null && setDayMaximum !== '')
    vals['setDayMaximum'] = JSON.parse(setDayMaximum);
  if(addDayMaximum != null && addDayMaximum !== '')
    vals['addDayMaximum'] = addDayMaximum;
  var removeDayMaximum = $formValues.querySelector('.removeDayMaximum')?.value;
  if(removeDayMaximum != null && removeDayMaximum !== '')
    vals['removeDayMaximum'] = removeDayMaximum;

  var valueDayMinimum = $formValues.querySelector('.valueDayMinimum')?.value;
  var removeDayMinimum = $formValues.querySelector('.removeDayMinimum')?.value === 'true';
  var setDayMinimum = removeDayMinimum ? null : $formValues.querySelector('.setDayMinimum')?.value;
  var addDayMinimum = $formValues.querySelector('.addDayMinimum')?.value;
  if(removeDayMinimum || setDayMinimum != null && setDayMinimum !== '')
    vals['setDayMinimum'] = JSON.parse(setDayMinimum);
  if(addDayMinimum != null && addDayMinimum !== '')
    vals['addDayMinimum'] = addDayMinimum;
  var removeDayMinimum = $formValues.querySelector('.removeDayMinimum')?.value;
  if(removeDayMinimum != null && removeDayMinimum !== '')
    vals['removeDayMinimum'] = removeDayMinimum;

  var valueFeelsLikeTemperature = $formValues.querySelector('.valueFeelsLikeTemperature')?.value;
  var removeFeelsLikeTemperature = $formValues.querySelector('.removeFeelsLikeTemperature')?.value === 'true';
  var setFeelsLikeTemperature = removeFeelsLikeTemperature ? null : $formValues.querySelector('.setFeelsLikeTemperature')?.value;
  var addFeelsLikeTemperature = $formValues.querySelector('.addFeelsLikeTemperature')?.value;
  if(removeFeelsLikeTemperature || setFeelsLikeTemperature != null && setFeelsLikeTemperature !== '')
    vals['setFeelsLikeTemperature'] = setFeelsLikeTemperature;
  if(addFeelsLikeTemperature != null && addFeelsLikeTemperature !== '')
    vals['addFeelsLikeTemperature'] = addFeelsLikeTemperature;
  var removeFeelsLikeTemperature = $formValues.querySelector('.removeFeelsLikeTemperature')?.value;
  if(removeFeelsLikeTemperature != null && removeFeelsLikeTemperature !== '')
    vals['removeFeelsLikeTemperature'] = removeFeelsLikeTemperature;

  var valueGustSpeed = $formValues.querySelector('.valueGustSpeed')?.value;
  var removeGustSpeed = $formValues.querySelector('.removeGustSpeed')?.value === 'true';
  var setGustSpeed = removeGustSpeed ? null : $formValues.querySelector('.setGustSpeed')?.value;
  var addGustSpeed = $formValues.querySelector('.addGustSpeed')?.value;
  if(removeGustSpeed || setGustSpeed != null && setGustSpeed !== '')
    vals['setGustSpeed'] = setGustSpeed;
  if(addGustSpeed != null && addGustSpeed !== '')
    vals['addGustSpeed'] = addGustSpeed;
  var removeGustSpeed = $formValues.querySelector('.removeGustSpeed')?.value;
  if(removeGustSpeed != null && removeGustSpeed !== '')
    vals['removeGustSpeed'] = removeGustSpeed;

  var valueIlluminance = $formValues.querySelector('.valueIlluminance')?.value;
  var removeIlluminance = $formValues.querySelector('.removeIlluminance')?.value === 'true';
  var setIlluminance = removeIlluminance ? null : $formValues.querySelector('.setIlluminance')?.value;
  var addIlluminance = $formValues.querySelector('.addIlluminance')?.value;
  if(removeIlluminance || setIlluminance != null && setIlluminance !== '')
    vals['setIlluminance'] = setIlluminance;
  if(addIlluminance != null && addIlluminance !== '')
    vals['addIlluminance'] = addIlluminance;
  var removeIlluminance = $formValues.querySelector('.removeIlluminance')?.value;
  if(removeIlluminance != null && removeIlluminance !== '')
    vals['removeIlluminance'] = removeIlluminance;

  var valueOwner = $formValues.querySelector('.valueOwner')?.value;
  var removeOwner = $formValues.querySelector('.removeOwner')?.value === 'true';
  var setOwner = removeOwner ? null : $formValues.querySelector('.setOwner')?.value;
  var addOwner = $formValues.querySelector('.addOwner')?.value;
  if(removeOwner || setOwner != null && setOwner !== '')
    vals['setOwner'] = JSON.parse(setOwner);
  if(addOwner != null && addOwner !== '')
    vals['addOwner'] = addOwner;
  var removeOwner = $formValues.querySelector('.removeOwner')?.value;
  if(removeOwner != null && removeOwner !== '')
    vals['removeOwner'] = removeOwner;

  var valuePrecipitation = $formValues.querySelector('.valuePrecipitation')?.value;
  var removePrecipitation = $formValues.querySelector('.removePrecipitation')?.value === 'true';
  var setPrecipitation = removePrecipitation ? null : $formValues.querySelector('.setPrecipitation')?.value;
  var addPrecipitation = $formValues.querySelector('.addPrecipitation')?.value;
  if(removePrecipitation || setPrecipitation != null && setPrecipitation !== '')
    vals['setPrecipitation'] = setPrecipitation;
  if(addPrecipitation != null && addPrecipitation !== '')
    vals['addPrecipitation'] = addPrecipitation;
  var removePrecipitation = $formValues.querySelector('.removePrecipitation')?.value;
  if(removePrecipitation != null && removePrecipitation !== '')
    vals['removePrecipitation'] = removePrecipitation;

  var valuePrecipitationProbability = $formValues.querySelector('.valuePrecipitationProbability')?.value;
  var removePrecipitationProbability = $formValues.querySelector('.removePrecipitationProbability')?.value === 'true';
  var setPrecipitationProbability = removePrecipitationProbability ? null : $formValues.querySelector('.setPrecipitationProbability')?.value;
  var addPrecipitationProbability = $formValues.querySelector('.addPrecipitationProbability')?.value;
  if(removePrecipitationProbability || setPrecipitationProbability != null && setPrecipitationProbability !== '')
    vals['setPrecipitationProbability'] = setPrecipitationProbability;
  if(addPrecipitationProbability != null && addPrecipitationProbability !== '')
    vals['addPrecipitationProbability'] = addPrecipitationProbability;
  var removePrecipitationProbability = $formValues.querySelector('.removePrecipitationProbability')?.value;
  if(removePrecipitationProbability != null && removePrecipitationProbability !== '')
    vals['removePrecipitationProbability'] = removePrecipitationProbability;

  var valueRefPointOfInterest = $formValues.querySelector('.valueRefPointOfInterest')?.value;
  var removeRefPointOfInterest = $formValues.querySelector('.removeRefPointOfInterest')?.value === 'true';
  var setRefPointOfInterest = removeRefPointOfInterest ? null : $formValues.querySelector('.setRefPointOfInterest')?.value;
  var addRefPointOfInterest = $formValues.querySelector('.addRefPointOfInterest')?.value;
  if(removeRefPointOfInterest || setRefPointOfInterest != null && setRefPointOfInterest !== '')
    vals['setRefPointOfInterest'] = setRefPointOfInterest;
  if(addRefPointOfInterest != null && addRefPointOfInterest !== '')
    vals['addRefPointOfInterest'] = addRefPointOfInterest;
  var removeRefPointOfInterest = $formValues.querySelector('.removeRefPointOfInterest')?.value;
  if(removeRefPointOfInterest != null && removeRefPointOfInterest !== '')
    vals['removeRefPointOfInterest'] = removeRefPointOfInterest;

  var valueRelativeHumidity = $formValues.querySelector('.valueRelativeHumidity')?.value;
  var removeRelativeHumidity = $formValues.querySelector('.removeRelativeHumidity')?.value === 'true';
  var setRelativeHumidity = removeRelativeHumidity ? null : $formValues.querySelector('.setRelativeHumidity')?.value;
  var addRelativeHumidity = $formValues.querySelector('.addRelativeHumidity')?.value;
  if(removeRelativeHumidity || setRelativeHumidity != null && setRelativeHumidity !== '')
    vals['setRelativeHumidity'] = setRelativeHumidity;
  if(addRelativeHumidity != null && addRelativeHumidity !== '')
    vals['addRelativeHumidity'] = addRelativeHumidity;
  var removeRelativeHumidity = $formValues.querySelector('.removeRelativeHumidity')?.value;
  if(removeRelativeHumidity != null && removeRelativeHumidity !== '')
    vals['removeRelativeHumidity'] = removeRelativeHumidity;

  var valueSeeAlso = $formValues.querySelector('.valueSeeAlso')?.value;
  var removeSeeAlso = $formValues.querySelector('.removeSeeAlso')?.value === 'true';
  var setSeeAlso = removeSeeAlso ? null : $formValues.querySelector('.setSeeAlso')?.value;
  var addSeeAlso = $formValues.querySelector('.addSeeAlso')?.value;
  if(removeSeeAlso || setSeeAlso != null && setSeeAlso !== '')
    vals['setSeeAlso'] = setSeeAlso;
  if(addSeeAlso != null && addSeeAlso !== '')
    vals['addSeeAlso'] = addSeeAlso;
  var removeSeeAlso = $formValues.querySelector('.removeSeeAlso')?.value;
  if(removeSeeAlso != null && removeSeeAlso !== '')
    vals['removeSeeAlso'] = removeSeeAlso;

  var valueSource = $formValues.querySelector('.valueSource')?.value;
  var removeSource = $formValues.querySelector('.removeSource')?.value === 'true';
  var setSource = removeSource ? null : $formValues.querySelector('.setSource')?.value;
  var addSource = $formValues.querySelector('.addSource')?.value;
  if(removeSource || setSource != null && setSource !== '')
    vals['setSource'] = setSource;
  if(addSource != null && addSource !== '')
    vals['addSource'] = addSource;
  var removeSource = $formValues.querySelector('.removeSource')?.value;
  if(removeSource != null && removeSource !== '')
    vals['removeSource'] = removeSource;

  var valueTemperature = $formValues.querySelector('.valueTemperature')?.value;
  var removeTemperature = $formValues.querySelector('.removeTemperature')?.value === 'true';
  var setTemperature = removeTemperature ? null : $formValues.querySelector('.setTemperature')?.value;
  var addTemperature = $formValues.querySelector('.addTemperature')?.value;
  if(removeTemperature || setTemperature != null && setTemperature !== '')
    vals['setTemperature'] = setTemperature;
  if(addTemperature != null && addTemperature !== '')
    vals['addTemperature'] = addTemperature;
  var removeTemperature = $formValues.querySelector('.removeTemperature')?.value;
  if(removeTemperature != null && removeTemperature !== '')
    vals['removeTemperature'] = removeTemperature;

  var valueUVIndexMax = $formValues.querySelector('.valueUVIndexMax')?.value;
  var removeUVIndexMax = $formValues.querySelector('.removeUVIndexMax')?.value === 'true';
  var setUVIndexMax = removeUVIndexMax ? null : $formValues.querySelector('.setUVIndexMax')?.value;
  var addUVIndexMax = $formValues.querySelector('.addUVIndexMax')?.value;
  if(removeUVIndexMax || setUVIndexMax != null && setUVIndexMax !== '')
    vals['setUVIndexMax'] = setUVIndexMax;
  if(addUVIndexMax != null && addUVIndexMax !== '')
    vals['addUVIndexMax'] = addUVIndexMax;
  var removeUVIndexMax = $formValues.querySelector('.removeUVIndexMax')?.value;
  if(removeUVIndexMax != null && removeUVIndexMax !== '')
    vals['removeUVIndexMax'] = removeUVIndexMax;

  var valueValidFrom = $formValues.querySelector('.valueValidFrom')?.value;
  var removeValidFrom = $formValues.querySelector('.removeValidFrom')?.value === 'true';
  var setValidFrom = removeValidFrom ? null : $formValues.querySelector('.setValidFrom')?.value;
  var addValidFrom = $formValues.querySelector('.addValidFrom')?.value;
  if(removeValidFrom || setValidFrom != null && setValidFrom !== '')
    vals['setValidFrom'] = setValidFrom;
  if(addValidFrom != null && addValidFrom !== '')
    vals['addValidFrom'] = addValidFrom;
  var removeValidFrom = $formValues.querySelector('.removeValidFrom')?.value;
  if(removeValidFrom != null && removeValidFrom !== '')
    vals['removeValidFrom'] = removeValidFrom;

  var valueValidTo = $formValues.querySelector('.valueValidTo')?.value;
  var removeValidTo = $formValues.querySelector('.removeValidTo')?.value === 'true';
  var setValidTo = removeValidTo ? null : $formValues.querySelector('.setValidTo')?.value;
  var addValidTo = $formValues.querySelector('.addValidTo')?.value;
  if(removeValidTo || setValidTo != null && setValidTo !== '')
    vals['setValidTo'] = setValidTo;
  if(addValidTo != null && addValidTo !== '')
    vals['addValidTo'] = addValidTo;
  var removeValidTo = $formValues.querySelector('.removeValidTo')?.value;
  if(removeValidTo != null && removeValidTo !== '')
    vals['removeValidTo'] = removeValidTo;

  var valueValidity = $formValues.querySelector('.valueValidity')?.value;
  var removeValidity = $formValues.querySelector('.removeValidity')?.value === 'true';
  var setValidity = removeValidity ? null : $formValues.querySelector('.setValidity')?.value;
  var addValidity = $formValues.querySelector('.addValidity')?.value;
  if(removeValidity || setValidity != null && setValidity !== '')
    vals['setValidity'] = setValidity;
  if(addValidity != null && addValidity !== '')
    vals['addValidity'] = addValidity;
  var removeValidity = $formValues.querySelector('.removeValidity')?.value;
  if(removeValidity != null && removeValidity !== '')
    vals['removeValidity'] = removeValidity;

  var valueVisibility = $formValues.querySelector('.valueVisibility')?.value;
  var removeVisibility = $formValues.querySelector('.removeVisibility')?.value === 'true';
  var setVisibility = removeVisibility ? null : $formValues.querySelector('.setVisibility')?.value;
  var addVisibility = $formValues.querySelector('.addVisibility')?.value;
  if(removeVisibility || setVisibility != null && setVisibility !== '')
    vals['setVisibility'] = setVisibility;
  if(addVisibility != null && addVisibility !== '')
    vals['addVisibility'] = addVisibility;
  var removeVisibility = $formValues.querySelector('.removeVisibility')?.value;
  if(removeVisibility != null && removeVisibility !== '')
    vals['removeVisibility'] = removeVisibility;

  var valueWeatherType = $formValues.querySelector('.valueWeatherType')?.value;
  var removeWeatherType = $formValues.querySelector('.removeWeatherType')?.value === 'true';
  var setWeatherType = removeWeatherType ? null : $formValues.querySelector('.setWeatherType')?.value;
  var addWeatherType = $formValues.querySelector('.addWeatherType')?.value;
  if(removeWeatherType || setWeatherType != null && setWeatherType !== '')
    vals['setWeatherType'] = setWeatherType;
  if(addWeatherType != null && addWeatherType !== '')
    vals['addWeatherType'] = addWeatherType;
  var removeWeatherType = $formValues.querySelector('.removeWeatherType')?.value;
  if(removeWeatherType != null && removeWeatherType !== '')
    vals['removeWeatherType'] = removeWeatherType;

  var valueWindDirection = $formValues.querySelector('.valueWindDirection')?.value;
  var removeWindDirection = $formValues.querySelector('.removeWindDirection')?.value === 'true';
  var setWindDirection = removeWindDirection ? null : $formValues.querySelector('.setWindDirection')?.value;
  var addWindDirection = $formValues.querySelector('.addWindDirection')?.value;
  if(removeWindDirection || setWindDirection != null && setWindDirection !== '')
    vals['setWindDirection'] = setWindDirection;
  if(addWindDirection != null && addWindDirection !== '')
    vals['addWindDirection'] = addWindDirection;
  var removeWindDirection = $formValues.querySelector('.removeWindDirection')?.value;
  if(removeWindDirection != null && removeWindDirection !== '')
    vals['removeWindDirection'] = removeWindDirection;

  var valueWindSpeed = $formValues.querySelector('.valueWindSpeed')?.value;
  var removeWindSpeed = $formValues.querySelector('.removeWindSpeed')?.value === 'true';
  var setWindSpeed = removeWindSpeed ? null : $formValues.querySelector('.setWindSpeed')?.value;
  var addWindSpeed = $formValues.querySelector('.addWindSpeed')?.value;
  if(removeWindSpeed || setWindSpeed != null && setWindSpeed !== '')
    vals['setWindSpeed'] = setWindSpeed;
  if(addWindSpeed != null && addWindSpeed !== '')
    vals['addWindSpeed'] = addWindSpeed;
  var removeWindSpeed = $formValues.querySelector('.removeWindSpeed')?.value;
  if(removeWindSpeed != null && removeWindSpeed !== '')
    vals['removeWindSpeed'] = removeWindSpeed;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  var removeSessionId = $formValues.querySelector('.removeSessionId')?.value === 'true';
  var setSessionId = removeSessionId ? null : $formValues.querySelector('.setSessionId')?.value;
  var addSessionId = $formValues.querySelector('.addSessionId')?.value;
  if(removeSessionId || setSessionId != null && setSessionId !== '')
    vals['setSessionId'] = setSessionId;
  if(addSessionId != null && addSessionId !== '')
    vals['addSessionId'] = addSessionId;
  var removeSessionId = $formValues.querySelector('.removeSessionId')?.value;
  if(removeSessionId != null && removeSessionId !== '')
    vals['removeSessionId'] = removeSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  var removeUserKey = $formValues.querySelector('.removeUserKey')?.value === 'true';
  var setUserKey = removeUserKey ? null : $formValues.querySelector('.setUserKey')?.value;
  var addUserKey = $formValues.querySelector('.addUserKey')?.value;
  if(removeUserKey || setUserKey != null && setUserKey !== '')
    vals['setUserKey'] = setUserKey;
  if(addUserKey != null && addUserKey !== '')
    vals['addUserKey'] = addUserKey;
  var removeUserKey = $formValues.querySelector('.removeUserKey')?.value;
  if(removeUserKey != null && removeUserKey !== '')
    vals['removeUserKey'] = removeUserKey;

  var valueTitle = $formValues.querySelector('.valueTitle')?.value;
  var removeTitle = $formValues.querySelector('.removeTitle')?.value === 'true';
  var setTitle = removeTitle ? null : $formValues.querySelector('.setTitle')?.value;
  var addTitle = $formValues.querySelector('.addTitle')?.value;
  if(removeTitle || setTitle != null && setTitle !== '')
    vals['setTitle'] = setTitle;
  if(addTitle != null && addTitle !== '')
    vals['addTitle'] = addTitle;
  var removeTitle = $formValues.querySelector('.removeTitle')?.value;
  if(removeTitle != null && removeTitle !== '')
    vals['removeTitle'] = removeTitle;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value === 'true';
  var setDisplayPage = removeDisplayPage ? null : $formValues.querySelector('.setDisplayPage')?.value;
  var addDisplayPage = $formValues.querySelector('.addDisplayPage')?.value;
  if(removeDisplayPage || setDisplayPage != null && setDisplayPage !== '')
    vals['setDisplayPage'] = setDisplayPage;
  if(addDisplayPage != null && addDisplayPage !== '')
    vals['addDisplayPage'] = addDisplayPage;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value;
  if(removeDisplayPage != null && removeDisplayPage !== '')
    vals['removeDisplayPage'] = removeDisplayPage;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  var removeEditPage = $formValues.querySelector('.removeEditPage')?.value === 'true';
  var setEditPage = removeEditPage ? null : $formValues.querySelector('.setEditPage')?.value;
  var addEditPage = $formValues.querySelector('.addEditPage')?.value;
  if(removeEditPage || setEditPage != null && setEditPage !== '')
    vals['setEditPage'] = setEditPage;
  if(addEditPage != null && addEditPage !== '')
    vals['addEditPage'] = addEditPage;
  var removeEditPage = $formValues.querySelector('.removeEditPage')?.value;
  if(removeEditPage != null && removeEditPage !== '')
    vals['removeEditPage'] = removeEditPage;

  patchWeatherObservedVals(entityShortId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'entityShortId:' + entityShortId}], vals, target, success, error);
}

function patchWeatherObservedFilters($formFilters) {
  var filters = [];
  if($formFilters) {
    filters.push({ name: 'softCommit', value: 'true' });

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterAreaServed = $formFilters.querySelector('.valueAreaServed')?.value;
    if(filterAreaServed != null && filterAreaServed !== '')
      filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

    var filterId = $formFilters.querySelector('.valueId')?.value;
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterNgsildTenant = $formFilters.querySelector('.valueNgsildTenant')?.value;
    if(filterNgsildTenant != null && filterNgsildTenant !== '')
      filters.push({ name: 'fq', value: 'ngsildTenant:' + filterNgsildTenant });

    var filterNgsildPath = $formFilters.querySelector('.valueNgsildPath')?.value;
    if(filterNgsildPath != null && filterNgsildPath !== '')
      filters.push({ name: 'fq', value: 'ngsildPath:' + filterNgsildPath });

    var filterNgsildContext = $formFilters.querySelector('.valueNgsildContext')?.value;
    if(filterNgsildContext != null && filterNgsildContext !== '')
      filters.push({ name: 'fq', value: 'ngsildContext:' + filterNgsildContext });

    var filterNgsildData = $formFilters.querySelector('.valueNgsildData')?.value;
    if(filterNgsildData != null && filterNgsildData !== '')
      filters.push({ name: 'fq', value: 'ngsildData:' + filterNgsildData });

    var filterAddress = $formFilters.querySelector('.valueAddress')?.value;
    if(filterAddress != null && filterAddress !== '')
      filters.push({ name: 'fq', value: 'address:' + filterAddress });

    var filterAlternateName = $formFilters.querySelector('.valueAlternateName')?.value;
    if(filterAlternateName != null && filterAlternateName !== '')
      filters.push({ name: 'fq', value: 'alternateName:' + filterAlternateName });

    var filterAtmosphericPressure = $formFilters.querySelector('.valueAtmosphericPressure')?.value;
    if(filterAtmosphericPressure != null && filterAtmosphericPressure !== '')
      filters.push({ name: 'fq', value: 'atmosphericPressure:' + filterAtmosphericPressure });

    var filterDataProvider = $formFilters.querySelector('.valueDataProvider')?.value;
    if(filterDataProvider != null && filterDataProvider !== '')
      filters.push({ name: 'fq', value: 'dataProvider:' + filterDataProvider });

    var filterDateCreated = $formFilters.querySelector('.valueDateCreated')?.value;
    if(filterDateCreated != null && filterDateCreated !== '')
      filters.push({ name: 'fq', value: 'dateCreated:' + filterDateCreated });

    var filterDateIssued = $formFilters.querySelector('.valueDateIssued')?.value;
    if(filterDateIssued != null && filterDateIssued !== '')
      filters.push({ name: 'fq', value: 'dateIssued:' + filterDateIssued });

    var filterDateModified = $formFilters.querySelector('.valueDateModified')?.value;
    if(filterDateModified != null && filterDateModified !== '')
      filters.push({ name: 'fq', value: 'dateModified:' + filterDateModified });

    var filterDateRetrieved = $formFilters.querySelector('.valueDateRetrieved')?.value;
    if(filterDateRetrieved != null && filterDateRetrieved !== '')
      filters.push({ name: 'fq', value: 'dateRetrieved:' + filterDateRetrieved });

    var filterDayMaximum = $formFilters.querySelector('.valueDayMaximum')?.value;
    if(filterDayMaximum != null && filterDayMaximum !== '')
      filters.push({ name: 'fq', value: 'dayMaximum:' + filterDayMaximum });

    var filterDayMinimum = $formFilters.querySelector('.valueDayMinimum')?.value;
    if(filterDayMinimum != null && filterDayMinimum !== '')
      filters.push({ name: 'fq', value: 'dayMinimum:' + filterDayMinimum });

    var filterFeelsLikeTemperature = $formFilters.querySelector('.valueFeelsLikeTemperature')?.value;
    if(filterFeelsLikeTemperature != null && filterFeelsLikeTemperature !== '')
      filters.push({ name: 'fq', value: 'feelsLikeTemperature:' + filterFeelsLikeTemperature });

    var filterGustSpeed = $formFilters.querySelector('.valueGustSpeed')?.value;
    if(filterGustSpeed != null && filterGustSpeed !== '')
      filters.push({ name: 'fq', value: 'gustSpeed:' + filterGustSpeed });

    var filterIlluminance = $formFilters.querySelector('.valueIlluminance')?.value;
    if(filterIlluminance != null && filterIlluminance !== '')
      filters.push({ name: 'fq', value: 'illuminance:' + filterIlluminance });

    var filterOwner = $formFilters.querySelector('.valueOwner')?.value;
    if(filterOwner != null && filterOwner !== '')
      filters.push({ name: 'fq', value: 'owner:' + filterOwner });

    var filterPrecipitation = $formFilters.querySelector('.valuePrecipitation')?.value;
    if(filterPrecipitation != null && filterPrecipitation !== '')
      filters.push({ name: 'fq', value: 'precipitation:' + filterPrecipitation });

    var filterPrecipitationProbability = $formFilters.querySelector('.valuePrecipitationProbability')?.value;
    if(filterPrecipitationProbability != null && filterPrecipitationProbability !== '')
      filters.push({ name: 'fq', value: 'precipitationProbability:' + filterPrecipitationProbability });

    var filterRefPointOfInterest = $formFilters.querySelector('.valueRefPointOfInterest')?.value;
    if(filterRefPointOfInterest != null && filterRefPointOfInterest !== '')
      filters.push({ name: 'fq', value: 'refPointOfInterest:' + filterRefPointOfInterest });

    var filterRelativeHumidity = $formFilters.querySelector('.valueRelativeHumidity')?.value;
    if(filterRelativeHumidity != null && filterRelativeHumidity !== '')
      filters.push({ name: 'fq', value: 'relativeHumidity:' + filterRelativeHumidity });

    var filterSeeAlso = $formFilters.querySelector('.valueSeeAlso')?.value;
    if(filterSeeAlso != null && filterSeeAlso !== '')
      filters.push({ name: 'fq', value: 'seeAlso:' + filterSeeAlso });

    var filterSource = $formFilters.querySelector('.valueSource')?.value;
    if(filterSource != null && filterSource !== '')
      filters.push({ name: 'fq', value: 'source:' + filterSource });

    var filterTemperature = $formFilters.querySelector('.valueTemperature')?.value;
    if(filterTemperature != null && filterTemperature !== '')
      filters.push({ name: 'fq', value: 'temperature:' + filterTemperature });

    var filterUVIndexMax = $formFilters.querySelector('.valueUVIndexMax')?.value;
    if(filterUVIndexMax != null && filterUVIndexMax !== '')
      filters.push({ name: 'fq', value: 'uVIndexMax:' + filterUVIndexMax });

    var filterValidFrom = $formFilters.querySelector('.valueValidFrom')?.value;
    if(filterValidFrom != null && filterValidFrom !== '')
      filters.push({ name: 'fq', value: 'validFrom:' + filterValidFrom });

    var filterValidTo = $formFilters.querySelector('.valueValidTo')?.value;
    if(filterValidTo != null && filterValidTo !== '')
      filters.push({ name: 'fq', value: 'validTo:' + filterValidTo });

    var filterValidity = $formFilters.querySelector('.valueValidity')?.value;
    if(filterValidity != null && filterValidity !== '')
      filters.push({ name: 'fq', value: 'validity:' + filterValidity });

    var filterVisibility = $formFilters.querySelector('.valueVisibility')?.value;
    if(filterVisibility != null && filterVisibility !== '')
      filters.push({ name: 'fq', value: 'visibility:' + filterVisibility });

    var filterWeatherType = $formFilters.querySelector('.valueWeatherType')?.value;
    if(filterWeatherType != null && filterWeatherType !== '')
      filters.push({ name: 'fq', value: 'weatherType:' + filterWeatherType });

    var filterWindDirection = $formFilters.querySelector('.valueWindDirection')?.value;
    if(filterWindDirection != null && filterWindDirection !== '')
      filters.push({ name: 'fq', value: 'windDirection:' + filterWindDirection });

    var filterWindSpeed = $formFilters.querySelector('.valueWindSpeed')?.value;
    if(filterWindSpeed != null && filterWindSpeed !== '')
      filters.push({ name: 'fq', value: 'windSpeed:' + filterWindSpeed });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.querySelector('.valueSessionId')?.value;
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterTitle = $formFilters.querySelector('.valueTitle')?.value;
    if(filterTitle != null && filterTitle !== '')
      filters.push({ name: 'fq', value: 'title:' + filterTitle });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterAreaServedColors = $formFilters.querySelector('.valueAreaServedColors')?.value;
    if(filterAreaServedColors != null && filterAreaServedColors !== '')
      filters.push({ name: 'fq', value: 'areaServedColors:' + filterAreaServedColors });

    var filterAreaServedTitles = $formFilters.querySelector('.valueAreaServedTitles')?.value;
    if(filterAreaServedTitles != null && filterAreaServedTitles !== '')
      filters.push({ name: 'fq', value: 'areaServedTitles:' + filterAreaServedTitles });

    var filterAreaServedLinks = $formFilters.querySelector('.valueAreaServedLinks')?.value;
    if(filterAreaServedLinks != null && filterAreaServedLinks !== '')
      filters.push({ name: 'fq', value: 'areaServedLinks:' + filterAreaServedLinks });

    var filterEntityShortId = $formFilters.querySelector('.valueEntityShortId')?.value;
    if(filterEntityShortId != null && filterEntityShortId !== '')
      filters.push({ name: 'fq', value: 'entityShortId:' + filterEntityShortId });
  }
  return filters;
}

function patchWeatherObservedVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchWeatherObservedVals(filters, vals, target, success, error);
}

function patchWeatherObservedVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/weather-forecast?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PATCH'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok)
        success(response, target);
      else
        error(response, target);
    })
    .catch(response => error(response, target));
}

// POST //

async function postWeatherObserved($formValues, target, success, error) {
  var vals = {};
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, textStatus, errorThrown ) {
      addError(target);
    };
  }

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  if(valuePk != null && valuePk !== '')
    vals['pk'] = valuePk;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  if(valueCreated != null && valueCreated !== '')
    vals['created'] = valueCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  if(valueModified != null && valueModified !== '')
    vals['modified'] = valueModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  if(valueArchived != null && valueArchived !== '')
    vals['archived'] = valueArchived == 'true';

  var valueName = $formValues.querySelector('.valueName')?.value;
  if(valueName != null && valueName !== '')
    vals['name'] = valueName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valueLocation = $formValues.querySelector('.valueLocation')?.value;
  if(valueLocation != null && valueLocation !== '')
    vals['location'] = JSON.parse(valueLocation);

  var valueAreaServed = $formValues.querySelector('.valueAreaServed')?.value;
  if(valueAreaServed != null && valueAreaServed !== '')
    vals['areaServed'] = JSON.parse(valueAreaServed);

  var valueId = $formValues.querySelector('.valueId')?.value;
  if(valueId != null && valueId !== '')
    vals['id'] = valueId;

  var valueNgsildTenant = $formValues.querySelector('.valueNgsildTenant')?.value;
  if(valueNgsildTenant != null && valueNgsildTenant !== '')
    vals['ngsildTenant'] = valueNgsildTenant;

  var valueNgsildPath = $formValues.querySelector('.valueNgsildPath')?.value;
  if(valueNgsildPath != null && valueNgsildPath !== '')
    vals['ngsildPath'] = valueNgsildPath;

  var valueNgsildContext = $formValues.querySelector('.valueNgsildContext')?.value;
  if(valueNgsildContext != null && valueNgsildContext !== '')
    vals['ngsildContext'] = valueNgsildContext;

  var valueNgsildData = $formValues.querySelector('.valueNgsildData')?.value;
  if(valueNgsildData != null && valueNgsildData !== '')
    vals['ngsildData'] = JSON.parse(valueNgsildData);

  var valueAddress = $formValues.querySelector('.valueAddress')?.value;
  if(valueAddress != null && valueAddress !== '')
    vals['address'] = JSON.parse(valueAddress);

  var valueAlternateName = $formValues.querySelector('.valueAlternateName')?.value;
  if(valueAlternateName != null && valueAlternateName !== '')
    vals['alternateName'] = valueAlternateName;

  var valueAtmosphericPressure = $formValues.querySelector('.valueAtmosphericPressure')?.value;
  if(valueAtmosphericPressure != null && valueAtmosphericPressure !== '')
    vals['atmosphericPressure'] = valueAtmosphericPressure;

  var valueDataProvider = $formValues.querySelector('.valueDataProvider')?.value;
  if(valueDataProvider != null && valueDataProvider !== '')
    vals['dataProvider'] = valueDataProvider;

  var valueDateCreated = $formValues.querySelector('.valueDateCreated')?.value;
  if(valueDateCreated != null && valueDateCreated !== '')
    vals['dateCreated'] = valueDateCreated;

  var valueDateIssued = $formValues.querySelector('.valueDateIssued')?.value;
  if(valueDateIssued != null && valueDateIssued !== '')
    vals['dateIssued'] = valueDateIssued;

  var valueDateModified = $formValues.querySelector('.valueDateModified')?.value;
  if(valueDateModified != null && valueDateModified !== '')
    vals['dateModified'] = valueDateModified;

  var valueDateRetrieved = $formValues.querySelector('.valueDateRetrieved')?.value;
  if(valueDateRetrieved != null && valueDateRetrieved !== '')
    vals['dateRetrieved'] = valueDateRetrieved;

  var valueDayMaximum = $formValues.querySelector('.valueDayMaximum')?.value;
  if(valueDayMaximum != null && valueDayMaximum !== '')
    vals['dayMaximum'] = JSON.parse(valueDayMaximum);

  var valueDayMinimum = $formValues.querySelector('.valueDayMinimum')?.value;
  if(valueDayMinimum != null && valueDayMinimum !== '')
    vals['dayMinimum'] = JSON.parse(valueDayMinimum);

  var valueFeelsLikeTemperature = $formValues.querySelector('.valueFeelsLikeTemperature')?.value;
  if(valueFeelsLikeTemperature != null && valueFeelsLikeTemperature !== '')
    vals['feelsLikeTemperature'] = valueFeelsLikeTemperature;

  var valueGustSpeed = $formValues.querySelector('.valueGustSpeed')?.value;
  if(valueGustSpeed != null && valueGustSpeed !== '')
    vals['gustSpeed'] = valueGustSpeed;

  var valueIlluminance = $formValues.querySelector('.valueIlluminance')?.value;
  if(valueIlluminance != null && valueIlluminance !== '')
    vals['illuminance'] = valueIlluminance;

  var valueOwner = $formValues.querySelector('.valueOwner')?.value;
  if(valueOwner != null && valueOwner !== '')
    vals['owner'] = JSON.parse(valueOwner);

  var valuePrecipitation = $formValues.querySelector('.valuePrecipitation')?.value;
  if(valuePrecipitation != null && valuePrecipitation !== '')
    vals['precipitation'] = valuePrecipitation;

  var valuePrecipitationProbability = $formValues.querySelector('.valuePrecipitationProbability')?.value;
  if(valuePrecipitationProbability != null && valuePrecipitationProbability !== '')
    vals['precipitationProbability'] = valuePrecipitationProbability;

  var valueRefPointOfInterest = $formValues.querySelector('.valueRefPointOfInterest')?.value;
  if(valueRefPointOfInterest != null && valueRefPointOfInterest !== '')
    vals['refPointOfInterest'] = valueRefPointOfInterest;

  var valueRelativeHumidity = $formValues.querySelector('.valueRelativeHumidity')?.value;
  if(valueRelativeHumidity != null && valueRelativeHumidity !== '')
    vals['relativeHumidity'] = valueRelativeHumidity;

  var valueSeeAlso = $formValues.querySelector('.valueSeeAlso')?.value;
  if(valueSeeAlso != null && valueSeeAlso !== '')
    vals['seeAlso'] = valueSeeAlso;

  var valueSource = $formValues.querySelector('.valueSource')?.value;
  if(valueSource != null && valueSource !== '')
    vals['source'] = valueSource;

  var valueTemperature = $formValues.querySelector('.valueTemperature')?.value;
  if(valueTemperature != null && valueTemperature !== '')
    vals['temperature'] = valueTemperature;

  var valueUVIndexMax = $formValues.querySelector('.valueUVIndexMax')?.value;
  if(valueUVIndexMax != null && valueUVIndexMax !== '')
    vals['uVIndexMax'] = valueUVIndexMax;

  var valueValidFrom = $formValues.querySelector('.valueValidFrom')?.value;
  if(valueValidFrom != null && valueValidFrom !== '')
    vals['validFrom'] = valueValidFrom;

  var valueValidTo = $formValues.querySelector('.valueValidTo')?.value;
  if(valueValidTo != null && valueValidTo !== '')
    vals['validTo'] = valueValidTo;

  var valueValidity = $formValues.querySelector('.valueValidity')?.value;
  if(valueValidity != null && valueValidity !== '')
    vals['validity'] = valueValidity;

  var valueVisibility = $formValues.querySelector('.valueVisibility')?.value;
  if(valueVisibility != null && valueVisibility !== '')
    vals['visibility'] = valueVisibility;

  var valueWeatherType = $formValues.querySelector('.valueWeatherType')?.value;
  if(valueWeatherType != null && valueWeatherType !== '')
    vals['weatherType'] = valueWeatherType;

  var valueWindDirection = $formValues.querySelector('.valueWindDirection')?.value;
  if(valueWindDirection != null && valueWindDirection !== '')
    vals['windDirection'] = valueWindDirection;

  var valueWindSpeed = $formValues.querySelector('.valueWindSpeed')?.value;
  if(valueWindSpeed != null && valueWindSpeed !== '')
    vals['windSpeed'] = valueWindSpeed;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  if(valueSessionId != null && valueSessionId !== '')
    vals['sessionId'] = valueSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  if(valueUserKey != null && valueUserKey !== '')
    vals['userKey'] = valueUserKey;

  var valueTitle = $formValues.querySelector('.valueTitle')?.value;
  if(valueTitle != null && valueTitle !== '')
    vals['title'] = valueTitle;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  if(valueDisplayPage != null && valueDisplayPage !== '')
    vals['displayPage'] = valueDisplayPage;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  if(valueEditPage != null && valueEditPage !== '')
    vals['editPage'] = valueEditPage;

  fetch(
    '/en-us/api/weather-forecast'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok)
        success(response, target);
      else
        error(response, target);
    })
    .catch(response => error(response, target));
}

function postWeatherObservedVals(vals, target, success, error) {
  fetch(
    '/en-us/api/weather-forecast'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok)
        success(response, target);
      else
        error(response, target);
    })
    .catch(response => error(response, target));
}

// DELETE //

async function deleteWeatherObserved(target, entityShortId, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, textStatus, errorThrown ) {
      addError(target);
    };
  }

  fetch(
    '/en-us/api/weather-forecast/' + encodeURIComponent(entityShortId)
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok)
        success(response, target);
      else
        error(response, target);
    })
    .catch(response => error(response, target));
}

// PUTImport //

async function putimportWeatherObserved($formValues, target, entityShortId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportWeatherObservedVals(JSON.parse(json), target, success, error);
}

function putimportWeatherObservedVals(json, target, success, error) {
  fetch(
    '/en-us/api/weather-forecast-import'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PUT'
      , body: JSON.stringify(json)
    }).then(response => {
      if(response.ok)
        success(response, target);
      else
        error(response, target);
    })
    .catch(response => error(response, target));
}

// DELETEFilter //

async function deletefilterWeatherObserved(target, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, textStatus, errorThrown ) {
      addError(target);
    };
  }

  fetch(
    '/en-us/api/weather-forecast'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok)
        success(response, target);
      else
        error(response, target);
    })
    .catch(response => error(response, target));
}

async function websocketWeatherObserved(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketWeatherObserved', function (error, message) {
      var json = JSON.parse(message['body']);
      var entityShortId = json['id'];
      var pks = json['pks'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + entityShortId + ' ');
      $box.setAttribute('id', 'box-' + entityShortId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + entityShortId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + entityShortId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + entityShortId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-regular fa-cloud-bolt-sun"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify WeatherForecasts in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + entityShortId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + entityShortId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + entityShortId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + entityShortId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + entityShortId);
      $progress.innerText = numPATCH + '/' + numFound;
      $card.append($header);
      $header.append($i);
      $header.append($headerSpan);
      $header.append($x);
      $body.append($bar);
      $bar.append($progress);
      $card.append($body);
      $box.append($margin);
      $margin.append($card);
      if(numPATCH < numFound) {
        var $old_box = document.querySelector('.box-' + entityShortId);
      } else {
        document.querySelector('.box-' + entityShortId)?.remove();
      }
      if(entityShortId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketWeatherObservedInner(apiRequest) {
  var entityShortId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(entityShortId != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputName = null;
        var inputDescription = null;
        var inputLocation = null;
        var inputAreaServed = null;
        var inputId = null;
        var inputNgsildTenant = null;
        var inputNgsildPath = null;
        var inputNgsildContext = null;
        var inputNgsildData = null;
        var inputAddress = null;
        var inputAlternateName = null;
        var inputAtmosphericPressure = null;
        var inputDataProvider = null;
        var inputDateCreated = null;
        var inputDateIssued = null;
        var inputDateModified = null;
        var inputDateRetrieved = null;
        var inputDayMaximum = null;
        var inputDayMinimum = null;
        var inputFeelsLikeTemperature = null;
        var inputGustSpeed = null;
        var inputIlluminance = null;
        var inputOwner = null;
        var inputPrecipitation = null;
        var inputPrecipitationProbability = null;
        var inputRefPointOfInterest = null;
        var inputRelativeHumidity = null;
        var inputSeeAlso = null;
        var inputSource = null;
        var inputTemperature = null;
        var inputUVIndexMax = null;
        var inputValidFrom = null;
        var inputValidTo = null;
        var inputValidity = null;
        var inputVisibility = null;
        var inputWeatherType = null;
        var inputWindDirection = null;
        var inputWindSpeed = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputTitle = null;
        var inputDisplayPage = null;
        var inputEditPage = null;
        var inputUserPage = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputSolrId = null;
        var inputAreaServedColors = null;
        var inputAreaServedTitles = null;
        var inputAreaServedLinks = null;
        var inputEntityShortId = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.Page_archived');
        if(vars.includes('name'))
          inputName = $response.querySelector('.Page_name');
        if(vars.includes('description'))
          inputDescription = $response.querySelector('.Page_description');
        if(vars.includes('location'))
          inputLocation = $response.querySelector('.Page_location');
        if(vars.includes('areaServed'))
          inputAreaServed = $response.querySelector('.Page_areaServed');
        if(vars.includes('id'))
          inputId = $response.querySelector('.Page_id');
        if(vars.includes('ngsildTenant'))
          inputNgsildTenant = $response.querySelector('.Page_ngsildTenant');
        if(vars.includes('ngsildPath'))
          inputNgsildPath = $response.querySelector('.Page_ngsildPath');
        if(vars.includes('ngsildContext'))
          inputNgsildContext = $response.querySelector('.Page_ngsildContext');
        if(vars.includes('ngsildData'))
          inputNgsildData = $response.querySelector('.Page_ngsildData');
        if(vars.includes('address'))
          inputAddress = $response.querySelector('.Page_address');
        if(vars.includes('alternateName'))
          inputAlternateName = $response.querySelector('.Page_alternateName');
        if(vars.includes('atmosphericPressure'))
          inputAtmosphericPressure = $response.querySelector('.Page_atmosphericPressure');
        if(vars.includes('dataProvider'))
          inputDataProvider = $response.querySelector('.Page_dataProvider');
        if(vars.includes('dateCreated'))
          inputDateCreated = $response.querySelector('.Page_dateCreated');
        if(vars.includes('dateIssued'))
          inputDateIssued = $response.querySelector('.Page_dateIssued');
        if(vars.includes('dateModified'))
          inputDateModified = $response.querySelector('.Page_dateModified');
        if(vars.includes('dateRetrieved'))
          inputDateRetrieved = $response.querySelector('.Page_dateRetrieved');
        if(vars.includes('dayMaximum'))
          inputDayMaximum = $response.querySelector('.Page_dayMaximum');
        if(vars.includes('dayMinimum'))
          inputDayMinimum = $response.querySelector('.Page_dayMinimum');
        if(vars.includes('feelsLikeTemperature'))
          inputFeelsLikeTemperature = $response.querySelector('.Page_feelsLikeTemperature');
        if(vars.includes('gustSpeed'))
          inputGustSpeed = $response.querySelector('.Page_gustSpeed');
        if(vars.includes('illuminance'))
          inputIlluminance = $response.querySelector('.Page_illuminance');
        if(vars.includes('owner'))
          inputOwner = $response.querySelector('.Page_owner');
        if(vars.includes('precipitation'))
          inputPrecipitation = $response.querySelector('.Page_precipitation');
        if(vars.includes('precipitationProbability'))
          inputPrecipitationProbability = $response.querySelector('.Page_precipitationProbability');
        if(vars.includes('refPointOfInterest'))
          inputRefPointOfInterest = $response.querySelector('.Page_refPointOfInterest');
        if(vars.includes('relativeHumidity'))
          inputRelativeHumidity = $response.querySelector('.Page_relativeHumidity');
        if(vars.includes('seeAlso'))
          inputSeeAlso = $response.querySelector('.Page_seeAlso');
        if(vars.includes('source'))
          inputSource = $response.querySelector('.Page_source');
        if(vars.includes('temperature'))
          inputTemperature = $response.querySelector('.Page_temperature');
        if(vars.includes('uVIndexMax'))
          inputUVIndexMax = $response.querySelector('.Page_uVIndexMax');
        if(vars.includes('validFrom'))
          inputValidFrom = $response.querySelector('.Page_validFrom');
        if(vars.includes('validTo'))
          inputValidTo = $response.querySelector('.Page_validTo');
        if(vars.includes('validity'))
          inputValidity = $response.querySelector('.Page_validity');
        if(vars.includes('visibility'))
          inputVisibility = $response.querySelector('.Page_visibility');
        if(vars.includes('weatherType'))
          inputWeatherType = $response.querySelector('.Page_weatherType');
        if(vars.includes('windDirection'))
          inputWindDirection = $response.querySelector('.Page_windDirection');
        if(vars.includes('windSpeed'))
          inputWindSpeed = $response.querySelector('.Page_windSpeed');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.Page_saves');
        if(vars.includes('title'))
          inputTitle = $response.querySelector('.Page_title');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.Page_userPage');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.Page_solrId');
        if(vars.includes('areaServedColors'))
          inputAreaServedColors = $response.querySelector('.Page_areaServedColors');
        if(vars.includes('areaServedTitles'))
          inputAreaServedTitles = $response.querySelector('.Page_areaServedTitles');
        if(vars.includes('areaServedLinks'))
          inputAreaServedLinks = $response.querySelector('.Page_areaServedLinks');
        if(vars.includes('entityShortId'))
          inputEntityShortId = $response.querySelector('.Page_entityShortId');

        jsWebsocketWeatherObserved(entityShortId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listWeatherObserved = JSON.parse($response.querySelector('.pageForm .listWeatherObserved')?.value);


        if(inputPk) {
          document.querySelectorAll('.Page_pk').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.Page_created').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.Page_modified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.Page_archived').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.Page_archived'));
        }

        if(inputName) {
          document.querySelectorAll('.Page_name').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputName.getAttribute('value');
            else
              item.textContent = inputName.textContent;
          });
          addGlow(document.querySelector('.Page_name'));
        }

        if(inputDescription) {
          document.querySelectorAll('.Page_description').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDescription.getAttribute('value');
            else
              item.textContent = inputDescription.textContent;
          });
          addGlow(document.querySelector('.Page_description'));
        }

        if(inputLocation) {
          document.querySelectorAll('.Page_location').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocation.getAttribute('value');
            else
              item.textContent = inputLocation.textContent;
          });
          addGlow(document.querySelector('.Page_location'));
        }

        if(inputAreaServed) {
          document.querySelectorAll('.Page_areaServed').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAreaServed.getAttribute('value');
            else
              item.textContent = inputAreaServed.textContent;
          });
          addGlow(document.querySelector('.Page_areaServed'));
        }

        if(inputId) {
          document.querySelectorAll('.Page_id').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputId.getAttribute('value');
            else
              item.textContent = inputId.textContent;
          });
          addGlow(document.querySelector('.Page_id'));
        }

        if(inputNgsildTenant) {
          document.querySelectorAll('.Page_ngsildTenant').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildTenant.getAttribute('value');
            else
              item.textContent = inputNgsildTenant.textContent;
          });
          addGlow(document.querySelector('.Page_ngsildTenant'));
        }

        if(inputNgsildPath) {
          document.querySelectorAll('.Page_ngsildPath').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildPath.getAttribute('value');
            else
              item.textContent = inputNgsildPath.textContent;
          });
          addGlow(document.querySelector('.Page_ngsildPath'));
        }

        if(inputNgsildContext) {
          document.querySelectorAll('.Page_ngsildContext').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildContext.getAttribute('value');
            else
              item.textContent = inputNgsildContext.textContent;
          });
          addGlow(document.querySelector('.Page_ngsildContext'));
        }

        if(inputNgsildData) {
          document.querySelectorAll('.Page_ngsildData').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildData.getAttribute('value');
            else
              item.textContent = inputNgsildData.textContent;
          });
          addGlow(document.querySelector('.Page_ngsildData'));
        }

        if(inputAddress) {
          document.querySelectorAll('.Page_address').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAddress.getAttribute('value');
            else
              item.textContent = inputAddress.textContent;
          });
          addGlow(document.querySelector('.Page_address'));
        }

        if(inputAlternateName) {
          document.querySelectorAll('.Page_alternateName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAlternateName.getAttribute('value');
            else
              item.textContent = inputAlternateName.textContent;
          });
          addGlow(document.querySelector('.Page_alternateName'));
        }

        if(inputAtmosphericPressure) {
          document.querySelectorAll('.Page_atmosphericPressure').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAtmosphericPressure.getAttribute('value');
            else
              item.textContent = inputAtmosphericPressure.textContent;
          });
          addGlow(document.querySelector('.Page_atmosphericPressure'));
        }

        if(inputDataProvider) {
          document.querySelectorAll('.Page_dataProvider').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDataProvider.getAttribute('value');
            else
              item.textContent = inputDataProvider.textContent;
          });
          addGlow(document.querySelector('.Page_dataProvider'));
        }

        if(inputDateCreated) {
          document.querySelectorAll('.Page_dateCreated').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDateCreated.getAttribute('value');
            else
              item.textContent = inputDateCreated.textContent;
          });
          addGlow(document.querySelector('.Page_dateCreated'));
        }

        if(inputDateIssued) {
          document.querySelectorAll('.Page_dateIssued').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDateIssued.getAttribute('value');
            else
              item.textContent = inputDateIssued.textContent;
          });
          addGlow(document.querySelector('.Page_dateIssued'));
        }

        if(inputDateModified) {
          document.querySelectorAll('.Page_dateModified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDateModified.getAttribute('value');
            else
              item.textContent = inputDateModified.textContent;
          });
          addGlow(document.querySelector('.Page_dateModified'));
        }

        if(inputDateRetrieved) {
          document.querySelectorAll('.Page_dateRetrieved').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDateRetrieved.getAttribute('value');
            else
              item.textContent = inputDateRetrieved.textContent;
          });
          addGlow(document.querySelector('.Page_dateRetrieved'));
        }

        if(inputDayMaximum) {
          document.querySelectorAll('.Page_dayMaximum').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDayMaximum.getAttribute('value');
            else
              item.textContent = inputDayMaximum.textContent;
          });
          addGlow(document.querySelector('.Page_dayMaximum'));
        }

        if(inputDayMinimum) {
          document.querySelectorAll('.Page_dayMinimum').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDayMinimum.getAttribute('value');
            else
              item.textContent = inputDayMinimum.textContent;
          });
          addGlow(document.querySelector('.Page_dayMinimum'));
        }

        if(inputFeelsLikeTemperature) {
          document.querySelectorAll('.Page_feelsLikeTemperature').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputFeelsLikeTemperature.getAttribute('value');
            else
              item.textContent = inputFeelsLikeTemperature.textContent;
          });
          addGlow(document.querySelector('.Page_feelsLikeTemperature'));
        }

        if(inputGustSpeed) {
          document.querySelectorAll('.Page_gustSpeed').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGustSpeed.getAttribute('value');
            else
              item.textContent = inputGustSpeed.textContent;
          });
          addGlow(document.querySelector('.Page_gustSpeed'));
        }

        if(inputIlluminance) {
          document.querySelectorAll('.Page_illuminance').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIlluminance.getAttribute('value');
            else
              item.textContent = inputIlluminance.textContent;
          });
          addGlow(document.querySelector('.Page_illuminance'));
        }

        if(inputOwner) {
          document.querySelectorAll('.Page_owner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOwner.getAttribute('value');
            else
              item.textContent = inputOwner.textContent;
          });
          addGlow(document.querySelector('.Page_owner'));
        }

        if(inputPrecipitation) {
          document.querySelectorAll('.Page_precipitation').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPrecipitation.getAttribute('value');
            else
              item.textContent = inputPrecipitation.textContent;
          });
          addGlow(document.querySelector('.Page_precipitation'));
        }

        if(inputPrecipitationProbability) {
          document.querySelectorAll('.Page_precipitationProbability').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPrecipitationProbability.getAttribute('value');
            else
              item.textContent = inputPrecipitationProbability.textContent;
          });
          addGlow(document.querySelector('.Page_precipitationProbability'));
        }

        if(inputRefPointOfInterest) {
          document.querySelectorAll('.Page_refPointOfInterest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRefPointOfInterest.getAttribute('value');
            else
              item.textContent = inputRefPointOfInterest.textContent;
          });
          addGlow(document.querySelector('.Page_refPointOfInterest'));
        }

        if(inputRelativeHumidity) {
          document.querySelectorAll('.Page_relativeHumidity').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRelativeHumidity.getAttribute('value');
            else
              item.textContent = inputRelativeHumidity.textContent;
          });
          addGlow(document.querySelector('.Page_relativeHumidity'));
        }

        if(inputSeeAlso) {
          document.querySelectorAll('.Page_seeAlso').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSeeAlso.getAttribute('value');
            else
              item.textContent = inputSeeAlso.textContent;
          });
          addGlow(document.querySelector('.Page_seeAlso'));
        }

        if(inputSource) {
          document.querySelectorAll('.Page_source').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSource.getAttribute('value');
            else
              item.textContent = inputSource.textContent;
          });
          addGlow(document.querySelector('.Page_source'));
        }

        if(inputTemperature) {
          document.querySelectorAll('.Page_temperature').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTemperature.getAttribute('value');
            else
              item.textContent = inputTemperature.textContent;
          });
          addGlow(document.querySelector('.Page_temperature'));
        }

        if(inputUVIndexMax) {
          document.querySelectorAll('.Page_uVIndexMax').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUVIndexMax.getAttribute('value');
            else
              item.textContent = inputUVIndexMax.textContent;
          });
          addGlow(document.querySelector('.Page_uVIndexMax'));
        }

        if(inputValidFrom) {
          document.querySelectorAll('.Page_validFrom').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputValidFrom.getAttribute('value');
            else
              item.textContent = inputValidFrom.textContent;
          });
          addGlow(document.querySelector('.Page_validFrom'));
        }

        if(inputValidTo) {
          document.querySelectorAll('.Page_validTo').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputValidTo.getAttribute('value');
            else
              item.textContent = inputValidTo.textContent;
          });
          addGlow(document.querySelector('.Page_validTo'));
        }

        if(inputValidity) {
          document.querySelectorAll('.Page_validity').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputValidity.getAttribute('value');
            else
              item.textContent = inputValidity.textContent;
          });
          addGlow(document.querySelector('.Page_validity'));
        }

        if(inputVisibility) {
          document.querySelectorAll('.Page_visibility').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputVisibility.getAttribute('value');
            else
              item.textContent = inputVisibility.textContent;
          });
          addGlow(document.querySelector('.Page_visibility'));
        }

        if(inputWeatherType) {
          document.querySelectorAll('.Page_weatherType').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWeatherType.getAttribute('value');
            else
              item.textContent = inputWeatherType.textContent;
          });
          addGlow(document.querySelector('.Page_weatherType'));
        }

        if(inputWindDirection) {
          document.querySelectorAll('.Page_windDirection').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWindDirection.getAttribute('value');
            else
              item.textContent = inputWindDirection.textContent;
          });
          addGlow(document.querySelector('.Page_windDirection'));
        }

        if(inputWindSpeed) {
          document.querySelectorAll('.Page_windSpeed').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWindSpeed.getAttribute('value');
            else
              item.textContent = inputWindSpeed.textContent;
          });
          addGlow(document.querySelector('.Page_windSpeed'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.Page_classCanonicalName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.Page_classSimpleName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.Page_classCanonicalNames').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.Page_sessionId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.Page_userKey').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.Page_saves').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.Page_saves'));
        }

        if(inputTitle) {
          document.querySelectorAll('.Page_title').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTitle.getAttribute('value');
            else
              item.textContent = inputTitle.textContent;
          });
          addGlow(document.querySelector('.Page_title'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.Page_displayPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.Page_editPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.Page_userPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.Page_userPage'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.Page_objectSuggest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.Page_objectText').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.Page_solrId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.Page_solrId'));
        }

        if(inputAreaServedColors) {
          document.querySelectorAll('.Page_areaServedColors').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAreaServedColors.getAttribute('value');
            else
              item.textContent = inputAreaServedColors.textContent;
          });
          addGlow(document.querySelector('.Page_areaServedColors'));
        }

        if(inputAreaServedTitles) {
          document.querySelectorAll('.Page_areaServedTitles').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAreaServedTitles.getAttribute('value');
            else
              item.textContent = inputAreaServedTitles.textContent;
          });
          addGlow(document.querySelector('.Page_areaServedTitles'));
        }

        if(inputAreaServedLinks) {
          document.querySelectorAll('.Page_areaServedLinks').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAreaServedLinks.getAttribute('value');
            else
              item.textContent = inputAreaServedLinks.textContent;
          });
          addGlow(document.querySelector('.Page_areaServedLinks'));
        }

        if(inputEntityShortId) {
          document.querySelectorAll('.Page_entityShortId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEntityShortId.getAttribute('value');
            else
              item.textContent = inputEntityShortId.textContent;
          });
          addGlow(document.querySelector('.Page_entityShortId'));
        }

          pageGraphWeatherObserved();
      });
    });
  }
}

function pageGraphWeatherObserved(apiRequest) {
  var r = document.querySelector('.pageForm .pageResponse')?.value;
  if(r) {
    var json = JSON.parse(r);
    if(json['facetCounts']) {
      var facetCounts = json.facetCounts;
      if(facetCounts['facetPivot'] && facetCounts['facetRanges']) {
        var numPivots = json.responseHeader.params['facet.pivot'].split(',').length;
        var range = facetCounts.facetRanges.ranges[Object.keys(facetCounts.facetRanges.ranges)[0]];
        var rangeName;
        var rangeVar;
        var rangeVarFq;
        var rangeCounts;
        var rangeVals;
        if(range) {
          rangeName = range.name;
          rangeVar = rangeName.substring(0, rangeName.indexOf('_'));
          rangeVarFq = window.varsFq[rangeVar];
          rangeCounts = range.counts;
          rangeVals = Object.keys(rangeCounts).map(key => key);
        }
        var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
        var pivot1VarIndexed = pivot1Name;
        if(pivot1VarIndexed.includes(','))
          pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
        var pivot1VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot1VarIndexed)[0];
        var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
        var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
        var pivot1Vals = Object.keys(pivot1Map);
        var data = [];
        var layout = {};
        if(range) {
          layout['title'] = 'WeatherForecasts';
          layout['xaxis'] = {
            title: rangeVarFq.displayName
          }
          if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
            var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
            var pivot2VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot2VarIndexed)[0];
            var pivot2VarFq = pivot2VarObj ? pivot2VarObj.var : 'classSimpleName';
            layout['yaxis'] = {
              title: pivot2VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              trace['x'] = Object.keys(pivot1Counts).map(key => key);
              if(pivot2Map) {
                var xs = [];
                var ys = [];
                var pivot2Vals = Object.keys(pivot2Map);
                pivot2Vals.forEach((pivot2Val) => {
                  var pivot2 = pivot2Map[pivot2Val];
                  var pivot2Counts = pivot2.ranges[rangeName].counts;
                  Object.entries(pivot2Counts).forEach(([key, count]) => {
                    xs.push(key);
                    ys.push(parseFloat(pivot2Val));
                  });
                });
                trace['y'] = ys;
                trace['x'] = xs;
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
                trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              }
              data.push(trace);
            });
          } else {
            layout['yaxis'] = {
              title: pivot1VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              if(window.varsRange[window.defaultRangeVar].classSimpleName == 'ZonedDateTime') {
                trace['x'] = Object.keys(pivot1Counts).map(key => moment.tz(key, Intl.DateTimeFormat().resolvedOptions().timeZone).format('YYYY-MM-DDTHH:mm:ss.SSSS'));
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
              }
              trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              data.push(trace);
            });
          }
          Plotly.react('htmBodyGraphWeatherObservedPage', data, layout);
        }
      }
    }

    // Graph Location
    window.mapLayers = {};
    window.bounds = null;
    if(listWeatherObserved.filter(o => o.location)) {
      window.bounds = L.latLngBounds(listWeatherObserved.filter(o => o.location).map((c) => {
        return [c.location.coordinates[1], c.location.coordinates[0]];
      }));
    }
    function onEachFeature(feature, layer) {
      let popupContent = htmTooltipWeatherObserved(feature, layer);
      layer.bindPopup(popupContent);
      window.mapLayers[feature.properties.id] = layer;
    };
    if(window.mapWeatherObserved) {
      window.geoJSONWeatherObserved.clearLayers();
      window.listWeatherObserved.forEach((result, index) => {
        if(result.location) {
          var shapes = [];
          if(Array.isArray(result.location))
            shapes = shapes.concat(result.location);
          else
            shapes.push(result.location);
          shapes.forEach(function(shape, index) {
            var features = [{
              "type": "Feature"
              , "properties": result
              , "geometry": shape
              , "index": index
            }];
            var layer = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleWeatherObserved
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleWeatherObserved(feature));
              }
            });
            window.geoJSONWeatherObserved.addLayer(layer);
          });
        }
        if(result.areaServed) {
          var shapes = [];
          if(Array.isArray(result.areaServed))
            shapes = shapes.concat(result.areaServed);
          else
            shapes.push(result.areaServed);
          shapes.forEach(function(shape, index) {
            var features = [{
              "type": "Feature"
              , "properties": result
              , "geometry": shape
              , "index": index
            }];
            var layer = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleWeatherObserved
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleWeatherObserved(feature));
              }
            });
            window.geoJSONWeatherObserved.addLayer(layer);
          });
        }
      });
    } else {
      window.mapWeatherObserved = L.map('htmBodyGraphLocationWeatherObservedPage', {
        position: 'topright'
        , zoomControl: true
        , closePopupOnClick: false
        , contextmenu: true
        , contextmenuWidth: 140
        , contextmenuItems: [
          {
            text: 'Show coordinates'
            , callback: function(event) {
              alert(event.latlng);
            }
          }
          ]
      });
      window.mapWeatherObserved.zoomControl.setPosition('topright');
      var data = [];
      var layout = {};
      layout['showlegend'] = true;
      layout['dragmode'] = 'zoom';
      layout['uirevision'] = 'true';
      var legend = L.control({position: 'bottomright'});
      legend.onAdd = jsLegendWeatherObserved;
      legend.addTo(window.mapWeatherObserved);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(window.mapWeatherObserved);

      if(window.bounds) {
        window.mapWeatherObserved.fitBounds(window.bounds);
      } else {
        if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
          window.mapWeatherObserved.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]], window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_ZOOM'])
          window.mapWeatherObserved.setView(null, window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_LOCATION'])
          window.mapWeatherObserved.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]]);
      }

      layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
      window.geoJSONWeatherObserved = L.geoJSON().addTo(window.mapWeatherObserved);
      window.listWeatherObserved.forEach((result, index) => {
        if(result.location) {
          var shapes = [];
          if(Array.isArray(result.location))
            shapes = shapes.concat(result.location);
          else
            shapes.push(result.location);
          shapes.forEach(shape => {
            var features = [{
              "type": "Feature"
              , "properties": result
              , "geometry": shape
              , "index": index
            }];
            var layer = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleWeatherObserved
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleWeatherObserved(feature));
              }
            });
            window.geoJSONWeatherObserved.addLayer(layer);
          });
        }
        if(result.areaServed) {
          var shapes = [];
          if(Array.isArray(result.areaServed))
            shapes = shapes.concat(result.areaServed);
          else
            shapes.push(result.areaServed);
          shapes.forEach(shape => {
            var features = [{
              "type": "Feature"
              , "properties": result
              , "geometry": shape
              , "index": index
            }];
            var layer = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleWeatherObserved
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleWeatherObserved(feature));
              }
            });
            window.geoJSONWeatherObserved.addLayer(layer);
          });
        }
      });
      window.mapWeatherObserved.on('popupopen', function(e) {
        if(e.popup._source) {
          var feature = e.popup._source.feature;
          jsTooltipWeatherObserved(e, feature);
        }
      });
      const drawnItems = new L.FeatureGroup();
      window.mapWeatherObserved.addLayer(drawnItems);
      const drawControl = new L.Control.Draw({
        position: 'topright'
        , edit: {
          featureGroup: drawnItems
        }
        , draw: {
          polygon: true
          , polyline: true
          , rectangle: true
          , circle: true
          , marker: true
        }
      });
      window.mapWeatherObserved.addControl(drawControl);
      window.mapWeatherObserved.on(L.Draw.Event.CREATED, function (event) {
        drawnItems.addLayer(event.layer);
        var contextmenuItems = [];
        if(event.layerType == 'marker') {
          contextmenuItems.push({
            text: 'Set location of ' + result.title
            , callback: function(event2) {
              patchLocation(event.layer, { coordinates: [event.layer.getLatLng()['lng'], event.layer.getLatLng()['lat']], type: "Point" });
            }
          });
        }
        if(event.layerType == 'polygon') {
          contextmenuItems.push({
            text: 'Set areaServed of ' + result.title
            , callback: function(event2) {
              var latLngs = [];
              event.layer.getLatLngs().forEach(ll1 => {
                var latLngs1 = [];
                ll1.forEach(ll2 => {
                  var latLngs2 = [ll2['lng'], ll2['lat']];
                  latLngs1.push(latLngs2);
                });
                latLngs.push(latLngs1);
              });
              patchArea(event.layer, { coordinates: latLngs, type: "Polygon" });
            }
          });
        }
        event.layer.bindContextMenu({
          contextmenu: true
          , contextmenuItems: contextmenuItems
        });
      });
    }
  }
}
function patchLocation(target, location) {
  patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + result.entityShortId }]
      , 'setLocation', location
      , target
      , function(response, e) { addGlow(target); }
      , function(response, e) { addError(target); }
      );
}
function patchArea(target, areaServed) {
  patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + result.entityShortId }]
      , 'setAreaServed', areaServed
      , target
      , function(response, e) { addGlow(target); }
      , function(response, e) { addError(target); }
      );
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqWeatherObserved_time').innerText = '';
  searchPage('WeatherObserved', function() {
    let speedRate = parseFloat(document.querySelector('#animateStatsSpeed')?.value) * 1000;
    let xStep = parseFloat(document.querySelector('#animateStatsStep')?.value);
    let xMin = parseFloat(document.querySelector('#animateStatsMin')?.value);
    let xMax = parseFloat(document.querySelector('#animateStatsMax')?.value);
    let x = xMin;

    let animateInterval = window.setInterval(() => {
      x = x + xStep;
      if (x > xMax || x < 0) {
        clearInterval(animateInterval);
      }
      document.querySelector('#fqWeatherObserved_time').value = x;
      document.querySelector('#fqWeatherObserved_time').onchange();
      searchPage('WeatherObserved');
    }, speedRate);
  });
}
