import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

// axios
import axios from "axios";

function DefaultReviewCard({ color, image, name, review, liked, disliked }) {
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);

  const handleLikeClick = async () => {
    if (hasLiked) {
      setHasLiked(false);
      await saveLikes(false, hasDisliked);
    } else {
      setHasLiked(true);
      if (hasDisliked) {
        setHasDisliked(false);
        await saveLikes(true, false);
      } else {
        await saveLikes(true, hasDisliked);
      }
    }
  };


  const handleDislikeClick = async () => {
    if (hasDisliked) {
      setHasDisliked(false);
      await saveLikes(hasLiked, false);
    } else {
      setHasDisliked(true);
      if (hasLiked) {
        setHasLiked(false);
        await saveLikes(false, true);
      } else {
        await saveLikes(hasLiked, true);
      }
    }
  };

  const saveLikes = async (liked, disliked) => {
    try {
      if(hasDisliked){const response = await axios.post("http://cors-anywhere.herokuapp.com/http://3.35.85.202:8123/contents/songs/1/dislike", { liked, disliked, });
    }else if(hasLiked){
      const response = await axios.post("http://cors-anywhere.herokuapp.com/http://3.35.85.202:8123/contents/songs/1/like", { liked, disliked, });
    }
      if (response.status !== 200) {
        throw new Error("Likes Dislikes could not be saved.");
      }
      // Likes saved successfully
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MKBox
      variant={color === "transparent" ? "contained" : "gradient"}
      bgColor={color}
      borderRadius="xl"
      shadow={color === "transparent" ? "none" : "md"}
      p={3}
    >
      {image && (
        <MKAvatar
          src={image}
          alt={name}
          variant="rounded"
          size="lg"
          shadow="md"
          sx={{ mt: -5, mb: 1 }}
        />
      )}
      <MKBox lineHeight={1}>
        <MKTypography
          display="block"
          variant={image ? "button" : "h6"}
          fontWeight="bold"
          color={color === "transparent" || color === "light" ? "dark" : "white"}
          mb={0.5}
        >
          {name}
        </MKTypography>
        <MKTypography
          variant={image ? "caption" : "button"}
          fontWeight="regular"
          lineHeight={1}
          color={color === "transparent" || color === "light" ? "text" : "white"}
          sx={{ display: "flex", alignItems: "center" }}
        >
        </MKTypography>
      </MKBox>
      <MKTypography
        variant="body2"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        my={4}
      >
        &quot;{review}&quot;
      </MKTypography>
      <MKTypography
        variant="h4"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        sx={{
          display: "flex",
          alignItems: "center",
          ml: 0.375,

          "& .material-icons-round": {
            ml: -0.375,
          },
        }}
      >
        <Icon
          onClick={handleLikeClick}
          style={{
            cursor: "pointer",
            marginRight: "8px",
            color: hasLiked ? "blue" : "inherit",
          }}
        >
          {hasLiked ? "thumb_up" : "thumb_up_off_alt"}
        </Icon>
        <Icon
          onClick={handleDislikeClick}
          style={{
            cursor: "pointer",
            marginLeft: "8px",
            color: hasDisliked ? "red" : "inherit",
          }}
        >
          {hasDisliked ? "thumb_down" : "thumb_down_off_alt"}
        </Icon>
      </MKTypography>
    </MKBox>
  );
}

DefaultReviewCard.defaultProps = {
  color: "transparent",
  image: "",
  liked: 0,
  disliked: 0,
};

DefaultReviewCard.propTypes = {
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  liked: PropTypes.number,
  disliked: PropTypes.number,
};

export default DefaultReviewCard;
