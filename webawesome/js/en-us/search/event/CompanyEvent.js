
// Search //

async function searchCompanyEvent($formFilters, success, error) {
  var filters = searchCompanyEventFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, textStatus, errorThrown ) {};

  searchCompanyEventVals(filters, target, success, error);
}

function searchCompanyEventFilters($formFilters) {
  var filters = [];
  if($formFilters) {

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

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterStartDateTime = $formFilters.querySelector('.valueStartDateTime')?.value;
    if(filterStartDateTime != null && filterStartDateTime !== '')
      filters.push({ name: 'fq', value: 'startDateTime:' + filterStartDateTime });

    var filterEndDateTime = $formFilters.querySelector('.valueEndDateTime')?.value;
    if(filterEndDateTime != null && filterEndDateTime !== '')
      filters.push({ name: 'fq', value: 'endDateTime:' + filterEndDateTime });

    var filterPrice = $formFilters.querySelector('.valuePrice')?.value;
    if(filterPrice != null && filterPrice !== '')
      filters.push({ name: 'fq', value: 'price:' + filterPrice });

    var filterPageId = $formFilters.querySelector('.valuePageId')?.value;
    if(filterPageId != null && filterPageId !== '')
      filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterTitle = $formFilters.querySelector('.valueTitle')?.value;
    if(filterTitle != null && filterTitle !== '')
      filters.push({ name: 'fq', value: 'title:' + filterTitle });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterEmailTemplate = $formFilters.querySelector('.valueEmailTemplate')?.value;
    if(filterEmailTemplate != null && filterEmailTemplate !== '')
      filters.push({ name: 'fq', value: 'emailTemplate:' + filterEmailTemplate });

    var filterStoreUrl = $formFilters.querySelector('.valueStoreUrl')?.value;
    if(filterStoreUrl != null && filterStoreUrl !== '')
      filters.push({ name: 'fq', value: 'storeUrl:' + filterStoreUrl });

    var filterLocationColors = $formFilters.querySelector('.valueLocationColors')?.value;
    if(filterLocationColors != null && filterLocationColors !== '')
      filters.push({ name: 'fq', value: 'locationColors:' + filterLocationColors });

    var filterLocationTitles = $formFilters.querySelector('.valueLocationTitles')?.value;
    if(filterLocationTitles != null && filterLocationTitles !== '')
      filters.push({ name: 'fq', value: 'locationTitles:' + filterLocationTitles });

    var filterLocationLinks = $formFilters.querySelector('.valueLocationLinks')?.value;
    if(filterLocationLinks != null && filterLocationLinks !== '')
      filters.push({ name: 'fq', value: 'locationLinks:' + filterLocationLinks });
  }
  return filters;
}

function searchCompanyEventVals(filters, target, success, error) {

  fetch(
    '/en-us/api/event?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestCompanyEventObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    $list.empty();
    data['list'].forEach((o, i) => {
      var $i = document.querySelector('<i class="fa-duotone fa-regular fa-map-location-dot"></i>');
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
  searchCompanyEventVals($formFilters, target, success, error);
}

// GET //

async function getCompanyEvent() {
  fetch(
    '/en-us/api/event/' + pageId
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

async function patchCompanyEvent($formFilters, $formValues, target, pageId, success, error) {
  var filters = patchCompanyEventFilters($formFilters);

  var vals = {};

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

  var valueStartDateTime = $formValues.querySelector('.valueStartDateTime')?.value;
  var removeStartDateTime = $formValues.querySelector('.removeStartDateTime')?.value === 'true';
  var setStartDateTime = removeStartDateTime ? null : $formValues.querySelector('.setStartDateTime')?.value;
  var addStartDateTime = $formValues.querySelector('.addStartDateTime')?.value;
  if(removeStartDateTime || setStartDateTime != null && setStartDateTime !== '')
    vals['setStartDateTime'] = setStartDateTime;
  if(addStartDateTime != null && addStartDateTime !== '')
    vals['addStartDateTime'] = addStartDateTime;
  var removeStartDateTime = $formValues.querySelector('.removeStartDateTime')?.value;
  if(removeStartDateTime != null && removeStartDateTime !== '')
    vals['removeStartDateTime'] = removeStartDateTime;

  var valueEndDateTime = $formValues.querySelector('.valueEndDateTime')?.value;
  var removeEndDateTime = $formValues.querySelector('.removeEndDateTime')?.value === 'true';
  var setEndDateTime = removeEndDateTime ? null : $formValues.querySelector('.setEndDateTime')?.value;
  var addEndDateTime = $formValues.querySelector('.addEndDateTime')?.value;
  if(removeEndDateTime || setEndDateTime != null && setEndDateTime !== '')
    vals['setEndDateTime'] = setEndDateTime;
  if(addEndDateTime != null && addEndDateTime !== '')
    vals['addEndDateTime'] = addEndDateTime;
  var removeEndDateTime = $formValues.querySelector('.removeEndDateTime')?.value;
  if(removeEndDateTime != null && removeEndDateTime !== '')
    vals['removeEndDateTime'] = removeEndDateTime;

  var valuePrice = $formValues.querySelector('.valuePrice')?.value;
  var removePrice = $formValues.querySelector('.removePrice')?.value === 'true';
  var setPrice = removePrice ? null : $formValues.querySelector('.setPrice')?.value;
  var addPrice = $formValues.querySelector('.addPrice')?.value;
  if(removePrice || setPrice != null && setPrice !== '')
    vals['setPrice'] = setPrice;
  if(addPrice != null && addPrice !== '')
    vals['addPrice'] = addPrice;
  var removePrice = $formValues.querySelector('.removePrice')?.value;
  if(removePrice != null && removePrice !== '')
    vals['removePrice'] = removePrice;

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

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  var removeDownload = $formValues.querySelector('.removeDownload')?.value === 'true';
  var setDownload = removeDownload ? null : $formValues.querySelector('.setDownload')?.value;
  var addDownload = $formValues.querySelector('.addDownload')?.value;
  if(removeDownload || setDownload != null && setDownload !== '')
    vals['setDownload'] = setDownload;
  if(addDownload != null && addDownload !== '')
    vals['addDownload'] = addDownload;
  var removeDownload = $formValues.querySelector('.removeDownload')?.value;
  if(removeDownload != null && removeDownload !== '')
    vals['removeDownload'] = removeDownload;

  var valueSolrId = $formValues.querySelector('.valueSolrId')?.value;
  var removeSolrId = $formValues.querySelector('.removeSolrId')?.value === 'true';
  var setSolrId = removeSolrId ? null : $formValues.querySelector('.setSolrId')?.value;
  var addSolrId = $formValues.querySelector('.addSolrId')?.value;
  if(removeSolrId || setSolrId != null && setSolrId !== '')
    vals['setSolrId'] = setSolrId;
  if(addSolrId != null && addSolrId !== '')
    vals['addSolrId'] = addSolrId;
  var removeSolrId = $formValues.querySelector('.removeSolrId')?.value;
  if(removeSolrId != null && removeSolrId !== '')
    vals['removeSolrId'] = removeSolrId;

  var valueEmailTemplate = $formValues.querySelector('.valueEmailTemplate')?.value;
  var removeEmailTemplate = $formValues.querySelector('.removeEmailTemplate')?.value === 'true';
  var setEmailTemplate = removeEmailTemplate ? null : $formValues.querySelector('.setEmailTemplate')?.value;
  var addEmailTemplate = $formValues.querySelector('.addEmailTemplate')?.value;
  if(removeEmailTemplate || setEmailTemplate != null && setEmailTemplate !== '')
    vals['setEmailTemplate'] = setEmailTemplate;
  if(addEmailTemplate != null && addEmailTemplate !== '')
    vals['addEmailTemplate'] = addEmailTemplate;
  var removeEmailTemplate = $formValues.querySelector('.removeEmailTemplate')?.value;
  if(removeEmailTemplate != null && removeEmailTemplate !== '')
    vals['removeEmailTemplate'] = removeEmailTemplate;

  var valueStoreUrl = $formValues.querySelector('.valueStoreUrl')?.value;
  var removeStoreUrl = $formValues.querySelector('.removeStoreUrl')?.value === 'true';
  var setStoreUrl = removeStoreUrl ? null : $formValues.querySelector('.setStoreUrl')?.value;
  var addStoreUrl = $formValues.querySelector('.addStoreUrl')?.value;
  if(removeStoreUrl || setStoreUrl != null && setStoreUrl !== '')
    vals['setStoreUrl'] = setStoreUrl;
  if(addStoreUrl != null && addStoreUrl !== '')
    vals['addStoreUrl'] = addStoreUrl;
  var removeStoreUrl = $formValues.querySelector('.removeStoreUrl')?.value;
  if(removeStoreUrl != null && removeStoreUrl !== '')
    vals['removeStoreUrl'] = removeStoreUrl;

  patchCompanyEventVals(pageId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pageId:' + pageId}], vals, target, success, error);
}

function patchCompanyEventFilters($formFilters) {
  var filters = [];
  if($formFilters) {
    filters.push({ name: 'softCommit', value: 'true' });

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

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterStartDateTime = $formFilters.querySelector('.valueStartDateTime')?.value;
    if(filterStartDateTime != null && filterStartDateTime !== '')
      filters.push({ name: 'fq', value: 'startDateTime:' + filterStartDateTime });

    var filterEndDateTime = $formFilters.querySelector('.valueEndDateTime')?.value;
    if(filterEndDateTime != null && filterEndDateTime !== '')
      filters.push({ name: 'fq', value: 'endDateTime:' + filterEndDateTime });

    var filterPrice = $formFilters.querySelector('.valuePrice')?.value;
    if(filterPrice != null && filterPrice !== '')
      filters.push({ name: 'fq', value: 'price:' + filterPrice });

    var filterPageId = $formFilters.querySelector('.valuePageId')?.value;
    if(filterPageId != null && filterPageId !== '')
      filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterTitle = $formFilters.querySelector('.valueTitle')?.value;
    if(filterTitle != null && filterTitle !== '')
      filters.push({ name: 'fq', value: 'title:' + filterTitle });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterEmailTemplate = $formFilters.querySelector('.valueEmailTemplate')?.value;
    if(filterEmailTemplate != null && filterEmailTemplate !== '')
      filters.push({ name: 'fq', value: 'emailTemplate:' + filterEmailTemplate });

    var filterStoreUrl = $formFilters.querySelector('.valueStoreUrl')?.value;
    if(filterStoreUrl != null && filterStoreUrl !== '')
      filters.push({ name: 'fq', value: 'storeUrl:' + filterStoreUrl });

    var filterLocationColors = $formFilters.querySelector('.valueLocationColors')?.value;
    if(filterLocationColors != null && filterLocationColors !== '')
      filters.push({ name: 'fq', value: 'locationColors:' + filterLocationColors });

    var filterLocationTitles = $formFilters.querySelector('.valueLocationTitles')?.value;
    if(filterLocationTitles != null && filterLocationTitles !== '')
      filters.push({ name: 'fq', value: 'locationTitles:' + filterLocationTitles });

    var filterLocationLinks = $formFilters.querySelector('.valueLocationLinks')?.value;
    if(filterLocationLinks != null && filterLocationLinks !== '')
      filters.push({ name: 'fq', value: 'locationLinks:' + filterLocationLinks });
  }
  return filters;
}

function patchCompanyEventVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchCompanyEventVals(filters, vals, target, success, error);
}

function patchCompanyEventVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/event?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postCompanyEvent($formValues, target, success, error) {
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

  var valueLocation = $formValues.querySelector('.valueLocation')?.value;
  if(valueLocation != null && valueLocation !== '')
    vals['location'] = JSON.parse(valueLocation);

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valueStartDateTime = $formValues.querySelector('.valueStartDateTime')?.value;
  if(valueStartDateTime != null && valueStartDateTime !== '')
    vals['startDateTime'] = valueStartDateTime;

  var valueEndDateTime = $formValues.querySelector('.valueEndDateTime')?.value;
  if(valueEndDateTime != null && valueEndDateTime !== '')
    vals['endDateTime'] = valueEndDateTime;

  var valuePrice = $formValues.querySelector('.valuePrice')?.value;
  if(valuePrice != null && valuePrice !== '')
    vals['price'] = valuePrice;

  var valuePageId = $formValues.querySelector('.valuePageId')?.value;
  if(valuePageId != null && valuePageId !== '')
    vals['pageId'] = valuePageId;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  if(valueDisplayPage != null && valueDisplayPage !== '')
    vals['displayPage'] = valueDisplayPage;

  var valueTitle = $formValues.querySelector('.valueTitle')?.value;
  if(valueTitle != null && valueTitle !== '')
    vals['title'] = valueTitle;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  if(valueEditPage != null && valueEditPage !== '')
    vals['editPage'] = valueEditPage;

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  if(valueDownload != null && valueDownload !== '')
    vals['download'] = valueDownload;

  var valueSolrId = $formValues.querySelector('.valueSolrId')?.value;
  if(valueSolrId != null && valueSolrId !== '')
    vals['solrId'] = valueSolrId;

  var valueEmailTemplate = $formValues.querySelector('.valueEmailTemplate')?.value;
  if(valueEmailTemplate != null && valueEmailTemplate !== '')
    vals['emailTemplate'] = valueEmailTemplate;

  var valueStoreUrl = $formValues.querySelector('.valueStoreUrl')?.value;
  if(valueStoreUrl != null && valueStoreUrl !== '')
    vals['storeUrl'] = valueStoreUrl;

  fetch(
    '/en-us/api/event'
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

function postCompanyEventVals(vals, target, success, error) {
  fetch(
    '/en-us/api/event'
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

async function deleteCompanyEvent(target, pageId, success, error) {
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
    '/en-us/api/event/' + encodeURIComponent(pageId)
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

async function putimportCompanyEvent($formValues, target, pageId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportCompanyEventVals(JSON.parse(json), target, success, error);
}

function putimportCompanyEventVals(json, target, success, error) {
  fetch(
    '/en-us/api/event-import'
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

async function deletefilterCompanyEvent(target, success, error) {
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
    '/en-us/api/event'
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

async function websocketCompanyEvent(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketCompanyEvent', function (error, message) {
      var json = JSON.parse(message['body']);
      var pageId = json['id'];
      var nulls = json['nulls'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + pageId + ' ');
      $box.setAttribute('id', 'box-' + pageId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + pageId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + pageId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + pageId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-map-location-dot"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify events in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + pageId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + pageId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + pageId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + pageId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + pageId);
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
        var $old_box = document.querySelector('.box-' + pageId);
      } else {
        document.querySelector('.box-' + pageId)?.remove();
      }
      if(pageId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketCompanyEventInner(apiRequest) {
  var pageId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(pageId != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputName = null;
        var inputLocation = null;
        var inputDescription = null;
        var inputStartDateTime = null;
        var inputEndDateTime = null;
        var inputPrice = null;
        var inputPageId = null;
        var inputDisplayPage = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSaves = null;
        var inputTitle = null;
        var inputEditPage = null;
        var inputUserPage = null;
        var inputDownload = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputSolrId = null;
        var inputEmailTemplate = null;
        var inputStoreUrl = null;
        var inputLocationColors = null;
        var inputLocationTitles = null;
        var inputLocationLinks = null;

        if(vars.includes('created'))
          inputCreated = $response.querySelector('.Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.Page_archived');
        if(vars.includes('name'))
          inputName = $response.querySelector('.Page_name');
        if(vars.includes('location'))
          inputLocation = $response.querySelector('.Page_location');
        if(vars.includes('description'))
          inputDescription = $response.querySelector('.Page_description');
        if(vars.includes('startDateTime'))
          inputStartDateTime = $response.querySelector('.Page_startDateTime');
        if(vars.includes('endDateTime'))
          inputEndDateTime = $response.querySelector('.Page_endDateTime');
        if(vars.includes('price'))
          inputPrice = $response.querySelector('.Page_price');
        if(vars.includes('pageId'))
          inputPageId = $response.querySelector('.Page_pageId');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.Page_displayPage');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.Page_classCanonicalNames');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.Page_saves');
        if(vars.includes('title'))
          inputTitle = $response.querySelector('.Page_title');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.Page_solrId');
        if(vars.includes('emailTemplate'))
          inputEmailTemplate = $response.querySelector('.Page_emailTemplate');
        if(vars.includes('storeUrl'))
          inputStoreUrl = $response.querySelector('.Page_storeUrl');
        if(vars.includes('locationColors'))
          inputLocationColors = $response.querySelector('.Page_locationColors');
        if(vars.includes('locationTitles'))
          inputLocationTitles = $response.querySelector('.Page_locationTitles');
        if(vars.includes('locationLinks'))
          inputLocationLinks = $response.querySelector('.Page_locationLinks');

        jsWebsocketCompanyEvent(pageId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listCompanyEvent = JSON.parse($response.querySelector('.pageForm .listCompanyEvent')?.value);


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

        if(inputLocation) {
          document.querySelectorAll('.Page_location').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocation.getAttribute('value');
            else
              item.textContent = inputLocation.textContent;
          });
          addGlow(document.querySelector('.Page_location'));
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

        if(inputStartDateTime) {
          document.querySelectorAll('.Page_startDateTime').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputStartDateTime.getAttribute('value');
            else
              item.textContent = inputStartDateTime.textContent;
          });
          addGlow(document.querySelector('.Page_startDateTime'));
        }

        if(inputEndDateTime) {
          document.querySelectorAll('.Page_endDateTime').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEndDateTime.getAttribute('value');
            else
              item.textContent = inputEndDateTime.textContent;
          });
          addGlow(document.querySelector('.Page_endDateTime'));
        }

        if(inputPrice) {
          document.querySelectorAll('.Page_price').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPrice.getAttribute('value');
            else
              item.textContent = inputPrice.textContent;
          });
          addGlow(document.querySelector('.Page_price'));
        }

        if(inputPageId) {
          document.querySelectorAll('.Page_pageId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPageId.getAttribute('value');
            else
              item.textContent = inputPageId.textContent;
          });
          addGlow(document.querySelector('.Page_pageId'));
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

        if(inputDownload) {
          document.querySelectorAll('.Page_download').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.Page_download'));
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

        if(inputEmailTemplate) {
          document.querySelectorAll('.Page_emailTemplate').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEmailTemplate.getAttribute('value');
            else
              item.textContent = inputEmailTemplate.textContent;
          });
          addGlow(document.querySelector('.Page_emailTemplate'));
        }

        if(inputStoreUrl) {
          document.querySelectorAll('.Page_storeUrl').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputStoreUrl.getAttribute('value');
            else
              item.textContent = inputStoreUrl.textContent;
          });
          addGlow(document.querySelector('.Page_storeUrl'));
        }

        if(inputLocationColors) {
          document.querySelectorAll('.Page_locationColors').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocationColors.getAttribute('value');
            else
              item.textContent = inputLocationColors.textContent;
          });
          addGlow(document.querySelector('.Page_locationColors'));
        }

        if(inputLocationTitles) {
          document.querySelectorAll('.Page_locationTitles').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocationTitles.getAttribute('value');
            else
              item.textContent = inputLocationTitles.textContent;
          });
          addGlow(document.querySelector('.Page_locationTitles'));
        }

        if(inputLocationLinks) {
          document.querySelectorAll('.Page_locationLinks').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocationLinks.getAttribute('value');
            else
              item.textContent = inputLocationLinks.textContent;
          });
          addGlow(document.querySelector('.Page_locationLinks'));
        }

          pageGraphCompanyEvent();
      });
    });
  }
}

function pageGraphCompanyEvent(apiRequest) {
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
          layout['title'] = 'events';
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
          Plotly.react('htmBodyGraphCompanyEventPage', data, layout);
        }
      }
    }

    // Graph Location
    window.mapLayers = {};
    window.bounds = null;
    if(listCompanyEvent.filter(o => o.location)) {
      window.bounds = L.latLngBounds(listCompanyEvent.filter(o => o.location).map((c) => {
        return [c.location.coordinates[1], c.location.coordinates[0]];
      }));
    }
    function onEachFeature(feature, layer) {
      let popupContent = htmTooltipCompanyEvent(feature, layer);
      layer.bindPopup(popupContent);
      window.mapLayers[feature.properties.id] = layer;
    };
    if(window.mapCompanyEvent) {
      window.geoJSONCompanyEvent.clearLayers();
      window.listCompanyEvent.forEach((result, index) => {
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
              , style: jsStyleCompanyEvent
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleCompanyEvent(feature));
              }
            });
            window.geoJSONCompanyEvent.addLayer(layer);
          });
        }
      });
    } else if(document.getElementById('htmBodyGraphLocationCompanyEventPage')) {
      window.mapCompanyEvent = L.map('htmBodyGraphLocationCompanyEventPage', {
        position: 'topright'
        , zoomControl: true
        , scrollWheelZoom: false
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
      window.mapCompanyEvent.zoomControl.setPosition('topright');
      var data = [];
      var layout = {};
      layout['showlegend'] = true;
      layout['dragmode'] = 'zoom';
      layout['uirevision'] = 'true';
      var legend = L.control({position: 'bottomright'});
      legend.onAdd = jsLegendCompanyEvent;
      legend.addTo(window.mapCompanyEvent);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(window.mapCompanyEvent);

      if(window.bounds && window['DEFAULT_MAP_ZOOM']) {
        if(listCompanyEvent.length == 1) {
          window.mapCompanyEvent.setView(window.bounds.getNorthEast(), window['DEFAULT_MAP_ZOOM']);
        } else {
          window.mapCompanyEvent.fitBounds(window.bounds);
        }
      } else {
        if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
          window.mapCompanyEvent.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]], window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_ZOOM'])
          window.mapCompanyEvent.setView(null, window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_LOCATION'])
          window.mapCompanyEvent.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]]);
      }

      layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
      window.geoJSONCompanyEvent = L.geoJSON().addTo(window.mapCompanyEvent);
      window.listCompanyEvent.forEach((result, index) => {
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
              , style: jsStyleCompanyEvent
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleCompanyEvent(feature));
              }
            });
            window.geoJSONCompanyEvent.addLayer(layer);
          });
        }
      });
      window.mapCompanyEvent.on('popupopen', function(e) {
        if(e.popup._source) {
          var feature = e.popup._source.feature;
          jsTooltipCompanyEvent(e, feature);
        }
      });
      const drawnItems = new L.FeatureGroup();
      window.mapCompanyEvent.addLayer(drawnItems);
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
      window.mapCompanyEvent.addControl(drawControl);
      window.mapCompanyEvent.on(L.Draw.Event.CREATED, function (event) {
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
        event.layer.bindContextMenu({
          contextmenu: true
          , contextmenuItems: contextmenuItems
        });
      });
    }
  }
}
function patchLocation(target, location) {
  patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + result.pageId }]
      , 'setLocation', location
      , target
      , function(response, e) { addGlow(target); }
      , function(response, e) { addError(target); }
      );
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqCompanyEvent_time').innerText = '';
  searchPage('CompanyEvent', function() {
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
      document.querySelector('#fqCompanyEvent_time').value = x;
      document.querySelector('#fqCompanyEvent_time').onchange();
      searchPage('CompanyEvent');
    }, speedRate);
  });
}
