Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSitePage')?.addEventListener('change', (event) => {
    facetRangeChange('SitePage', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-SitePage-name').innerText == undefined);
    if (action === 'sort') {
      sort('SitePage', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortSitePage_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortSitePage_name')?.addEventListener('change', (event) => {
    sort('SitePage', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-SitePage-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('SitePage', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortSitePage_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortSitePage_editPage')?.addEventListener('change', (event) => {
    sort('SitePage', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchSitePage')?.addEventListener('click', (event) => {
    document.querySelector('#patchSitePageDialog').open = true;
  });

  document.querySelector('#htmButton_postSitePage')?.addEventListener('click', (event) => {
    document.querySelector('#postSitePageDialog').open = true;
  });

  document.querySelector('#htmButton_putimportSitePage')?.addEventListener('click', (event) => {
    document.querySelector('#putimportSitePageDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageSitePage')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageSitePageDialog').open = true;
  });
          document.querySelector('#fqSitePage_created')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_created')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_created')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_author')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_author')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_author')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_pageId')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_displayPage')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_courseNum')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_lessonNum')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_lessonNum')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_lessonNum')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
});
