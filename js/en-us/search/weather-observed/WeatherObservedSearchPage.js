Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeWeatherObserved')?.addEventListener('sl-change', (event) => {
    facetRangeChange('WeatherObserved', event.target.value);
  });

  document.querySelector('#htmDropdown_name')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('WeatherObserved', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('WeatherObserved', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('WeatherObserved', item.value, item.checked);
    }
  });

  document.querySelector('#htmButton_patchWeatherObserved')?.addEventListener('click', (event) => {
    document.querySelector('#patchWeatherObservedDialog').show();
  });

  document.querySelector('#htmButton_postWeatherObserved')?.addEventListener('click', (event) => {
    document.querySelector('#postWeatherObservedDialog').show();
  });

  document.querySelector('#htmButton_deleteWeatherObserved')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityId =  event.currentTarget.getAttribute('data-entityId');
      deleteWeatherObserved(
          event.currentTarget
          , entityId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportWeatherObserved')?.addEventListener('click', (event) => {
    document.querySelector('#putimportWeatherObservedDialog').show();
  });

  document.querySelector('#htmButton_searchpageWeatherObserved')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageWeatherObservedDialog').show();
  });
});
