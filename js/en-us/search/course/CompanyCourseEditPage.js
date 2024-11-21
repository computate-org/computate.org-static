Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

          // PATCH created
          document.querySelector('#fqCompanyCourse_created')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
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
                patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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
                patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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
          document.querySelector('#fqCompanyCourse_name')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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

          // PATCH description
          document.querySelector('#fqCompanyCourse_description')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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
          document.querySelector('#fqCompanyCourse_price')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_price')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_price')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_price')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_price');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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

          // PATCH displayPage
          document.querySelector('#fqCompanyCourse_displayPage')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_displayPage')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_displayPage')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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

          // PATCH pageId
          document.querySelector('#fqCompanyCourse_pageId')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_pageId')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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
          document.querySelector('#fqCompanyCourse_displayPage')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_displayPage')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_displayPage')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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
          document.querySelector('#fqCompanyCourse_emailTemplate')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_emailTemplate')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_emailTemplate')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_emailTemplate')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_emailTemplate');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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
          document.querySelector('#fqCompanyCourse_storeUrl')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_storeUrl')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_storeUrl')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_storeUrl')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_storeUrl');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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

          // PATCH downloadUri
          document.querySelector('#fqCompanyCourse_downloadUri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_downloadUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_downloadUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_downloadUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_downloadUri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setDownloadUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_downloadUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_downloadUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_downloadUri');
            const valid = form.reportValidity();
          });

          // PATCH courseNum
          document.querySelector('#fqCompanyCourse_courseNum')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_courseNum')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_courseNum')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_courseNum');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setCourseNum', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_courseNum')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_courseNum')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_courseNum');
            const valid = form.reportValidity();
          });

          // PATCH title
          document.querySelector('#Page_title')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
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
