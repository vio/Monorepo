export default /* GraphQL */`
  query AllSurveys {
    surveys {
      slug
      hashtag
      name
      domain
      editions {
        surveyId
        createdAt
        year
        status
        shareUrl
        resultsUrl
        imageUrl
      }
    }  
    locales {
      id
      label
    }
  }
`