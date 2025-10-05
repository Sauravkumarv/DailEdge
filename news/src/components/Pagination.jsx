import { ChevronLeft, ChevronRight } from "lucide-react";

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange, theme }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        margin: "80px 0 10px 0",
      }}
    >
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: "10px 16px",
          border: `2px solid ${
            currentPage === 1 ? theme.border : theme.accent
          }`,
          borderRadius: "12px",
          backgroundColor: currentPage === 1 ? theme.bg : theme.cardBg,
          color: currentPage === 1 ? theme.neutral : theme.accent,
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
          fontSize: "14px",
          fontWeight: "600",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          opacity: currentPage === 1 ? 0.4 : 1,
        }}
        onMouseEnter={(e) => {
          if (currentPage !== 1) {
            e.currentTarget.style.transform = "translateX(-2px)";
            e.currentTarget.style.boxShadow = `0 4px 12px ${theme.accent}30`;
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <ChevronLeft size={18} />
      </button>

      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span
            key={`ellipsis-${index}`}
            style={{
              padding: "10px 8px",
              color: theme.neutral,
              fontSize: "16px",
              fontWeight: "600",
              userSelect: "none",
            }}
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            style={{
              minWidth: "44px",
              height: "44px",
              border: `2px solid ${
                currentPage === page ? theme.accent : theme.border
              }`,
              borderRadius: "12px",
              backgroundColor:
                currentPage === page ? theme.accent : theme.cardBg,
              color: currentPage === page ? "#fff" : theme.text,
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "700",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow:
                currentPage === page ? `0 4px 12px ${theme.accent}40` : "none",
            }}
            onMouseEnter={(e) => {
              if (currentPage !== page) {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = theme.accent;
                e.currentTarget.style.boxShadow = `0 4px 12px ${theme.accent}20`;
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== page) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = theme.border;
                e.currentTarget.style.boxShadow = "none";
              }
            }}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        style={{
          padding: "10px 16px",
          border: `2px solid ${
            currentPage === totalPages ? theme.border : theme.accent
          }`,
          borderRadius: "12px",
          backgroundColor: currentPage === totalPages ? theme.bg : theme.cardBg,
          color: currentPage === totalPages ? theme.neutral : theme.accent,
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          fontSize: "14px",
          fontWeight: "600",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          opacity: currentPage === totalPages ? 0.4 : 1,
        }}
        onMouseEnter={(e) => {
          if (currentPage !== totalPages) {
            e.currentTarget.style.transform = "translateX(2px)";
            e.currentTarget.style.boxShadow = `0 4px 12px ${theme.accent}30`;
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
