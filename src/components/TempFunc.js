import React from "react";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {withStyles} from "@material-ui/core/styles";
import Temperature from "./Temperature";

const cardStyles = theme => ({
    root: {
        background: theme.palette.primary.main
    },
    title: {
        color: "white"
    }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const styles = {
    card: {
        margin: "2% 25%"
    }
};

const DataDisplay = props => {
    const {classes} = props;
    return (
        <Card className={classes.card}>
            <CardHeader title="Temperature vs Time Chart"/>
            <CardContent style={{width: "100%", height: "100%"}}>
                <Temperature/>
            </CardContent>
        </Card>
    );
};

export default withStyles(styles)(DataDisplay);
