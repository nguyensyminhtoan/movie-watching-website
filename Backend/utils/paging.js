const paging=(page,movies)=>{
  
  const itemsPerPage =20;
  // Tính index bắt đầu của phần tử trên trang hiện tại
 const startIndex = (page-1)*itemsPerPage
 
 
  // Chia dữ liệu thành các trang 
  const paginatedTrendingMovie=movies.slice(startIndex,startIndex + itemsPerPage)
  const total_page=Math.ceil(movies.length/itemsPerPage)
  const response={
   results:paginatedTrendingMovie,
   page:page,
   total_page:total_page
  };
  return response
}
module.exports = paging