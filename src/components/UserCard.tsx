import { User } from "@/helpers/types";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { formatDateString } from "@/helpers/utils";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {user.name.first.charAt(0)}
            </Avatar>
          }
          title={`${user.name.first} ${user.name.last}`}
          subheader={user.email}
        />
        <CardMedia
          component="img"
          height="194"
          image={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {user.gender}, {user.dob.age}
            <br />
            {user.location.street.number} {user.location.street.name}
            <br />
            {user.location.postcode} {user.location.city}, {user.location.state}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Typography variant="body2" color="text.secondary">
            Show more
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Birthday: {formatDateString(user.dob.date)} <br />
              Phone: {user.phone} <br />
              Username: {user.login.username} <br />
              Password: {user.login.password}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default UserCard;
