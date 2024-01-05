import { User } from "@/helpers/types";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { formatDateString, upperFirst } from "@/helpers/utils";

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Card className="user-card" raised>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {user.name.first.charAt(0)}
            </Avatar>
          }
          title={`${user.name.first} ${user.name.last}`}
          subheader={`${upperFirst(user.gender)}, ${user.dob.age}`}
        />
        <CardMedia
          className={"user-card-photo"}
          component="img"
          image={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                {user.email}
                <br />
                {user.location.street.number} {user.location.street.name}
                <br />
                {user.location.postcode} {user.location.city},{" "}
                {user.location.state}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                Birthday: {formatDateString(user.dob.date)} <br />
                Phone: {user.phone} <br />
                Username: {user.login.username} <br />
                Password: {user.login.password}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default UserCard;
