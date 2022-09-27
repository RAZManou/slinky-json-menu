import { IconButton, List } from "@material-ui/core";
import React, { useState } from "react";
import checkDataType from "../../utils/checkDataType";
import MenuItem from "../MenuItem/MenuItem";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Menu = ({ json }) => {
    const [datas, setDatas] = useState([json]);

    // get the last element of data
    const lastData = datas[datas.length - 1];
    const type = checkDataType(lastData);

    const dataToDisplay =
        type === "object"
            ? Object.keys(lastData).map((key, index) => (
                  <MenuItem
                      content={key}
                      children={lastData[key]}
                      setDatas={setDatas}
                  />
              ))
            : lastData.map((key, index) => (
                  <MenuItem
                      content={key}
                      children={lastData[key]}
                      setDatas={setDatas}
                  />
              ));

    const onGoBack = () => {
        // remove the last element of data
        const newArr = datas.slice(0, -1);
        setDatas(newArr);
    };

    const parent = datas.length > 1 ? datas[datas.length - 2] : undefined;

    return (
        <div>
            {parent && (
                <IconButton onClick={onGoBack}>
                    <ArrowBackIcon />
                </IconButton>
            )}
            <List>{dataToDisplay}</List>
        </div>
    );
};

export default Menu;
