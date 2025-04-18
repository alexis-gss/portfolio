import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1).map(
      (page) => (
        <Button
          key={page}
          className="cursor-pointer hover:-translate-y-0.5 focus:-translate-y-0.5"
          onClick={() => onPageChange(page)}
          variant={page === currentPage ? "secondary" : "default"}
          disabled={page === currentPage}
          aria-label={`Access to the page n°${page}`}
        >
          {page}
        </Button>
      )
    );
  };

  return (
    <div className="flex justify-center items-center gap-x-4 mt-4 lg:mt-0">
      {totalItems > itemsPerPage && (
        <>
          <Button
            className="cursor-pointer gap-1 hover:-translate-y-0.5 focus:-translate-y-0.5"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            aria-label="Access to the previous page"
          >
            <ChevronLeft />
            <span className="hidden sm:block mb-[2px]">Previous</span>
          </Button>
          {renderPageNumbers()}
          <Button
            className="cursor-pointer gap-1 hover:-translate-y-0.5 focus:-translate-y-0.5"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="Access to the next page"
          >
            <span className="hidden sm:block mb-[2px]">Next</span>
            <ChevronRight />
          </Button>
        </>
      )}
    </div>
  );
};

export default Pagination;
