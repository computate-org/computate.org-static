Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

          document.querySelector('#htmButton_patchIotService')?.addEventListener('click', (event) => {
            document.querySelector('#patchIotServiceDialog').show();
          });

          document.querySelector('#htmButton_postIotService')?.addEventListener('click', (event) => {
            document.querySelector('#postIotServiceDialog').show();
          });

          document.querySelector('#htmButton_deleteIotService')?.addEventListener('click', (event) => {
            var confirmResponse = confirm('Are you sure you want to delete that?'); 
            if(confirmResponse) { 
              var pk =  event.currentTarget.getAttribute('data-pk');
              deleteIotService([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + pk }]
                  , event.currentTarget
                  , pk
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });

          document.querySelector('#htmButton_putimportIotService')?.addEventListener('click', (event) => {
            document.querySelector('#putimportIotServiceDialog').show();
          });

          document.querySelector('#htmButton_searchpageIotService')?.addEventListener('click', (event) => {
            document.querySelector('#searchpageIotServiceDialog').show();
          });

          // PATCH created
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
                patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
                patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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

          // PATCH uri
          document.querySelector('#buttonFacetIotService_uri')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_uri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_uri');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_uri');
            const valid = form.reportValidity();
          });

          // PATCH url
          document.querySelector('#buttonFacetIotService_url')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_url')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
          });
          document.querySelector('#Page_url')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_url');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setUrl', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_url')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_url')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_url');
            const valid = form.reportValidity();
          });

          // PATCH cbHost
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
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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

          // PATCH resource
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
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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

          // PATCH pageId
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
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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

          // PATCH attributes
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
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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

          // PATCH ngsildTenant
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
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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

          // PATCH inheritPk
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setInheritPk', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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

          // PATCH resourceUri
          document.querySelector('#buttonFacetIotService_resourceUri')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_resourceUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_resourceUri');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setResourceUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_resourceUri');
            const valid = form.reportValidity();
          });

          // PATCH templateUri
          document.querySelector('#buttonFacetIotService_templateUri')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.target);
          });
          document.querySelector('#pageFacetPivotIotService_templateUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('IotService', event.target);
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_templateUri');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setTemplateUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_templateUri');
            const valid = form.reportValidity();
          });

          // PATCH title
          document.querySelector('#Page_title')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.checkValidity();
            if(valid) {
              patchIotServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
