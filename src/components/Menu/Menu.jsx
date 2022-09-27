import { IconButton, List } from "@material-ui/core";
import React, { useState } from "react";
import checkDataType from "../../utils/checkDataType";
import MenuItem from "../MenuItem/MenuItem";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Menu = ({ json }) => {
    const [datas, setDatas] = useState([json]);

    const onGoBack = () => {
        // remove the last element of data
        const newArr = datas.slice(0, -1);
        setDatas(newArr);
    };

    const parent = datas.length > 1 ? datas[datas.length - 2] : undefined;

    // get the last element of datas
    const lastData = datas[datas.length - 1];
    const type = checkDataType(lastData);

    return (
        <div>
            {parent && (
                <IconButton onClick={onGoBack}>
                    <ArrowBackIcon />
                </IconButton>
            )}
            <List>
                {type === "object" ? (
                    Object.keys(lastData).map((key, index) => (
                        <MenuItem
                            content={key}
                            child={lastData[key]}
                            setDatas={setDatas}
                        />
                    ))
                ) : type === "array" ? (
                    lastData.map((item, index) => {
                        // case of a objects or array of arrays
                        if (
                            checkDataType(item) === "array" ||
                            checkDataType(item) === "object"
                        ) {
                            return (
                                <MenuItem
                                    content={`item ${index}`}
                                    child={lastData[index]}
                                    setDatas={setDatas}
                                />
                            );
                        }
                        // case of a simple array of strings or numbers or booleans ...
                        return <MenuItem content={item} />;
                    })
                ) : (
                    <MenuItem content={lastData} />
                )}
            </List>
        </div>
    );
};

export default Menu;
