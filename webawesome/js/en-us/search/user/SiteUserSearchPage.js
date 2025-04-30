Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSiteUser')?.addEventListener('change', (event) => {
    facetRangeChange('SiteUser', event.target.value);
  });

  document.querySelector('#pageFacetSortSiteUser_pk')?.addEventListener('change', (event) => {
    sort('SiteUser', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_created')?.addEventListener('change', (event) => {
    sort('SiteUser', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_modified')?.addEventListener('change', (event) => {
    sort('SiteUser', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_archived')?.addEventListener('change', (event) => {
    sort('SiteUser', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_seeArchived')?.addEventListener('change', (event) => {
    sort('SiteUser', 'seeArchived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_awesomeEffect')?.addEventListener('change', (event) => {
    sort('SiteUser', 'awesomeEffect', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_classCanonicalName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_classSimpleName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('SiteUser', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_sessionId')?.addEventListener('change', (event) => {
    sort('SiteUser', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_userKey')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_saves')?.addEventListener('change', (event) => {
    sort('SiteUser', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_objectTitle')?.addEventListener('change', (event) => {
    sort('SiteUser', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_displayPage')?.addEventListener('change', (event) => {
    sort('SiteUser', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_editPage')?.addEventListener('change', (event) => {
    sort('SiteUser', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_userPage')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_download')?.addEventListener('change', (event) => {
    sort('SiteUser', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_objectText')?.addEventListener('change', (event) => {
    sort('SiteUser', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_solrId')?.addEventListener('change', (event) => {
    sort('SiteUser', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_objectSuggest')?.addEventListener('change', (event) => {
    sort('SiteUser', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_userKeys')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userKeys', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_userId')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_userName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_userEmail')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userEmail', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_userFirstName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userFirstName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_userLastName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userLastName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_userFullName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userFullName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSiteUser_displayName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'displayName', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchSiteUser')?.addEventListener('click', (event) => {
    document.querySelector('#patchSiteUserDialog').open = true;
  });

  document.querySelector('#htmButton_postSiteUser')?.addEventListener('click', (event) => {
    document.querySelector('#postSiteUserDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageSiteUser')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageSiteUserDialog').open = true;
  });
          document.querySelector('#fqSiteUser_created')?.addEventListener('change', (event) => {
            fqChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#buttonFacetSiteUser_created')?.addEventListener('click', (event) => {
            facetFieldChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSiteUser_created')?.addEventListener('change', (event) => {
            facetPivotChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#fqSiteUser_archived')?.addEventListener('change', (event) => {
            fqChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#buttonFacetSiteUser_archived')?.addEventListener('click', (event) => {
            facetFieldChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSiteUser_archived')?.addEventListener('change', (event) => {
            facetPivotChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#fqSiteUser_displayPage')?.addEventListener('change', (event) => {
            fqChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#buttonFacetSiteUser_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSiteUser_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('SiteUser', event.currentTarget);
          });
});
