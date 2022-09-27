import { ListItem, ListItemText, makeStyles } from "@material-ui/core";
import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
    item: {
        minWidth: 500,
        "&:hover": {
            backgroundColor: "rgba(90, 200, 250, 0.25)",
        },
    },
    text: {
        fontSize: 14,
    },
}));

const MenuItem = ({ content, child, setDatas }) => {
    const classes = useStyles();
    const handleClickItem = () => {
        if (child && setDatas) {
            setDatas((data) => {
                const newDatas = [...data, child];
                return newDatas;
            });
        }
    };

    return (
        <ListItem className={classes.item} button onClick={handleClickItem}>
            <ListItemText
                primary={content}
                classes={{ primary: classes.text }}
            />
            <ArrowForwardIcon fontSize="small" style={{ color: "grey" }} />
        </ListItem>
    );
};

export default MenuItem;
