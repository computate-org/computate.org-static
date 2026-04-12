Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#SpineDoc_Page_created')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.getAttribute('data-zone');
              var t1 = moment(event.currentTarget.value, "YYYY-MM-DDTHH:mm");
              var t2 = moment.tz(event.currentTarget.value, "YYYY-MM-DDTHH:mm", timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#SpineDoc_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#SpineDoc_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#SpineDoc_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH authorName
          document.querySelector('#SpineDoc_Page_authorName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_authorName');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setAuthorName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_authorName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_authorName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_authorName');
            const valid = form.reportValidity();
          });

          // PATCH authorUrl
          document.querySelector('#SpineDoc_Page_authorUrl')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_authorUrl');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setAuthorUrl', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_authorUrl')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_authorUrl')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_authorUrl');
            const valid = form.reportValidity();
          });

          // PATCH pageImageUri
          document.querySelector('#SpineDoc_Page_pageImageUri')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_pageImageUri');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setPageImageUri', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_pageImageUri')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_pageImageUri')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_pageImageUri');
            const valid = form.reportValidity();
          });

          // PATCH pageId
          document.querySelector('#SpineDoc_Page_pageId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setPageId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_pageId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_pageId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#SpineDoc_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#SpineDoc_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#SpineDoc_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#SpineDoc_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#SpineDoc_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH solrId
          document.querySelector('#SpineDoc_Page_solrId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_solrId');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setSolrId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_solrId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_solrId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_solrId');
            const valid = form.reportValidity();
          });

          // PATCH importance
          document.querySelector('#SpineDoc_Page_importance')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_importance');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setImportance', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_importance')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_importance')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_importance');
            const valid = form.reportValidity();
          });

          // PATCH commentVar
          document.querySelector('#SpineDoc_Page_commentVar')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_commentVar');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setCommentVar', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_commentVar')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_commentVar')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_commentVar');
            const valid = form.reportValidity();
          });

          // PATCH javaType
          document.querySelector('#SpineDoc_Page_javaType')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_javaType');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setJavaType', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_javaType')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_javaType')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_javaType');
            const valid = form.reportValidity();
          });

          // PATCH javaClass
          document.querySelector('#SpineDoc_Page_javaClass')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_javaClass');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setJavaClass', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_javaClass')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_javaClass')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_javaClass');
            const valid = form.reportValidity();
          });

          // PATCH sinceVersion
          document.querySelector('#SpineDoc_Page_sinceVersion')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sinceVersion');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setSinceVersion', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_sinceVersion')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_sinceVersion')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sinceVersion');
            const valid = form.reportValidity();
          });

          // PATCH supportStatus
          document.querySelector('#SpineDoc_Page_supportStatus')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_supportStatus');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setSupportStatus', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_supportStatus')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_supportStatus')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_supportStatus');
            const valid = form.reportValidity();
          });

          // PATCH exampleValue
          document.querySelector('#SpineDoc_Page_exampleValue')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_exampleValue');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setExampleValue', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_exampleValue')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_exampleValue')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_exampleValue');
            const valid = form.reportValidity();
          });

          // PATCH exampleCode
          document.querySelector('#SpineDoc_Page_exampleCode')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_exampleCode');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setExampleCode', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_exampleCode')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_exampleCode')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_exampleCode');
            const valid = form.reportValidity();
          });

          // PATCH copyCode
          document.querySelector('#SpineDoc_Page_copyCode')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_copyCode');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setCopyCode', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_copyCode')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_copyCode')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_copyCode');
            const valid = form.reportValidity();
          });

          // PATCH courseNum
          document.querySelector('#SpineDoc_Page_courseNum')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_courseNum');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setCourseNum', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_courseNum')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_courseNum')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_courseNum');
            const valid = form.reportValidity();
          });

          // PATCH lessonNum
          document.querySelector('#SpineDoc_Page_lessonNum')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_lessonNum');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setLessonNum', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_lessonNum')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_lessonNum')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_lessonNum');
            const valid = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#SpineDoc_Page_name')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_name')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_name')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#SpineDoc_Page_description')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_description')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_description')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH pageVideoUrl
          document.querySelector('#SpineDoc_Page_pageVideoUrl')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_pageVideoUrl');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setPageVideoUrl', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_pageVideoUrl')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_pageVideoUrl')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_pageVideoUrl');
            const valid = form.reportValidity();
          });

          // PATCH pageImageAlt
          document.querySelector('#SpineDoc_Page_pageImageAlt')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_pageImageAlt');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setPageImageAlt', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_pageImageAlt')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_pageImageAlt')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_pageImageAlt');
            const valid = form.reportValidity();
          });

          // PATCH prerequisiteArticleIds
          document.querySelector('#SpineDoc_Page_prerequisiteArticleIds')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_prerequisiteArticleIds');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setPrerequisiteArticleIds', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_prerequisiteArticleIds')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_prerequisiteArticleIds')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_prerequisiteArticleIds');
            const valid = form.reportValidity();
          });

          // PATCH nextArticleIds
          document.querySelector('#SpineDoc_Page_nextArticleIds')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_nextArticleIds');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setNextArticleIds', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_nextArticleIds')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_nextArticleIds')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_nextArticleIds');
            const valid = form.reportValidity();
          });

          // PATCH labelsString
          document.querySelector('#SpineDoc_Page_labelsString')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_labelsString');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setLabelsString', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_labelsString')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_labelsString')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_labelsString');
            const valid = form.reportValidity();
          });

          // PATCH labels
          document.querySelector('#SpineDoc_Page_labels')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_labels');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setLabels', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_labels')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_labels')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_labels');
            const valid = form.reportValidity();
          });

          // PATCH relatedArticleIds
          document.querySelector('#SpineDoc_Page_relatedArticleIds')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_relatedArticleIds');
            const valid = form.checkValidity();
            if(valid) {
              patchSpineDocVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setRelatedArticleIds', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#SpineDoc_Page_relatedArticleIds')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#SpineDoc_Page_relatedArticleIds')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_relatedArticleIds');
            const valid = form.reportValidity();
          });
});
