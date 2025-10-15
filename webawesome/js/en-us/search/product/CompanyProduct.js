
// Search //

async function searchCompanyProduct($formFilters, success, error) {
  var filters = searchCompanyProductFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchCompanyProductVals(filters, target, success, error);
}

function searchCompanyProductFilters($formFilters) {
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

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterPrice = $formFilters.querySelector('.valuePrice')?.value;
    if(filterPrice != null && filterPrice !== '')
      filters.push({ name: 'fq', value: 'price:' + filterPrice });

    var filterPageImageUri = $formFilters.querySelector('.valuePageImageUri')?.value;
    if(filterPageImageUri != null && filterPageImageUri !== '')
      filters.push({ name: 'fq', value: 'pageImageUri:' + filterPageImageUri });

    var filterPageId = $formFilters.querySelector('.valuePageId')?.value;
    if(filterPageId != null && filterPageId !== '')
      filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterEmailTemplate = $formFilters.querySelector('.valueEmailTemplate')?.value;
    if(filterEmailTemplate != null && filterEmailTemplate !== '')
      filters.push({ name: 'fq', value: 'emailTemplate:' + filterEmailTemplate });

    var filterStoreUrl = $formFilters.querySelector('.valueStoreUrl')?.value;
    if(filterStoreUrl != null && filterStoreUrl !== '')
      filters.push({ name: 'fq', value: 'storeUrl:' + filterStoreUrl });

    var filterDownloadUrl = $formFilters.querySelector('.valueDownloadUrl')?.value;
    if(filterDownloadUrl != null && filterDownloadUrl !== '')
      filters.push({ name: 'fq', value: 'downloadUrl:' + filterDownloadUrl });

    var filterProductNum = $formFilters.querySelector('.valueProductNum')?.value;
    if(filterProductNum != null && filterProductNum !== '')
      filters.push({ name: 'fq', value: 'productNum:' + filterProductNum });

    var filterPageImageWidth = $formFilters.querySelector('.valuePageImageWidth')?.value;
    if(filterPageImageWidth != null && filterPageImageWidth !== '')
      filters.push({ name: 'fq', value: 'pageImageWidth:' + filterPageImageWidth });

    var filterPageImageHeight = $formFilters.querySelector('.valuePageImageHeight')?.value;
    if(filterPageImageHeight != null && filterPageImageHeight !== '')
      filters.push({ name: 'fq', value: 'pageImageHeight:' + filterPageImageHeight });

    var filterPageImageType = $formFilters.querySelector('.valuePageImageType')?.value;
    if(filterPageImageType != null && filterPageImageType !== '')
      filters.push({ name: 'fq', value: 'pageImageType:' + filterPageImageType });

    var filterPageImageAlt = $formFilters.querySelector('.valuePageImageAlt')?.value;
    if(filterPageImageAlt != null && filterPageImageAlt !== '')
      filters.push({ name: 'fq', value: 'pageImageAlt:' + filterPageImageAlt });

    var filterLabelsString = $formFilters.querySelector('.valueLabelsString')?.value;
    if(filterLabelsString != null && filterLabelsString !== '')
      filters.push({ name: 'fq', value: 'labelsString:' + filterLabelsString });

    var filterLabels = $formFilters.querySelector('.valueLabels')?.value;
    if(filterLabels != null && filterLabels !== '')
      filters.push({ name: 'fq', value: 'labels:' + filterLabels });

    var filterRelatedArticleIds = $formFilters.querySelector('.valueRelatedArticleIds')?.value;
    if(filterRelatedArticleIds != null && filterRelatedArticleIds !== '')
      filters.push({ name: 'fq', value: 'relatedArticleIds:' + filterRelatedArticleIds });

    var filterDialogTemplate = $formFilters.querySelector('.valueDialogTemplate')?.value;
    if(filterDialogTemplate != null && filterDialogTemplate !== '')
      filters.push({ name: 'fq', value: 'dialogTemplate:' + filterDialogTemplate });
  }
  return filters;
}

function searchCompanyProductVals(filters, target, success, error) {

  fetch(
    '/en-us/api/product?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function suggestCompanyProductObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-duotone fa-regular fa-conveyor-belt"></i>');
        var $span = document.createElement('span');        $span.setAttribute('class', '');        $span.innerText = o['objectTitle'];
        var $li = document.createElement('li');
        var $a = document.createElement('a').setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  searchCompanyProductVals($formFilters, target, success, error);
}

// GET //

async function getCompanyProduct() {
  fetch(
    '/en-us/api/product/' + pageId
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PATCH //

async function patchCompanyProduct($formFilters, $formValues, target, pageId, success, error) {
  var filters = patchCompanyProductFilters($formFilters);

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

  var valuePageImageUri = $formValues.querySelector('.valuePageImageUri')?.value;
  var removePageImageUri = $formValues.querySelector('.removePageImageUri')?.value === 'true';
  var setPageImageUri = removePageImageUri ? null : $formValues.querySelector('.setPageImageUri')?.value;
  var addPageImageUri = $formValues.querySelector('.addPageImageUri')?.value;
  if(removePageImageUri || setPageImageUri != null && setPageImageUri !== '')
    vals['setPageImageUri'] = setPageImageUri;
  if(addPageImageUri != null && addPageImageUri !== '')
    vals['addPageImageUri'] = addPageImageUri;
  var removePageImageUri = $formValues.querySelector('.removePageImageUri')?.value;
  if(removePageImageUri != null && removePageImageUri !== '')
    vals['removePageImageUri'] = removePageImageUri;

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

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value === 'true';
  var setObjectTitle = removeObjectTitle ? null : $formValues.querySelector('.setObjectTitle')?.value;
  var addObjectTitle = $formValues.querySelector('.addObjectTitle')?.value;
  if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
    vals['setObjectTitle'] = setObjectTitle;
  if(addObjectTitle != null && addObjectTitle !== '')
    vals['addObjectTitle'] = addObjectTitle;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value;
  if(removeObjectTitle != null && removeObjectTitle !== '')
    vals['removeObjectTitle'] = removeObjectTitle;

  var valueUserPage = $formValues.querySelector('.valueUserPage')?.value;
  var removeUserPage = $formValues.querySelector('.removeUserPage')?.value === 'true';
  var setUserPage = removeUserPage ? null : $formValues.querySelector('.setUserPage')?.value;
  var addUserPage = $formValues.querySelector('.addUserPage')?.value;
  if(removeUserPage || setUserPage != null && setUserPage !== '')
    vals['setUserPage'] = setUserPage;
  if(addUserPage != null && addUserPage !== '')
    vals['addUserPage'] = addUserPage;
  var removeUserPage = $formValues.querySelector('.removeUserPage')?.value;
  if(removeUserPage != null && removeUserPage !== '')
    vals['removeUserPage'] = removeUserPage;

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

  var valueDownloadUrl = $formValues.querySelector('.valueDownloadUrl')?.value;
  var removeDownloadUrl = $formValues.querySelector('.removeDownloadUrl')?.value === 'true';
  var setDownloadUrl = removeDownloadUrl ? null : $formValues.querySelector('.setDownloadUrl')?.value;
  var addDownloadUrl = $formValues.querySelector('.addDownloadUrl')?.value;
  if(removeDownloadUrl || setDownloadUrl != null && setDownloadUrl !== '')
    vals['setDownloadUrl'] = setDownloadUrl;
  if(addDownloadUrl != null && addDownloadUrl !== '')
    vals['addDownloadUrl'] = addDownloadUrl;
  var removeDownloadUrl = $formValues.querySelector('.removeDownloadUrl')?.value;
  if(removeDownloadUrl != null && removeDownloadUrl !== '')
    vals['removeDownloadUrl'] = removeDownloadUrl;

  var valueProductNum = $formValues.querySelector('.valueProductNum')?.value;
  var removeProductNum = $formValues.querySelector('.removeProductNum')?.value === 'true';
  var setProductNum = removeProductNum ? null : $formValues.querySelector('.setProductNum')?.value;
  var addProductNum = $formValues.querySelector('.addProductNum')?.value;
  if(removeProductNum || setProductNum != null && setProductNum !== '')
    vals['setProductNum'] = setProductNum;
  if(addProductNum != null && addProductNum !== '')
    vals['addProductNum'] = addProductNum;
  var removeProductNum = $formValues.querySelector('.removeProductNum')?.value;
  if(removeProductNum != null && removeProductNum !== '')
    vals['removeProductNum'] = removeProductNum;

  var valuePageImageAlt = $formValues.querySelector('.valuePageImageAlt')?.value;
  var removePageImageAlt = $formValues.querySelector('.removePageImageAlt')?.value === 'true';
  var setPageImageAlt = removePageImageAlt ? null : $formValues.querySelector('.setPageImageAlt')?.value;
  var addPageImageAlt = $formValues.querySelector('.addPageImageAlt')?.value;
  if(removePageImageAlt || setPageImageAlt != null && setPageImageAlt !== '')
    vals['setPageImageAlt'] = setPageImageAlt;
  if(addPageImageAlt != null && addPageImageAlt !== '')
    vals['addPageImageAlt'] = addPageImageAlt;
  var removePageImageAlt = $formValues.querySelector('.removePageImageAlt')?.value;
  if(removePageImageAlt != null && removePageImageAlt !== '')
    vals['removePageImageAlt'] = removePageImageAlt;

  var valueLabelsString = $formValues.querySelector('.valueLabelsString')?.value;
  var removeLabelsString = $formValues.querySelector('.removeLabelsString')?.value === 'true';
  var setLabelsString = removeLabelsString ? null : $formValues.querySelector('.setLabelsString')?.value;
  var addLabelsString = $formValues.querySelector('.addLabelsString')?.value;
  if(removeLabelsString || setLabelsString != null && setLabelsString !== '')
    vals['setLabelsString'] = setLabelsString;
  if(addLabelsString != null && addLabelsString !== '')
    vals['addLabelsString'] = addLabelsString;
  var removeLabelsString = $formValues.querySelector('.removeLabelsString')?.value;
  if(removeLabelsString != null && removeLabelsString !== '')
    vals['removeLabelsString'] = removeLabelsString;

  var valueLabels = $formValues.querySelector('.valueLabels')?.value;
  var removeLabels = $formValues.querySelector('.removeLabels')?.value === 'true';
  var setLabels = removeLabels ? null : $formValues.querySelector('.setLabels')?.value;
  var addLabels = $formValues.querySelector('.addLabels')?.value;
  if(removeLabels || setLabels != null && setLabels !== '')
    vals['setLabels'] = JSON.parse(setLabels);
  if(addLabels != null && addLabels !== '')
    vals['addLabels'] = addLabels;
  var removeLabels = $formValues.querySelector('.removeLabels')?.value;
  if(removeLabels != null && removeLabels !== '')
    vals['removeLabels'] = removeLabels;

  var valueRelatedArticleIds = $formValues.querySelector('.valueRelatedArticleIds')?.value;
  var removeRelatedArticleIds = $formValues.querySelector('.removeRelatedArticleIds')?.value === 'true';
  var setRelatedArticleIds = removeRelatedArticleIds ? null : $formValues.querySelector('.setRelatedArticleIds')?.value;
  var addRelatedArticleIds = $formValues.querySelector('.addRelatedArticleIds')?.value;
  if(removeRelatedArticleIds || setRelatedArticleIds != null && setRelatedArticleIds !== '')
    vals['setRelatedArticleIds'] = setRelatedArticleIds;
  if(addRelatedArticleIds != null && addRelatedArticleIds !== '')
    vals['addRelatedArticleIds'] = addRelatedArticleIds;
  var removeRelatedArticleIds = $formValues.querySelector('.removeRelatedArticleIds')?.value;
  if(removeRelatedArticleIds != null && removeRelatedArticleIds !== '')
    vals['removeRelatedArticleIds'] = removeRelatedArticleIds;

  var valueDialogTemplate = $formValues.querySelector('.valueDialogTemplate')?.value;
  var removeDialogTemplate = $formValues.querySelector('.removeDialogTemplate')?.value === 'true';
  var setDialogTemplate = removeDialogTemplate ? null : $formValues.querySelector('.setDialogTemplate')?.value;
  var addDialogTemplate = $formValues.querySelector('.addDialogTemplate')?.value;
  if(removeDialogTemplate || setDialogTemplate != null && setDialogTemplate !== '')
    vals['setDialogTemplate'] = setDialogTemplate;
  if(addDialogTemplate != null && addDialogTemplate !== '')
    vals['addDialogTemplate'] = addDialogTemplate;
  var removeDialogTemplate = $formValues.querySelector('.removeDialogTemplate')?.value;
  if(removeDialogTemplate != null && removeDialogTemplate !== '')
    vals['removeDialogTemplate'] = removeDialogTemplate;

  patchCompanyProductVals(pageId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pageId:' + pageId}], vals, target, success, error);
}

function patchCompanyProductFilters($formFilters) {
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

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterPrice = $formFilters.querySelector('.valuePrice')?.value;
    if(filterPrice != null && filterPrice !== '')
      filters.push({ name: 'fq', value: 'price:' + filterPrice });

    var filterPageImageUri = $formFilters.querySelector('.valuePageImageUri')?.value;
    if(filterPageImageUri != null && filterPageImageUri !== '')
      filters.push({ name: 'fq', value: 'pageImageUri:' + filterPageImageUri });

    var filterPageId = $formFilters.querySelector('.valuePageId')?.value;
    if(filterPageId != null && filterPageId !== '')
      filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterEmailTemplate = $formFilters.querySelector('.valueEmailTemplate')?.value;
    if(filterEmailTemplate != null && filterEmailTemplate !== '')
      filters.push({ name: 'fq', value: 'emailTemplate:' + filterEmailTemplate });

    var filterStoreUrl = $formFilters.querySelector('.valueStoreUrl')?.value;
    if(filterStoreUrl != null && filterStoreUrl !== '')
      filters.push({ name: 'fq', value: 'storeUrl:' + filterStoreUrl });

    var filterDownloadUrl = $formFilters.querySelector('.valueDownloadUrl')?.value;
    if(filterDownloadUrl != null && filterDownloadUrl !== '')
      filters.push({ name: 'fq', value: 'downloadUrl:' + filterDownloadUrl });

    var filterProductNum = $formFilters.querySelector('.valueProductNum')?.value;
    if(filterProductNum != null && filterProductNum !== '')
      filters.push({ name: 'fq', value: 'productNum:' + filterProductNum });

    var filterPageImageWidth = $formFilters.querySelector('.valuePageImageWidth')?.value;
    if(filterPageImageWidth != null && filterPageImageWidth !== '')
      filters.push({ name: 'fq', value: 'pageImageWidth:' + filterPageImageWidth });

    var filterPageImageHeight = $formFilters.querySelector('.valuePageImageHeight')?.value;
    if(filterPageImageHeight != null && filterPageImageHeight !== '')
      filters.push({ name: 'fq', value: 'pageImageHeight:' + filterPageImageHeight });

    var filterPageImageType = $formFilters.querySelector('.valuePageImageType')?.value;
    if(filterPageImageType != null && filterPageImageType !== '')
      filters.push({ name: 'fq', value: 'pageImageType:' + filterPageImageType });

    var filterPageImageAlt = $formFilters.querySelector('.valuePageImageAlt')?.value;
    if(filterPageImageAlt != null && filterPageImageAlt !== '')
      filters.push({ name: 'fq', value: 'pageImageAlt:' + filterPageImageAlt });

    var filterLabelsString = $formFilters.querySelector('.valueLabelsString')?.value;
    if(filterLabelsString != null && filterLabelsString !== '')
      filters.push({ name: 'fq', value: 'labelsString:' + filterLabelsString });

    var filterLabels = $formFilters.querySelector('.valueLabels')?.value;
    if(filterLabels != null && filterLabels !== '')
      filters.push({ name: 'fq', value: 'labels:' + filterLabels });

    var filterRelatedArticleIds = $formFilters.querySelector('.valueRelatedArticleIds')?.value;
    if(filterRelatedArticleIds != null && filterRelatedArticleIds !== '')
      filters.push({ name: 'fq', value: 'relatedArticleIds:' + filterRelatedArticleIds });

    var filterDialogTemplate = $formFilters.querySelector('.valueDialogTemplate')?.value;
    if(filterDialogTemplate != null && filterDialogTemplate !== '')
      filters.push({ name: 'fq', value: 'dialogTemplate:' + filterDialogTemplate });
  }
  return filters;
}

function patchCompanyProductVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchCompanyProductVals(filters, vals, target, success, error);
}

function patchCompanyProductVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/product?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PATCH'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// POST //

async function postCompanyProduct($formValues, target, success, error) {
  var vals = {};
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      addError(target, jqXhr);
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

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valuePrice = $formValues.querySelector('.valuePrice')?.value;
  if(valuePrice != null && valuePrice !== '')
    vals['price'] = valuePrice;

  var valuePageImageUri = $formValues.querySelector('.valuePageImageUri')?.value;
  if(valuePageImageUri != null && valuePageImageUri !== '')
    vals['pageImageUri'] = valuePageImageUri;

  var valuePageId = $formValues.querySelector('.valuePageId')?.value;
  if(valuePageId != null && valuePageId !== '')
    vals['pageId'] = valuePageId;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  if(valueDisplayPage != null && valueDisplayPage !== '')
    vals['displayPage'] = valueDisplayPage;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  if(valueObjectTitle != null && valueObjectTitle !== '')
    vals['objectTitle'] = valueObjectTitle;

  var valueUserPage = $formValues.querySelector('.valueUserPage')?.value;
  if(valueUserPage != null && valueUserPage !== '')
    vals['userPage'] = valueUserPage;

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  if(valueDownload != null && valueDownload !== '')
    vals['download'] = valueDownload;

  var valueSolrId = $formValues.querySelector('.valueSolrId')?.value;
  if(valueSolrId != null && valueSolrId !== '')
    vals['solrId'] = valueSolrId;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  if(valueEditPage != null && valueEditPage !== '')
    vals['editPage'] = valueEditPage;

  var valueEmailTemplate = $formValues.querySelector('.valueEmailTemplate')?.value;
  if(valueEmailTemplate != null && valueEmailTemplate !== '')
    vals['emailTemplate'] = valueEmailTemplate;

  var valueStoreUrl = $formValues.querySelector('.valueStoreUrl')?.value;
  if(valueStoreUrl != null && valueStoreUrl !== '')
    vals['storeUrl'] = valueStoreUrl;

  var valueDownloadUrl = $formValues.querySelector('.valueDownloadUrl')?.value;
  if(valueDownloadUrl != null && valueDownloadUrl !== '')
    vals['downloadUrl'] = valueDownloadUrl;

  var valueProductNum = $formValues.querySelector('.valueProductNum')?.value;
  if(valueProductNum != null && valueProductNum !== '')
    vals['productNum'] = valueProductNum;

  var valuePageImageAlt = $formValues.querySelector('.valuePageImageAlt')?.value;
  if(valuePageImageAlt != null && valuePageImageAlt !== '')
    vals['pageImageAlt'] = valuePageImageAlt;

  var valueLabelsString = $formValues.querySelector('.valueLabelsString')?.value;
  if(valueLabelsString != null && valueLabelsString !== '')
    vals['labelsString'] = valueLabelsString;

  var valueLabels = $formValues.querySelector('.valueLabels')?.value;
  if(valueLabels != null && valueLabels !== '')
    vals['labels'] = JSON.parse(valueLabels);

  var valueRelatedArticleIds = $formValues.querySelector('.valueRelatedArticleIds')?.value;
  if(valueRelatedArticleIds != null && valueRelatedArticleIds !== '')
    vals['relatedArticleIds'] = valueRelatedArticleIds;

  var valueDialogTemplate = $formValues.querySelector('.valueDialogTemplate')?.value;
  if(valueDialogTemplate != null && valueDialogTemplate !== '')
    vals['dialogTemplate'] = valueDialogTemplate;

  fetch(
    '/en-us/api/product'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function postCompanyProductVals(vals, target, success, error) {
  fetch(
    '/en-us/api/product'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// DELETE //

async function deleteCompanyProduct(target, pageId, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      addError(target, jqXhr);
    };
  }

  fetch(
    '/en-us/api/product/' + encodeURIComponent(pageId)
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        success(response, target);
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PUTImport //

async function putimportCompanyProduct($formValues, target, pageId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportCompanyProductVals(JSON.parse(json), target, success, error);
}

function putimportCompanyProductVals(json, target, success, error) {
  fetch(
    '/en-us/api/product-import'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PUT'
      , body: JSON.stringify(json)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// DELETEFilter //

async function deletefilterCompanyProduct(target, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      addError(target, jqXhr);
    };
  }

  fetch(
    '/en-us/api/product'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        success(response, target);
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

async function websocketCompanyProduct(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketCompanyProduct', function (error, message) {
      var json = JSON.parse(message['body']);
      var pageId = json['id'];
      var solrIds = json['solrIds'];
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
      iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-conveyor-belt"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify products in ' + json.timeRemaining;
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
async function websocketCompanyProductInner(apiRequest) {
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
        var inputDescription = null;
        var inputPrice = null;
        var inputPageImageUri = null;
        var inputPageId = null;
        var inputDisplayPage = null;
        var inputClassCanonicalName = null;
        var inputSaves = null;
        var inputObjectTitle = null;
        var inputUserPage = null;
        var inputDownload = null;
        var inputSolrId = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputEditPage = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputEmailTemplate = null;
        var inputStoreUrl = null;
        var inputDownloadUrl = null;
        var inputProductNum = null;
        var inputPageImageWidth = null;
        var inputPageImageHeight = null;
        var inputPageImageType = null;
        var inputPageImageAlt = null;
        var inputLabelsString = null;
        var inputLabels = null;
        var inputRelatedArticleIds = null;
        var inputRelatedArticles = null;
        var inputDialogTemplate = null;

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
        if(vars.includes('price'))
          inputPrice = $response.querySelector('.Page_price');
        if(vars.includes('pageImageUri'))
          inputPageImageUri = $response.querySelector('.Page_pageImageUri');
        if(vars.includes('pageId'))
          inputPageId = $response.querySelector('.Page_pageId');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.Page_displayPage');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.Page_classCanonicalName');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.Page_objectTitle');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.Page_download');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.Page_solrId');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.Page_classCanonicalNames');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.Page_editPage');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.Page_objectText');
        if(vars.includes('emailTemplate'))
          inputEmailTemplate = $response.querySelector('.Page_emailTemplate');
        if(vars.includes('storeUrl'))
          inputStoreUrl = $response.querySelector('.Page_storeUrl');
        if(vars.includes('downloadUrl'))
          inputDownloadUrl = $response.querySelector('.Page_downloadUrl');
        if(vars.includes('productNum'))
          inputProductNum = $response.querySelector('.Page_productNum');
        if(vars.includes('pageImageWidth'))
          inputPageImageWidth = $response.querySelector('.Page_pageImageWidth');
        if(vars.includes('pageImageHeight'))
          inputPageImageHeight = $response.querySelector('.Page_pageImageHeight');
        if(vars.includes('pageImageType'))
          inputPageImageType = $response.querySelector('.Page_pageImageType');
        if(vars.includes('pageImageAlt'))
          inputPageImageAlt = $response.querySelector('.Page_pageImageAlt');
        if(vars.includes('labelsString'))
          inputLabelsString = $response.querySelector('.Page_labelsString');
        if(vars.includes('labels'))
          inputLabels = $response.querySelector('.Page_labels');
        if(vars.includes('relatedArticleIds'))
          inputRelatedArticleIds = $response.querySelector('.Page_relatedArticleIds');
        if(vars.includes('relatedArticles'))
          inputRelatedArticles = $response.querySelector('.Page_relatedArticles');
        if(vars.includes('dialogTemplate'))
          inputDialogTemplate = $response.querySelector('.Page_dialogTemplate');

        jsWebsocketCompanyProduct(pageId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listCompanyProduct = JSON.parse($response.querySelector('.pageForm .listCompanyProduct')?.value);


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

        if(inputPrice) {
          document.querySelectorAll('.Page_price').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPrice.getAttribute('value');
            else
              item.textContent = inputPrice.textContent;
          });
          addGlow(document.querySelector('.Page_price'));
        }

        if(inputPageImageUri) {
          document.querySelectorAll('.Page_pageImageUri').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPageImageUri.getAttribute('value');
            else
              item.textContent = inputPageImageUri.textContent;
          });
          addGlow(document.querySelector('.Page_pageImageUri'));
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

        if(inputSaves) {
          document.querySelectorAll('.Page_saves').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.Page_objectTitle').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.Page_objectTitle'));
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

        if(inputSolrId) {
          document.querySelectorAll('.Page_solrId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.Page_solrId'));
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

        if(inputEditPage) {
          document.querySelectorAll('.Page_editPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.Page_editPage'));
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

        if(inputDownloadUrl) {
          document.querySelectorAll('.Page_downloadUrl').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDownloadUrl.getAttribute('value');
            else
              item.textContent = inputDownloadUrl.textContent;
          });
          addGlow(document.querySelector('.Page_downloadUrl'));
        }

        if(inputProductNum) {
          document.querySelectorAll('.Page_productNum').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputProductNum.getAttribute('value');
            else
              item.textContent = inputProductNum.textContent;
          });
          addGlow(document.querySelector('.Page_productNum'));
        }

        if(inputPageImageWidth) {
          document.querySelectorAll('.Page_pageImageWidth').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPageImageWidth.getAttribute('value');
            else
              item.textContent = inputPageImageWidth.textContent;
          });
          addGlow(document.querySelector('.Page_pageImageWidth'));
        }

        if(inputPageImageHeight) {
          document.querySelectorAll('.Page_pageImageHeight').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPageImageHeight.getAttribute('value');
            else
              item.textContent = inputPageImageHeight.textContent;
          });
          addGlow(document.querySelector('.Page_pageImageHeight'));
        }

        if(inputPageImageType) {
          document.querySelectorAll('.Page_pageImageType').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPageImageType.getAttribute('value');
            else
              item.textContent = inputPageImageType.textContent;
          });
          addGlow(document.querySelector('.Page_pageImageType'));
        }

        if(inputPageImageAlt) {
          document.querySelectorAll('.Page_pageImageAlt').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPageImageAlt.getAttribute('value');
            else
              item.textContent = inputPageImageAlt.textContent;
          });
          addGlow(document.querySelector('.Page_pageImageAlt'));
        }

        if(inputLabelsString) {
          document.querySelectorAll('.Page_labelsString').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLabelsString.getAttribute('value');
            else
              item.textContent = inputLabelsString.textContent;
          });
          addGlow(document.querySelector('.Page_labelsString'));
        }

        if(inputLabels) {
          document.querySelectorAll('.Page_labels').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLabels.getAttribute('value');
            else
              item.textContent = inputLabels.textContent;
          });
          addGlow(document.querySelector('.Page_labels'));
        }

        if(inputRelatedArticleIds) {
          document.querySelectorAll('.Page_relatedArticleIds').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRelatedArticleIds.getAttribute('value');
            else
              item.textContent = inputRelatedArticleIds.textContent;
          });
          addGlow(document.querySelector('.Page_relatedArticleIds'));
        }

        if(inputRelatedArticles) {
          document.querySelectorAll('.Page_relatedArticles').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRelatedArticles.getAttribute('value');
            else
              item.textContent = inputRelatedArticles.textContent;
          });
          addGlow(document.querySelector('.Page_relatedArticles'));
        }

        if(inputDialogTemplate) {
          document.querySelectorAll('.Page_dialogTemplate').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDialogTemplate.getAttribute('value');
            else
              item.textContent = inputDialogTemplate.textContent;
          });
          addGlow(document.querySelector('.Page_dialogTemplate'));
        }

          pageGraphCompanyProduct();
      });
    });
  }
}

function pageGraphCompanyProduct(apiRequest) {
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
          layout['title'] = 'products';
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
          Plotly.react('htmBodyGraphCompanyProductPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqCompanyProduct_time').innerText = '';
  searchPage('CompanyProduct', function() {
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
      document.querySelector('#fqCompanyProduct_time').value = x;
      document.querySelector('#fqCompanyProduct_time').onchange();
      searchPage('CompanyProduct');
    }, speedRate);
  });
}
