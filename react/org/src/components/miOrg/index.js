import "./miOrg.css";

const MiOrg = (props) => {
  return (
    <section className="org-section">
      <h3 className="title">Mi Organizacion</h3>
      <img onClick={props.cambiarMostrar} src="/img/add.png" alt="add"></img>
    </section>
  );
};

export default MiOrg;
