import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  return (
    (props.colaboradores.length > 0) && <section className="time" style={css}> {/* Só exibe se houver colaboradores */}
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3> 
      <div className="Colaboradores">
      {props.colaboradores.map((colaborador) => (
        <Colaborador
          corDeFundo={props.corPrimaria}  // Cor de fundo do colaborador
          key={colaborador.nome} // Chave única para cada colaborador
          nome={colaborador.nome} // Nome do colaborador
          cargo={colaborador.cargo} // Cargo do colaborador
          imagem={colaborador.imagem} // Imagem do colaborador
        />
      ))}
      </div>
    </section>
  );
};

export default Time;
