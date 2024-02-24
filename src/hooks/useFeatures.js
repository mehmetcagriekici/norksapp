import { usePagination } from "./usePagination";

export function useFeatures({ page, displayPerPage, data }) {
  const display = usePagination({
    array: data,
    displayPerPage,
    pageNum: page,
  });

  const totalPages = Math.ceil(data.length / displayPerPage);

  return { display, totalPages };
}
