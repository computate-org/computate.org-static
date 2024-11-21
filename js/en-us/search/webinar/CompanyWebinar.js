
// Search //

async function searchCompanyWebinar($formFilters, success, error) {
  var filters = searchCompanyWebinarFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, textStatus, errorThrown ) {};

  searchCompanyWebinarVals(filters, target, success, error);
}

function searchCompanyWebinarFilters($formFilters) {
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

    var filterWebinarUrlAmericas = $formFilters.querySelector('.valueWebinarUrlAmericas')?.value;
    if(filterWebinarUrlAmericas != null && filterWebinarUrlAmericas !== '')
      filters.push({ name: 'fq', value: 'webinarUrlAmericas:' + filterWebinarUrlAmericas });

    var filterWebinarUrlApac = $formFilters.querySelector('.valueWebinarUrlApac')?.value;
    if(filterWebinarUrlApac != null && filterWebinarUrlApac !== '')
      filters.push({ name: 'fq', value: 'webinarUrlApac:' + filterWebinarUrlApac });

    var filterWebinarUrlEmea = $formFilters.querySelector('.valueWebinarUrlEmea')?.value;
    if(filterWebinarUrlEmea != null && filterWebinarUrlEmea !== '')
      filters.push({ name: 'fq', value: 'webinarUrlEmea:' + filterWebinarUrlEmea });

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

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterJoinUri = $formFilters.querySelector('.valueJoinUri')?.value;
    if(filterJoinUri != null && filterJoinUri !== '')
      filters.push({ name: 'fq', value: 'joinUri:' + filterJoinUri });

    var filterJoinUrl = $formFilters.querySelector('.valueJoinUrl')?.value;
    if(filterJoinUrl != null && filterJoinUrl !== '')
      filters.push({ name: 'fq', value: 'joinUrl:' + filterJoinUrl });
  }
  return filters;
}

function searchCompanyWebinarVals(filters, target, success, error) {

  fetch(
    '/en-us/api/webinar?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestCompanyWebinarObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    $list.empty();
    data['list'].forEach((o, i) => {
      var $i = document.querySelector('<i class="fa-regular fa-video"></i>');
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
  searchCompanyWebinarVals($formFilters, target, success, error);
}

// GET //

async function getCompanyWebinar(pk) {
  fetch(
    '/en-us/api/webinar/' + pageId
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

async function patchCompanyWebinar($formFilters, $formValues, target, pageId, success, error) {
  var filters = patchCompanyWebinarFilters($formFilters);

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

  var valueWebinarUrlAmericas = $formValues.querySelector('.valueWebinarUrlAmericas')?.value;
  var removeWebinarUrlAmericas = $formValues.querySelector('.removeWebinarUrlAmericas')?.value === 'true';
  var setWebinarUrlAmericas = removeWebinarUrlAmericas ? null : $formValues.querySelector('.setWebinarUrlAmericas')?.value;
  var addWebinarUrlAmericas = $formValues.querySelector('.addWebinarUrlAmericas')?.value;
  if(removeWebinarUrlAmericas || setWebinarUrlAmericas != null && setWebinarUrlAmericas !== '')
    vals['setWebinarUrlAmericas'] = setWebinarUrlAmericas;
  if(addWebinarUrlAmericas != null && addWebinarUrlAmericas !== '')
    vals['addWebinarUrlAmericas'] = addWebinarUrlAmericas;
  var removeWebinarUrlAmericas = $formValues.querySelector('.removeWebinarUrlAmericas')?.value;
  if(removeWebinarUrlAmericas != null && removeWebinarUrlAmericas !== '')
    vals['removeWebinarUrlAmericas'] = removeWebinarUrlAmericas;

  var valueWebinarUrlApac = $formValues.querySelector('.valueWebinarUrlApac')?.value;
  var removeWebinarUrlApac = $formValues.querySelector('.removeWebinarUrlApac')?.value === 'true';
  var setWebinarUrlApac = removeWebinarUrlApac ? null : $formValues.querySelector('.setWebinarUrlApac')?.value;
  var addWebinarUrlApac = $formValues.querySelector('.addWebinarUrlApac')?.value;
  if(removeWebinarUrlApac || setWebinarUrlApac != null && setWebinarUrlApac !== '')
    vals['setWebinarUrlApac'] = setWebinarUrlApac;
  if(addWebinarUrlApac != null && addWebinarUrlApac !== '')
    vals['addWebinarUrlApac'] = addWebinarUrlApac;
  var removeWebinarUrlApac = $formValues.querySelector('.removeWebinarUrlApac')?.value;
  if(removeWebinarUrlApac != null && removeWebinarUrlApac !== '')
    vals['removeWebinarUrlApac'] = removeWebinarUrlApac;

  var valueWebinarUrlEmea = $formValues.querySelector('.valueWebinarUrlEmea')?.value;
  var removeWebinarUrlEmea = $formValues.querySelector('.removeWebinarUrlEmea')?.value === 'true';
  var setWebinarUrlEmea = removeWebinarUrlEmea ? null : $formValues.querySelector('.setWebinarUrlEmea')?.value;
  var addWebinarUrlEmea = $formValues.querySelector('.addWebinarUrlEmea')?.value;
  if(removeWebinarUrlEmea || setWebinarUrlEmea != null && setWebinarUrlEmea !== '')
    vals['setWebinarUrlEmea'] = setWebinarUrlEmea;
  if(addWebinarUrlEmea != null && addWebinarUrlEmea !== '')
    vals['addWebinarUrlEmea'] = addWebinarUrlEmea;
  var removeWebinarUrlEmea = $formValues.querySelector('.removeWebinarUrlEmea')?.value;
  if(removeWebinarUrlEmea != null && removeWebinarUrlEmea !== '')
    vals['removeWebinarUrlEmea'] = removeWebinarUrlEmea;

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

  var valueJoinUri = $formValues.querySelector('.valueJoinUri')?.value;
  var removeJoinUri = $formValues.querySelector('.removeJoinUri')?.value === 'true';
  var setJoinUri = removeJoinUri ? null : $formValues.querySelector('.setJoinUri')?.value;
  var addJoinUri = $formValues.querySelector('.addJoinUri')?.value;
  if(removeJoinUri || setJoinUri != null && setJoinUri !== '')
    vals['setJoinUri'] = setJoinUri;
  if(addJoinUri != null && addJoinUri !== '')
    vals['addJoinUri'] = addJoinUri;
  var removeJoinUri = $formValues.querySelector('.removeJoinUri')?.value;
  if(removeJoinUri != null && removeJoinUri !== '')
    vals['removeJoinUri'] = removeJoinUri;

  var valueJoinUrl = $formValues.querySelector('.valueJoinUrl')?.value;
  var removeJoinUrl = $formValues.querySelector('.removeJoinUrl')?.value === 'true';
  var setJoinUrl = removeJoinUrl ? null : $formValues.querySelector('.setJoinUrl')?.value;
  var addJoinUrl = $formValues.querySelector('.addJoinUrl')?.value;
  if(removeJoinUrl || setJoinUrl != null && setJoinUrl !== '')
    vals['setJoinUrl'] = setJoinUrl;
  if(addJoinUrl != null && addJoinUrl !== '')
    vals['addJoinUrl'] = addJoinUrl;
  var removeJoinUrl = $formValues.querySelector('.removeJoinUrl')?.value;
  if(removeJoinUrl != null && removeJoinUrl !== '')
    vals['removeJoinUrl'] = removeJoinUrl;

  patchCompanyWebinarVals(pageId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pageId:' + pageId}], vals, target, success, error);
}

function patchCompanyWebinarFilters($formFilters) {
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

    var filterWebinarUrlAmericas = $formFilters.querySelector('.valueWebinarUrlAmericas')?.value;
    if(filterWebinarUrlAmericas != null && filterWebinarUrlAmericas !== '')
      filters.push({ name: 'fq', value: 'webinarUrlAmericas:' + filterWebinarUrlAmericas });

    var filterWebinarUrlApac = $formFilters.querySelector('.valueWebinarUrlApac')?.value;
    if(filterWebinarUrlApac != null && filterWebinarUrlApac !== '')
      filters.push({ name: 'fq', value: 'webinarUrlApac:' + filterWebinarUrlApac });

    var filterWebinarUrlEmea = $formFilters.querySelector('.valueWebinarUrlEmea')?.value;
    if(filterWebinarUrlEmea != null && filterWebinarUrlEmea !== '')
      filters.push({ name: 'fq', value: 'webinarUrlEmea:' + filterWebinarUrlEmea });

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

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterJoinUri = $formFilters.querySelector('.valueJoinUri')?.value;
    if(filterJoinUri != null && filterJoinUri !== '')
      filters.push({ name: 'fq', value: 'joinUri:' + filterJoinUri });

    var filterJoinUrl = $formFilters.querySelector('.valueJoinUrl')?.value;
    if(filterJoinUrl != null && filterJoinUrl !== '')
      filters.push({ name: 'fq', value: 'joinUrl:' + filterJoinUrl });
  }
  return filters;
}

function patchCompanyWebinarVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchCompanyWebinarVals(filters, vals, target, success, error);
}

function patchCompanyWebinarVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/webinar?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postCompanyWebinar($formValues, target, success, error) {
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

  var valueWebinarUrlAmericas = $formValues.querySelector('.valueWebinarUrlAmericas')?.value;
  if(valueWebinarUrlAmericas != null && valueWebinarUrlAmericas !== '')
    vals['webinarUrlAmericas'] = valueWebinarUrlAmericas;

  var valueWebinarUrlApac = $formValues.querySelector('.valueWebinarUrlApac')?.value;
  if(valueWebinarUrlApac != null && valueWebinarUrlApac !== '')
    vals['webinarUrlApac'] = valueWebinarUrlApac;

  var valueWebinarUrlEmea = $formValues.querySelector('.valueWebinarUrlEmea')?.value;
  if(valueWebinarUrlEmea != null && valueWebinarUrlEmea !== '')
    vals['webinarUrlEmea'] = valueWebinarUrlEmea;

  var valuePageId = $formValues.querySelector('.valuePageId')?.value;
  if(valuePageId != null && valuePageId !== '')
    vals['pageId'] = valuePageId;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  if(valueDisplayPage != null && valueDisplayPage !== '')
    vals['displayPage'] = valueDisplayPage;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  if(valueSessionId != null && valueSessionId !== '')
    vals['sessionId'] = valueSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  if(valueUserKey != null && valueUserKey !== '')
    vals['userKey'] = valueUserKey;

  var valueTitle = $formValues.querySelector('.valueTitle')?.value;
  if(valueTitle != null && valueTitle !== '')
    vals['title'] = valueTitle;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  if(valueEditPage != null && valueEditPage !== '')
    vals['editPage'] = valueEditPage;

  var valueJoinUri = $formValues.querySelector('.valueJoinUri')?.value;
  if(valueJoinUri != null && valueJoinUri !== '')
    vals['joinUri'] = valueJoinUri;

  var valueJoinUrl = $formValues.querySelector('.valueJoinUrl')?.value;
  if(valueJoinUrl != null && valueJoinUrl !== '')
    vals['joinUrl'] = valueJoinUrl;

  fetch(
    '/en-us/api/webinar'
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

function postCompanyWebinarVals(vals, target, success, error) {
  fetch(
    '/en-us/api/webinar'
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

// PUTImport //

async function putimportCompanyWebinar($formValues, target, pageId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportCompanyWebinarVals(JSON.parse(json), target, success, error);
}

function putimportCompanyWebinarVals(json, target, success, error) {
  fetch(
    '/en-us/api/webinar-import'
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

async function websocketCompanyWebinar(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketCompanyWebinar', function (error, message) {
      var json = JSON.parse(message['body']);
      var pageId = json['pageId'];
      var pageIdPage = document.querySelector('#Page_pageId')?.value;
      var pks = json['pks'];
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
      iTemplate.innerHTML = '<i class="fa-regular fa-video"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify webinars in ' + json.timeRemaining;
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
      if(pageId && pageIdPage && pageId == pageIdPage) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketCompanyWebinarInner(apiRequest) {
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
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputName = null;
        var inputDescription = null;
        var inputWebinarUrlAmericas = null;
        var inputWebinarUrlApac = null;
        var inputWebinarUrlEmea = null;
        var inputPageId = null;
        var inputDisplayPage = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputTitle = null;
        var inputEditPage = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputSolrId = null;
        var inputJoinUri = null;
        var inputJoinUrl = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('#Page_pk');
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
        if(vars.includes('webinarUrlAmericas'))
          inputWebinarUrlAmericas = $response.querySelector('#Page_webinarUrlAmericas');
        if(vars.includes('webinarUrlApac'))
          inputWebinarUrlApac = $response.querySelector('#Page_webinarUrlApac');
        if(vars.includes('webinarUrlEmea'))
          inputWebinarUrlEmea = $response.querySelector('#Page_webinarUrlEmea');
        if(vars.includes('pageId'))
          inputPageId = $response.querySelector('#Page_pageId');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('#Page_displayPage');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('#Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('#Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('#Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('#Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('#Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('#Page_saves');
        if(vars.includes('title'))
          inputTitle = $response.querySelector('#Page_title');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('#Page_editPage');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('#Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('#Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('#Page_solrId');
        if(vars.includes('joinUri'))
          inputJoinUri = $response.querySelector('#Page_joinUri');
        if(vars.includes('joinUrl'))
          inputJoinUrl = $response.querySelector('#Page_joinUrl');
          jsWebsocketCompanyWebinar(pk, vars, $response);

          window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
          window.listCompanyWebinar = JSON.parse($response.querySelector('.pageForm .listCompanyWebinar')?.value);


        if(inputPk) {
          document.querySelectorAll('#Page_pk').forEach((item, index) => {
            item.setAttribute('value', inputPk.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_pk'));
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

        if(inputWebinarUrlAmericas) {
          document.querySelectorAll('#Page_webinarUrlAmericas').forEach((item, index) => {
            item.setAttribute('value', inputWebinarUrlAmericas.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_webinarUrlAmericas'));
        }

        if(inputWebinarUrlApac) {
          document.querySelectorAll('#Page_webinarUrlApac').forEach((item, index) => {
            item.setAttribute('value', inputWebinarUrlApac.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_webinarUrlApac'));
        }

        if(inputWebinarUrlEmea) {
          document.querySelectorAll('#Page_webinarUrlEmea').forEach((item, index) => {
            item.setAttribute('value', inputWebinarUrlEmea.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_webinarUrlEmea'));
        }

        if(inputPageId) {
          document.querySelectorAll('#Page_pageId').forEach((item, index) => {
            item.setAttribute('value', inputPageId.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_pageId'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('#Page_displayPage').forEach((item, index) => {
            item.setAttribute('value', inputDisplayPage.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_displayPage'));
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

        if(inputUserKey) {
          document.querySelectorAll('#Page_userKey').forEach((item, index) => {
            item.setAttribute('value', inputUserKey.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('#Page_saves').forEach((item, index) => {
            item.setAttribute('value', inputSaves.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_saves'));
        }

        if(inputTitle) {
          document.querySelectorAll('#Page_title').forEach((item, index) => {
            item.setAttribute('value', inputTitle.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_title'));
        }

        if(inputEditPage) {
          document.querySelectorAll('#Page_editPage').forEach((item, index) => {
            item.setAttribute('value', inputEditPage.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_editPage'));
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

        if(inputSolrId) {
          document.querySelectorAll('#Page_solrId').forEach((item, index) => {
            item.setAttribute('value', inputSolrId.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_solrId'));
        }

        if(inputJoinUri) {
          document.querySelectorAll('#Page_joinUri').forEach((item, index) => {
            item.setAttribute('value', inputJoinUri.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_joinUri'));
        }

        if(inputJoinUrl) {
          document.querySelectorAll('#Page_joinUrl').forEach((item, index) => {
            item.setAttribute('value', inputJoinUrl.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_joinUrl'));
        }

          pageGraphCompanyWebinar();
      });
    });
  }
}

function pageGraphCompanyWebinar(apiRequest) {
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
          layout['title'] = 'webinars';
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
          Plotly.react('htmBodyGraphCompanyWebinarPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqCompanyWebinar_time').innerText = '';
  searchPage('CompanyWebinar', function() {
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
      document.querySelector('#fqCompanyWebinar_time').value = x;
      document.querySelector('#fqCompanyWebinar_time').onchange();
      searchPage('CompanyWebinar');
    }, speedRate);
  });
}