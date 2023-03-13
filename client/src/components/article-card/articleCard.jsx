import { Edit } from "../../assets";
import { ReactionButton } from "./reaction-button/reactionButton";
import { ReactionCounter } from "./reaction-counter/reactionCounter";

function ArticleCard() {
  return (
    <article>
      <div className={classes.article_header}>
        <div className={classes.article_header_title}>
          <h2>{title}</h2>
          <p>{category}</p>
        </div>
        <div className={classes.article_header_menu}>
          <img src={Edit} alt="edit" />
        </div>
      </div>
      <div className={classes.article_body}>
        {content}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio veritatis
        laborum accusantium. Deleniti earum, iste, incidunt, veritatis aliquid
        expedita consequatur laudantium reprehenderit dolores vel beatae nobis
        suscipit minima excepturi necessitatibus!
      </div>
      <div className={classes.article_footer}>
        <div className={classes.article_footer_reactions}>
          <ReactionCounter icon={ThumbUp} alt="thumbUp" value="0" />
          <ReactionCounter icon={Clapping} alt="clapping hands" value="0" />
          <ReactionCounter icon={ThumbDown} alt="thumbDown" value="0" />
        </div>
        <div className={classes.article_footer_handlers}>
          <ReactionButton
            icon={ThumbUpOutline}
            alt="react thumb up"
            onClick={onReaction}
          />
          <ReactionButton
            icon={ClappingOutline}
            alt="react clapping hands"
            onClick={onReaction}
          />
          <ReactionButton
            icon={ThumbDownOutline}
            alt="react thumb down"
            onClick={onReaction}
          />
          <ReactionButton
            icon={PinchedOutline}
            alt="react pinched fingers"
            onClick={onReaction}
          />
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
