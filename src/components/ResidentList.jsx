import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";
import "./styles/ResidentList.css";

// The magic string number that controls the initial page
const INITIAL_PAGE = 1;
const ResidentList = ({ residents, currentLocation }) => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  // The magic string number that says how many residents are shown in every page
  const RESIDENTS_PER_PAGE = 20;

  // How many pages are based on total residents divided by the residents per page

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  // Residents that are gonna be shown in the current page

  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  // To generate the array for the pages that are gonna be shown, [...Array(totalPages).keys()]
  // generates an array between 0 and TotalPages where the last element is TotalPages - 1
  // then map function increments by 1 every element of the array

  const pages = [...Array(totalPages).keys()].map((i) => i + 1);

  useEffect(() => {
    setCurrentPage(INITIAL_PAGE);
  }, [currentLocation]);

  window.scrollTo(0, 0);
  return (
    <section>
      <section>
        <Pagination
          key={`pagination-${currentPage} ?? ""`} // Adding a unique key prop
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2">
        {residentsInPage.map((resident) => (
          <ResidentCard key={`${resident} ?? ""`} residentUrl={resident} />
        ))}
      </section>
      <section>
        <Pagination
          key={`pagination-${currentPage} ?? ""`} // Adding a unique key prop
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </section>
    </section>
  );
};

export default ResidentList;
