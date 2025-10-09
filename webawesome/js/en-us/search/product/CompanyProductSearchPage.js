Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyProduct')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyProduct', event.target.value);
  });

  document.querySelector('#pageSelectSortCompanyProduct_created')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'created', true);
  });
  document.querySelector('#pageStatsCompanyProduct_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'created', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_modified')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'modified', true);
  });
  document.querySelector('#pageStatsCompanyProduct_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'modified', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_archived')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'archived', true);
  });
  document.querySelector('#pageStatsCompanyProduct_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'archived', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_name')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'name', true);
  });
  document.querySelector('#pageStatsCompanyProduct_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'name', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_description')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'description', true);
  });
  document.querySelector('#pageStatsCompanyProduct_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'description', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_price')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'price', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_price')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'price', true);
  });
  document.querySelector('#pageStatsCompanyProduct_price')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'price', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_pageImageUri')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsCompanyProduct_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_pageId')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'pageId', true);
  });
  document.querySelector('#pageStatsCompanyProduct_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'pageId', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'displayPage', true);
  });
  document.querySelector('#pageStatsCompanyProduct_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsCompanyProduct_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsCompanyProduct_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsCompanyProduct_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_saves')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'saves', true);
  });
  document.querySelector('#pageStatsCompanyProduct_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'saves', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'objectTitle', true);
  });
  document.querySelector('#pageStatsCompanyProduct_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_editPage')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'editPage', true);
  });
  document.querySelector('#pageStatsCompanyProduct_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'editPage', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_userPage')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'userPage', true);
  });
  document.querySelector('#pageStatsCompanyProduct_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'userPage', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_download')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'download', true);
  });
  document.querySelector('#pageStatsCompanyProduct_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'download', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsCompanyProduct_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_objectText')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'objectText', true);
  });
  document.querySelector('#pageStatsCompanyProduct_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'objectText', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_solrId')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'solrId', true);
  });
  document.querySelector('#pageStatsCompanyProduct_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'solrId', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_pageImageWidth')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsCompanyProduct_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_pageImageType')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'pageImageType', true);
  });
  document.querySelector('#pageStatsCompanyProduct_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_pageImageAlt')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_pageImageAlt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'pageImageAlt', true);
  });
  document.querySelector('#pageStatsCompanyProduct_pageImageAlt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'pageImageAlt', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_labels')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'labels', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_labels')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'labels', true);
  });
  document.querySelector('#pageStatsCompanyProduct_labels')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'labels', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_emailTemplate')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'emailTemplate', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_emailTemplate')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'emailTemplate', true);
  });
  document.querySelector('#pageStatsCompanyProduct_emailTemplate')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'emailTemplate', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_storeUrl')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'storeUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_storeUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'storeUrl', true);
  });
  document.querySelector('#pageStatsCompanyProduct_storeUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'storeUrl', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_downloadUrl')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'downloadUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_downloadUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'downloadUrl', true);
  });
  document.querySelector('#pageStatsCompanyProduct_downloadUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'downloadUrl', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_productNum')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'productNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_productNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'productNum', true);
  });
  document.querySelector('#pageStatsCompanyProduct_productNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'productNum', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_pageImageHeight')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsCompanyProduct_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'pageImageHeight', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_labelsString')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'labelsString', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_labelsString')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'labelsString', true);
  });
  document.querySelector('#pageStatsCompanyProduct_labelsString')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'labelsString', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsCompanyProduct_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'relatedArticleIds', false);
  });

  document.querySelector('#pageSelectSortCompanyProduct_dialogTemplate')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'dialogTemplate', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyProduct_dialogTemplate')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyProduct', 'dialogTemplate', true);
  });
  document.querySelector('#pageStatsCompanyProduct_dialogTemplate')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyProduct', 'dialogTemplate', false);
  });

  document.querySelector('#htmButton_patchCompanyProduct')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyProductDialog').open = true;
  });

  document.querySelector('#htmButton_postCompanyProduct')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyProductDialog').open = true;
  });

  document.querySelector('#htmButton_deleteCompanyProduct')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteCompanyProduct(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportCompanyProduct')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyProductDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCompanyProduct')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyProductDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterCompanyProduct')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterCompanyProduct(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
});
