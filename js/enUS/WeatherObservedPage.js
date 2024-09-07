
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

    var filterObjectId = $formFilters.querySelector('.valueObjectId')?.value;
    if(filterObjectId != null && filterObjectId !== '')
      filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

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

    var filterAlternateName = $formFilters.querySelector('.valueAlternateName')?.value;
    if(filterAlternateName != null && filterAlternateName !== '')
      filters.push({ name: 'fq', value: 'alternateName:' + filterAlternateName });

    var filterAddress = $formFilters.querySelector('.valueAddress')?.value;
    if(filterAddress != null && filterAddress !== '')
      filters.push({ name: 'fq', value: 'address:' + filterAddress });

    var filterEntityId = $formFilters.querySelector('.valueEntityId')?.value;
    if(filterEntityId != null && filterEntityId !== '')
      filters.push({ name: 'fq', value: 'entityId:' + filterEntityId });

    var filterNgsildTenant = $formFilters.querySelector('.valueNgsildTenant')?.value;
    if(filterNgsildTenant != null && filterNgsildTenant !== '')
      filters.push({ name: 'fq', value: 'ngsildTenant:' + filterNgsildTenant });

    var filterNgsildPath = $formFilters.querySelector('.valueNgsildPath')?.value;
    if(filterNgsildPath != null && filterNgsildPath !== '')
      filters.push({ name: 'fq', value: 'ngsildPath:' + filterNgsildPath });

    var filterNgsildData = $formFilters.querySelector('.valueNgsildData')?.value;
    if(filterNgsildData != null && filterNgsildData !== '')
      filters.push({ name: 'fq', value: 'ngsildData:' + filterNgsildData });

    var filterAirQualityIndex = $formFilters.querySelector('.valueAirQualityIndex')?.value;
    if(filterAirQualityIndex != null && filterAirQualityIndex !== '')
      filters.push({ name: 'fq', value: 'airQualityIndex:' + filterAirQualityIndex });

    var filterAirQualityIndexForecast = $formFilters.querySelector('.valueAirQualityIndexForecast')?.value;
    if(filterAirQualityIndexForecast != null && filterAirQualityIndexForecast !== '')
      filters.push({ name: 'fq', value: 'airQualityIndexForecast:' + filterAirQualityIndexForecast });

    var filterAqiMajorPollutant = $formFilters.querySelector('.valueAqiMajorPollutant')?.value;
    if(filterAqiMajorPollutant != null && filterAqiMajorPollutant !== '')
      filters.push({ name: 'fq', value: 'aqiMajorPollutant:' + filterAqiMajorPollutant });

    var filterAqiMajorPollutantForecast = $formFilters.querySelector('.valueAqiMajorPollutantForecast')?.value;
    if(filterAqiMajorPollutantForecast != null && filterAqiMajorPollutantForecast !== '')
      filters.push({ name: 'fq', value: 'aqiMajorPollutantForecast:' + filterAqiMajorPollutantForecast });

    var filterAirTemperatureForecast = $formFilters.querySelector('.valueAirTemperatureForecast')?.value;
    if(filterAirTemperatureForecast != null && filterAirTemperatureForecast !== '')
      filters.push({ name: 'fq', value: 'airTemperatureForecast:' + filterAirTemperatureForecast });

    var filterAirTemperatureTSA = $formFilters.querySelector('.valueAirTemperatureTSA')?.value;
    if(filterAirTemperatureTSA != null && filterAirTemperatureTSA !== '')
      filters.push({ name: 'fq', value: 'airTemperatureTSA:' + filterAirTemperatureTSA });

    var filterAreaServed = $formFilters.querySelector('.valueAreaServed')?.value;
    if(filterAreaServed != null && filterAreaServed !== '')
      filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

    var filterAtmosphericPressure = $formFilters.querySelector('.valueAtmosphericPressure')?.value;
    if(filterAtmosphericPressure != null && filterAtmosphericPressure !== '')
      filters.push({ name: 'fq', value: 'atmosphericPressure:' + filterAtmosphericPressure });

    var filterDataProvider = $formFilters.querySelector('.valueDataProvider')?.value;
    if(filterDataProvider != null && filterDataProvider !== '')
      filters.push({ name: 'fq', value: 'dataProvider:' + filterDataProvider });

    var filterDateCreated = $formFilters.querySelector('.valueDateCreated')?.value;
    if(filterDateCreated != null && filterDateCreated !== '')
      filters.push({ name: 'fq', value: 'dateCreated:' + filterDateCreated });

    var filterDateModified = $formFilters.querySelector('.valueDateModified')?.value;
    if(filterDateModified != null && filterDateModified !== '')
      filters.push({ name: 'fq', value: 'dateModified:' + filterDateModified });

    var filterDateObserved = $formFilters.querySelector('.valueDateObserved')?.value;
    if(filterDateObserved != null && filterDateObserved !== '')
      filters.push({ name: 'fq', value: 'dateObserved:' + filterDateObserved });

    var filterDewPoint = $formFilters.querySelector('.valueDewPoint')?.value;
    if(filterDewPoint != null && filterDewPoint !== '')
      filters.push({ name: 'fq', value: 'dewPoint:' + filterDewPoint });

    var filterDiffuseIrradiation = $formFilters.querySelector('.valueDiffuseIrradiation')?.value;
    if(filterDiffuseIrradiation != null && filterDiffuseIrradiation !== '')
      filters.push({ name: 'fq', value: 'diffuseIrradiation:' + filterDiffuseIrradiation });

    var filterDirectIrradiation = $formFilters.querySelector('.valueDirectIrradiation')?.value;
    if(filterDirectIrradiation != null && filterDirectIrradiation !== '')
      filters.push({ name: 'fq', value: 'directIrradiation:' + filterDirectIrradiation });

    var filterFeelsLikeTemperature = $formFilters.querySelector('.valueFeelsLikeTemperature')?.value;
    if(filterFeelsLikeTemperature != null && filterFeelsLikeTemperature !== '')
      filters.push({ name: 'fq', value: 'feelsLikeTemperature:' + filterFeelsLikeTemperature });

    var filterGustSpeed = $formFilters.querySelector('.valueGustSpeed')?.value;
    if(filterGustSpeed != null && filterGustSpeed !== '')
      filters.push({ name: 'fq', value: 'gustSpeed:' + filterGustSpeed });

    var filterIlluminance = $formFilters.querySelector('.valueIlluminance')?.value;
    if(filterIlluminance != null && filterIlluminance !== '')
      filters.push({ name: 'fq', value: 'illuminance:' + filterIlluminance });

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterOwner = $formFilters.querySelector('.valueOwner')?.value;
    if(filterOwner != null && filterOwner !== '')
      filters.push({ name: 'fq', value: 'owner:' + filterOwner });

    var filterPrecipitation = $formFilters.querySelector('.valuePrecipitation')?.value;
    if(filterPrecipitation != null && filterPrecipitation !== '')
      filters.push({ name: 'fq', value: 'precipitation:' + filterPrecipitation });

    var filterPrecipitationForecast = $formFilters.querySelector('.valuePrecipitationForecast')?.value;
    if(filterPrecipitationForecast != null && filterPrecipitationForecast !== '')
      filters.push({ name: 'fq', value: 'precipitationForecast:' + filterPrecipitationForecast });

    var filterPressureTendency = $formFilters.querySelector('.valuePressureTendency')?.value;
    if(filterPressureTendency != null && filterPressureTendency !== '')
      filters.push({ name: 'fq', value: 'pressureTendency:' + filterPressureTendency });

    var filterRefDevice = $formFilters.querySelector('.valueRefDevice')?.value;
    if(filterRefDevice != null && filterRefDevice !== '')
      filters.push({ name: 'fq', value: 'refDevice:' + filterRefDevice });

    var filterRefPointOfInterest = $formFilters.querySelector('.valueRefPointOfInterest')?.value;
    if(filterRefPointOfInterest != null && filterRefPointOfInterest !== '')
      filters.push({ name: 'fq', value: 'refPointOfInterest:' + filterRefPointOfInterest });

    var filterRelativeHumidity = $formFilters.querySelector('.valueRelativeHumidity')?.value;
    if(filterRelativeHumidity != null && filterRelativeHumidity !== '')
      filters.push({ name: 'fq', value: 'relativeHumidity:' + filterRelativeHumidity });

    var filterRelativeHumidityForecast = $formFilters.querySelector('.valueRelativeHumidityForecast')?.value;
    if(filterRelativeHumidityForecast != null && filterRelativeHumidityForecast !== '')
      filters.push({ name: 'fq', value: 'relativeHumidityForecast:' + filterRelativeHumidityForecast });

    var filterSeeAlso = $formFilters.querySelector('.valueSeeAlso')?.value;
    if(filterSeeAlso != null && filterSeeAlso !== '')
      filters.push({ name: 'fq', value: 'seeAlso:' + filterSeeAlso });

    var filterSnowHeight = $formFilters.querySelector('.valueSnowHeight')?.value;
    if(filterSnowHeight != null && filterSnowHeight !== '')
      filters.push({ name: 'fq', value: 'snowHeight:' + filterSnowHeight });

    var filterSolarRadiation = $formFilters.querySelector('.valueSolarRadiation')?.value;
    if(filterSolarRadiation != null && filterSolarRadiation !== '')
      filters.push({ name: 'fq', value: 'solarRadiation:' + filterSolarRadiation });

    var filterSource = $formFilters.querySelector('.valueSource')?.value;
    if(filterSource != null && filterSource !== '')
      filters.push({ name: 'fq', value: 'source:' + filterSource });

    var filterStreamGauge = $formFilters.querySelector('.valueStreamGauge')?.value;
    if(filterStreamGauge != null && filterStreamGauge !== '')
      filters.push({ name: 'fq', value: 'streamGauge:' + filterStreamGauge });

    var filterTemperature = $formFilters.querySelector('.valueTemperature')?.value;
    if(filterTemperature != null && filterTemperature !== '')
      filters.push({ name: 'fq', value: 'temperature:' + filterTemperature });

    var filterUVIndexMax = $formFilters.querySelector('.valueUVIndexMax')?.value;
    if(filterUVIndexMax != null && filterUVIndexMax !== '')
      filters.push({ name: 'fq', value: 'uVIndexMax:' + filterUVIndexMax });

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

    var filterInheritPk = $formFilters.querySelector('.valueInheritPk')?.value;
    if(filterInheritPk != null && filterInheritPk !== '')
      filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

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

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectIcon = $formFilters.querySelector('.valueObjectIcon')?.value;
    if(filterObjectIcon != null && filterObjectIcon !== '')
      filters.push({ name: 'fq', value: 'objectIcon:' + filterObjectIcon });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterPageUrlPk = $formFilters.querySelector('.valuePageUrlPk')?.value;
    if(filterPageUrlPk != null && filterPageUrlPk !== '')
      filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

    var filterPageUrlApi = $formFilters.querySelector('.valuePageUrlApi')?.value;
    if(filterPageUrlApi != null && filterPageUrlApi !== '')
      filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

    var filterId = $formFilters.querySelector('.valueId')?.value;
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterPageUrlId = $formFilters.querySelector('.valuePageUrlId')?.value;
    if(filterPageUrlId != null && filterPageUrlId !== '')
      filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

    var filterAreaServedColors = $formFilters.querySelector('.valueAreaServedColors')?.value;
    if(filterAreaServedColors != null && filterAreaServedColors !== '')
      filters.push({ name: 'fq', value: 'areaServedColors:' + filterAreaServedColors });

    var filterAreaServedTitles = $formFilters.querySelector('.valueAreaServedTitles')?.value;
    if(filterAreaServedTitles != null && filterAreaServedTitles !== '')
      filters.push({ name: 'fq', value: 'areaServedTitles:' + filterAreaServedTitles });

    var filterAreaServedLinks = $formFilters.querySelector('.valueAreaServedLinks')?.value;
    if(filterAreaServedLinks != null && filterAreaServedLinks !== '')
      filters.push({ name: 'fq', value: 'areaServedLinks:' + filterAreaServedLinks });
  }
  return filters;
}

function searchWeatherObservedVals(filters, target, success, error) {


  fetch(
    '/api/weather-observed?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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
      var $span = document.createElement('span');      $span.setAttribute('class', '');      $span.innerText = o['objectTitle'];
      var $li = document.createElement('li');
      var $a = document.createElement('a').setAttribute('href', o['pageUrlPk']);
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
    '/api/weather-observed/' + id
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

async function patchWeatherObserved($formFilters, $formValues, target, pk, success, error) {
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

  var valueObjectId = $formValues.querySelector('.valueObjectId')?.value;
  var removeObjectId = $formValues.querySelector('.removeObjectId')?.value === 'true';
  var setObjectId = removeObjectId ? null : $formValues.querySelector('.setObjectId')?.value;
  var addObjectId = $formValues.querySelector('.addObjectId')?.value;
  if(removeObjectId || setObjectId != null && setObjectId !== '')
    vals['setObjectId'] = setObjectId;
  if(addObjectId != null && addObjectId !== '')
    vals['addObjectId'] = addObjectId;
  var removeObjectId = $formValues.querySelector('.removeObjectId')?.value;
  if(removeObjectId != null && removeObjectId !== '')
    vals['removeObjectId'] = removeObjectId;

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

  var valueEntityId = $formValues.querySelector('.valueEntityId')?.value;
  var removeEntityId = $formValues.querySelector('.removeEntityId')?.value === 'true';
  var setEntityId = removeEntityId ? null : $formValues.querySelector('.setEntityId')?.value;
  var addEntityId = $formValues.querySelector('.addEntityId')?.value;
  if(removeEntityId || setEntityId != null && setEntityId !== '')
    vals['setEntityId'] = setEntityId;
  if(addEntityId != null && addEntityId !== '')
    vals['addEntityId'] = addEntityId;
  var removeEntityId = $formValues.querySelector('.removeEntityId')?.value;
  if(removeEntityId != null && removeEntityId !== '')
    vals['removeEntityId'] = removeEntityId;

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

  var valueAirQualityIndex = $formValues.querySelector('.valueAirQualityIndex')?.value;
  var removeAirQualityIndex = $formValues.querySelector('.removeAirQualityIndex')?.value === 'true';
  var setAirQualityIndex = removeAirQualityIndex ? null : $formValues.querySelector('.setAirQualityIndex')?.value;
  var addAirQualityIndex = $formValues.querySelector('.addAirQualityIndex')?.value;
  if(removeAirQualityIndex || setAirQualityIndex != null && setAirQualityIndex !== '')
    vals['setAirQualityIndex'] = setAirQualityIndex;
  if(addAirQualityIndex != null && addAirQualityIndex !== '')
    vals['addAirQualityIndex'] = addAirQualityIndex;
  var removeAirQualityIndex = $formValues.querySelector('.removeAirQualityIndex')?.value;
  if(removeAirQualityIndex != null && removeAirQualityIndex !== '')
    vals['removeAirQualityIndex'] = removeAirQualityIndex;

  var valueAirQualityIndexForecast = $formValues.querySelector('.valueAirQualityIndexForecast')?.value;
  var removeAirQualityIndexForecast = $formValues.querySelector('.removeAirQualityIndexForecast')?.value === 'true';
  var setAirQualityIndexForecast = removeAirQualityIndexForecast ? null : $formValues.querySelector('.setAirQualityIndexForecast')?.value;
  var addAirQualityIndexForecast = $formValues.querySelector('.addAirQualityIndexForecast')?.value;
  if(removeAirQualityIndexForecast || setAirQualityIndexForecast != null && setAirQualityIndexForecast !== '')
    vals['setAirQualityIndexForecast'] = setAirQualityIndexForecast;
  if(addAirQualityIndexForecast != null && addAirQualityIndexForecast !== '')
    vals['addAirQualityIndexForecast'] = addAirQualityIndexForecast;
  var removeAirQualityIndexForecast = $formValues.querySelector('.removeAirQualityIndexForecast')?.value;
  if(removeAirQualityIndexForecast != null && removeAirQualityIndexForecast !== '')
    vals['removeAirQualityIndexForecast'] = removeAirQualityIndexForecast;

  var valueAqiMajorPollutant = $formValues.querySelector('.valueAqiMajorPollutant')?.value;
  var removeAqiMajorPollutant = $formValues.querySelector('.removeAqiMajorPollutant')?.value === 'true';
  var setAqiMajorPollutant = removeAqiMajorPollutant ? null : $formValues.querySelector('.setAqiMajorPollutant')?.value;
  var addAqiMajorPollutant = $formValues.querySelector('.addAqiMajorPollutant')?.value;
  if(removeAqiMajorPollutant || setAqiMajorPollutant != null && setAqiMajorPollutant !== '')
    vals['setAqiMajorPollutant'] = setAqiMajorPollutant;
  if(addAqiMajorPollutant != null && addAqiMajorPollutant !== '')
    vals['addAqiMajorPollutant'] = addAqiMajorPollutant;
  var removeAqiMajorPollutant = $formValues.querySelector('.removeAqiMajorPollutant')?.value;
  if(removeAqiMajorPollutant != null && removeAqiMajorPollutant !== '')
    vals['removeAqiMajorPollutant'] = removeAqiMajorPollutant;

  var valueAqiMajorPollutantForecast = $formValues.querySelector('.valueAqiMajorPollutantForecast')?.value;
  var removeAqiMajorPollutantForecast = $formValues.querySelector('.removeAqiMajorPollutantForecast')?.value === 'true';
  var setAqiMajorPollutantForecast = removeAqiMajorPollutantForecast ? null : $formValues.querySelector('.setAqiMajorPollutantForecast')?.value;
  var addAqiMajorPollutantForecast = $formValues.querySelector('.addAqiMajorPollutantForecast')?.value;
  if(removeAqiMajorPollutantForecast || setAqiMajorPollutantForecast != null && setAqiMajorPollutantForecast !== '')
    vals['setAqiMajorPollutantForecast'] = setAqiMajorPollutantForecast;
  if(addAqiMajorPollutantForecast != null && addAqiMajorPollutantForecast !== '')
    vals['addAqiMajorPollutantForecast'] = addAqiMajorPollutantForecast;
  var removeAqiMajorPollutantForecast = $formValues.querySelector('.removeAqiMajorPollutantForecast')?.value;
  if(removeAqiMajorPollutantForecast != null && removeAqiMajorPollutantForecast !== '')
    vals['removeAqiMajorPollutantForecast'] = removeAqiMajorPollutantForecast;

  var valueAirTemperatureForecast = $formValues.querySelector('.valueAirTemperatureForecast')?.value;
  var removeAirTemperatureForecast = $formValues.querySelector('.removeAirTemperatureForecast')?.value === 'true';
  var setAirTemperatureForecast = removeAirTemperatureForecast ? null : $formValues.querySelector('.setAirTemperatureForecast')?.value;
  var addAirTemperatureForecast = $formValues.querySelector('.addAirTemperatureForecast')?.value;
  if(removeAirTemperatureForecast || setAirTemperatureForecast != null && setAirTemperatureForecast !== '')
    vals['setAirTemperatureForecast'] = setAirTemperatureForecast;
  if(addAirTemperatureForecast != null && addAirTemperatureForecast !== '')
    vals['addAirTemperatureForecast'] = addAirTemperatureForecast;
  var removeAirTemperatureForecast = $formValues.querySelector('.removeAirTemperatureForecast')?.value;
  if(removeAirTemperatureForecast != null && removeAirTemperatureForecast !== '')
    vals['removeAirTemperatureForecast'] = removeAirTemperatureForecast;

  var valueAirTemperatureTSA = $formValues.querySelector('.valueAirTemperatureTSA')?.value;
  var removeAirTemperatureTSA = $formValues.querySelector('.removeAirTemperatureTSA')?.value === 'true';
  var setAirTemperatureTSA = removeAirTemperatureTSA ? null : $formValues.querySelector('.setAirTemperatureTSA')?.value;
  var addAirTemperatureTSA = $formValues.querySelector('.addAirTemperatureTSA')?.value;
  if(removeAirTemperatureTSA || setAirTemperatureTSA != null && setAirTemperatureTSA !== '')
    vals['setAirTemperatureTSA'] = JSON.parse(setAirTemperatureTSA);
  if(addAirTemperatureTSA != null && addAirTemperatureTSA !== '')
    vals['addAirTemperatureTSA'] = addAirTemperatureTSA;
  var removeAirTemperatureTSA = $formValues.querySelector('.removeAirTemperatureTSA')?.value;
  if(removeAirTemperatureTSA != null && removeAirTemperatureTSA !== '')
    vals['removeAirTemperatureTSA'] = removeAirTemperatureTSA;

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

  var valueDateObserved = $formValues.querySelector('.valueDateObserved')?.value;
  var removeDateObserved = $formValues.querySelector('.removeDateObserved')?.value === 'true';
  var setDateObserved = removeDateObserved ? null : $formValues.querySelector('.setDateObserved')?.value;
  var addDateObserved = $formValues.querySelector('.addDateObserved')?.value;
  if(removeDateObserved || setDateObserved != null && setDateObserved !== '')
    vals['setDateObserved'] = setDateObserved;
  if(addDateObserved != null && addDateObserved !== '')
    vals['addDateObserved'] = addDateObserved;
  var removeDateObserved = $formValues.querySelector('.removeDateObserved')?.value;
  if(removeDateObserved != null && removeDateObserved !== '')
    vals['removeDateObserved'] = removeDateObserved;

  var valueDewPoint = $formValues.querySelector('.valueDewPoint')?.value;
  var removeDewPoint = $formValues.querySelector('.removeDewPoint')?.value === 'true';
  var setDewPoint = removeDewPoint ? null : $formValues.querySelector('.setDewPoint')?.value;
  var addDewPoint = $formValues.querySelector('.addDewPoint')?.value;
  if(removeDewPoint || setDewPoint != null && setDewPoint !== '')
    vals['setDewPoint'] = setDewPoint;
  if(addDewPoint != null && addDewPoint !== '')
    vals['addDewPoint'] = addDewPoint;
  var removeDewPoint = $formValues.querySelector('.removeDewPoint')?.value;
  if(removeDewPoint != null && removeDewPoint !== '')
    vals['removeDewPoint'] = removeDewPoint;

  var valueDiffuseIrradiation = $formValues.querySelector('.valueDiffuseIrradiation')?.value;
  var removeDiffuseIrradiation = $formValues.querySelector('.removeDiffuseIrradiation')?.value === 'true';
  var setDiffuseIrradiation = removeDiffuseIrradiation ? null : $formValues.querySelector('.setDiffuseIrradiation')?.value;
  var addDiffuseIrradiation = $formValues.querySelector('.addDiffuseIrradiation')?.value;
  if(removeDiffuseIrradiation || setDiffuseIrradiation != null && setDiffuseIrradiation !== '')
    vals['setDiffuseIrradiation'] = setDiffuseIrradiation;
  if(addDiffuseIrradiation != null && addDiffuseIrradiation !== '')
    vals['addDiffuseIrradiation'] = addDiffuseIrradiation;
  var removeDiffuseIrradiation = $formValues.querySelector('.removeDiffuseIrradiation')?.value;
  if(removeDiffuseIrradiation != null && removeDiffuseIrradiation !== '')
    vals['removeDiffuseIrradiation'] = removeDiffuseIrradiation;

  var valueDirectIrradiation = $formValues.querySelector('.valueDirectIrradiation')?.value;
  var removeDirectIrradiation = $formValues.querySelector('.removeDirectIrradiation')?.value === 'true';
  var setDirectIrradiation = removeDirectIrradiation ? null : $formValues.querySelector('.setDirectIrradiation')?.value;
  var addDirectIrradiation = $formValues.querySelector('.addDirectIrradiation')?.value;
  if(removeDirectIrradiation || setDirectIrradiation != null && setDirectIrradiation !== '')
    vals['setDirectIrradiation'] = setDirectIrradiation;
  if(addDirectIrradiation != null && addDirectIrradiation !== '')
    vals['addDirectIrradiation'] = addDirectIrradiation;
  var removeDirectIrradiation = $formValues.querySelector('.removeDirectIrradiation')?.value;
  if(removeDirectIrradiation != null && removeDirectIrradiation !== '')
    vals['removeDirectIrradiation'] = removeDirectIrradiation;

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

  var valuePrecipitationForecast = $formValues.querySelector('.valuePrecipitationForecast')?.value;
  var removePrecipitationForecast = $formValues.querySelector('.removePrecipitationForecast')?.value === 'true';
  var setPrecipitationForecast = removePrecipitationForecast ? null : $formValues.querySelector('.setPrecipitationForecast')?.value;
  var addPrecipitationForecast = $formValues.querySelector('.addPrecipitationForecast')?.value;
  if(removePrecipitationForecast || setPrecipitationForecast != null && setPrecipitationForecast !== '')
    vals['setPrecipitationForecast'] = setPrecipitationForecast;
  if(addPrecipitationForecast != null && addPrecipitationForecast !== '')
    vals['addPrecipitationForecast'] = addPrecipitationForecast;
  var removePrecipitationForecast = $formValues.querySelector('.removePrecipitationForecast')?.value;
  if(removePrecipitationForecast != null && removePrecipitationForecast !== '')
    vals['removePrecipitationForecast'] = removePrecipitationForecast;

  var valuePressureTendency = $formValues.querySelector('.valuePressureTendency')?.value;
  var removePressureTendency = $formValues.querySelector('.removePressureTendency')?.value === 'true';
  var setPressureTendency = removePressureTendency ? null : $formValues.querySelector('.setPressureTendency')?.value;
  var addPressureTendency = $formValues.querySelector('.addPressureTendency')?.value;
  if(removePressureTendency || setPressureTendency != null && setPressureTendency !== '')
    vals['setPressureTendency'] = JSON.parse(setPressureTendency);
  if(addPressureTendency != null && addPressureTendency !== '')
    vals['addPressureTendency'] = addPressureTendency;
  var removePressureTendency = $formValues.querySelector('.removePressureTendency')?.value;
  if(removePressureTendency != null && removePressureTendency !== '')
    vals['removePressureTendency'] = removePressureTendency;

  var valueRefDevice = $formValues.querySelector('.valueRefDevice')?.value;
  var removeRefDevice = $formValues.querySelector('.removeRefDevice')?.value === 'true';
  var setRefDevice = removeRefDevice ? null : $formValues.querySelector('.setRefDevice')?.value;
  var addRefDevice = $formValues.querySelector('.addRefDevice')?.value;
  if(removeRefDevice || setRefDevice != null && setRefDevice !== '')
    vals['setRefDevice'] = JSON.parse(setRefDevice);
  if(addRefDevice != null && addRefDevice !== '')
    vals['addRefDevice'] = addRefDevice;
  var removeRefDevice = $formValues.querySelector('.removeRefDevice')?.value;
  if(removeRefDevice != null && removeRefDevice !== '')
    vals['removeRefDevice'] = removeRefDevice;

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

  var valueRelativeHumidityForecast = $formValues.querySelector('.valueRelativeHumidityForecast')?.value;
  var removeRelativeHumidityForecast = $formValues.querySelector('.removeRelativeHumidityForecast')?.value === 'true';
  var setRelativeHumidityForecast = removeRelativeHumidityForecast ? null : $formValues.querySelector('.setRelativeHumidityForecast')?.value;
  var addRelativeHumidityForecast = $formValues.querySelector('.addRelativeHumidityForecast')?.value;
  if(removeRelativeHumidityForecast || setRelativeHumidityForecast != null && setRelativeHumidityForecast !== '')
    vals['setRelativeHumidityForecast'] = setRelativeHumidityForecast;
  if(addRelativeHumidityForecast != null && addRelativeHumidityForecast !== '')
    vals['addRelativeHumidityForecast'] = addRelativeHumidityForecast;
  var removeRelativeHumidityForecast = $formValues.querySelector('.removeRelativeHumidityForecast')?.value;
  if(removeRelativeHumidityForecast != null && removeRelativeHumidityForecast !== '')
    vals['removeRelativeHumidityForecast'] = removeRelativeHumidityForecast;

  var valueSeeAlso = $formValues.querySelector('.valueSeeAlso')?.value;
  var removeSeeAlso = $formValues.querySelector('.removeSeeAlso')?.value === 'true';
  var setSeeAlso = removeSeeAlso ? null : $formValues.querySelector('.setSeeAlso')?.value;
  var addSeeAlso = $formValues.querySelector('.addSeeAlso')?.value;
  if(removeSeeAlso || setSeeAlso != null && setSeeAlso !== '')
    vals['setSeeAlso'] = JSON.parse(setSeeAlso);
  if(addSeeAlso != null && addSeeAlso !== '')
    vals['addSeeAlso'] = addSeeAlso;
  var removeSeeAlso = $formValues.querySelector('.removeSeeAlso')?.value;
  if(removeSeeAlso != null && removeSeeAlso !== '')
    vals['removeSeeAlso'] = removeSeeAlso;

  var valueSnowHeight = $formValues.querySelector('.valueSnowHeight')?.value;
  var removeSnowHeight = $formValues.querySelector('.removeSnowHeight')?.value === 'true';
  var setSnowHeight = removeSnowHeight ? null : $formValues.querySelector('.setSnowHeight')?.value;
  var addSnowHeight = $formValues.querySelector('.addSnowHeight')?.value;
  if(removeSnowHeight || setSnowHeight != null && setSnowHeight !== '')
    vals['setSnowHeight'] = setSnowHeight;
  if(addSnowHeight != null && addSnowHeight !== '')
    vals['addSnowHeight'] = addSnowHeight;
  var removeSnowHeight = $formValues.querySelector('.removeSnowHeight')?.value;
  if(removeSnowHeight != null && removeSnowHeight !== '')
    vals['removeSnowHeight'] = removeSnowHeight;

  var valueSolarRadiation = $formValues.querySelector('.valueSolarRadiation')?.value;
  var removeSolarRadiation = $formValues.querySelector('.removeSolarRadiation')?.value === 'true';
  var setSolarRadiation = removeSolarRadiation ? null : $formValues.querySelector('.setSolarRadiation')?.value;
  var addSolarRadiation = $formValues.querySelector('.addSolarRadiation')?.value;
  if(removeSolarRadiation || setSolarRadiation != null && setSolarRadiation !== '')
    vals['setSolarRadiation'] = setSolarRadiation;
  if(addSolarRadiation != null && addSolarRadiation !== '')
    vals['addSolarRadiation'] = addSolarRadiation;
  var removeSolarRadiation = $formValues.querySelector('.removeSolarRadiation')?.value;
  if(removeSolarRadiation != null && removeSolarRadiation !== '')
    vals['removeSolarRadiation'] = removeSolarRadiation;

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

  var valueStreamGauge = $formValues.querySelector('.valueStreamGauge')?.value;
  var removeStreamGauge = $formValues.querySelector('.removeStreamGauge')?.value === 'true';
  var setStreamGauge = removeStreamGauge ? null : $formValues.querySelector('.setStreamGauge')?.value;
  var addStreamGauge = $formValues.querySelector('.addStreamGauge')?.value;
  if(removeStreamGauge || setStreamGauge != null && setStreamGauge !== '')
    vals['setStreamGauge'] = setStreamGauge;
  if(addStreamGauge != null && addStreamGauge !== '')
    vals['addStreamGauge'] = addStreamGauge;
  var removeStreamGauge = $formValues.querySelector('.removeStreamGauge')?.value;
  if(removeStreamGauge != null && removeStreamGauge !== '')
    vals['removeStreamGauge'] = removeStreamGauge;

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

  var valueVisibility = $formValues.querySelector('.valueVisibility')?.value;
  var removeVisibility = $formValues.querySelector('.removeVisibility')?.value === 'true';
  var setVisibility = removeVisibility ? null : $formValues.querySelector('.setVisibility')?.value;
  var addVisibility = $formValues.querySelector('.addVisibility')?.value;
  if(removeVisibility || setVisibility != null && setVisibility !== '')
    vals['setVisibility'] = JSON.parse(setVisibility);
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

  var valueInheritPk = $formValues.querySelector('.valueInheritPk')?.value;
  var removeInheritPk = $formValues.querySelector('.removeInheritPk')?.value === 'true';
  var setInheritPk = removeInheritPk ? null : $formValues.querySelector('.setInheritPk')?.value;
  var addInheritPk = $formValues.querySelector('.addInheritPk')?.value;
  if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
    vals['setInheritPk'] = setInheritPk;
  if(addInheritPk != null && addInheritPk !== '')
    vals['addInheritPk'] = addInheritPk;
  var removeInheritPk = $formValues.querySelector('.removeInheritPk')?.value;
  if(removeInheritPk != null && removeInheritPk !== '')
    vals['removeInheritPk'] = removeInheritPk;

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

  patchWeatherObservedVals(pk == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, target, success, error);
}

function patchWeatherObservedFilters($formFilters) {
  var filters = [];
  if($formFilters) {
    filters.push({ name: 'softCommit', value: 'true' });

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterObjectId = $formFilters.querySelector('.valueObjectId')?.value;
    if(filterObjectId != null && filterObjectId !== '')
      filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

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

    var filterAlternateName = $formFilters.querySelector('.valueAlternateName')?.value;
    if(filterAlternateName != null && filterAlternateName !== '')
      filters.push({ name: 'fq', value: 'alternateName:' + filterAlternateName });

    var filterAddress = $formFilters.querySelector('.valueAddress')?.value;
    if(filterAddress != null && filterAddress !== '')
      filters.push({ name: 'fq', value: 'address:' + filterAddress });

    var filterEntityId = $formFilters.querySelector('.valueEntityId')?.value;
    if(filterEntityId != null && filterEntityId !== '')
      filters.push({ name: 'fq', value: 'entityId:' + filterEntityId });

    var filterNgsildTenant = $formFilters.querySelector('.valueNgsildTenant')?.value;
    if(filterNgsildTenant != null && filterNgsildTenant !== '')
      filters.push({ name: 'fq', value: 'ngsildTenant:' + filterNgsildTenant });

    var filterNgsildPath = $formFilters.querySelector('.valueNgsildPath')?.value;
    if(filterNgsildPath != null && filterNgsildPath !== '')
      filters.push({ name: 'fq', value: 'ngsildPath:' + filterNgsildPath });

    var filterNgsildData = $formFilters.querySelector('.valueNgsildData')?.value;
    if(filterNgsildData != null && filterNgsildData !== '')
      filters.push({ name: 'fq', value: 'ngsildData:' + filterNgsildData });

    var filterAirQualityIndex = $formFilters.querySelector('.valueAirQualityIndex')?.value;
    if(filterAirQualityIndex != null && filterAirQualityIndex !== '')
      filters.push({ name: 'fq', value: 'airQualityIndex:' + filterAirQualityIndex });

    var filterAirQualityIndexForecast = $formFilters.querySelector('.valueAirQualityIndexForecast')?.value;
    if(filterAirQualityIndexForecast != null && filterAirQualityIndexForecast !== '')
      filters.push({ name: 'fq', value: 'airQualityIndexForecast:' + filterAirQualityIndexForecast });

    var filterAqiMajorPollutant = $formFilters.querySelector('.valueAqiMajorPollutant')?.value;
    if(filterAqiMajorPollutant != null && filterAqiMajorPollutant !== '')
      filters.push({ name: 'fq', value: 'aqiMajorPollutant:' + filterAqiMajorPollutant });

    var filterAqiMajorPollutantForecast = $formFilters.querySelector('.valueAqiMajorPollutantForecast')?.value;
    if(filterAqiMajorPollutantForecast != null && filterAqiMajorPollutantForecast !== '')
      filters.push({ name: 'fq', value: 'aqiMajorPollutantForecast:' + filterAqiMajorPollutantForecast });

    var filterAirTemperatureForecast = $formFilters.querySelector('.valueAirTemperatureForecast')?.value;
    if(filterAirTemperatureForecast != null && filterAirTemperatureForecast !== '')
      filters.push({ name: 'fq', value: 'airTemperatureForecast:' + filterAirTemperatureForecast });

    var filterAirTemperatureTSA = $formFilters.querySelector('.valueAirTemperatureTSA')?.value;
    if(filterAirTemperatureTSA != null && filterAirTemperatureTSA !== '')
      filters.push({ name: 'fq', value: 'airTemperatureTSA:' + filterAirTemperatureTSA });

    var filterAreaServed = $formFilters.querySelector('.valueAreaServed')?.value;
    if(filterAreaServed != null && filterAreaServed !== '')
      filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

    var filterAtmosphericPressure = $formFilters.querySelector('.valueAtmosphericPressure')?.value;
    if(filterAtmosphericPressure != null && filterAtmosphericPressure !== '')
      filters.push({ name: 'fq', value: 'atmosphericPressure:' + filterAtmosphericPressure });

    var filterDataProvider = $formFilters.querySelector('.valueDataProvider')?.value;
    if(filterDataProvider != null && filterDataProvider !== '')
      filters.push({ name: 'fq', value: 'dataProvider:' + filterDataProvider });

    var filterDateCreated = $formFilters.querySelector('.valueDateCreated')?.value;
    if(filterDateCreated != null && filterDateCreated !== '')
      filters.push({ name: 'fq', value: 'dateCreated:' + filterDateCreated });

    var filterDateModified = $formFilters.querySelector('.valueDateModified')?.value;
    if(filterDateModified != null && filterDateModified !== '')
      filters.push({ name: 'fq', value: 'dateModified:' + filterDateModified });

    var filterDateObserved = $formFilters.querySelector('.valueDateObserved')?.value;
    if(filterDateObserved != null && filterDateObserved !== '')
      filters.push({ name: 'fq', value: 'dateObserved:' + filterDateObserved });

    var filterDewPoint = $formFilters.querySelector('.valueDewPoint')?.value;
    if(filterDewPoint != null && filterDewPoint !== '')
      filters.push({ name: 'fq', value: 'dewPoint:' + filterDewPoint });

    var filterDiffuseIrradiation = $formFilters.querySelector('.valueDiffuseIrradiation')?.value;
    if(filterDiffuseIrradiation != null && filterDiffuseIrradiation !== '')
      filters.push({ name: 'fq', value: 'diffuseIrradiation:' + filterDiffuseIrradiation });

    var filterDirectIrradiation = $formFilters.querySelector('.valueDirectIrradiation')?.value;
    if(filterDirectIrradiation != null && filterDirectIrradiation !== '')
      filters.push({ name: 'fq', value: 'directIrradiation:' + filterDirectIrradiation });

    var filterFeelsLikeTemperature = $formFilters.querySelector('.valueFeelsLikeTemperature')?.value;
    if(filterFeelsLikeTemperature != null && filterFeelsLikeTemperature !== '')
      filters.push({ name: 'fq', value: 'feelsLikeTemperature:' + filterFeelsLikeTemperature });

    var filterGustSpeed = $formFilters.querySelector('.valueGustSpeed')?.value;
    if(filterGustSpeed != null && filterGustSpeed !== '')
      filters.push({ name: 'fq', value: 'gustSpeed:' + filterGustSpeed });

    var filterIlluminance = $formFilters.querySelector('.valueIlluminance')?.value;
    if(filterIlluminance != null && filterIlluminance !== '')
      filters.push({ name: 'fq', value: 'illuminance:' + filterIlluminance });

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterOwner = $formFilters.querySelector('.valueOwner')?.value;
    if(filterOwner != null && filterOwner !== '')
      filters.push({ name: 'fq', value: 'owner:' + filterOwner });

    var filterPrecipitation = $formFilters.querySelector('.valuePrecipitation')?.value;
    if(filterPrecipitation != null && filterPrecipitation !== '')
      filters.push({ name: 'fq', value: 'precipitation:' + filterPrecipitation });

    var filterPrecipitationForecast = $formFilters.querySelector('.valuePrecipitationForecast')?.value;
    if(filterPrecipitationForecast != null && filterPrecipitationForecast !== '')
      filters.push({ name: 'fq', value: 'precipitationForecast:' + filterPrecipitationForecast });

    var filterPressureTendency = $formFilters.querySelector('.valuePressureTendency')?.value;
    if(filterPressureTendency != null && filterPressureTendency !== '')
      filters.push({ name: 'fq', value: 'pressureTendency:' + filterPressureTendency });

    var filterRefDevice = $formFilters.querySelector('.valueRefDevice')?.value;
    if(filterRefDevice != null && filterRefDevice !== '')
      filters.push({ name: 'fq', value: 'refDevice:' + filterRefDevice });

    var filterRefPointOfInterest = $formFilters.querySelector('.valueRefPointOfInterest')?.value;
    if(filterRefPointOfInterest != null && filterRefPointOfInterest !== '')
      filters.push({ name: 'fq', value: 'refPointOfInterest:' + filterRefPointOfInterest });

    var filterRelativeHumidity = $formFilters.querySelector('.valueRelativeHumidity')?.value;
    if(filterRelativeHumidity != null && filterRelativeHumidity !== '')
      filters.push({ name: 'fq', value: 'relativeHumidity:' + filterRelativeHumidity });

    var filterRelativeHumidityForecast = $formFilters.querySelector('.valueRelativeHumidityForecast')?.value;
    if(filterRelativeHumidityForecast != null && filterRelativeHumidityForecast !== '')
      filters.push({ name: 'fq', value: 'relativeHumidityForecast:' + filterRelativeHumidityForecast });

    var filterSeeAlso = $formFilters.querySelector('.valueSeeAlso')?.value;
    if(filterSeeAlso != null && filterSeeAlso !== '')
      filters.push({ name: 'fq', value: 'seeAlso:' + filterSeeAlso });

    var filterSnowHeight = $formFilters.querySelector('.valueSnowHeight')?.value;
    if(filterSnowHeight != null && filterSnowHeight !== '')
      filters.push({ name: 'fq', value: 'snowHeight:' + filterSnowHeight });

    var filterSolarRadiation = $formFilters.querySelector('.valueSolarRadiation')?.value;
    if(filterSolarRadiation != null && filterSolarRadiation !== '')
      filters.push({ name: 'fq', value: 'solarRadiation:' + filterSolarRadiation });

    var filterSource = $formFilters.querySelector('.valueSource')?.value;
    if(filterSource != null && filterSource !== '')
      filters.push({ name: 'fq', value: 'source:' + filterSource });

    var filterStreamGauge = $formFilters.querySelector('.valueStreamGauge')?.value;
    if(filterStreamGauge != null && filterStreamGauge !== '')
      filters.push({ name: 'fq', value: 'streamGauge:' + filterStreamGauge });

    var filterTemperature = $formFilters.querySelector('.valueTemperature')?.value;
    if(filterTemperature != null && filterTemperature !== '')
      filters.push({ name: 'fq', value: 'temperature:' + filterTemperature });

    var filterUVIndexMax = $formFilters.querySelector('.valueUVIndexMax')?.value;
    if(filterUVIndexMax != null && filterUVIndexMax !== '')
      filters.push({ name: 'fq', value: 'uVIndexMax:' + filterUVIndexMax });

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

    var filterInheritPk = $formFilters.querySelector('.valueInheritPk')?.value;
    if(filterInheritPk != null && filterInheritPk !== '')
      filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

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

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectIcon = $formFilters.querySelector('.valueObjectIcon')?.value;
    if(filterObjectIcon != null && filterObjectIcon !== '')
      filters.push({ name: 'fq', value: 'objectIcon:' + filterObjectIcon });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterPageUrlPk = $formFilters.querySelector('.valuePageUrlPk')?.value;
    if(filterPageUrlPk != null && filterPageUrlPk !== '')
      filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

    var filterPageUrlApi = $formFilters.querySelector('.valuePageUrlApi')?.value;
    if(filterPageUrlApi != null && filterPageUrlApi !== '')
      filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

    var filterId = $formFilters.querySelector('.valueId')?.value;
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterPageUrlId = $formFilters.querySelector('.valuePageUrlId')?.value;
    if(filterPageUrlId != null && filterPageUrlId !== '')
      filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

    var filterAreaServedColors = $formFilters.querySelector('.valueAreaServedColors')?.value;
    if(filterAreaServedColors != null && filterAreaServedColors !== '')
      filters.push({ name: 'fq', value: 'areaServedColors:' + filterAreaServedColors });

    var filterAreaServedTitles = $formFilters.querySelector('.valueAreaServedTitles')?.value;
    if(filterAreaServedTitles != null && filterAreaServedTitles !== '')
      filters.push({ name: 'fq', value: 'areaServedTitles:' + filterAreaServedTitles });

    var filterAreaServedLinks = $formFilters.querySelector('.valueAreaServedLinks')?.value;
    if(filterAreaServedLinks != null && filterAreaServedLinks !== '')
      filters.push({ name: 'fq', value: 'areaServedLinks:' + filterAreaServedLinks });
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
    '/api/weather-observed?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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
      var url = data['pageUrlPk'];
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

  var valueObjectId = $formValues.querySelector('.valueObjectId')?.value;
  if(valueObjectId != null && valueObjectId !== '')
    vals['objectId'] = valueObjectId;

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

  var valueAlternateName = $formValues.querySelector('.valueAlternateName')?.value;
  if(valueAlternateName != null && valueAlternateName !== '')
    vals['alternateName'] = valueAlternateName;

  var valueAddress = $formValues.querySelector('.valueAddress')?.value;
  if(valueAddress != null && valueAddress !== '')
    vals['address'] = JSON.parse(valueAddress);

  var valueEntityId = $formValues.querySelector('.valueEntityId')?.value;
  if(valueEntityId != null && valueEntityId !== '')
    vals['entityId'] = valueEntityId;

  var valueNgsildTenant = $formValues.querySelector('.valueNgsildTenant')?.value;
  if(valueNgsildTenant != null && valueNgsildTenant !== '')
    vals['ngsildTenant'] = valueNgsildTenant;

  var valueNgsildPath = $formValues.querySelector('.valueNgsildPath')?.value;
  if(valueNgsildPath != null && valueNgsildPath !== '')
    vals['ngsildPath'] = valueNgsildPath;

  var valueNgsildData = $formValues.querySelector('.valueNgsildData')?.value;
  if(valueNgsildData != null && valueNgsildData !== '')
    vals['ngsildData'] = JSON.parse(valueNgsildData);

  var valueAirQualityIndex = $formValues.querySelector('.valueAirQualityIndex')?.value;
  if(valueAirQualityIndex != null && valueAirQualityIndex !== '')
    vals['airQualityIndex'] = valueAirQualityIndex;

  var valueAirQualityIndexForecast = $formValues.querySelector('.valueAirQualityIndexForecast')?.value;
  if(valueAirQualityIndexForecast != null && valueAirQualityIndexForecast !== '')
    vals['airQualityIndexForecast'] = valueAirQualityIndexForecast;

  var valueAqiMajorPollutant = $formValues.querySelector('.valueAqiMajorPollutant')?.value;
  if(valueAqiMajorPollutant != null && valueAqiMajorPollutant !== '')
    vals['aqiMajorPollutant'] = valueAqiMajorPollutant;

  var valueAqiMajorPollutantForecast = $formValues.querySelector('.valueAqiMajorPollutantForecast')?.value;
  if(valueAqiMajorPollutantForecast != null && valueAqiMajorPollutantForecast !== '')
    vals['aqiMajorPollutantForecast'] = valueAqiMajorPollutantForecast;

  var valueAirTemperatureForecast = $formValues.querySelector('.valueAirTemperatureForecast')?.value;
  if(valueAirTemperatureForecast != null && valueAirTemperatureForecast !== '')
    vals['airTemperatureForecast'] = valueAirTemperatureForecast;

  var valueAirTemperatureTSA = $formValues.querySelector('.valueAirTemperatureTSA')?.value;
  if(valueAirTemperatureTSA != null && valueAirTemperatureTSA !== '')
    vals['airTemperatureTSA'] = JSON.parse(valueAirTemperatureTSA);

  var valueAreaServed = $formValues.querySelector('.valueAreaServed')?.value;
  if(valueAreaServed != null && valueAreaServed !== '')
    vals['areaServed'] = JSON.parse(valueAreaServed);

  var valueAtmosphericPressure = $formValues.querySelector('.valueAtmosphericPressure')?.value;
  if(valueAtmosphericPressure != null && valueAtmosphericPressure !== '')
    vals['atmosphericPressure'] = valueAtmosphericPressure;

  var valueDataProvider = $formValues.querySelector('.valueDataProvider')?.value;
  if(valueDataProvider != null && valueDataProvider !== '')
    vals['dataProvider'] = valueDataProvider;

  var valueDateCreated = $formValues.querySelector('.valueDateCreated')?.value;
  if(valueDateCreated != null && valueDateCreated !== '')
    vals['dateCreated'] = valueDateCreated;

  var valueDateModified = $formValues.querySelector('.valueDateModified')?.value;
  if(valueDateModified != null && valueDateModified !== '')
    vals['dateModified'] = valueDateModified;

  var valueDateObserved = $formValues.querySelector('.valueDateObserved')?.value;
  if(valueDateObserved != null && valueDateObserved !== '')
    vals['dateObserved'] = valueDateObserved;

  var valueDewPoint = $formValues.querySelector('.valueDewPoint')?.value;
  if(valueDewPoint != null && valueDewPoint !== '')
    vals['dewPoint'] = valueDewPoint;

  var valueDiffuseIrradiation = $formValues.querySelector('.valueDiffuseIrradiation')?.value;
  if(valueDiffuseIrradiation != null && valueDiffuseIrradiation !== '')
    vals['diffuseIrradiation'] = valueDiffuseIrradiation;

  var valueDirectIrradiation = $formValues.querySelector('.valueDirectIrradiation')?.value;
  if(valueDirectIrradiation != null && valueDirectIrradiation !== '')
    vals['directIrradiation'] = valueDirectIrradiation;

  var valueFeelsLikeTemperature = $formValues.querySelector('.valueFeelsLikeTemperature')?.value;
  if(valueFeelsLikeTemperature != null && valueFeelsLikeTemperature !== '')
    vals['feelsLikeTemperature'] = valueFeelsLikeTemperature;

  var valueGustSpeed = $formValues.querySelector('.valueGustSpeed')?.value;
  if(valueGustSpeed != null && valueGustSpeed !== '')
    vals['gustSpeed'] = valueGustSpeed;

  var valueIlluminance = $formValues.querySelector('.valueIlluminance')?.value;
  if(valueIlluminance != null && valueIlluminance !== '')
    vals['illuminance'] = valueIlluminance;

  var valueLocation = $formValues.querySelector('.valueLocation')?.value;
  if(valueLocation != null && valueLocation !== '')
    vals['location'] = JSON.parse(valueLocation);

  var valueOwner = $formValues.querySelector('.valueOwner')?.value;
  if(valueOwner != null && valueOwner !== '')
    vals['owner'] = JSON.parse(valueOwner);

  var valuePrecipitation = $formValues.querySelector('.valuePrecipitation')?.value;
  if(valuePrecipitation != null && valuePrecipitation !== '')
    vals['precipitation'] = valuePrecipitation;

  var valuePrecipitationForecast = $formValues.querySelector('.valuePrecipitationForecast')?.value;
  if(valuePrecipitationForecast != null && valuePrecipitationForecast !== '')
    vals['precipitationForecast'] = valuePrecipitationForecast;

  var valuePressureTendency = $formValues.querySelector('.valuePressureTendency')?.value;
  if(valuePressureTendency != null && valuePressureTendency !== '')
    vals['pressureTendency'] = JSON.parse(valuePressureTendency);

  var valueRefDevice = $formValues.querySelector('.valueRefDevice')?.value;
  if(valueRefDevice != null && valueRefDevice !== '')
    vals['refDevice'] = JSON.parse(valueRefDevice);

  var valueRefPointOfInterest = $formValues.querySelector('.valueRefPointOfInterest')?.value;
  if(valueRefPointOfInterest != null && valueRefPointOfInterest !== '')
    vals['refPointOfInterest'] = valueRefPointOfInterest;

  var valueRelativeHumidity = $formValues.querySelector('.valueRelativeHumidity')?.value;
  if(valueRelativeHumidity != null && valueRelativeHumidity !== '')
    vals['relativeHumidity'] = valueRelativeHumidity;

  var valueRelativeHumidityForecast = $formValues.querySelector('.valueRelativeHumidityForecast')?.value;
  if(valueRelativeHumidityForecast != null && valueRelativeHumidityForecast !== '')
    vals['relativeHumidityForecast'] = valueRelativeHumidityForecast;

  var valueSeeAlso = $formValues.querySelector('.valueSeeAlso')?.value;
  if(valueSeeAlso != null && valueSeeAlso !== '')
    vals['seeAlso'] = JSON.parse(valueSeeAlso);

  var valueSnowHeight = $formValues.querySelector('.valueSnowHeight')?.value;
  if(valueSnowHeight != null && valueSnowHeight !== '')
    vals['snowHeight'] = valueSnowHeight;

  var valueSolarRadiation = $formValues.querySelector('.valueSolarRadiation')?.value;
  if(valueSolarRadiation != null && valueSolarRadiation !== '')
    vals['solarRadiation'] = valueSolarRadiation;

  var valueSource = $formValues.querySelector('.valueSource')?.value;
  if(valueSource != null && valueSource !== '')
    vals['source'] = valueSource;

  var valueStreamGauge = $formValues.querySelector('.valueStreamGauge')?.value;
  if(valueStreamGauge != null && valueStreamGauge !== '')
    vals['streamGauge'] = valueStreamGauge;

  var valueTemperature = $formValues.querySelector('.valueTemperature')?.value;
  if(valueTemperature != null && valueTemperature !== '')
    vals['temperature'] = valueTemperature;

  var valueUVIndexMax = $formValues.querySelector('.valueUVIndexMax')?.value;
  if(valueUVIndexMax != null && valueUVIndexMax !== '')
    vals['uVIndexMax'] = valueUVIndexMax;

  var valueVisibility = $formValues.querySelector('.valueVisibility')?.value;
  if(valueVisibility != null && valueVisibility !== '')
    vals['visibility'] = JSON.parse(valueVisibility);

  var valueWeatherType = $formValues.querySelector('.valueWeatherType')?.value;
  if(valueWeatherType != null && valueWeatherType !== '')
    vals['weatherType'] = valueWeatherType;

  var valueWindDirection = $formValues.querySelector('.valueWindDirection')?.value;
  if(valueWindDirection != null && valueWindDirection !== '')
    vals['windDirection'] = valueWindDirection;

  var valueWindSpeed = $formValues.querySelector('.valueWindSpeed')?.value;
  if(valueWindSpeed != null && valueWindSpeed !== '')
    vals['windSpeed'] = valueWindSpeed;

  var valueInheritPk = $formValues.querySelector('.valueInheritPk')?.value;
  if(valueInheritPk != null && valueInheritPk !== '')
    vals['inheritPk'] = valueInheritPk;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  if(valueSessionId != null && valueSessionId !== '')
    vals['sessionId'] = valueSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  if(valueUserKey != null && valueUserKey !== '')
    vals['userKey'] = valueUserKey;

  fetch(
    '/api/weather-observed'
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
    '/api/weather-observed'
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

async function deleteWeatherObserved(filters, target, pk, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target);
      var url = data['pageUrlPk'];
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
    '/api/weather-observed?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function putimportWeatherObserved($formValues, target, pk, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportWeatherObservedVals(JSON.parse(json), target, success, error);
}

function putimportWeatherObservedVals(json, target, success, error) {
  fetch(
    '/api/weather-observed-import'
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

async function websocketWeatherObserved(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketWeatherObserved', function (error, message) {
      var json = JSON.parse(message['body']);
      var id = json['id'];
      var pk = json['pk'];
      var pkPage = document.querySelector('#Page_pk')?.value;
      var pks = json['pks'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + id + ' ');
      $box.setAttribute('id', 'box-' + id);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + id);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + id);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa-2017-shaded-spruce ');
      $header.setAttribute('id', 'header-' + id);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-regular fa-cloud-bolt-sun"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify weather observed devices in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + id + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + id);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + id);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + id);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3-2017-shaded-spruce ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + id);
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
        var $old_box = document.querySelector('.box-' + id);
      } else {
        document.querySelector('.box-' + id)?.remove();
      }
      if(pk && pkPage && pk == pkPage) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketWeatherObservedInner(apiRequest) {
  var pk = apiRequest['pk'];
  var pks = apiRequest['pks'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(pk != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputObjectId = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputName = null;
        var inputDescription = null;
        var inputAlternateName = null;
        var inputAddress = null;
        var inputEntityId = null;
        var inputNgsildTenant = null;
        var inputNgsildPath = null;
        var inputNgsildData = null;
        var inputAirQualityIndex = null;
        var inputAirQualityIndexForecast = null;
        var inputAqiMajorPollutant = null;
        var inputAqiMajorPollutantForecast = null;
        var inputAirTemperatureForecast = null;
        var inputAirTemperatureTSA = null;
        var inputAreaServed = null;
        var inputAtmosphericPressure = null;
        var inputDataProvider = null;
        var inputDateCreated = null;
        var inputDateModified = null;
        var inputDateObserved = null;
        var inputDewPoint = null;
        var inputDiffuseIrradiation = null;
        var inputDirectIrradiation = null;
        var inputFeelsLikeTemperature = null;
        var inputGustSpeed = null;
        var inputIlluminance = null;
        var inputLocation = null;
        var inputOwner = null;
        var inputPrecipitation = null;
        var inputPrecipitationForecast = null;
        var inputPressureTendency = null;
        var inputRefDevice = null;
        var inputRefPointOfInterest = null;
        var inputRelativeHumidity = null;
        var inputRelativeHumidityForecast = null;
        var inputSeeAlso = null;
        var inputSnowHeight = null;
        var inputSolarRadiation = null;
        var inputSource = null;
        var inputStreamGauge = null;
        var inputTemperature = null;
        var inputUVIndexMax = null;
        var inputVisibility = null;
        var inputWeatherType = null;
        var inputWindDirection = null;
        var inputWindSpeed = null;
        var inputInheritPk = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputSaves = null;
        var inputObjectIcon = null;
        var inputObjectTitle = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputPageUrlPk = null;
        var inputPageUrlApi = null;
        var inputId = null;
        var inputUserKey = null;
        var inputPageUrlId = null;
        var inputAreaServedColors = null;
        var inputAreaServedTitles = null;
        var inputAreaServedLinks = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('#Page_pk');
        if(vars.includes('objectId'))
          inputObjectId = $response.querySelector('#Page_objectId');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('#Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('#Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('#Page_archived');
        if(vars.includes('name'))
          inputName = $response.querySelector('#Page_name');
        if(vars.includes('description'))
          inputDescription = $response.querySelector('#Page_description');
        if(vars.includes('alternateName'))
          inputAlternateName = $response.querySelector('#Page_alternateName');
        if(vars.includes('address'))
          inputAddress = $response.querySelector('#Page_address');
        if(vars.includes('entityId'))
          inputEntityId = $response.querySelector('#Page_entityId');
        if(vars.includes('ngsildTenant'))
          inputNgsildTenant = $response.querySelector('#Page_ngsildTenant');
        if(vars.includes('ngsildPath'))
          inputNgsildPath = $response.querySelector('#Page_ngsildPath');
        if(vars.includes('ngsildData'))
          inputNgsildData = $response.querySelector('#Page_ngsildData');
        if(vars.includes('airQualityIndex'))
          inputAirQualityIndex = $response.querySelector('#Page_airQualityIndex');
        if(vars.includes('airQualityIndexForecast'))
          inputAirQualityIndexForecast = $response.querySelector('#Page_airQualityIndexForecast');
        if(vars.includes('aqiMajorPollutant'))
          inputAqiMajorPollutant = $response.querySelector('#Page_aqiMajorPollutant');
        if(vars.includes('aqiMajorPollutantForecast'))
          inputAqiMajorPollutantForecast = $response.querySelector('#Page_aqiMajorPollutantForecast');
        if(vars.includes('airTemperatureForecast'))
          inputAirTemperatureForecast = $response.querySelector('#Page_airTemperatureForecast');
        if(vars.includes('airTemperatureTSA'))
          inputAirTemperatureTSA = $response.querySelector('#Page_airTemperatureTSA');
        if(vars.includes('areaServed'))
          inputAreaServed = $response.querySelector('#Page_areaServed');
        if(vars.includes('atmosphericPressure'))
          inputAtmosphericPressure = $response.querySelector('#Page_atmosphericPressure');
        if(vars.includes('dataProvider'))
          inputDataProvider = $response.querySelector('#Page_dataProvider');
        if(vars.includes('dateCreated'))
          inputDateCreated = $response.querySelector('#Page_dateCreated');
        if(vars.includes('dateModified'))
          inputDateModified = $response.querySelector('#Page_dateModified');
        if(vars.includes('dateObserved'))
          inputDateObserved = $response.querySelector('#Page_dateObserved');
        if(vars.includes('dewPoint'))
          inputDewPoint = $response.querySelector('#Page_dewPoint');
        if(vars.includes('diffuseIrradiation'))
          inputDiffuseIrradiation = $response.querySelector('#Page_diffuseIrradiation');
        if(vars.includes('directIrradiation'))
          inputDirectIrradiation = $response.querySelector('#Page_directIrradiation');
        if(vars.includes('feelsLikeTemperature'))
          inputFeelsLikeTemperature = $response.querySelector('#Page_feelsLikeTemperature');
        if(vars.includes('gustSpeed'))
          inputGustSpeed = $response.querySelector('#Page_gustSpeed');
        if(vars.includes('illuminance'))
          inputIlluminance = $response.querySelector('#Page_illuminance');
        if(vars.includes('location'))
          inputLocation = $response.querySelector('#Page_location');
        if(vars.includes('owner'))
          inputOwner = $response.querySelector('#Page_owner');
        if(vars.includes('precipitation'))
          inputPrecipitation = $response.querySelector('#Page_precipitation');
        if(vars.includes('precipitationForecast'))
          inputPrecipitationForecast = $response.querySelector('#Page_precipitationForecast');
        if(vars.includes('pressureTendency'))
          inputPressureTendency = $response.querySelector('#Page_pressureTendency');
        if(vars.includes('refDevice'))
          inputRefDevice = $response.querySelector('#Page_refDevice');
        if(vars.includes('refPointOfInterest'))
          inputRefPointOfInterest = $response.querySelector('#Page_refPointOfInterest');
        if(vars.includes('relativeHumidity'))
          inputRelativeHumidity = $response.querySelector('#Page_relativeHumidity');
        if(vars.includes('relativeHumidityForecast'))
          inputRelativeHumidityForecast = $response.querySelector('#Page_relativeHumidityForecast');
        if(vars.includes('seeAlso'))
          inputSeeAlso = $response.querySelector('#Page_seeAlso');
        if(vars.includes('snowHeight'))
          inputSnowHeight = $response.querySelector('#Page_snowHeight');
        if(vars.includes('solarRadiation'))
          inputSolarRadiation = $response.querySelector('#Page_solarRadiation');
        if(vars.includes('source'))
          inputSource = $response.querySelector('#Page_source');
        if(vars.includes('streamGauge'))
          inputStreamGauge = $response.querySelector('#Page_streamGauge');
        if(vars.includes('temperature'))
          inputTemperature = $response.querySelector('#Page_temperature');
        if(vars.includes('uVIndexMax'))
          inputUVIndexMax = $response.querySelector('#Page_uVIndexMax');
        if(vars.includes('visibility'))
          inputVisibility = $response.querySelector('#Page_visibility');
        if(vars.includes('weatherType'))
          inputWeatherType = $response.querySelector('#Page_weatherType');
        if(vars.includes('windDirection'))
          inputWindDirection = $response.querySelector('#Page_windDirection');
        if(vars.includes('windSpeed'))
          inputWindSpeed = $response.querySelector('#Page_windSpeed');
        if(vars.includes('inheritPk'))
          inputInheritPk = $response.querySelector('#Page_inheritPk');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('#Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('#Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('#Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('#Page_sessionId');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('#Page_saves');
        if(vars.includes('objectIcon'))
          inputObjectIcon = $response.querySelector('#Page_objectIcon');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('#Page_objectTitle');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('#Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('#Page_objectText');
        if(vars.includes('pageUrlPk'))
          inputPageUrlPk = $response.querySelector('#Page_pageUrlPk');
        if(vars.includes('pageUrlApi'))
          inputPageUrlApi = $response.querySelector('#Page_pageUrlApi');
        if(vars.includes('id'))
          inputId = $response.querySelector('#Page_id');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('#Page_userKey');
        if(vars.includes('pageUrlId'))
          inputPageUrlId = $response.querySelector('#Page_pageUrlId');
        if(vars.includes('areaServedColors'))
          inputAreaServedColors = $response.querySelector('#Page_areaServedColors');
        if(vars.includes('areaServedTitles'))
          inputAreaServedTitles = $response.querySelector('#Page_areaServedTitles');
        if(vars.includes('areaServedLinks'))
          inputAreaServedLinks = $response.querySelector('#Page_areaServedLinks');
          jsWebsocketWeatherObserved(pk, vars, $response);

          window.weatherObserved = JSON.parse($response.querySelector('.pageForm .weatherObserved')?.value);
          window.listWeatherObserved = JSON.parse($response.querySelector('.pageForm .listWeatherObserved')?.value);


        if(inputPk) {
          document.querySelectorAll('#Page_pk').forEach((item, index) => {
            item.setAttribute('value', inputPk.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_pk'));
        }

        if(inputObjectId) {
          document.querySelectorAll('#Page_objectId').forEach((item, index) => {
            item.setAttribute('value', inputObjectId.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_objectId'));
        }

        if(inputCreated) {
          document.querySelectorAll('#Page_created').forEach((item, index) => {
            item.setAttribute('value', inputCreated.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('#Page_modified').forEach((item, index) => {
            item.setAttribute('value', inputModified.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('#Page_archived').forEach((item, index) => {
            item.setAttribute('value', inputArchived.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_archived'));
        }

        if(inputName) {
          document.querySelectorAll('#Page_name').forEach((item, index) => {
            item.setAttribute('value', inputName.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_name'));
        }

        if(inputDescription) {
          document.querySelectorAll('#Page_description').forEach((item, index) => {
            item.setAttribute('value', inputDescription.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_description'));
        }

        if(inputAlternateName) {
          document.querySelectorAll('#Page_alternateName').forEach((item, index) => {
            item.setAttribute('value', inputAlternateName.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_alternateName'));
        }

        if(inputAddress) {
          document.querySelectorAll('#Page_address').forEach((item, index) => {
            item.setAttribute('value', inputAddress.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_address'));
        }

        if(inputEntityId) {
          document.querySelectorAll('#Page_entityId').forEach((item, index) => {
            item.setAttribute('value', inputEntityId.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_entityId'));
        }

        if(inputNgsildTenant) {
          document.querySelectorAll('#Page_ngsildTenant').forEach((item, index) => {
            item.setAttribute('value', inputNgsildTenant.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_ngsildTenant'));
        }

        if(inputNgsildPath) {
          document.querySelectorAll('#Page_ngsildPath').forEach((item, index) => {
            item.setAttribute('value', inputNgsildPath.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_ngsildPath'));
        }

        if(inputNgsildData) {
          document.querySelectorAll('#Page_ngsildData').forEach((item, index) => {
            item.setAttribute('value', inputNgsildData.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_ngsildData'));
        }

        if(inputAirQualityIndex) {
          document.querySelectorAll('#Page_airQualityIndex').forEach((item, index) => {
            item.setAttribute('value', inputAirQualityIndex.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_airQualityIndex'));
        }

        if(inputAirQualityIndexForecast) {
          document.querySelectorAll('#Page_airQualityIndexForecast').forEach((item, index) => {
            item.setAttribute('value', inputAirQualityIndexForecast.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_airQualityIndexForecast'));
        }

        if(inputAqiMajorPollutant) {
          document.querySelectorAll('#Page_aqiMajorPollutant').forEach((item, index) => {
            item.setAttribute('value', inputAqiMajorPollutant.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_aqiMajorPollutant'));
        }

        if(inputAqiMajorPollutantForecast) {
          document.querySelectorAll('#Page_aqiMajorPollutantForecast').forEach((item, index) => {
            item.setAttribute('value', inputAqiMajorPollutantForecast.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_aqiMajorPollutantForecast'));
        }

        if(inputAirTemperatureForecast) {
          document.querySelectorAll('#Page_airTemperatureForecast').forEach((item, index) => {
            item.setAttribute('value', inputAirTemperatureForecast.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_airTemperatureForecast'));
        }

        if(inputAirTemperatureTSA) {
          document.querySelectorAll('#Page_airTemperatureTSA').forEach((item, index) => {
            item.setAttribute('value', inputAirTemperatureTSA.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_airTemperatureTSA'));
        }

        if(inputAreaServed) {
          document.querySelectorAll('#Page_areaServed').forEach((item, index) => {
            item.setAttribute('value', inputAreaServed.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_areaServed'));
        }

        if(inputAtmosphericPressure) {
          document.querySelectorAll('#Page_atmosphericPressure').forEach((item, index) => {
            item.setAttribute('value', inputAtmosphericPressure.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_atmosphericPressure'));
        }

        if(inputDataProvider) {
          document.querySelectorAll('#Page_dataProvider').forEach((item, index) => {
            item.setAttribute('value', inputDataProvider.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_dataProvider'));
        }

        if(inputDateCreated) {
          document.querySelectorAll('#Page_dateCreated').forEach((item, index) => {
            item.setAttribute('value', inputDateCreated.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_dateCreated'));
        }

        if(inputDateModified) {
          document.querySelectorAll('#Page_dateModified').forEach((item, index) => {
            item.setAttribute('value', inputDateModified.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_dateModified'));
        }

        if(inputDateObserved) {
          document.querySelectorAll('#Page_dateObserved').forEach((item, index) => {
            item.setAttribute('value', inputDateObserved.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_dateObserved'));
        }

        if(inputDewPoint) {
          document.querySelectorAll('#Page_dewPoint').forEach((item, index) => {
            item.setAttribute('value', inputDewPoint.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_dewPoint'));
        }

        if(inputDiffuseIrradiation) {
          document.querySelectorAll('#Page_diffuseIrradiation').forEach((item, index) => {
            item.setAttribute('value', inputDiffuseIrradiation.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_diffuseIrradiation'));
        }

        if(inputDirectIrradiation) {
          document.querySelectorAll('#Page_directIrradiation').forEach((item, index) => {
            item.setAttribute('value', inputDirectIrradiation.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_directIrradiation'));
        }

        if(inputFeelsLikeTemperature) {
          document.querySelectorAll('#Page_feelsLikeTemperature').forEach((item, index) => {
            item.setAttribute('value', inputFeelsLikeTemperature.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_feelsLikeTemperature'));
        }

        if(inputGustSpeed) {
          document.querySelectorAll('#Page_gustSpeed').forEach((item, index) => {
            item.setAttribute('value', inputGustSpeed.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_gustSpeed'));
        }

        if(inputIlluminance) {
          document.querySelectorAll('#Page_illuminance').forEach((item, index) => {
            item.setAttribute('value', inputIlluminance.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_illuminance'));
        }

        if(inputLocation) {
          document.querySelectorAll('#Page_location').forEach((item, index) => {
            item.setAttribute('value', inputLocation.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_location'));
        }

        if(inputOwner) {
          document.querySelectorAll('#Page_owner').forEach((item, index) => {
            item.setAttribute('value', inputOwner.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_owner'));
        }

        if(inputPrecipitation) {
          document.querySelectorAll('#Page_precipitation').forEach((item, index) => {
            item.setAttribute('value', inputPrecipitation.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_precipitation'));
        }

        if(inputPrecipitationForecast) {
          document.querySelectorAll('#Page_precipitationForecast').forEach((item, index) => {
            item.setAttribute('value', inputPrecipitationForecast.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_precipitationForecast'));
        }

        if(inputPressureTendency) {
          document.querySelectorAll('#Page_pressureTendency').forEach((item, index) => {
            item.setAttribute('value', inputPressureTendency.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_pressureTendency'));
        }

        if(inputRefDevice) {
          document.querySelectorAll('#Page_refDevice').forEach((item, index) => {
            item.setAttribute('value', inputRefDevice.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_refDevice'));
        }

        if(inputRefPointOfInterest) {
          document.querySelectorAll('#Page_refPointOfInterest').forEach((item, index) => {
            item.setAttribute('value', inputRefPointOfInterest.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_refPointOfInterest'));
        }

        if(inputRelativeHumidity) {
          document.querySelectorAll('#Page_relativeHumidity').forEach((item, index) => {
            item.setAttribute('value', inputRelativeHumidity.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_relativeHumidity'));
        }

        if(inputRelativeHumidityForecast) {
          document.querySelectorAll('#Page_relativeHumidityForecast').forEach((item, index) => {
            item.setAttribute('value', inputRelativeHumidityForecast.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_relativeHumidityForecast'));
        }

        if(inputSeeAlso) {
          document.querySelectorAll('#Page_seeAlso').forEach((item, index) => {
            item.setAttribute('value', inputSeeAlso.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_seeAlso'));
        }

        if(inputSnowHeight) {
          document.querySelectorAll('#Page_snowHeight').forEach((item, index) => {
            item.setAttribute('value', inputSnowHeight.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_snowHeight'));
        }

        if(inputSolarRadiation) {
          document.querySelectorAll('#Page_solarRadiation').forEach((item, index) => {
            item.setAttribute('value', inputSolarRadiation.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_solarRadiation'));
        }

        if(inputSource) {
          document.querySelectorAll('#Page_source').forEach((item, index) => {
            item.setAttribute('value', inputSource.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_source'));
        }

        if(inputStreamGauge) {
          document.querySelectorAll('#Page_streamGauge').forEach((item, index) => {
            item.setAttribute('value', inputStreamGauge.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_streamGauge'));
        }

        if(inputTemperature) {
          document.querySelectorAll('#Page_temperature').forEach((item, index) => {
            item.setAttribute('value', inputTemperature.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_temperature'));
        }

        if(inputUVIndexMax) {
          document.querySelectorAll('#Page_uVIndexMax').forEach((item, index) => {
            item.setAttribute('value', inputUVIndexMax.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_uVIndexMax'));
        }

        if(inputVisibility) {
          document.querySelectorAll('#Page_visibility').forEach((item, index) => {
            item.setAttribute('value', inputVisibility.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_visibility'));
        }

        if(inputWeatherType) {
          document.querySelectorAll('#Page_weatherType').forEach((item, index) => {
            item.setAttribute('value', inputWeatherType.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_weatherType'));
        }

        if(inputWindDirection) {
          document.querySelectorAll('#Page_windDirection').forEach((item, index) => {
            item.setAttribute('value', inputWindDirection.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_windDirection'));
        }

        if(inputWindSpeed) {
          document.querySelectorAll('#Page_windSpeed').forEach((item, index) => {
            item.setAttribute('value', inputWindSpeed.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_windSpeed'));
        }

        if(inputInheritPk) {
          document.querySelectorAll('#Page_inheritPk').forEach((item, index) => {
            item.setAttribute('value', inputInheritPk.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_inheritPk'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('#Page_classCanonicalName').forEach((item, index) => {
            item.setAttribute('value', inputClassCanonicalName.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('#Page_classSimpleName').forEach((item, index) => {
            item.setAttribute('value', inputClassSimpleName.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('#Page_classCanonicalNames').forEach((item, index) => {
            item.setAttribute('value', inputClassCanonicalNames.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('#Page_sessionId').forEach((item, index) => {
            item.setAttribute('value', inputSessionId.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_sessionId'));
        }

        if(inputSaves) {
          document.querySelectorAll('#Page_saves').forEach((item, index) => {
            item.setAttribute('value', inputSaves.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_saves'));
        }

        if(inputObjectIcon) {
          document.querySelectorAll('#Page_objectIcon').forEach((item, index) => {
            item.setAttribute('value', inputObjectIcon.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_objectIcon'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('#Page_objectTitle').forEach((item, index) => {
            item.setAttribute('value', inputObjectTitle.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_objectTitle'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('#Page_objectSuggest').forEach((item, index) => {
            item.setAttribute('value', inputObjectSuggest.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('#Page_objectText').forEach((item, index) => {
            item.setAttribute('value', inputObjectText.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_objectText'));
        }

        if(inputPageUrlPk) {
          document.querySelectorAll('#Page_pageUrlPk').forEach((item, index) => {
            item.setAttribute('value', inputPageUrlPk.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_pageUrlPk'));
        }

        if(inputPageUrlApi) {
          document.querySelectorAll('#Page_pageUrlApi').forEach((item, index) => {
            item.setAttribute('value', inputPageUrlApi.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_pageUrlApi'));
        }

        if(inputId) {
          document.querySelectorAll('#Page_id').forEach((item, index) => {
            item.setAttribute('value', inputId.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_id'));
        }

        if(inputUserKey) {
          document.querySelectorAll('#Page_userKey').forEach((item, index) => {
            item.setAttribute('value', inputUserKey.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_userKey'));
        }

        if(inputPageUrlId) {
          document.querySelectorAll('#Page_pageUrlId').forEach((item, index) => {
            item.setAttribute('value', inputPageUrlId.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_pageUrlId'));
        }

        if(inputAreaServedColors) {
          document.querySelectorAll('#Page_areaServedColors').forEach((item, index) => {
            item.setAttribute('value', inputAreaServedColors.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_areaServedColors'));
        }

        if(inputAreaServedTitles) {
          document.querySelectorAll('#Page_areaServedTitles').forEach((item, index) => {
            item.setAttribute('value', inputAreaServedTitles.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_areaServedTitles'));
        }

        if(inputAreaServedLinks) {
          document.querySelectorAll('#Page_areaServedLinks').forEach((item, index) => {
            item.setAttribute('value', inputAreaServedLinks.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_areaServedLinks'));
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
        var pivot1VarObj = Object.values(window.varsFq).querySelector(o => o.varIndexed === pivot1VarIndexed);
        var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
        var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
        var pivot1Vals = Object.keys(pivot1Map);
        var data = [];
        var layout = {};
        if(range) {
          layout['title'] = 'weather observed devices';
          layout['xaxis'] = {
            title: rangeVarFq.displayName
          }
          if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
            var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
            var pivot2VarObj = Object.values(window.varsFq).querySelector(o => o.varIndexed === pivot2VarIndexed);
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
        }
        Plotly.react('htmBodyGraphBaseModelPage', data, layout);
      }
    }

    // Graph Location
    window.mapLayers = {};
    function onEachFeature(feature, layer) {
      let popupContent = htmTooltipWeatherObserved(feature, layer);
      layer.bindPopup(popupContent);
      window.mapLayers[feature.properties.id] = layer;
    };
    if(window.mapWeatherObserved) {
      window.geoJSONWeatherObserved.clearLayers();
      window.listWeatherObserved.forEach((weatherObserved, index) => {
        if(weatherObserved.areaServed) {
          var shapes = [];
          if(Array.isArray(weatherObserved.areaServed))
            shapes = shapes.concat(weatherObserved.areaServed);
          else
            shapes.push(weatherObserved.areaServed);
          shapes.forEach(function(shape, index) {
            var features = [{
              "type": "Feature"
              , "properties": weatherObserved
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
      window.mapWeatherObserved = L.map('htmBodyGraphLocationWeatherObservedPage', {closePopupOnClick: false});
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

      if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
        window.mapWeatherObserved.setView([window['DEFAULT_MAP_LOCATION']['lat'], window['DEFAULT_MAP_LOCATION']['lon']], window['DEFAULT_MAP_ZOOM']);
      else if(window['DEFAULT_MAP_ZOOM'])
        window.mapWeatherObserved.setView(null, window['DEFAULT_MAP_ZOOM']);
      else if(window['DEFAULT_MAP_LOCATION'])
        window.mapWeatherObserved.setView([window['DEFAULT_MAP_LOCATION']['lat'], window['DEFAULT_MAP_LOCATION']['lon']]);

      layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
      window.geoJSONWeatherObserved = L.geoJSON().addTo(window.mapWeatherObserved);
      window.listWeatherObserved.forEach((weatherObserved, index) => {
        if(weatherObserved.areaServed) {
          var shapes = [];
          if(Array.isArray(weatherObserved.areaServed))
            shapes = shapes.concat(weatherObserved.areaServed);
          else
            shapes.push(weatherObserved.areaServed);
          shapes.forEach(shape => {
            var features = [{
              "type": "Feature"
              , "properties": weatherObserved
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
        var feature = e.popup._source.feature;
        jsTooltipWeatherObserved(e, feature);
      });
    }
  }
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
