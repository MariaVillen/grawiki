import classes from "./pages-styles/create.module.sass";
import Searchbar from "../components/FormLibrary/searchbar/searchbar";
import CreateForm from "../components/createForm/createForm";
import CollapseArea from "../components/collapseArea/collapseArea";

function CreateArticle() {
  return (
    <div className={classes.container}>
      <Searchbar />
      <CreateForm />
      <CollapseArea
        className={classes.recomend}
        open={false}
        title="Recomendaciones"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere mi
        eu ante varius, ac lobortis risus faucibus. Morbi felis felis, volutpat
        eu libero a, mattis posuere enim. Integer fringilla egestas posuere. In
        eu odio a ante gravida vulputate vel a mauris. Cras congue lorem ut
        nulla mollis lobortis. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. In sed ipsum et ipsum
        interdum suscipit. Cras efficitur leo ut tortor laoreet suscipit. Morbi
        ultrices, libero in commodo interdum, nisi ex consequat elit, ac egestas
        lacus nisi vitae odio. Etiam ullamcorper est rhoncus lectus cursus, et
        venenatis sapien bibendum. Duis non tristique lacus. Cras lacinia nisl
        in dui varius efficitur. Aliquam vel quam lobortis, gravida ligula et,
        dapibus sem. Aliquam in scelerisque diam, convallis euismod felis. Proin
        vitae efficitur lectus. Pellentesque id felis rhoncus, finibus arcu a,
        volutpat augue. Donec sed luctus orci. Aenean interdum turpis sem, in
        pretium mi aliquet non. Suspendisse lobortis tincidunt tortor ut
        sodales. Aliquam erat volutpat. Sed vestibulum elit at nisl maximus, et
        maximus massa iaculis. Maecenas tristique, purus vitae blandit congue,
        tellus nisi aliquet tortor, vel tempus dui erat sed ligula. Etiam erat
        enim, ultrices non pellentesque at, hendrerit blandit sem. Proin sed
        nisi blandit, eleifend nisl commodo, hendrerit nisi. Integer varius
        metus in diam elementum vulputate. Nunc in nulla congue, fermentum est
        nec, viverra risus. Phasellus porttitor mauris ut luctus gravida. Aenean
        dapibus, ante et aliquam molestie, mauris ipsum lobortis sem, vel semper
        dolor orci ut massa. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Curabitur nec ex gravida,
        semper mi ac, sodales quam. Nam aliquet, velit non maximus placerat,
        erat orci fringilla tellus, vel ullamcorper urna ligula sed nisi.
        Vivamus tempor, arcu vel sagittis porttitor, nisl leo imperdiet est,
        vitae euismod ex urna elementum nibh. Donec varius nisi eget congue
        tincidunt. Proin tincidunt arcu non massa pharetra eleifend. Nullam id
        nulla in lectus varius molestie. Suspendisse finibus tristique pretium.
        Aliquam varius erat in turpis ornare feugiat. Donec sed felis sed arcu
        imperdiet molestie. Praesent lobortis lectus ipsum, et venenatis nunc
        convallis vel. In massa leo, consequat id rutrum eleifend, varius eu
        neque. Cras aliquam tempor tellus, eu luctus libero posuere nec. Etiam
        maximus sem non justo sodales sollicitudin. Cras volutpat magna ut
        commodo pharetra. Sed fringilla diam nulla, eu iaculis diam aliquam
        eget.
      </CollapseArea>
    </div>
  );
}

export default CreateArticle;
