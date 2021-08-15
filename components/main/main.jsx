import React, { useEffect, useState } from "react";
import Pagination from "../pagination/pagination";
import classes from "./main.module.scss";
import split from "../../helper/split";
import getAll from "../../lib/getAll";
import { Select } from "antd";
const { Option } = Select;
import { Input } from "antd";
import category from "../../helper/getCategory";
import getByCategory from "../../lib/getByCategory";
import getByName from "../../lib/getByName";
const { Search } = Input;

const Main = () => {
  const [paginatedPages, setPaginatedPages] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allCategory, setAllCategory] = useState([]);

  /**
   * Filling data in state
   * @param {Array} data
   * @return void
   */
  const dataFilling = (data = []) => {
    setTotalPages(data.length);
    let splitData = split(data, 10);
    setPaginatedPages(splitData);
    setCurrentPage(splitData[0]);
  };

  /**
   * Getting all data from getAll function
   * @return void
   */
  const getAllData = async () => {
    let allData = await getAll().catch((err) => console.error(err));
    setAllCategory(category(allData));
    dataFilling(allData);
    setLoading(false);
  };

  /**
   * Getting searched data as search value changed
   * @return void
   */
  const searchChanged = async (value) => {
    setLoading(true);
    if (value == "") {
      await getAllData();
    } else {
      const dataByName = await getByName(value.trim());
      dataFilling(dataByName);
      setLoading(false);
    }
  };

  /**
   * Getting category filtered data
   * @param {String} value
   * @return void
   */
  const optionChanged = async (value) => {
    setLoading(true);
    if (value === undefined) {
      await getAllData();
    } else {
      const dataByCategory = await getByCategory(value).catch((err) =>
        console.error(err)
      );
      dataFilling(dataByCategory);
      setLoading(false);
    }
  };

  /**
   * filtering data as per page number
   * @param {Integer} page
   * @return void
   */
  const onChangePage = (page) => {
    setCurrentPageNumber(page);
  };

  // triggering function on firs time on component load
  useEffect(async () => {
    await getAllData();
  }, []);

  // triggering function on change currentPageNumber
  useEffect(() => {
    if (paginatedPages.length) {
      setCurrentPage(paginatedPages[currentPageNumber - 1]);
    }
  }, [currentPageNumber]);

  return (
    <div id="main" className={classes.main}>
      <div className={classes.tableTitle}>Table of bad characters</div>
      <div className={classes.list}>
        <div className={classes.filters}>
          <div className={classes.select}>
            <span>FILTER BY CATEGORY:</span>
            <Select
              defaultValue=""
              style={{ width: "100%" }}
              onChange={optionChanged}
              allowClear
            >
              {allCategory.map((category) => {
                return (
                  <Option key={category} value={category}>
                    {category}
                  </Option>
                );
              })}
            </Select>
          </div>

          <div className={classes.input}>
            <Search
              placeholder="Search my name"
              onSearch={searchChanged}
              enterButton
              allowClear
            />
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          currentPageNumber={currentPageNumber}
          onChange={onChangePage}
          totalPages={totalPages}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Main;
