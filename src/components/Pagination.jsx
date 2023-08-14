const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <div className={`flex flex-wrap text-lg w-full mt-2 mb-4 ml-2`}>
      {" "}
      Go to page:
      {pages.map((page) => (
        <button
          className={`${
            currentPage === page &&
            "ml-4 text-red-500 bg-[#e0ffff] hover:bg-violet-600 w-[25px] h-[25px] rounded-full"
          } "ml-4 text-blue bg-[#333] hover:bg-violet-600 w-[25px] h-[25px] rounded-full`}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
