import React from "react";
import { Pagination } from "antd";
import classes from "./Pagination.module.scss";
import Item from "../Item/item";
import urlCreator from "../../helper/urlCreator";
import Loading from "../loading/loading";
import { Empty } from "antd";
import { Link } from "react-router-dom";

const PaginationComponent = ({
  currentPage = [],
  currentPageNumber,
  onChange,
  totalPages,
  loading,
}) => {
  if (loading) {
    return <Loading />;
  }

  if (currentPage.length == 0) {
    return (
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
          marginTop: 10,
          marginBottom: 10,
        }}
        description={<span>No data found.</span>}
      ></Empty>
    );
  }
  return (
    <>
      <div className="filters"></div>
      <div className={classes.items}>
        {currentPage.map((item) => {
          return (
            <Link
              to={urlCreator(item.name)}
              key={item.char_id}
              style={{ color: "black" }}
            >
              <Item
                name={item.name}
                birthday={item.birthday}
                status={item.status}
                occupation={item.occupation}
              />
            </Link>
          );
        })}
      </div>
      <div className={classes.paginationButton}>
        <Pagination
          current={currentPageNumber}
          onChange={onChange}
          defaultCurrent={1}
          showSizeChanger={false}
          total={totalPages}
        />
      </div>
    </>
  );
};

export default PaginationComponent;
