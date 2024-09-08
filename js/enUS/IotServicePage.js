
// Search //

async function searchIotService($formFilters, success, error) {
  var filters = searchIotServiceFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, textStatus, errorThrown ) {};

  searchIotServiceVals(filters, target, success, error);
}

function searchIotServiceFilters($formFilters) {
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

    var filterEntityType = $formFilters.querySelector('.valueEntityType')?.value;
    if(filterEntityType != null && filterEntityType !== '')
      filters.push({ name: 'fq', value: 'entityType:' + filterEntityType });

    var filterApiKey = $formFilters.querySelector('.valueApiKey')?.value;
    if(filterApiKey != null && filterApiKey !== '')
      filters.push({ name: 'fq', value: 'apiKey:' + filterApiKey });

    var filterUri = $formFilters.querySelector('.valueUri')?.value;
    if(filterUri != null && filterUri !== '')
      filters.push({ name: 'fq', value: 'uri:' + filterUri });

    var filterUrl = $formFilters.querySelector('.valueUrl')?.value;
    if(filterUrl != null && filterUrl !== '')
      filters.push({ name: 'fq', value: 'url:' + filterUrl });

    var filterCbHost = $formFilters.querySelector('.valueCbHost')?.value;
    if(filterCbHost != null && filterCbHost !== '')
      filters.push({ name: 'fq', value: 'cbHost:' + filterCbHost });

    var filterResource = $formFilters.querySelector('.valueResource')?.value;
    if(filterResource != null && filterResource !== '')
      filters.push({ name: 'fq', value: 'resource:' + filterResource });

    var filterPageId = $formFilters.querySelector('.valuePageId')?.value;
    if(filterPageId != null && filterPageId !== '')
      filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

    var filterAttributes = $formFilters.querySelector('.valueAttributes')?.value;
    if(filterAttributes != null && filterAttributes !== '')
      filters.push({ name: 'fq', value: 'attributes:' + filterAttributes });

    var filterService = $formFilters.querySelector('.valueService')?.value;
    if(filterService != null && filterService !== '')
      filters.push({ name: 'fq', value: 'service:' + filterService });

    var filterServicePath = $formFilters.querySelector('.valueServicePath')?.value;
    if(filterServicePath != null && filterServicePath !== '')
      filters.push({ name: 'fq', value: 'servicePath:' + filterServicePath });

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

    var filterResourceUri = $formFilters.querySelector('.valueResourceUri')?.value;
    if(filterResourceUri != null && filterResourceUri !== '')
      filters.push({ name: 'fq', value: 'resourceUri:' + filterResourceUri });

    var filterTemplateUri = $formFilters.querySelector('.valueTemplateUri')?.value;
    if(filterTemplateUri != null && filterTemplateUri !== '')
      filters.push({ name: 'fq', value: 'templateUri:' + filterTemplateUri });

    var filterTitle = $formFilters.querySelector('.valueTitle')?.value;
    if(filterTitle != null && filterTitle !== '')
      filters.push({ name: 'fq', value: 'title:' + filterTitle });
  }
  return filters;
}

function searchIotServiceVals(filters, target, success, error) {

  fetch(
    '/api/iot-service?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestIotServiceObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    $list.empty();
    data['list'].forEach((o, i) => {
      var $i = document.querySelector('<i class="fa-solid fa-tower-cell"></i>');
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
  searchIotServiceVals($formFilters, target, success, error);
}

// GET //

async function getIotService(pk) {
  fetch(
    '/api/iot-service/' + id
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

async function patchIotService($formFilters, $formValues, target, pk, success, error) {
  var filters = patchIotServiceFilters($formFilters);

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

  var valueEntityType = $formValues.querySelector('.valueEntityType')?.value;
  var removeEntityType = $formValues.querySelector('.removeEntityType')?.value === 'true';
  var setEntityType = removeEntityType ? null : $formValues.querySelector('.setEntityType')?.value;
  var addEntityType = $formValues.querySelector('.addEntityType')?.value;
  if(removeEntityType || setEntityType != null && setEntityType !== '')
    vals['setEntityType'] = setEntityType;
  if(addEntityType != null && addEntityType !== '')
    vals['addEntityType'] = addEntityType;
  var removeEntityType = $formValues.querySelector('.removeEntityType')?.value;
  if(removeEntityType != null && removeEntityType !== '')
    vals['removeEntityType'] = removeEntityType;

  var valueApiKey = $formValues.querySelector('.valueApiKey')?.value;
  var removeApiKey = $formValues.querySelector('.removeApiKey')?.value === 'true';
  var setApiKey = removeApiKey ? null : $formValues.querySelector('.setApiKey')?.value;
  var addApiKey = $formValues.querySelector('.addApiKey')?.value;
  if(removeApiKey || setApiKey != null && setApiKey !== '')
    vals['setApiKey'] = setApiKey;
  if(addApiKey != null && addApiKey !== '')
    vals['addApiKey'] = addApiKey;
  var removeApiKey = $formValues.querySelector('.removeApiKey')?.value;
  if(removeApiKey != null && removeApiKey !== '')
    vals['removeApiKey'] = removeApiKey;

  var valueUri = $formValues.querySelector('.valueUri')?.value;
  var removeUri = $formValues.querySelector('.removeUri')?.value === 'true';
  var setUri = removeUri ? null : $formValues.querySelector('.setUri')?.value;
  var addUri = $formValues.querySelector('.addUri')?.value;
  if(removeUri || setUri != null && setUri !== '')
    vals['setUri'] = setUri;
  if(addUri != null && addUri !== '')
    vals['addUri'] = addUri;
  var removeUri = $formValues.querySelector('.removeUri')?.value;
  if(removeUri != null && removeUri !== '')
    vals['removeUri'] = removeUri;

  var valueUrl = $formValues.querySelector('.valueUrl')?.value;
  var removeUrl = $formValues.querySelector('.removeUrl')?.value === 'true';
  var setUrl = removeUrl ? null : $formValues.querySelector('.setUrl')?.value;
  var addUrl = $formValues.querySelector('.addUrl')?.value;
  if(removeUrl || setUrl != null && setUrl !== '')
    vals['setUrl'] = setUrl;
  if(addUrl != null && addUrl !== '')
    vals['addUrl'] = addUrl;
  var removeUrl = $formValues.querySelector('.removeUrl')?.value;
  if(removeUrl != null && removeUrl !== '')
    vals['removeUrl'] = removeUrl;

  var valueCbHost = $formValues.querySelector('.valueCbHost')?.value;
  var removeCbHost = $formValues.querySelector('.removeCbHost')?.value === 'true';
  var setCbHost = removeCbHost ? null : $formValues.querySelector('.setCbHost')?.value;
  var addCbHost = $formValues.querySelector('.addCbHost')?.value;
  if(removeCbHost || setCbHost != null && setCbHost !== '')
    vals['setCbHost'] = setCbHost;
  if(addCbHost != null && addCbHost !== '')
    vals['addCbHost'] = addCbHost;
  var removeCbHost = $formValues.querySelector('.removeCbHost')?.value;
  if(removeCbHost != null && removeCbHost !== '')
    vals['removeCbHost'] = removeCbHost;

  var valueResource = $formValues.querySelector('.valueResource')?.value;
  var removeResource = $formValues.querySelector('.removeResource')?.value === 'true';
  var setResource = removeResource ? null : $formValues.querySelector('.setResource')?.value;
  var addResource = $formValues.querySelector('.addResource')?.value;
  if(removeResource || setResource != null && setResource !== '')
    vals['setResource'] = setResource;
  if(addResource != null && addResource !== '')
    vals['addResource'] = addResource;
  var removeResource = $formValues.querySelector('.removeResource')?.value;
  if(removeResource != null && removeResource !== '')
    vals['removeResource'] = removeResource;

  var valuePageId = $formValues.querySelector('.valuePageId')?.value;
  var removePageId = $formValues.querySelector('.removePageId')?.value === 'true';
  var setPageId = removePageId ? null : $formValues.querySelector('.setPageId')?.value;
  var addPageId = $formValues.querySelector('.addPageId')?.value;
  if(removePageId || setPageId != null && setPageId !== '')
    vals['setPageId'] = setPageId;
  if(addPageId != null && addPageId !== '')
    vals['addPageId'] = addPageId;
  var removePageId = $formValues.querySelector('.removePageId')?.value;
  if(removePageId != null && removePageId !== '')
    vals['removePageId'] = removePageId;

  var valueAttributes = $formValues.querySelector('.valueAttributes')?.value;
  var removeAttributes = $formValues.querySelector('.removeAttributes')?.value === 'true';
  var setAttributes = removeAttributes ? null : $formValues.querySelector('.setAttributes')?.value;
  var addAttributes = $formValues.querySelector('.addAttributes')?.value;
  if(removeAttributes || setAttributes != null && setAttributes !== '')
    vals['setAttributes'] = JSON.parse(setAttributes);
  if(addAttributes != null && addAttributes !== '')
    vals['addAttributes'] = addAttributes;
  var removeAttributes = $formValues.querySelector('.removeAttributes')?.value;
  if(removeAttributes != null && removeAttributes !== '')
    vals['removeAttributes'] = removeAttributes;

  var valueService = $formValues.querySelector('.valueService')?.value;
  var removeService = $formValues.querySelector('.removeService')?.value === 'true';
  var setService = removeService ? null : $formValues.querySelector('.setService')?.value;
  var addService = $formValues.querySelector('.addService')?.value;
  if(removeService || setService != null && setService !== '')
    vals['setService'] = setService;
  if(addService != null && addService !== '')
    vals['addService'] = addService;
  var removeService = $formValues.querySelector('.removeService')?.value;
  if(removeService != null && removeService !== '')
    vals['removeService'] = removeService;

  var valueServicePath = $formValues.querySelector('.valueServicePath')?.value;
  var removeServicePath = $formValues.querySelector('.removeServicePath')?.value === 'true';
  var setServicePath = removeServicePath ? null : $formValues.querySelector('.setServicePath')?.value;
  var addServicePath = $formValues.querySelector('.addServicePath')?.value;
  if(removeServicePath || setServicePath != null && setServicePath !== '')
    vals['setServicePath'] = setServicePath;
  if(addServicePath != null && addServicePath !== '')
    vals['addServicePath'] = addServicePath;
  var removeServicePath = $formValues.querySelector('.removeServicePath')?.value;
  if(removeServicePath != null && removeServicePath !== '')
    vals['removeServicePath'] = removeServicePath;

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

  var valueResourceUri = $formValues.querySelector('.valueResourceUri')?.value;
  var removeResourceUri = $formValues.querySelector('.removeResourceUri')?.value === 'true';
  var setResourceUri = removeResourceUri ? null : $formValues.querySelector('.setResourceUri')?.value;
  var addResourceUri = $formValues.querySelector('.addResourceUri')?.value;
  if(removeResourceUri || setResourceUri != null && setResourceUri !== '')
    vals['setResourceUri'] = setResourceUri;
  if(addResourceUri != null && addResourceUri !== '')
    vals['addResourceUri'] = addResourceUri;
  var removeResourceUri = $formValues.querySelector('.removeResourceUri')?.value;
  if(removeResourceUri != null && removeResourceUri !== '')
    vals['removeResourceUri'] = removeResourceUri;

  var valueTemplateUri = $formValues.querySelector('.valueTemplateUri')?.value;
  var removeTemplateUri = $formValues.querySelector('.removeTemplateUri')?.value === 'true';
  var setTemplateUri = removeTemplateUri ? null : $formValues.querySelector('.setTemplateUri')?.value;
  var addTemplateUri = $formValues.querySelector('.addTemplateUri')?.value;
  if(removeTemplateUri || setTemplateUri != null && setTemplateUri !== '')
    vals['setTemplateUri'] = setTemplateUri;
  if(addTemplateUri != null && addTemplateUri !== '')
    vals['addTemplateUri'] = addTemplateUri;
  var removeTemplateUri = $formValues.querySelector('.removeTemplateUri')?.value;
  if(removeTemplateUri != null && removeTemplateUri !== '')
    vals['removeTemplateUri'] = removeTemplateUri;

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

  patchIotServiceVals(pk == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, target, success, error);
}

function patchIotServiceFilters($formFilters) {
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

    var filterEntityType = $formFilters.querySelector('.valueEntityType')?.value;
    if(filterEntityType != null && filterEntityType !== '')
      filters.push({ name: 'fq', value: 'entityType:' + filterEntityType });

    var filterApiKey = $formFilters.querySelector('.valueApiKey')?.value;
    if(filterApiKey != null && filterApiKey !== '')
      filters.push({ name: 'fq', value: 'apiKey:' + filterApiKey });

    var filterUri = $formFilters.querySelector('.valueUri')?.value;
    if(filterUri != null && filterUri !== '')
      filters.push({ name: 'fq', value: 'uri:' + filterUri });

    var filterUrl = $formFilters.querySelector('.valueUrl')?.value;
    if(filterUrl != null && filterUrl !== '')
      filters.push({ name: 'fq', value: 'url:' + filterUrl });

    var filterCbHost = $formFilters.querySelector('.valueCbHost')?.value;
    if(filterCbHost != null && filterCbHost !== '')
      filters.push({ name: 'fq', value: 'cbHost:' + filterCbHost });

    var filterResource = $formFilters.querySelector('.valueResource')?.value;
    if(filterResource != null && filterResource !== '')
      filters.push({ name: 'fq', value: 'resource:' + filterResource });

    var filterPageId = $formFilters.querySelector('.valuePageId')?.value;
    if(filterPageId != null && filterPageId !== '')
      filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

    var filterAttributes = $formFilters.querySelector('.valueAttributes')?.value;
    if(filterAttributes != null && filterAttributes !== '')
      filters.push({ name: 'fq', value: 'attributes:' + filterAttributes });

    var filterService = $formFilters.querySelector('.valueService')?.value;
    if(filterService != null && filterService !== '')
      filters.push({ name: 'fq', value: 'service:' + filterService });

    var filterServicePath = $formFilters.querySelector('.valueServicePath')?.value;
    if(filterServicePath != null && filterServicePath !== '')
      filters.push({ name: 'fq', value: 'servicePath:' + filterServicePath });

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

    var filterResourceUri = $formFilters.querySelector('.valueResourceUri')?.value;
    if(filterResourceUri != null && filterResourceUri !== '')
      filters.push({ name: 'fq', value: 'resourceUri:' + filterResourceUri });

    var filterTemplateUri = $formFilters.querySelector('.valueTemplateUri')?.value;
    if(filterTemplateUri != null && filterTemplateUri !== '')
      filters.push({ name: 'fq', value: 'templateUri:' + filterTemplateUri });

    var filterTitle = $formFilters.querySelector('.valueTitle')?.value;
    if(filterTitle != null && filterTitle !== '')
      filters.push({ name: 'fq', value: 'title:' + filterTitle });
  }
  return filters;
}

function patchIotServiceVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchIotServiceVals(filters, vals, target, success, error);
}

function patchIotServiceVals(filters, vals, target, success, error) {
  fetch(
    '/api/iot-service?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postIotService($formValues, target, success, error) {
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

  var valueEntityType = $formValues.querySelector('.valueEntityType')?.value;
  if(valueEntityType != null && valueEntityType !== '')
    vals['entityType'] = valueEntityType;

  var valueApiKey = $formValues.querySelector('.valueApiKey')?.value;
  if(valueApiKey != null && valueApiKey !== '')
    vals['apiKey'] = valueApiKey;

  var valueUri = $formValues.querySelector('.valueUri')?.value;
  if(valueUri != null && valueUri !== '')
    vals['uri'] = valueUri;

  var valueUrl = $formValues.querySelector('.valueUrl')?.value;
  if(valueUrl != null && valueUrl !== '')
    vals['url'] = valueUrl;

  var valueCbHost = $formValues.querySelector('.valueCbHost')?.value;
  if(valueCbHost != null && valueCbHost !== '')
    vals['cbHost'] = valueCbHost;

  var valueResource = $formValues.querySelector('.valueResource')?.value;
  if(valueResource != null && valueResource !== '')
    vals['resource'] = valueResource;

  var valuePageId = $formValues.querySelector('.valuePageId')?.value;
  if(valuePageId != null && valuePageId !== '')
    vals['pageId'] = valuePageId;

  var valueAttributes = $formValues.querySelector('.valueAttributes')?.value;
  if(valueAttributes != null && valueAttributes !== '')
    vals['attributes'] = JSON.parse(valueAttributes);

  var valueService = $formValues.querySelector('.valueService')?.value;
  if(valueService != null && valueService !== '')
    vals['service'] = valueService;

  var valueServicePath = $formValues.querySelector('.valueServicePath')?.value;
  if(valueServicePath != null && valueServicePath !== '')
    vals['servicePath'] = valueServicePath;

  var valueInheritPk = $formValues.querySelector('.valueInheritPk')?.value;
  if(valueInheritPk != null && valueInheritPk !== '')
    vals['inheritPk'] = valueInheritPk;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  if(valueSessionId != null && valueSessionId !== '')
    vals['sessionId'] = valueSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  if(valueUserKey != null && valueUserKey !== '')
    vals['userKey'] = valueUserKey;

  var valueResourceUri = $formValues.querySelector('.valueResourceUri')?.value;
  if(valueResourceUri != null && valueResourceUri !== '')
    vals['resourceUri'] = valueResourceUri;

  var valueTemplateUri = $formValues.querySelector('.valueTemplateUri')?.value;
  if(valueTemplateUri != null && valueTemplateUri !== '')
    vals['templateUri'] = valueTemplateUri;

  var valueTitle = $formValues.querySelector('.valueTitle')?.value;
  if(valueTitle != null && valueTitle !== '')
    vals['title'] = valueTitle;

  fetch(
    '/api/iot-service'
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

function postIotServiceVals(vals, target, success, error) {
  fetch(
    '/api/iot-service'
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

async function deleteIotService(filters, target, pk, success, error) {
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
    '/api/iot-service?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function putimportIotService($formValues, target, pk, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportIotServiceVals(JSON.parse(json), target, success, error);
}

function putimportIotServiceVals(json, target, success, error) {
  fetch(
    '/api/iot-service-import'
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

async function websocketIotService(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketIotService', function (error, message) {
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
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + id);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-solid fa-tower-cell"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify IoT services in ' + json.timeRemaining;
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
      $progress.setAttribute('class', 'w3- ');
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
async function websocketIotServiceInner(apiRequest) {
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
        var inputEntityType = null;
        var inputApiKey = null;
        var inputUri = null;
        var inputUrl = null;
        var inputCbHost = null;
        var inputResource = null;
        var inputPageId = null;
        var inputAttributes = null;
        var inputService = null;
        var inputServicePath = null;
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
        var inputResourceUri = null;
        var inputTemplateUri = null;
        var inputTitle = null;

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
        if(vars.includes('entityType'))
          inputEntityType = $response.querySelector('#Page_entityType');
        if(vars.includes('apiKey'))
          inputApiKey = $response.querySelector('#Page_apiKey');
        if(vars.includes('uri'))
          inputUri = $response.querySelector('#Page_uri');
        if(vars.includes('url'))
          inputUrl = $response.querySelector('#Page_url');
        if(vars.includes('cbHost'))
          inputCbHost = $response.querySelector('#Page_cbHost');
        if(vars.includes('resource'))
          inputResource = $response.querySelector('#Page_resource');
        if(vars.includes('pageId'))
          inputPageId = $response.querySelector('#Page_pageId');
        if(vars.includes('attributes'))
          inputAttributes = $response.querySelector('#Page_attributes');
        if(vars.includes('service'))
          inputService = $response.querySelector('#Page_service');
        if(vars.includes('servicePath'))
          inputServicePath = $response.querySelector('#Page_servicePath');
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
        if(vars.includes('resourceUri'))
          inputResourceUri = $response.querySelector('#Page_resourceUri');
        if(vars.includes('templateUri'))
          inputTemplateUri = $response.querySelector('#Page_templateUri');
        if(vars.includes('title'))
          inputTitle = $response.querySelector('#Page_title');
          jsWebsocketIotService(pk, vars, $response);

          window.iotService = JSON.parse($response.querySelector('.pageForm .iotService')?.value);
          window.listIotService = JSON.parse($response.querySelector('.pageForm .listIotService')?.value);


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

        if(inputEntityType) {
          document.querySelectorAll('#Page_entityType').forEach((item, index) => {
            item.setAttribute('value', inputEntityType.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_entityType'));
        }

        if(inputApiKey) {
          document.querySelectorAll('#Page_apiKey').forEach((item, index) => {
            item.setAttribute('value', inputApiKey.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_apiKey'));
        }

        if(inputUri) {
          document.querySelectorAll('#Page_uri').forEach((item, index) => {
            item.setAttribute('value', inputUri.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_uri'));
        }

        if(inputUrl) {
          document.querySelectorAll('#Page_url').forEach((item, index) => {
            item.setAttribute('value', inputUrl.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_url'));
        }

        if(inputCbHost) {
          document.querySelectorAll('#Page_cbHost').forEach((item, index) => {
            item.setAttribute('value', inputCbHost.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_cbHost'));
        }

        if(inputResource) {
          document.querySelectorAll('#Page_resource').forEach((item, index) => {
            item.setAttribute('value', inputResource.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_resource'));
        }

        if(inputPageId) {
          document.querySelectorAll('#Page_pageId').forEach((item, index) => {
            item.setAttribute('value', inputPageId.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_pageId'));
        }

        if(inputAttributes) {
          document.querySelectorAll('#Page_attributes').forEach((item, index) => {
            item.setAttribute('value', inputAttributes.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_attributes'));
        }

        if(inputService) {
          document.querySelectorAll('#Page_service').forEach((item, index) => {
            item.setAttribute('value', inputService.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_service'));
        }

        if(inputServicePath) {
          document.querySelectorAll('#Page_servicePath').forEach((item, index) => {
            item.setAttribute('value', inputServicePath.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_servicePath'));
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

        if(inputResourceUri) {
          document.querySelectorAll('#Page_resourceUri').forEach((item, index) => {
            item.setAttribute('value', inputResourceUri.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_resourceUri'));
        }

        if(inputTemplateUri) {
          document.querySelectorAll('#Page_templateUri').forEach((item, index) => {
            item.setAttribute('value', inputTemplateUri.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_templateUri'));
        }

        if(inputTitle) {
          document.querySelectorAll('#Page_title').forEach((item, index) => {
            item.setAttribute('value', inputTitle.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_title'));
        }

          pageGraphIotService();
      });
    });
  }
}

function pageGraphIotService(apiRequest) {
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
          layout['title'] = 'IoT services';
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
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqIotService_time').innerText = '';
  searchPage('IotService', function() {
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
      document.querySelector('#fqIotService_time').value = x;
      document.querySelector('#fqIotService_time').onchange();
      searchPage('IotService');
    }, speedRate);
  });
}
