import {
  Edit,
  ThumbsDown,
  ThumbsUp,
  Clapping,
  ThumsDownOutline,
  ThumsUpOutline,
  ClappingOutline,
  PinchedOutline,
} from "../../assets";
import ReactionButton from "./reaction-button/reactionButton";
import ReactionCounter from "./reaction-counter/reactionCounter";
import { useState } from "react";
import classes from "./articleCard.module.sass";

function ArticleCard({ data }) {
  const { title, category, content, likes, clappings, unlikes, pinched } = data;
  const [reactions, setReactions] = useState({
    likes,
    clappings,
    unlikes,
    pinched,
  });

  const onReaction = (e, type) => {
    console.log(type, e);
  };

  return (
    <article className={classes.article}>
      <div className={classes.article_header}>
        <div className={classes.article_header_title}>
          <h2>{title}</h2>
          <p>{category}</p>
        </div>
        <div className={classes.article_header_menu}>
          <img src={Edit} alt="edit" />
        </div>
      </div>
      <div className={classes.article_body}>{content}</div>
      <div className={classes.article_footer}>
        <div className={classes.article_footer_reactions}>
          <ReactionCounter
            icon={ThumbsUp}
            alt="thumbUp"
            value={reactions.likes}
          />
          <ReactionCounter
            icon={Clapping}
            alt="clapping hands"
            value={reactions.clappings}
          />
          <ReactionCounter
            icon={ThumbsDown}
            alt="thumbDown"
            value={reactions.unlikes}
          />
        </div>
        <div className={classes.article_footer_handlers}>
          <ReactionButton
            icon={ThumsUpOutline}
            alt="react thumb up"
            onClick={onReaction.bind(null, "likes")}
          />
          <ReactionButton
            icon={ClappingOutline}
            alt="react clapping hands"
            onClick={onReaction.bind(null, "clappings")}
          />
          <ReactionButton
            icon={ThumsDownOutline}
            alt="react thumb down"
            onClick={onReaction.bind(null, "unlikes")}
          />
          <ReactionButton
            icon={PinchedOutline}
            alt="react pinched fingers"
            onClick={onReaction.bind(null, "pinched")}
          />
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
