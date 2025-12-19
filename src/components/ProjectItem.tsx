import ProjectItemProps from "../types/ProjectItemProps";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

export default function ProjectItem({ label, description, to, image }: ProjectItemProps) {
    const handleClick = () => {
        window.open(to, "_blank", "noopener,noreferrer");
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={image} title={label} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {label}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" onClick={handleClick}>
                    View
                </Button>
            </CardActions>
        </Card>
    );
}
