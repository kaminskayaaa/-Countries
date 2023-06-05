import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CountryList from "./CountryList";
import Pagination from "../../components/Pagination";

function Home() {
  const [allCountry, setAllCountry] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("currentPage")) || 1
  );
  const [countItems, setCountItems] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const lastCountryIndex = currentPage * countItems;
  const firstCountryIndex = lastCountryIndex - countItems;
  const currentCountry = allCountry
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(firstCountryIndex, lastCountryIndex);

  const totalItems = allCountry.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginate = (pageNumber) => {
    sessionStorage.setItem("currentPage", pageNumber);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("https://restcountries.com/v3.1/all");
        const resultAddId = result.data.map((item, ind) => {
          return { ...item, id: ind + 1 };
        });
        setAllCountry(resultAddId);
      } catch {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  if (allCountry.length === 0) return <div>Loading....</div>;

  return (
    <>
      <h1 className="list"> Countries list </h1>
      <div>
        <div>
          <CountryList allCountry={currentCountry} />
        </div>
      </div>

      <Pagination
        countItems={countItems}
        totalItems={totalItems}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}
export default Home;
