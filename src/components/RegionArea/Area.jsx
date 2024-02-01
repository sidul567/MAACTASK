import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import background3 from "../../images/background3.png";
import { Link, useNavigate } from "react-router-dom";
import RegionHeader from "./RegionHeader";
import { useDispatch, useSelector } from "react-redux";
import SidePanel from "./SidePanel";
import { BiSearchAlt } from "react-icons/bi";
import { getAreaAction } from "../../actions/regionAreaAction";
import RegionFooter from "./RegionFooter";

function Area() {
  const { data: countryList } = useSelector((state) => state.area);
  const [filtererdCountryList, setFilteredCountryList] = useState([]);
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState(10);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAreaAction());
  }, [dispatch]);

  useEffect(() => {
    const filteredCountry =
      countryList &&
      countryList.filter(
        (country, index) =>
          country.name.toLowerCase().includes(search.toLowerCase()) ||
          country.capital.toLowerCase().includes(search.toLowerCase())
      );
    setFilteredCountryList(
      filteredCountry ? filteredCountry.slice(0, number) : []
    );
  }, [search, number, countryList]);

  return (
    <>
      <RegionHeader />
      <div className="flex">
        <SidePanel active="area" />
        <div className="flex w-full flex-col">
          <div className="mt-20 px-6 py-6 bg-[#F8F8FB] w-full h-full">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">Area List</h3>
                <p className="text-sm font-light flex gap-2 items-center mt-2">
                  Geo
                  <MdKeyboardArrowRight size={20} fill="#77838F" />
                  <span className="font-normal text-[#0052CC]">
                    Geo List
                  </span>{" "}
                </p>
              </div>
              {countryList && countryList.length === 0 && (
                <button className="bg-[#0B2E4E] font-normal text-white text-sm cursor-pointer px-4 py-2 rounded-xl" onClick={()=>navigate("/createArea")}>
                  + Create New
                </button>
              )}
            </div>
            <div className="w-[100%] h-[65vh] bg-white mt-8">
              {countryList && countryList.length === 0 && (
                <div className="flex justify-center items-center flex-col gap-8 h-full">
                  <img src={background3} alt="" />
                  <p className="text-sm text-center font-normal w-[220px] text-[#9FA3A6]">
                    Currently you have no Data. For next step first{" "}
                    <Link to="/createArea" className="text-[#556EE6]">
                      Create Area
                    </Link>
                  </p>
                </div>
              )}
              {countryList && countryList.length > 0 && (
                <>
                  <div className="flex gap-3 justify-end py-5 pr-3">
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border border-[#CED4DA] outline-none text-sm font-semibold rounded-full text-[#74788D] p-1 pl-8 w-[220px]"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <BiSearchAlt
                        fill="#495057"
                        size={19}
                        className="absolute ml-2 mt-0.5"
                      />
                    </div>
                    <select
                      name=""
                      id=""
                      className="border border-[#CED4DA] outline-none text-sm font-semibold rounded-full text-[#74788D] p-1 px-2 w-[250px]"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    >
                      <option value="10">10</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                      <option value="200">200</option>
                      <option value="300">300</option>
                    </select>
                  </div>
                  <div className="w-full h-full">
                    <div className="bg-[#F8F9FA] text-left text-sm border-b border-b-[#EFF2F7] hover:bg-[#F8F9FA] hover:cursor-pointer duration-200 flex items-center">
                      <div className="w-[10%]">
                        <input
                          type="checkbox"
                          name=""
                          className="input py-3 cursor-pointer"
                          id=""
                        />
                      </div>
                      <p className="w-[12%] font-semibold py-3">SL No.</p>
                      <p className="w-[19%] font-semibold py-3">Region</p>
                      <p className="w-[59%] font-semibold py-3">Area</p>
                    </div>
                    <div className="h-[80%] overflow-auto">
                      {filtererdCountryList.map((country, index) => (
                        <div className="text-left text-xs text-[#495057] border-b border-b-[#EFF2F7] hover:bg-[#F8F9FA] hover:cursor-pointer duration-200 flex items-center">
                          <div className="w-[10%]">
                            <input
                              type="checkbox"
                              name=""
                              className="input py-4 cursor-pointer"
                              id=""
                            />
                          </div>
                          <p className="w-[12%] font-normal py-4">
                            {index + 1}
                          </p>
                          <p className="w-[20%] font-normal py-4">
                            {country.name}
                          </p>
                          <p className="w-[58%] font-normal py-4">
                            {country.capital}
                          </p>
                        </div>
                      ))}
                      {filtererdCountryList.length === 0 && (
                        <p className="text-sm text-[#495057] flex justify-center items-center font-normal h-full">
                          No Country Found!
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
         <RegionFooter />
        </div>
      </div>
    </>
  );
}

export default Area;
