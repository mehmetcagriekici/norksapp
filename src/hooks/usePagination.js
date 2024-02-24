export function usePagination({ array, displayPerPage, pageNum }) {
  return array.slice(
    pageNum * displayPerPage,
    pageNum * displayPerPage + displayPerPage
  );
}
