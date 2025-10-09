Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyAbout')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyAbout', event.target.value);
  });

  document.querySelector('#pageSelectSortCompanyAbout_created')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'created', true);
  });
  document.querySelector('#pageStatsCompanyAbout_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'created', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_modified')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'modified', true);
  });
  document.querySelector('#pageStatsCompanyAbout_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'modified', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_archived')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'archived', true);
  });
  document.querySelector('#pageStatsCompanyAbout_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'archived', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_name')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'name', true);
  });
  document.querySelector('#pageStatsCompanyAbout_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'name', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_description')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'description', true);
  });
  document.querySelector('#pageStatsCompanyAbout_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'description', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_pageId')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'pageId', true);
  });
  document.querySelector('#pageStatsCompanyAbout_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'pageId', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'displayPage', true);
  });
  document.querySelector('#pageStatsCompanyAbout_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsCompanyAbout_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsCompanyAbout_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsCompanyAbout_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_saves')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'saves', true);
  });
  document.querySelector('#pageStatsCompanyAbout_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'saves', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'objectTitle', true);
  });
  document.querySelector('#pageStatsCompanyAbout_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_editPage')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'editPage', true);
  });
  document.querySelector('#pageStatsCompanyAbout_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'editPage', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_userPage')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'userPage', true);
  });
  document.querySelector('#pageStatsCompanyAbout_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'userPage', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_download')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'download', true);
  });
  document.querySelector('#pageStatsCompanyAbout_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'download', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsCompanyAbout_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_objectText')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'objectText', true);
  });
  document.querySelector('#pageStatsCompanyAbout_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'objectText', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_solrId')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'solrId', true);
  });
  document.querySelector('#pageStatsCompanyAbout_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'solrId', false);
  });

  document.querySelector('#htmButton_patchCompanyAbout')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyAboutDialog').open = true;
  });

  document.querySelector('#htmButton_postCompanyAbout')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyAboutDialog').open = true;
  });

  document.querySelector('#htmButton_deleteCompanyAbout')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteCompanyAbout(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportCompanyAbout')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyAboutDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCompanyAbout')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyAboutDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterCompanyAbout')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterCompanyAbout(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqCompanyAbout_created')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyAbout_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_name')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyAbout_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_description')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyAbout_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyAbout_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyAbout_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_editPage')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyAbout_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_userPage')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyAbout_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_download')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyAbout_download')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_download')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
});
