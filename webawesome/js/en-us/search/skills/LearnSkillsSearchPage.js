Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeLearnSkills')?.addEventListener('change', (event) => {
    facetRangeChange('LearnSkills', event.target.value);
  });

  document.querySelector('#pageSelectSortLearnSkills_created')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'created', true);
  });
  document.querySelector('#pageStatsLearnSkills_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'created', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_modified')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'modified', true);
  });
  document.querySelector('#pageStatsLearnSkills_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'modified', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_archived')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'archived', true);
  });
  document.querySelector('#pageStatsLearnSkills_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'archived', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_name')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'name', true);
  });
  document.querySelector('#pageStatsLearnSkills_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'name', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_description')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'description', true);
  });
  document.querySelector('#pageStatsLearnSkills_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'description', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_authorName')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'authorName', true);
  });
  document.querySelector('#pageStatsLearnSkills_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'authorName', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_authorUrl')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_authorUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'authorUrl', true);
  });
  document.querySelector('#pageStatsLearnSkills_authorUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'authorUrl', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_pageImageUri')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsLearnSkills_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_pageId')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'pageId', true);
  });
  document.querySelector('#pageStatsLearnSkills_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'pageId', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_displayPage')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'displayPage', true);
  });
  document.querySelector('#pageStatsLearnSkills_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_classCanonicalName')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsLearnSkills_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_classSimpleName')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsLearnSkills_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsLearnSkills_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_saves')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'saves', true);
  });
  document.querySelector('#pageStatsLearnSkills_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'saves', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_objectTitle')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'objectTitle', true);
  });
  document.querySelector('#pageStatsLearnSkills_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_editPage')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'editPage', true);
  });
  document.querySelector('#pageStatsLearnSkills_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'editPage', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_userPage')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'userPage', true);
  });
  document.querySelector('#pageStatsLearnSkills_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'userPage', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_download')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'download', true);
  });
  document.querySelector('#pageStatsLearnSkills_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'download', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_objectSuggest')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsLearnSkills_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_objectText')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'objectText', true);
  });
  document.querySelector('#pageStatsLearnSkills_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'objectText', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_solrId')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'solrId', true);
  });
  document.querySelector('#pageStatsLearnSkills_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'solrId', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_courseNum')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_courseNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'courseNum', true);
  });
  document.querySelector('#pageStatsLearnSkills_courseNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'courseNum', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_pageImageWidth')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsLearnSkills_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_pageImageHeight')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsLearnSkills_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'pageImageHeight', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_pageImageType')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'pageImageType', true);
  });
  document.querySelector('#pageStatsLearnSkills_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_pageImageAlt')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_pageImageAlt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'pageImageAlt', true);
  });
  document.querySelector('#pageStatsLearnSkills_pageImageAlt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'pageImageAlt', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_prerequisiteArticleIds')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'prerequisiteArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_prerequisiteArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'prerequisiteArticleIds', true);
  });
  document.querySelector('#pageStatsLearnSkills_prerequisiteArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'prerequisiteArticleIds', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_nextArticleIds')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'nextArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_nextArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'nextArticleIds', true);
  });
  document.querySelector('#pageStatsLearnSkills_nextArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'nextArticleIds', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_labelsString')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'labelsString', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_labelsString')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'labelsString', true);
  });
  document.querySelector('#pageStatsLearnSkills_labelsString')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'labelsString', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_labels')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'labels', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_labels')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'labels', true);
  });
  document.querySelector('#pageStatsLearnSkills_labels')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'labels', false);
  });

  document.querySelector('#pageSelectSortLearnSkills_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('LearnSkills', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsLearnSkills_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('LearnSkills', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsLearnSkills_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('LearnSkills', 'relatedArticleIds', false);
  });
          document.querySelector('#fqLearnSkills_created')?.addEventListener('change', (event) => {
            fqChange('LearnSkills', event.currentTarget, facetChangeLearnSkillsSuccess, facetChangeLearnSkillsError);
          });
          document.querySelector('#buttonFacetLearnSkills_created')?.addEventListener('click', (event) => {
            facetFieldChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotLearnSkills_created')?.addEventListener('change', (event) => {
            facetPivotChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapLearnSkills_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartLearnSkills_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndLearnSkills_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#fqLearnSkills_name')?.addEventListener('change', (event) => {
            fqChange('LearnSkills', event.currentTarget, facetChangeLearnSkillsSuccess, facetChangeLearnSkillsError);
          });
          document.querySelector('#buttonFacetLearnSkills_name')?.addEventListener('click', (event) => {
            facetFieldChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotLearnSkills_name')?.addEventListener('change', (event) => {
            facetPivotChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapLearnSkills_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartLearnSkills_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndLearnSkills_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#fqLearnSkills_description')?.addEventListener('change', (event) => {
            fqChange('LearnSkills', event.currentTarget, facetChangeLearnSkillsSuccess, facetChangeLearnSkillsError);
          });
          document.querySelector('#buttonFacetLearnSkills_description')?.addEventListener('click', (event) => {
            facetFieldChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotLearnSkills_description')?.addEventListener('change', (event) => {
            facetPivotChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapLearnSkills_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartLearnSkills_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndLearnSkills_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#fqLearnSkills_authorName')?.addEventListener('change', (event) => {
            fqChange('LearnSkills', event.currentTarget, facetChangeLearnSkillsSuccess, facetChangeLearnSkillsError);
          });
          document.querySelector('#buttonFacetLearnSkills_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotLearnSkills_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapLearnSkills_authorName')?.addEventListener('change', (event) => {
            facetRangeGapChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartLearnSkills_authorName')?.addEventListener('change', (event) => {
            facetRangeStartChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndLearnSkills_authorName')?.addEventListener('change', (event) => {
            facetRangeEndChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#fqLearnSkills_authorUrl')?.addEventListener('change', (event) => {
            fqChange('LearnSkills', event.currentTarget, facetChangeLearnSkillsSuccess, facetChangeLearnSkillsError);
          });
          document.querySelector('#buttonFacetLearnSkills_authorUrl')?.addEventListener('click', (event) => {
            facetFieldChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotLearnSkills_authorUrl')?.addEventListener('change', (event) => {
            facetPivotChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapLearnSkills_authorUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartLearnSkills_authorUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndLearnSkills_authorUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#fqLearnSkills_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('LearnSkills', event.currentTarget, facetChangeLearnSkillsSuccess, facetChangeLearnSkillsError);
          });
          document.querySelector('#buttonFacetLearnSkills_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotLearnSkills_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapLearnSkills_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartLearnSkills_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndLearnSkills_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#fqLearnSkills_pageId')?.addEventListener('change', (event) => {
            fqChange('LearnSkills', event.currentTarget, facetChangeLearnSkillsSuccess, facetChangeLearnSkillsError);
          });
          document.querySelector('#buttonFacetLearnSkills_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotLearnSkills_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapLearnSkills_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartLearnSkills_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndLearnSkills_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#fqLearnSkills_displayPage')?.addEventListener('change', (event) => {
            fqChange('LearnSkills', event.currentTarget, facetChangeLearnSkillsSuccess, facetChangeLearnSkillsError);
          });
          document.querySelector('#buttonFacetLearnSkills_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotLearnSkills_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapLearnSkills_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartLearnSkills_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndLearnSkills_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#fqLearnSkills_editPage')?.addEventListener('change', (event) => {
            fqChange('LearnSkills', event.currentTarget, facetChangeLearnSkillsSuccess, facetChangeLearnSkillsError);
          });
          document.querySelector('#buttonFacetLearnSkills_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotLearnSkills_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapLearnSkills_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartLearnSkills_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndLearnSkills_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#fqLearnSkills_userPage')?.addEventListener('change', (event) => {
            fqChange('LearnSkills', event.currentTarget, facetChangeLearnSkillsSuccess, facetChangeLearnSkillsError);
          });
          document.querySelector('#buttonFacetLearnSkills_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotLearnSkills_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapLearnSkills_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartLearnSkills_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndLearnSkills_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#fqLearnSkills_download')?.addEventListener('change', (event) => {
            fqChange('LearnSkills', event.currentTarget, facetChangeLearnSkillsSuccess, facetChangeLearnSkillsError);
          });
          document.querySelector('#buttonFacetLearnSkills_download')?.addEventListener('click', (event) => {
            facetFieldChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotLearnSkills_download')?.addEventListener('change', (event) => {
            facetPivotChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapLearnSkills_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartLearnSkills_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndLearnSkills_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#fqLearnSkills_courseNum')?.addEventListener('change', (event) => {
            fqChange('LearnSkills', event.currentTarget, facetChangeLearnSkillsSuccess, facetChangeLearnSkillsError);
          });
          document.querySelector('#buttonFacetLearnSkills_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotLearnSkills_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapLearnSkills_courseNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartLearnSkills_courseNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('LearnSkills', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndLearnSkills_courseNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('LearnSkills', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteLearnSkills')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteLearnSkills(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterLearnSkills')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterLearnSkills(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
