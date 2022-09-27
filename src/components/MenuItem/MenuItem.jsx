import { ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const MenuItem = ({ content, child, setDatas }) => {
    const handleClickItem = () => {
        if (child && setDatas) {
            setDatas((data) => {
                const newDatas = [...data, child];
                return newDatas;
            });
        }
    };

    return (
        <ListItem style={{ maxWidth: 500 }} button onClick={handleClickItem}>
            <ListItemText primary={content} />
            <ArrowForwardIcon />
        </ListItem>
    );
};

export default MenuItem;
