Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSiteUser')?.addEventListener('change', (event) => {
    facetRangeChange('SiteUser', event.target.value);
  });

  document.querySelector('#htmDropdown-userFullName')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-SiteUser-userFullName').innerText == undefined);
    if (action === 'sort') {
      sort('SiteUser', 'userFullName', checked ? order : '');
      document.querySelector('#pageFacetSortSiteUser_userFullName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortSiteUser_userFullName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userFullName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-userName')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-SiteUser-userName').innerText == undefined);
    if (action === 'sort') {
      sort('SiteUser', 'userName', checked ? order : '');
      document.querySelector('#pageFacetSortSiteUser_userName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortSiteUser_userName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-SiteUser-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('SiteUser', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortSiteUser_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortSiteUser_editPage')?.addEventListener('change', (event) => {
    sort('SiteUser', 'editPage', event.currentTarget.value);
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
