const paginate = (data) => {


  const itemsPerPage = 10

  /*Create Iteration Factor */
  const numberOfPages = Math.ceil(data.length / itemsPerPage)

  const slicedPages = Array.from({ length: numberOfPages }, (item, index) => {

    /* Get Page Start and End  */
    const pageStart = index * itemsPerPage
    const pageEnd = pageStart + itemsPerPage

    /* Return Sliced Portion  of Data Array */
    return data.slice(pageStart, pageEnd)

  })



  return slicedPages

}

export default paginate
