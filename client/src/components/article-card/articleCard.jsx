import {
  Edit2,
  ThumbsDown,
  ThumbsUp,
  Clapping,
  Pinched,
  ThumbsDownOutline,
  ThumbsUpOutline,
  ClappingOutline,
  PinchedOutline,
} from "../../assets";
import ReactionButton from "./reaction-button/reactionButton";
import ReactionCounter from "./reaction-counter/reactionCounter";
import { useState } from "react";
import classes from "./articleCard.module.sass";

function ArticleCard({ data }) {
  const { title, category, content, likes, clappings, unlikes, pinched } = data;
  const [editState, setEditState] = useState(0);
  const [reactions, setReactions] = useState({
    likes,
    clappings,
    unlikes,
    pinched,
  });

  const onReaction = (e, type) => {
    console.log(type, e);
  };

  const classState = () => {
    switch (editState) {
      case 0:
        return classes.statered;
      case 1:
        return classes.stategreen;
      default:
        return classes.stateyellow;
    }
  };

  return (
    <article className={classes.article}>
      <div className={classes.article_header}>
        <div className={classes.article_header_title}>
          <h2 className={classes.headtitle}>{title}</h2>
          <p className={classes.category}>{category}</p>
        </div>
        <div className={`${classes.article_header_menu} ${classState()}`}>
          <img src={Edit2} alt="edit" />
        </div>
      </div>
      <div className={classes.article_body}>{content}</div>
      <div className={classes.article_footer}>
        <div className={classes.article_footer_reactions}>
          {reactions.likes > 0 && (
            <ReactionCounter
              icon={ThumbsUp}
              alt="thumbUp"
              value={reactions.likes}
            />
          )}
          {reactions.clappings > 0 && (
            <ReactionCounter
              icon={Clapping}
              alt="clapping hands"
              value={reactions.clappings}
            />
          )}
          {reactions.unlikes > 0 && (
            <ReactionCounter
              icon={ThumbsDown}
              alt="thumbDown"
              value={reactions.unlikes}
            />
          )}
          {reactions.pinched > 0 && (
            <ReactionCounter
              icon={Pinched}
              alt="Pinched"
              value={reactions.pinched}
            />
          )}
        </div>
        <div className={classes.article_footer_handlers}>
          <ReactionButton
            icon={ThumbsUpOutline}
            iconhover={ThumbsUp}
            alt="react thumb up"
            onClick={onReaction.bind(null, "likes")}
          />
          <ReactionButton
            icon={ClappingOutline}
            iconhover={Clapping}
            alt="react clapping hands"
            onClick={onReaction.bind(null, "clappings")}
          />
          <ReactionButton
            icon={ThumbsDownOutline}
            iconhover={ThumbsDown}
            alt="react thumb down"
            onClick={onReaction.bind(null, "unlikes")}
          />
          <ReactionButton
            icon={PinchedOutline}
            iconhover={Pinched}
            alt="react pinched fingers"
            onClick={onReaction.bind(null, "pinched")}
          />
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
