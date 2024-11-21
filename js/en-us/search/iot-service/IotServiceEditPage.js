Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

          // PATCH created
          document.querySelector('#fqIotService_created')?.addEventListener('sl-change', (event) => {
            fqChange('IotService', event.target);
          });
          document.querySelector('#buttonFacetIotService_created')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
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
                patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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
          document.querySelector('#fqIotService_archived')?.addEventListener('sl-change', (event) => {
            fqChange('IotService', event.target);
          });
          document.querySelector('#buttonFacetIotService_archived')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_archived')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
          });
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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

          // PATCH entityType
          document.querySelector('#fqIotService_entityType')?.addEventListener('sl-change', (event) => {
            fqChange('IotService', event.target);
          });
          document.querySelector('#buttonFacetIotService_entityType')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_entityType')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
          });
          document.querySelector('#Page_entityType')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_entityType');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setEntityType', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_entityType')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_entityType')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_entityType');
            const valid = form.reportValidity();
          });

          // PATCH apiKey
          document.querySelector('#fqIotService_apiKey')?.addEventListener('sl-change', (event) => {
            fqChange('IotService', event.target);
          });
          document.querySelector('#buttonFacetIotService_apiKey')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_apiKey')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
          });
          document.querySelector('#Page_apiKey')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_apiKey');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setApiKey', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_apiKey')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_apiKey')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_apiKey');
            const valid = form.reportValidity();
          });

          // PATCH resource
          document.querySelector('#fqIotService_resource')?.addEventListener('sl-change', (event) => {
            fqChange('IotService', event.target);
          });
          document.querySelector('#buttonFacetIotService_resource')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_resource')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
          });
          document.querySelector('#Page_resource')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_resource');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setResource', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_resource')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_resource')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_resource');
            const valid = form.reportValidity();
          });

          // PATCH ngsildTenant
          document.querySelector('#fqIotService_ngsildTenant')?.addEventListener('sl-change', (event) => {
            fqChange('IotService', event.target);
          });
          document.querySelector('#buttonFacetIotService_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_ngsildTenant')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setNgsildTenant', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.reportValidity();
          });

          // PATCH ngsildPath
          document.querySelector('#fqIotService_ngsildPath')?.addEventListener('sl-change', (event) => {
            fqChange('IotService', event.target);
          });
          document.querySelector('#buttonFacetIotService_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_ngsildPath')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setNgsildPath', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.reportValidity();
          });

          // PATCH cbHost
          document.querySelector('#fqIotService_cbHost')?.addEventListener('sl-change', (event) => {
            fqChange('IotService', event.target);
          });
          document.querySelector('#buttonFacetIotService_cbHost')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_cbHost')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
          });
          document.querySelector('#Page_cbHost')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_cbHost');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setCbHost', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_cbHost')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_cbHost')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_cbHost');
            const valid = form.reportValidity();
          });

          // PATCH attributes
          document.querySelector('#fqIotService_attributes')?.addEventListener('sl-change', (event) => {
            fqChange('IotService', event.target);
          });
          document.querySelector('#buttonFacetIotService_attributes')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_attributes')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
          });
          document.querySelector('#Page_attributes')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_attributes');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setAttributes', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_attributes')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_attributes')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_attributes');
            const valid = form.reportValidity();
          });

          // PATCH pageId
          document.querySelector('#fqIotService_pageId')?.addEventListener('sl-change', (event) => {
            fqChange('IotService', event.target);
          });
          document.querySelector('#buttonFacetIotService_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_pageId')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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
          document.querySelector('#fqIotService_displayPage')?.addEventListener('sl-change', (event) => {
            fqChange('IotService', event.target);
          });
          document.querySelector('#buttonFacetIotService_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_displayPage')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
          });
          document.querySelector('#Page_displayPage')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_sessionId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_sessionId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Page_userKey')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userKey')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userKey')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH title
          document.querySelector('#Page_title')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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
});
