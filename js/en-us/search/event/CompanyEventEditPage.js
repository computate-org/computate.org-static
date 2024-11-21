Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

          // PATCH created
          document.querySelector('#fqCompanyEvent_created')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_created')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.value.split('[').pop().split(']')[0];
              var t1 = moment(event.currentTarget.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a');
              var t2 = moment.tz(event.currentTarget.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a', timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_created')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_created')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_archived')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_archived')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#fqCompanyEvent_name')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_name')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.reportValidity();
          });

          // PATCH location
          document.querySelector('#fqCompanyEvent_location')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_location')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_location')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_location')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setLocation', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_location')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_location')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#fqCompanyEvent_description')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_description')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH price
          document.querySelector('#fqCompanyEvent_price')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_price')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_price')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_price')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_price');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setPrice', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_price')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_price')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_price');
            const valid = form.reportValidity();
          });

          // PATCH pageId
          document.querySelector('#fqCompanyEvent_pageId')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_pageId')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setPageId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#fqCompanyEvent_displayPage')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_displayPage')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_displayPage')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_displayPage')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_displayPage')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH title
          document.querySelector('#Page_title')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setTitle', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_title')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_title')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.reportValidity();
          });

          // PATCH solrId
          document.querySelector('#Page_solrId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_solrId');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setSolrId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_solrId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_solrId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_solrId');
            const valid = form.reportValidity();
          });

          // PATCH emailTemplate
          document.querySelector('#fqCompanyEvent_emailTemplate')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_emailTemplate')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_emailTemplate')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_emailTemplate')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_emailTemplate');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setEmailTemplate', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_emailTemplate')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_emailTemplate')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_emailTemplate');
            const valid = form.reportValidity();
          });

          // PATCH storeUrl
          document.querySelector('#fqCompanyEvent_storeUrl')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_storeUrl')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_storeUrl')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_storeUrl')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_storeUrl');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setStoreUrl', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_storeUrl')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_storeUrl')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_storeUrl');
            const valid = form.reportValidity();
          });
});
