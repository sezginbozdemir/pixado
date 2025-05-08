import "./conclusion.scss";

const ProjectConclusion = () => {
  const list = ["FlexiDesign.", "Performanță.", "Pixado."];
  return (
    <div className="project-conclusion">
      <div className="conclusion-row-1">
        <h2 className="title-2">Concluzie</h2>
        <p className="body">
          Prin acest proiect, Pixado a demonstrat că excelența nu este o
          întâmplare, ci rezultatul unei viziuni clare, al unei execuții
          impecabile și al unei implicări totale.
        </p>
      </div>
      <div className="conclusion-row-2">
        {list.map((item, index) => (
          <div className="conclusion-col title-2" key={index}>
            <span className="conclusion-green">100%</span>
            <span className="title-4">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectConclusion;
